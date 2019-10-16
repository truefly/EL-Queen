<!--  -->

<style lang='scss' type='stylesheet/scss' scoped>
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

  .tap {
    font-size: 3.5vw;
    color: white;
    width: 100vw;
    text-align: center;
    position: fixed;
    bottom: 4vw;
    left: 0;
    right: 0;
  }
}

.language-btn {
  color: white;
  width: 6vw;
  height: 3vw;
  font-size: 2vw;
  text-align: center;
  position: fixed;
  top: 4vw;
  right: 5vw;
  line-height: 3vw;
  background: url("../assets/language-bg.png");
  background-size: 100% 100%;
}
.touch-icon-warpper {
  position: fixed;
  bottom: 10vw;
  text-align: center;
  left: 0;
  right: 0;
  .touch-icon {
    width: 5vw;
  }
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
  overflow: hidden;
  span {
    padding: 0 4vw;
    transition: all 0.4s ease;
    height: 26vw;
    display: flex;
    justify-content: center;
    align-items: center;
    // position: absolute;
    left: 2vw;
    right: 2vw;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>

<style lang='scss' type='stylesheet/scss' scoped>
.start-box {
  // position: relative;
  width: 80vw;
  animation: scroll 8s infinite;
}
@keyframes scroll {
  0% {
    -webkit-transform: translateY(0px);
    transform: translateY(0px);
  }

  5% {
    -webkit-transform: translateY(26vw);
    transform: translateY(26vw);
  }

  40% {
    -webkit-transform: translateY(26vw);
    transform: translateY(26vw);
  }

  // 20% {
  //   -webkit-transform: translateY(0px);
  //   transform: translateY(0px);
  // }
  // 25% {
  //   -webkit-transform: translateY(-30px);
  //   transform: translateY(-30px);
  // }
  // 45% {
  //   -webkit-transform: translateY(-30px);
  //   transform: translateY(-30px);
  // }
  50% {
    -webkit-transform: translateY(26vw);
    transform: translateY(26vw);
  }
  // 70% {
  //   -webkit-transform: translateY(-60px);
  //   transform: translateY(-60px);
  // }
  // 75% {
  //   -webkit-transform: translateY(-90px);
  //   transform: translateY(-90px);
  // }
  // 95% {
  //   -webkit-transform: translateY(-90px);
  //   transform: translateY(-90px);
  // }

  55% {
    -webkit-transform: translateY(52vw);
    transform: translateY(52vw);
  }

  90% {
    -webkit-transform: translateY(52vw);
    transform: translateY(52vw);
  }

  100% {
    -webkit-transform: translateY(52vw);
    transform: translateY(52vw);
  }
}
</style>

<template>
  <div class="home"
       @click="dumpIndex">
    <div class="mask">
      <!-- <strip></strip> -->

      <div class="language-btn"
           @click.stop="showLanguage=true">{{$t("language")}}</div>

      <div class="head-box">
        <div class="start-box">
          <span>掀起掠心攻势，解锁惊喜小样</span>
        </div>
        <div class="start-box">
          <span>Capture four identical Queen of Hearts to win a FREE Estée Lauder sample</span>
        </div>
        <div class="start-box">
          <span>掀起掠心攻势，解锁惊喜小样</span>
        </div>
        <div class="start-box">
          <span>Capture four identical Queen of Hearts to win a FREE Estée Lauder sample</span>
        </div>
      </div>

      <!-- <div class="video"></div> -->
      <div class="touch-icon-warpper">
        <img src="../assets/touch.png"
             class="touch-icon">
      </div>

      <div class="tap">{{$t('start.tap')}}</div>

      <language :showLanguage.sync="showLanguage"></language>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
import strip from "./components/strip";
import language from "./language";

export default {
  components: { strip, language },
  data() {
    return {
      showLanguage: false,
      control: 0
    };
  },
  created() {
    let boxs = document.getElementsByClassName("start-box");

    console.log(boxs);
  },
  methods: {
    dumpIndex() {
      this.$emit("dumpIndex", 1);
      this.$emit("start");
    },
    trigglerShowLanguage() {}
  }
};
</script>
