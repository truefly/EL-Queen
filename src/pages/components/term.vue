<!--  -->

<style lang='scss' type='stylesheet/scss' scoped>
.term {
  position: fixed;
  height: 80vh;
  width: 88vw;
  left: 6vw;
  top: 50%;
  margin-top: -40vh;
  background: rgba(15, 14, 14, 0.96);
  text-align: center;
  padding: 10vw 8vw;
  box-sizing: border-box;
  .line {
    color: white !important;
  }
}
</style>

<style lang='scss' type='stylesheet/scss'>
.term {
  .line {
    color: white !important;
  }
}
</style>

<template>
  <div class="term">
    <h1 class="title"
        style="color:white">{{$t('terms.title')}}</h1>
    <div v-html="$t('terms.content')"></div>
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  data() {
    return {};
  }
};
</script>
