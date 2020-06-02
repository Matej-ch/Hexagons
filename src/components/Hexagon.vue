<template>
  <div class="hexagon-wrapper">
    <div class="hexagon" :class="parentData.color" @click="select(parentData)"><span></span></div>
  </div>

</template>

<script>
export default {
  name: 'Hexagon',
  props: {
    parentData: Object,
  },
  methods: {
    select: function (hexagon) {
      this.$emit('selected',hexagon)
    }
  }
}
</script>

<style scoped>
  .hexagon-wrapper {
    padding-right: 5px;
    padding-bottom: 30px;
    padding-top: 30px;
    position: relative;
  }

  .hexagon {
    margin-top: 30px;
    width: 104px;
    height: 60px;
    position: relative;
  }

  .hexagon::before {
    content: " ";
    width: 0; height: 0;
    border-left: 52px solid transparent;
    border-right: 52px solid transparent;
    position: absolute;
    top: -30px;
  }

  .hexagon::after {
    content: "";
    width: 0;
    position: absolute;
    bottom: -30px;
    border-left: 52px solid transparent;
    border-right: 52px solid transparent;
  }

  .hexagon:hover {
    cursor: pointer;
  }

  .h-color1 {
    background-color: #D9A036;
    transition: box-shadow 0.3s ease-in-out;
  }

  .h-color1:hover,.h-color2:hover,.h-color3:hover {
    box-shadow:
            0 0 20px #F2E750,            /* outer  */
            -10px 0 50px #D9A036,        /* outer left  */
            10px 0 50px #8C6723;         /* outer right  */
  }

  .h-color1::before { border-bottom: 30px solid #D9A036; }
  .h-color1::after { border-top: 30px solid #D9A036; }

  .h-color2 {
    background-color: #8C6723;
    transition: box-shadow 0.3s ease-in-out;
  }

  .h-color2::before { border-bottom: 30px solid #8C6723; }
  .h-color2::after { border-top: 30px solid #8C6723; }

  .h-color3 {
    background-color: #403014;
    transition: box-shadow 0.3s ease-in-out;
  }

  .h-color3::before { border-bottom: 30px solid #403014; }
  .h-color3::after { border-top: 30px solid #403014; }
</style>
