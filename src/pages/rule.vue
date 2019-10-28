<!--  -->

<style lang='scss' type='stylesheet/scss' scoped>
.fade-enter-active {
  transition: opacity 1s;
}
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.move-enter-active,
.move-leave-active {
  transition: all 0.6s;
}
.move-enter,
.move-leave-to {
  opacity: 0;
  transform: translateY(2vh);
}

.move-down-enter-active,
.move-down-leave-active {
  transition: all 0.6s;
}
.move-down-enter,
.move-down-leave-to {
  opacity: 0;
  transform: translateY(-2vh);
}

.rule {
  @media screen and (min-width: 768px) and (max-width: 1025px) {
    padding: 16vw 11vw;
  }
  padding: 16vw 11vw;
  box-sizing: border-box;
  text-align: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .campaign {
    font-size: 5vw;
    color: #221e1f;
    text-decoration: underline;
    margin-top: 2vw;
  }

  .head-box {
    width: 40vw;
    height: 13vw;
  }
}
.button-border {
  color: #221e1f;
  margin: 0 auto;
  margin-top: 2vw;
}
.btn {
  @media screen and (min-width: 768px) and (max-width: 1025px) {
    margin-top: 4vw;
  }
  margin-top: 8vw;
}

.title {
  font-size: 6vw;
  margin-bottom: 4vw;
  color: #333;
}
</style>

<template>
  <div @click="showDetail=false">
    <div class="rule">
      <transition name="move-down">
        <!-- <div class="head-box"
              v-if="show"> -->
        <span class="title"
              v-if="show">{{$t('rule.title')}}</span>
        <!-- </div> -->
      </transition>
      <transition name="fade">
        <div v-if="show">
          <div v-html="$t('rule.content')"
               class="content"></div>
        </div>
      </transition>

      <transition name="move">
        <div v-if="show">
          <div class="btn"
               @click="start">{{$t('rule.start')}}</div>

          <p class="button-border"
             @click.stop="showDetails">{{$t('rule.terms')}}</p>
        </div>
      </transition>
    </div>

    <transition name="fade">
      <term v-show="showDetail"></term>
    </transition>

  </div>
</template>

<script type='text/ecmascript-6'>
import term from "./components/term";

export default {
  components: { term },
  data() {
    return {
      showDetail: false,
      show: false,
      showBtn: false
    };
  },
  mounted() {
    setTimeout(() => {
      this.show = true;
    }, 400);
  },
  methods: {
    showDetails() {
      postGtag("gameTermsButtonClicked");
      this.showDetail = true;
    },
    start() {
      postGtag("gameStartButtonClicked");

      this.$emit("dumpIndex", 2);
    }
  }
};
</script>
