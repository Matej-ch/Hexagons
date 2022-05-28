<template>


    <transition-group name="show-hexagons" tag="main" class="hexagon-container">
        <Hexagon v-for="hexagon in hexagons"
                 :key="hexagon.id"
                 :parentData="hexagon"
                 @selected="selected"/>
    </transition-group>

    <div class="score">Score: {{gameState.currentScore}}
        <button class="reset" @click="restartGame" style="float: right">Restart game</button>
    </div>
</template>

<script setup>
import Hexagon from './components/Hexagon.vue'
import {ref, onMounted} from "vue"
import {useGameStore} from "./stores/state";

const gameState = useGameStore();

const hexagons = ref();
const tempCount = ref(0);

onMounted(() => {
    hexagons.value = generateHexagons(40);
});

function generateHexagons(objectCount) {
    let cards = [];
    let value = 1;
    for (let i = 0; i < objectCount; i += 2) {

        let firstObj = {
            id: i,
            value: value,
            showValue: false,
            color: gameState.colors[Math.floor(Math.random() * gameState.colors.length)],
        };
        let secondObj = {
            id: i + 1,
            value: value,
            showValue: false,
            color: gameState.colors[Math.floor(Math.random() * gameState.colors.length)],
        };
        cards.push(firstObj);
        cards.push(secondObj);
        value++;
    }

    return shuffle(cards);
}

function shuffle(cards) {
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

    if (gameState.firstPiece.value === gameState.secondPiece.value) {
        gameState.updateScore(gameState.firstPiece.value);
        hexagons.value.splice(hexagons.value.indexOf(gameState.firstPiece), 1);
        hexagons.value.splice(hexagons.value.indexOf(gameState.secondPiece), 1);
        tempCount.value = 0;
    } else {
        gameState.updateScore(-1);
    }

    gameState.resetHexagons();
}

function restartGame() {
    hexagons.value = generateHexagons(40);
    gameState.resetHexagons();
    gameState.resetScore();
}

function selected(hexagon) {

    if (!gameState.firstPiece) {
        gameState.selectHexagon(hexagon, 1);
        hexagon.showValue = true;
        tempCount.value++;

        if (tempCount.value % 3 === 0 || tempCount.value % 2 === 0) {
            hexagons.value.forEach(function (hexaItem) {
                if (hexaItem.id !== hexagon.id) {
                    hexaItem.showValue = false;
                }
            });
            tempCount.value = 0;
        }

        return;
    }

    if (!gameState.secondPiece) {

        if (hexagon === gameState.firstPiece) {
            return;
        }
        gameState.selectHexagon(hexagon, 2);
        hexagon.showValue = true;
        tempCount.value++;
    }

    if (gameState.firstPiece && gameState.secondPiece) {
        checkScore();
    }
}

</script>

<style lang="scss">

@import './assets/styles/main.scss';

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    position: relative;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
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
    width: 100%;
    border-top: 1px solid #8C6723;
    box-shadow: inset 0 0 2px #8C6723;
    font-weight: bold;
    display: flex;
    flex-shrink: 0;
    flex-direction: row;
    justify-content: space-between;
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
