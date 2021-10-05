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

<script>
import Hexagon from './components/Hexagon.vue'

export default {
    name: 'App',
    components: {
        Hexagon
    },
    mounted: function () {
        this.hexagons = this.generateHexagons(40);
    },
    data: function () {
        return {
            hexagons: [],
            colors: ['h-color2', 'h-color1', 'h-color3'],
            tempCount: 0,
        }
    },
    computed: {
        score() {
            return this.$store.state.score;
        },
        first() {
            return this.$store.state.first_piece;
        },
        second() {
            return this.$store.state.second_piece;
        },
    },
    methods: {
        generateHexagons: function (objectCount) {
            let cards = [];
            let value = 1;
            for (let i = 0; i < objectCount; i += 2) {

                let firstObj = {
                    id: i,
                    value: value,
                    showValue: false,
                    color: this.colors[Math.floor(Math.random() * this.colors.length)],
                };
                let secondObj = {
                    id: i + 1,
                    value: value,
                    showValue: false,
                    color: this.colors[Math.floor(Math.random() * this.colors.length)],
                };
                cards.push(firstObj);
                cards.push(secondObj);
                value++;
            }

            return this.shuffle(cards);
        },
        shuffle: function (cards) {
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

        },
        selected: function (hexagon) {

            if (!this.first) {
                this.$store.dispatch('selectHexagon', {hexagon: hexagon, position: 1});
                hexagon.showValue = true;
                this.tempCount++;

                if (this.tempCount % 3 === 0 || this.tempCount % 2 === 0) {
                    this.hexagons.forEach(function (hexaItem) {
                        if (hexaItem.id !== hexagon.id) {
                            hexaItem.showValue = false;
                        }
                    });
                    this.tempCount = 0;
                }

                return;
            }

            if (!this.second) {

                if (hexagon === this.first) {
                    return;
                }

                this.$store.dispatch('selectHexagon', {hexagon: hexagon, position: 2});
                hexagon.showValue = true;
                this.tempCount++;
            }

            if (this.first && this.second) {
                this.checkScore();
            }
        },
        checkScore: function () {
            if (this.first.value === this.second.value) {
                this.$store.dispatch('updateScore', {value: this.first.value});

                this.hexagons.splice(this.hexagons.indexOf(this.first), 1);
                this.hexagons.splice(this.hexagons.indexOf(this.second), 1);
                this.tempCount = 0;
            } else {
                this.$store.dispatch('updateScore', {value: -1});
            }

            this.resetHexagons();
        },
        resetHexagons: function () {
            this.$store.dispatch('selectHexagon', {hexagon: null, position: 1});
            this.$store.dispatch('selectHexagon', {hexagon: null, position: 2});
        },
        restartGame: function () {
            this.hexagons = this.generateHexagons(20);
            this.resetHexagons();
            this.$store.dispatch('resetScore');
        }
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
