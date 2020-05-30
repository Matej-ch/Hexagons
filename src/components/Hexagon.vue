<template>
  <div class="hexagon-wrapper">
    <div class="hexagon" :class="parentData.color"><span></span></div>
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

  .hexagon {
    width: 100px;
    height: 55px;
    position: relative;
  }

  .hexagon-wrapper {
    padding-right: 5px;
    padding-bottom: 30px;
    padding-top: 30px;
  }

  .hexagon,
  .hexagon:before,
  .hexagon:after {
    box-shadow: 0 0 10px rgba(0,0,0,0.8);
  }

  .hexagon:before,
  .hexagon:after {
    content: "";
    position: absolute;
    left: 22px;
    width: 57px;
    height: 57px;
    transform: rotate(145deg) skew(22.5deg);
  }

  .hexagon:before {
    top: -29px;
  }

  .hexagon:after {
    top: 27px;
  }

  .hexagon span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 55px;
    z-index: 1;
  }

  /*.hexa_item:hover {
    !*box-shadow: 0 0 40px 20px #fff, 0 0 100px 50px #ff0;*!

    box-shadow:
            inset 0 0 50px #fff,      !* inner white *!
            inset 20px 0 80px #f0f,   !* inner left magenta short *!
            inset -20px 0 80px #0ff,  !* inner right cyan short *!
            inset 20px 0 300px #f0f,  !* inner left magenta broad *!
            inset -20px 0 300px #0ff, !* inner right cyan broad *!
            0 0 50px #fff,            !* outer white *!
            -10px 0 80px #f0f,        !* outer left magenta *!
            10px 0 80px #0ff;         !* outer right cyan *!
  }*/

  .h-color1,.h-color1:before,.h-color1:after {
    box-shadow: inset 0 0 0 200px #D9A036;
  }
  .h-color2,.h-color2:before,.h-color2:after {
    box-shadow: inset 0 0 0 200px #8C6723;
  }
  .h-color3,.h-color3:before,.h-color3:after {
    box-shadow: inset 0 0 0 200px #403014;
  }
</style>
