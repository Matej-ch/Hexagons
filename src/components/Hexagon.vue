<template>
  <div class="lab_item">
    <div class="hexagon hexagon2">
      <div class="hexagon-in1">
        <div class="hexagon-in2">test</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hexagon',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .lab_item {
    width: 200px;
    height: 230px;
    position: relative;
    display: inline-block;
    margin: 5px;
  }

  .hexagon {
    overflow: hidden;
    visibility: hidden;

    -webkit-transform: rotate(120deg);
    -moz-transform: rotate(120deg);
    -o-transform: rotate(120deg);
    -ms-transform: rotate(120deg);
    transform: rotate(120deg);
    cursor: pointer;
  }

  .hexagon2 {
    position: absolute;
    width: 200px;
    height: 400px;
    top: -85px;
  }

  .hexagon-in1 {
    overflow: hidden;
    width: 100%;
    height: 100%;

    -webkit-transform: rotate(-60deg);
    -moz-transform: rotate(-60deg);
    -o-transform: rotate(-60deg);
    -ms-transform: rotate(-60deg);
    transform: rotate(-60deg);
  }

  .hexagon-in2 {
    -webkit-box-shadow: inset 0 0 0 200px rgba(176, 218, 212, 0.48);
    box-shadow: inset 0 0 0 200px rgba(176, 218, 212, 0.48);
    overflow: hidden;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: 50%;

    -webkit-background-size: 125%;
    -moz-background-size: 125%;
    background-size: 125%;
    visibility: visible;

    -webkit-transform: rotate(-60deg);
    -moz-transform: rotate(-60deg);
    -o-transform: rotate(-60deg);
    -ms-transform: rotate(-60deg);
    transform: rotate(-60deg);

    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    -ms-transition: all 0.5s ease;
    transition: all 0.5s ease;
  }
</style>
