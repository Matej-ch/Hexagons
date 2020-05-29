<template>
  <div id="app">
    <div class="hexagon-wrapper">
      <Hexagon v-for="hexagon in hexagons" :key="hexagon.id" :parentData="hexagon"/>
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
  mounted: function() {
    this.hexagons = this.generateHexagons(20);
  },
  data: function() {
    return {
      hexagons: [],
      colors: ['h-color2','h-color1','h-color3']
    }
  },
  methods: {
    generateHexagons: function (objectCount) {
      let objects = [];
      for (let i = 0; i < objectCount; i++) {
        let tempObj = {
          id:i,
          color: this.colors[Math.floor(Math.random() * this.colors.length)]
        };
        objects.push(tempObj);
      }

      return objects;
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
    text-align: center;
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

  .hexagon-wrapper {
    width: 100%;
    padding: 30px;
    overflow: hidden;
    position: relative;
    margin: 0 auto;

  }
</style>
