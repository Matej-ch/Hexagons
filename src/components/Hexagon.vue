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
  .hexagon-wrapper {
    padding-right: 5px;
    padding-bottom: 30px;
    padding-top: 30px;
    position: relative;
  }

  .hexagon:before {
    content: " ";
    width: 0; height: 0;
    border-left: 52px solid transparent;
    border-right: 52px solid transparent;
    position: absolute;
    top: -30px;
  }

  .hexagon {
    margin-top: 30px;
    width: 104px;
    height: 60px;
    position: relative;
  }

  .hexagon:after {
    content: "";
    width: 0;
    position: absolute;
    bottom: -30px;
    border-left: 52px solid transparent;
    border-right: 52px solid transparent;
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

  .h-color1 {
    box-shadow: inset 0 0 0 200px #D9A036;
  }

  .h-color1:before { border-bottom: 30px solid #D9A036; }
  .h-color1:after { border-top: 30px solid #D9A036; }

  .h-color2 {
    box-shadow: inset 0 0 0 200px #8C6723;
  }

  .h-color2:before { border-bottom: 30px solid #8C6723; }
  .h-color2:after { border-top: 30px solid #8C6723; }

  .h-color3 {
    box-shadow: inset 0 0 0 200px #403014;
  }

  .h-color3:before { border-bottom: 30px solid #403014; }
  .h-color3:after { border-top: 30px solid #403014; }
</style>
