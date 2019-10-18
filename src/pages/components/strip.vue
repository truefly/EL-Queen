<!--  -->

<style lang='scss' type='stylesheet/scss' scoped>
.strip {
  display: flex;
  background-image: url("../../assets/s.png");
  background-size: 100% auto;
  height: 50vh;
  background-repeat: no-repeat;
  &.bottom {
    transform: scaleY(-1);
  }
}

.top {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
}
.bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
}
</style>

<template>
  <div>
    <div class="strip top">
      <!-- :style="{height:height,backgroundSize:`${width} ${height}`}" -->
    </div>
    <div class="strip bottom">
      <!-- :style="{height:height,backgroundSize:`${width} ${height}`}" -->
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  name: "strip",
  props: {
    direction: null,
    height: { type: String, default: "146px" },
    width: { type: String, default: "107px" }
  },
  data() {
    return {};
  }
};
</script>
