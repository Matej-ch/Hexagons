<template>
  <div id="app">
    <div class="hexagons-wrapper">
      <Hexagon v-for="hexagon in hexagons" :key="hexagon.id" :parentData="hexagon" @selected="selected"/>
    </div>

    <div class="score">Score: {{score}}</div>
  </div>
</template>

<script>
import Hexagon from './components/Hexagon.vue'

export default {
  name: 'App',
  components: {
    Hexagon
  },
  mounted: function() {
    this.hexagons = this.generateHexagons(20);
  },
  data: function() {
    return {
      hexagons: [],
      colors: ['h-color2','h-color1','h-color3']
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
      let objects = [];
      for (let i = 0; i < objectCount; i++) {
        let tempObj = {
          id:i,
          value: this.getRandomNumber(1,5),
          color: this.colors[Math.floor(Math.random() * this.colors.length)]
        };
        objects.push(tempObj);
      }

      return objects;
    },
    getRandomNumber: function (min,max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    },
    selected: function (hexagon) {

      if(!this.first) {
        this.$store.dispatch('selectHexagon',{hexagon: hexagon,position:1});
        return;
      }

      if(!this.second) {
        this.$store.dispatch('selectHexagon',{hexagon: hexagon,position:2});
      }

      if(this.first && this.second) {
        this.checkScore();
      }
    },
    checkScore: function () {
      if(this.first.value === this.second.value) {
        this.$store.dispatch('updateScore',{value: this.first.value});

        this.hexagons.splice(this.hexagons.indexOf(this.first), 1);
        this.hexagons.splice(this.hexagons.indexOf(this.second), 1);
      }
      this.resetHexagons();
    },
    resetHexagons: function () {
      this.$store.dispatch('selectHexagon',{hexagon: null,position:1});
      this.$store.dispatch('selectHexagon',{hexagon: null,position:2});
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

  .hexagons-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr) [col-start]);
    row-gap: 10px;
    column-gap:10px;
    padding: 15px;
    justify-items: center;
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
</style>
