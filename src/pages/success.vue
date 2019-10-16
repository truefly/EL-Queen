<!--  -->

<style lang='scss' type='stylesheet/scss' scoped>
.success {
  padding: 38vw 8vw;
  text-align: center;
}

.button-border {
  color: #221e1f;
  margin: 0 auto;
  margin-top: 2vw;
}

.content {
  min-height: 25vh;
}
</style>

<template>
  <div class="success"
       @click="showDetail=false">
    <strip height="80px"></strip>
    <h1 class="title">{{$t('success.Congratulations')}}</h1>

    <div v-html="$t('success.content')"
         class="content">
    </div>
    <div class="p">
      <div v-if="confirmed"
           class="line">{{$t('success.success')}}</div>
    </div>

    <div class="btn"
         v-if="!confirmed"
         @click="handlerConfirm">{{$t('success.confirm')}}</div>
    <div class="button-border"
         @click.stop="showDetail=true">{{$t('success.terms')}}</div>

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
      confirmed: false
    };
  },
  methods: {
    handlerConfirm() {
      this.confirmed = true;

      setTimeout(() => {
        this.$router.push("/");
      }, 5000);
    }
  }
};
</script>
