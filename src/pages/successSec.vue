<!--  -->

<style lang='scss' type='stylesheet/scss' scoped>
.fade-enter-active {
  transition: opacity 1s !important;
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

.success {
  padding: 18vh 8vw;
  text-align: center;
  .success-content {
    position: fixed;
    top: 50%;
    left: 8vw;
    right: 8vw;
    transform: translateY(-50%);
  }
}

.button-border {
  color: #221e1f;
  margin: 0 auto;
  margin-top: 2vw;
}
.btn {
  margin-top: 9vw;
}

.head-box {
  height: auto !important;
  padding: 6vw 0;
}

.content {
  width: 80vw;
  margin: 0 auto;
  margin-top: 4vh;
}
</style>

<template>
  <div class="success"
       @click="showDetail=false">
    <strip height="80px"></strip>

    <div class="success-content">

      <transition name="fade">
        <div v-if="show">
          <h1 class="title">{{$t('success.Congratulations')}}</h1>

          <div v-html="$t('successSec.content')"
               class="content">
          </div>
          <!-- <transition name="fade">
            <div class="head-box"
                 v-if="confirmed">
              <span>{{title}}</span>
            </div>
          </transition> -->
        </div>
      </transition>

      <!-- 
      <transition name="move">
        <div v-show="show">
          <div class="btn"
               v-if="!confirmed"
               @click="handlerConfirm">{{$t('success.confirm')}}</div>
          <div class="button-border"
               @click.stop="showDetails">{{$t('success.terms')}}</div>
        </div>
      </transition> -->

    </div>

    <transition name="fade">
      <term v-if="showDetail"></term>
    </transition>
  </div>
</template>

<script type='text/ecmascript-6'>
import strip from "./components/strip";
import term from "./components/term";
export default {
  components: { strip, term },
  data() {
    return {
      showDetail: false,
      confirmed: false,
      show: false,
      title: ""
    };
  },
  mounted() {
    this.show = true;
    postGtag("enterRedemptionPage");
  },
  methods: {
    showDetails() {
      postGtag("gameTermsButtonClicked");
      this.showDetail = true;
    },
    async handlerConfirm() {
      postGtag("redemptionButtonClicked");

      let res = await this.$conversion(YSLDcode);

      switch (+res.data.status) {
        case 200:
          this.title = this.$t("success.success");
          break;
        case 103:
          this.title = this.$t("success.fail");
        case 104:
        default:
          this.title = this.$t("success.used");
      }
      this.confirmed = true;

      console.log(res);

      setTimeout(() => {
        postGtag("RedemptionSuccessfully");
      }, 10000);
    }
  }
};
</script>
