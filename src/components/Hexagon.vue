<template>
  <div class="hexa_item">
    <div class="hexagon hexagon2">
      <div class="hexagon-left">
        <div class="hexagon-right" :class="parentData.color">test</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hexagon',
  props: {
    parentData: Object,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hexa_item {
    width: 200px;
    height: 230px;
    position: relative;
    display: inline-block;
    margin: 5px;
  }

  .hexa_item:hover {
    /*box-shadow: 0 0 40px 20px #fff, 0 0 100px 50px #ff0;*/

    box-shadow:
            inset 0 0 50px #fff,      /* inner white */
            inset 20px 0 80px #f0f,   /* inner left magenta short */
            inset -20px 0 80px #0ff,  /* inner right cyan short */
            inset 20px 0 300px #f0f,  /* inner left magenta broad */
            inset -20px 0 300px #0ff, /* inner right cyan broad */
            0 0 50px #fff,            /* outer white */
            -10px 0 80px #f0f,        /* outer left magenta */
            10px 0 80px #0ff;         /* outer right cyan */
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

  .hexagon-left {
    overflow: hidden;
    width: 100%;
    height: 100%;

    -webkit-transform: rotate(-60deg);
    -moz-transform: rotate(-60deg);
    -o-transform: rotate(-60deg);
    -ms-transform: rotate(-60deg);
    transform: rotate(-60deg);
  }

  .hexagon-right {
    overflow: hidden;
    width: 100%;
    height: 100%;
    visibility: visible;

    -webkit-transform: rotate(-60deg);
    -moz-transform: rotate(-60deg);
    -o-transform: rotate(-60deg);
    -ms-transform: rotate(-60deg);
    transform: rotate(-60deg);
  }

  .h-color1 {

    box-shadow: inset 0 0 0 200px #D9A036;
  }
  .h-color2 {

    box-shadow: inset 0 0 0 200px #8C6723;
  }
  .h-color3 {
    box-shadow: inset 0 0 0 200px #403014;
  }
</style>
