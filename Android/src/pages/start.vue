<!--  -->

<style lang='scss' type='stylesheet/scss' scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s !important;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-text-enter-active,
.fade-text-leave-active {
  transition: opacity 1s !important;
}
.fade-text-enter,
.fade-text-leave-to {
  opacity: 0;
}

.home {
  font-size: 0;
  background-image: url("../assets/720-o.gif");
  background-size: cover;
  height: 100vh;

  .mask {
    position: fixed;
    padding-top: 14vw;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    content: "";
    z-index: 0;
  }

  .video {
    width: 55vw;
    height: 88vw;
    background: #221e1f;
    border: 1vw solid black;
    margin: 3vw auto;
    box-sizing: border-box;
  }

  .tap-warpper {
    position: fixed;
    bottom: 40vh;
    left: 0;
    right: 0;
    text-align: center;
    .tap {
      font-size: 3.5vw;
      color: white;
      width: 100vw;
      margin-top: 1vh;
      position: absolute;
      @media screen and (min-width: 768px) and (max-width: 1023px) {
        bottom: -4vh;
      }
      bottom: -3vh;
      left: 0;
      right: 0;
    }

    .touch-icon {
      width: 5vw;
      animation: scale 0.6s infinite;
    }
  }
}

.language-btn {
  color: white;
  min-width: 6vw;
  padding: 0 1vw;
  height: 4vw;
  font-size: 2vw;
  text-align: center;
  position: fixed;
  top: 4vw;
  right: 5vw;
  line-height: 4vw;
  background: url("../assets/language-bg.png");
  background-size: 100% 100%;
}
.move-leave {
  transition: opacity 1s;
}
.move-enter {
  transform: translateY(26vw);
}

.move-leave-active {
  transition: opacity 1s;
}
.move-leave-to {
  transform: translateY(-26vw);
}

.head-box {
  position: relative;
  // overflow: hidden;
  span {
    padding: 0 4vw;
    // transition: all 0.4s ease;
    height: 26vw;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 2vw;
    right: 2vw;
    top: 50%;
    transform: translateY(-50%);
    // width: 80vw;
  }
}
@keyframes scale {
  0% {
    -webkit-transform: scale(0.92);
    transform: scale(0.92);
  }

  50% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  100% {
    -webkit-transform: scale(0.92);
    transform: scale(0.92);
  }
}
</style>

<template>
  <div class="home"
       @click="init">
    <div class="mask">

      <div class="head-box">
        <transition name="fade">
          <div class="start-box"
               v-show="index%2===0">
            <span>掀起掠心攻势，解锁惊喜小样</span>
          </div>
        </transition>
        <transition name="fade">
          <div class="start-box"
               v-show="index%2===1">
            <span>Capture four identical Queen of Hearts to win a FREE Estée Lauder sample</span>
          </div>
        </transition>

      </div>

      <!-- <div class="video"></div> -->
      <div class="tap-warpper">
        <img src="../assets/touch.png"
             class="touch-icon">
        <transition name="fade">
          <div class="tap"
               v-show="index%2===0">
            <span>点击屏幕开启游戏</span>
          </div>
        </transition>
        <transition name="fade">
          <div class="tap"
               v-show="index%2===1">
            <span>Tap anywhere to begin</span>
          </div>
        </transition>
      </div>
      <language :showLanguage.sync="showLanguage"
                @done="dumpIndex"></language>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
import language from "./language";

export default {
  components: { language },
  data() {
    return {
      showLanguage: false,
      control: 0,
      index: 0,
      inter: null
    };
  },
  created() {
    this.inter = setInterval(() => {
      this.index++;
    }, 5000);
  },
  destroyed() {
    clearInterval(this.inter);
  },
  methods: {
    init() {
      this.showLanguage = true;
    },
    dumpIndex() {
      setTimeout(() => {
        this.showLanguage = false;
      }, 4000);
      this.$emit("dumpIndex", 1);
      this.$emit("start");
    },
    trigglerShowLanguage() {}
  }
};
</script>
