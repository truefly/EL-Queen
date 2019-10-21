<!-- preloading -->

<style lang='scss' type='stylesheet/scss' scoped>
.container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 9999;
  background: black;
  transition: all 0.4s ease;
  img {
    width: 100px;
    display: block;
  }
  .precent {
    color: white;
    width: 100%;
    text-align: center;
    font-size: 18px;
  }
}
</style>

<template>
  <div class='container'
       v-if='showSelf'
       :style='{opacity}'>
    <img :src="loadingGif"
         alt=""
         v-if='loadingGif'>
    <div class='precent'
         v-if='total'>{{parseInt(count/total*100)}}%</div>
  </div>
</template>

<script>
export default {
  props: {
    imgs: {
      type: Array,
      default: function() {
        return [];
      }
    },
    loadingGif: {
      type: String,
      default: require("../../assets/loading.svg")
    }
  },
  data() {
    return {
      showSelf: true,
      showLoading: true,
      count: 0,
      total: 0,
      opacity: 1
    };
  },
  mounted() {
    // if (!this.$store.state.hasLoading) {
    //   this.$store.state.hasLoading = true;
    //   this.$nextTick(_ => {
    this.preload();
    //   });
    // } else {
    //   this.$emit("done");
    //   this.opacity = 0;
    //   setTimeout(() => {
    //     this.showSelf = false;
    //   }, 400);
    // }
  },
  methods: {
    preload() {
      this.total = this.imgs.length;

      if (this.imgs.length === 0) {
        this.showSelf = false;
        this.$emit("done");
      }

      for (let img of this.imgs) {
        let image = new Image();
        image.src = img;
        image.onload = () => {
          this.count++;
          if (this.count === this.total) {
            this.$emit("done");
            this.opacity = 0;
            setTimeout(() => {
              this.showSelf = false;
            }, 400);
          }
        };
      }
    }
  }
};
</script>