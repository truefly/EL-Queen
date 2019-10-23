<style lang='scss' type='stylesheet/scss'>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.refresh {
  position: fixed;
  top: 4vw;
  right: 4vw;
  width: 7vw;
  height: 7vw;
  z-index: 999;
  background: white;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.3);
  border-radius: 1vw;
}
</style>

<template>
  <div @click="timeout">

    <img src="../assets/refresh.png"
         @click="restart"
         v-if="pageIndex!==0"
         class="refresh">
    <pre-loading :imgs="imgs"></pre-loading>
    <strip></strip>
    <div class="container">
      <transition name="fade">
        <start v-show="pageIndex===0"
               @start="timeout"
               @dumpIndex="dumpIndex"></start>
      </transition>

      <transition name="fade">
        <rule v-if="pageIndex===1"
              @dumpIndex="dumpIndex"></rule>
      </transition>

      <transition name="fade">
        <game v-if="pageIndex===2"
              @dumpIndex="dumpIndex"></game>
      </transition>

      <transition name="fade">
        <success v-if="pageIndex===3"></success>
      </transition>
    </div>
  </div>
</template>

<script>
import start from "./start";
import rule from "./rule";
import game from "./game";
import success from "./success";
import preLoading from "./components/preLoading";
import strip from "./components/strip";
export default {
  name: "home",
  components: { start, rule, game, success, preLoading, strip },
  data() {
    return {
      pageIndex: 0,
      timeoutFunc: null,
      imgs: [
        require("../assets/360-o.gif"),
        require("../assets/720-o.gif"),
        require("../assets/btn-border.png"),
        require("../assets/btn.png"),
        require("../assets/building.png"),
        require("../assets/empty-card.png"),
        require("../assets/head-bg.png"),
        require("../assets/heart.png"),
        require("../assets/language-bg.png"),
        require("../assets/left-bottom.png"),
        require("../assets/left-top.png"),
        require("../assets/logo.png"),
        require("../assets/queen-box.png"),
        require("../assets/queen-card.png"),
        require("../assets/right-bottom.png"),
        require("../assets/right-top.png"),
        require("../assets/strip.png"),
        require("../assets/text.png"),
        require("../assets/touch.png")
      ]
    };
  },
  methods: {
    restart() {
      this.pageIndex = 0;
      this.timeout();
    },
    dumpIndex(index) {
      this.pageIndex = index;
    },
    timeout() {
      clearTimeout(this.timeoutFunc);

      this.timeoutFunc = setTimeout(() => {
        this.pageIndex = 0;
      }, 1000 * 60 * 2);
    }
  },
  destroyed() {
    clearTimeout(this.timeoutFunc);
  }
};
</script>
