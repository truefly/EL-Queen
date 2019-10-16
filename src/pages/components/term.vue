<!--  -->

<style lang='scss' type='stylesheet/scss' scoped>
.term {
  position: fixed;
  height: 126vw;
  width: 88vw;
  left: 6vw;
  top: 50%;
  margin-top: -63vw;
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
    return {
      term: [
        [
          "Samples of your Estee Lauder Holiday must haves includes:",
          "(Product name & size)",
          "(Product name & size)",
          "(Product name & size)"
        ],
        [
          "Your QR-code is the only voucher to redeem the gift and can only be used once"
        ],
        [
          "The gifts are subject to the actual product given by the designated Estee Lauder Travel Retail counter, and the quantity is limited. If the gift stock is diminished before the game period ends, additional product will not be offered."
        ],
        [
          "*Estee Lauder Travel Retail reserves the final right for this campaign."
        ]
      ]
    };
  }
};
</script>
