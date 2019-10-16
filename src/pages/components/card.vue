<!--  -->

<style lang='scss' type='stylesheet/scss' scoped>
.queens-warpper {
  position: relative;
  width: 70%;
  height: 70%;
  margin-top: 22%;

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
    &.left-top {
      top: 0;
      left: 0;
    }
    &.left-bottom {
      left: 0;
      bottom: 0;
    }
    &.right-top {
      right: 0;
      top: 0;
    }
    &.right-bottom {
      right: 0;
      bottom: 0;
    }

    .queen {
      width: 80%;
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
  <div class="queens-warpper">
    <div class="wrong"></div>
    <div :class="locationList[showIndex]"
         :id="`queen-card-${index}`"
         @click="clickItem"
         class="queen-warpper">
      <img class="front heart"
           src="../../assets/heart.png">
      <img class="back heart"
           src="../../assets/heart.png">
      <img :src="require('../../assets/'+(locationList[showIndex]||'left-top')+'.png')"
           class="queen">
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
import { TweenMax, Power2, TimelineLite } from "gsap/TweenMax";
export default {
  props: ["index", "queenIndex", "endGame"],
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
  mounted() {
    console.log(this.queenIndex);

    this.locationList.push(this.locationList[this.queenIndex]);
    this.locationList.push(this.locationList[this.queenIndex]);

    this.$nextTick(_ => {
      this.begin();
    });
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
        x: distance
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
            { left: distance, transform: "translateX(0)" },
            { left: -distance, transform: "translateX(1)" }
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
