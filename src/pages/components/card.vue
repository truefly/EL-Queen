hoo<!--  -->

<style lang='scss' type='stylesheet/scss' scoped>
.queens-warpper1 {
  position: relative;
  width: 100%;
  height: 100%;
  // margin-top: 22%;
  overflow: hidden;

  .queen-warpper {
    width: 100%;
    height: 100%;
    background-image: url("../../assets/queen-box.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;

    left: 100px;
    .queen {
      width: 100%;
      // height: 100%;
      // height: 80%;
      position: relative;
      z-index: 2;
    }

    .heart {
      width: 12%;
      position: absolute;
      &.front {
        top: 0.4vw;
        left: 0.2vw;
      }
      &.back {
        bottom: 0.4vw;
        right: 0.2vw;
        transform: rotate(180deg);
      }
    }
  }
}
</style>

<template>
  <div class="queens-warpper1">
    <div class="wrong"></div>
    <div :class="locationList[showIndex]"
         :id="`queen-card-${index}`"
         @click="clickItem"
         class="queen-warpper">
      <img :src="require('../../assets/'+(locationList[showIndex]||'left-top')+'-run.png')"
           class="queen">
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
import { TweenMax, Power2, TimelineLite, SlowMo } from "gsap/TweenMax";
export default {
  props: ["index", "queenIndex", "endGame", "card"],
  data() {
    return {
      locationList: ["left-top", "right-top", "left-bottom", "right-bottom"],
      showIndex: parseInt(Math.random() * 4),
      timeOut: null,
      isWrong: false,
      tween: null,
      disabled: false
    };
  },
  watch: {
    queenIndex: {
      immediate: true,
      handler(newVal) {
        this.locationList[4] = this.locationList[newVal];
        this.locationList[5] = this.locationList[newVal];
      }
    }
  },
  mounted() {
    this.$nextTick(_ => {
      this.begin();
    });
  },
  computed: {
    ratio() {
      return window.innerWidth / 375;
    }
  },
  methods: {
    clickItem() {
      if (this.disabled) {
        return;
      }
      if (this.endGame) {
        return;
      }
      if (+this.showIndex !== +this.queenIndex && this.showIndex <= 3) {
        this.isWrong = true;
        this.tween.pause();

        TweenMax.to(`#queen-card-${this.index}`, 0.2, {
          opacity: 1,
          left: 0
        });
        setTimeout(() => {
          TweenMax.fromTo(
            `#choose-bg-${this.index}`,
            0.2,
            { opacity: 0 },
            { opacity: 1 }
          );
          setTimeout(() => {
            TweenMax.to(`#choose-bg-${this.index}`, 0.2, { opacity: 0 });
            setTimeout(() => {
              TweenMax.to(`#choose-bg-${this.index}`, 0.2, { opacity: 1 });
              setTimeout(() => {
                TweenMax.to(`#choose-bg-${this.index}`, 0.2, { opacity: 0 });
              }, 200);
            }, 200);
          }, 200);
        }, 200);
        // .fromTo(
        //   `#queen-card-${this.index}`,
        //   0.2,
        //   { opacity: 1 },
        //   { opacity: 0 }
        // )
        // .fromTo(
        //   `#queen-card-${this.index}`,
        //   0.2,
        //   { opacity: 0 },
        //   { opacity: 1 }
        // );

        this.$emit("error");

        clearTimeout(this.timeOut);
      } else {
        this.disabled = true;
        this.$emit("current", this.index);
      }
    },
    begin() {
      this.disabled = false;
      clearTimeout(this.timeOut);
      this.showIndex = parseInt(Math.random() * 6);
      let index = this.index;
      let time = Math.random() * 1000;
      let speed = 2 + Math.random() * 8;
      let distance = Math.random() > 0.5 ? 20 : -20;

      TweenMax.set(`#queen-card-${index}`, { left: 200 });

      // document.querySelector(`#queen-card-${index}`).style.left = "200px";

      TweenMax.set(`#queen-card-${index}`, {
        x: distance * this.ratio
      });

      this.timeOut = setTimeout(() => {
        this.tween =
          // TweenLite.to(box, 6, {
          //   left: "632px",
          //   ease: Linear.easeNone
          // });
          TweenLite.fromTo(
            `#queen-card-${index}`,
            speed,
            {
              left: distance * this.ratio,
              transform: "translateX(0)",
              ease: SlowMo.ease.config(0.7, 0.4, false)
            },
            {
              left: -distance * this.ratio,
              transform: "translateX(1)",
              ease: SlowMo.ease.config(0.7, 0.4, false)
            }
          );

        this.timeOut = setTimeout(() => {
          this.begin();
        }, speed * 1000);
      }, time);
    }
  },
  destroyed() {
    clearTimeout(this.timeOut);
  }
};
</script>
