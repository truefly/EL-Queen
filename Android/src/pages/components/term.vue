<!--  -->

<style lang='scss' type='stylesheet/scss' scoped>
.term {
  position: fixed;
  height: 60vh;
  width: 88vw;
  left: 6vw;
  top: 50%;
  margin-top: -30vh;
  background: rgba(15, 14, 14, 0.96);
  text-align: center;
  padding: 10vw 8vw;
  box-sizing: border-box;
  .line {
    color: white !important;
  }

  .close {
    position: absolute;
    top: 4vw;
    right: 4vw;
    width: 4vw;
  }

  .content {
    margin-top: 10vh;
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
    <div v-html="$t('terms.content')"
         class="content"></div>

    <img src="../../assets/close.png"
         class="close">
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  data() {
    return {};
  }
};
</script>
