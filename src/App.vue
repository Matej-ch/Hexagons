<template>
    <div>
        <div id="app">
            <transition-group name="show-hexagons" tag="div" class="hexagons-wrapper">
                <Hexagon v-for="hexagon in hexagons" :key="hexagon.id" :parentData="hexagon" @selected="selected"/>
            </transition-group>
        </div>

        <div class="score">Score: {{score}}
            <button class="reset" @click="restartGame" style="float: right">Restart game</button>
        </div>
    </div>

</template>

<script setup>
import Hexagon from './components/Hexagon.vue'
import {ref, onMounted, computed} from "vue";

const hexagons = ref();
const colors = ['h-color2', 'h-color1', 'h-color3'];
const tempCount = ref(0);
const scorePoints = ref(0);
const firstPiece = ref(null);
const secondPiece = ref(null);


const score = computed(() => {
    return scorePoints.value
});

const first = computed(() => {
    return firstPiece.value
});

const second = computed(() => {
    return secondPiece.value
});

onMounted(() => {
    hexagons.value = generateHexagons(40);
});

function generateHexagons(objectCount)
{
    let cards = [];
    let value = 1;
    for (let i = 0; i < objectCount; i += 2) {

        let firstObj = {
            id: i,
            value: value,
            showValue: false,
            color: colors[Math.floor(Math.random() * colors.length)],
        };
        let secondObj = {
            id: i + 1,
            value: value,
            showValue: false,
            color: colors[Math.floor(Math.random() * colors.length)],
        };
        cards.push(firstObj);
        cards.push(secondObj);
        value++;
    }

    return shuffle(cards);
}

function shuffle(cards)
{
    let currentIndex = cards.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = cards[currentIndex];
        cards[currentIndex] = cards[randomIndex];
        cards[randomIndex] = temporaryValue;
    }
    return cards;
}

function checkScore() {
    if (first.value === second.value) {
        //this.$store.dispatch('updateScore', {value: this.first.value});

        scorePoints.value += first.value;
        hexagons.value.splice(hexagons.value.indexOf(first), 1);
        hexagons.value.splice(hexagons.value.indexOf(second), 1);
        tempCount.value = 0;
    } else {
        scorePoints.value -= 1;
        //this.$store.dispatch('updateScore', {value: -1});
    }

    resetHexagons();
}

function resetHexagons() {
    firstPiece.value = null;
    second.value = null;
    //this.$store.dispatch('selectHexagon', {hexagon: null, position: 1});
    //this.$store.dispatch('selectHexagon', {hexagon: null, position: 2});
}

function restartGame() {
    hexagons.value = generateHexagons(20);
    resetHexagons();
    scorePoints.value = 0;
    //this.$store.dispatch('resetScore');
}

function selected(hexagon) {

    if (!first) {
        firstPiece.value = hexagon;
        //this.$store.dispatch('selectHexagon', {hexagon: hexagon, position: 1});
        hexagon.showValue = true;
        this.tempCount++;

        if (this.tempCount % 3 === 0 || this.tempCount % 2 === 0) {
            hexagons.value.forEach(function (hexaItem) {
                if (hexaItem.id !== hexagon.id) {
                    hexaItem.showValue = false;
                }
            });
            this.tempCount = 0;
        }

        return;
    }

    if (!second) {

        if (hexagon === first) {
            return;
        }
        secondPiece.value = hexagon;
        //this.$store.dispatch('selectHexagon', {hexagon: hexagon, position: 2});
        hexagon.showValue = true;
        tempCount.value++;
    }

    if (first && second) {
        checkScore();
    }
}

</script>

<style>

@import './assets/styles/main.css';

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    height: 100%;
}

body {
    background: url(./assets/background.jpg) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}

.score {
    background-color: whitesmoke;
    color: #0f0f0f;
    padding: 15px;
    position: absolute;
    bottom: 0;
    width: 100%;
    border-top: 1px solid #8C6723;
    box-shadow: inset 0 0 2px #8C6723;
    font-weight: bold;
}

.show-hexagons-enter-active, .show-hexagons-leave-active {
    transition: opacity .5s;
}

.show-hexagons-enter, .show-hexagons-leave-to {
    opacity: 0;
}

.show-hexagons-move {
    transition: opacity 1s;
}
</style>
