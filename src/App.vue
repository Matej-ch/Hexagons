<template>
  <div id="app">
    <div class="hexagon-wrapper">
      <Hexagon/>
      <Hexagon/>
      <Hexagon/>
    </div>

  </div>
</template>

<script>
import Hexagon from './components/Hexagon.vue'

export default {
  name: 'App',
  components: {
    Hexagon
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
    width: 1000px;
    overflow: hidden;
    padding-bottom: 70px;
    position: relative;
    margin: 0 auto;
    margin-bottom: 2.5em;
    -webkit-transition: all ease 500ms;
    -moz-transition: all ease 500ms;
    -o-transition: all ease 500ms;

    transition: all ease 500ms;

  }
</style>
