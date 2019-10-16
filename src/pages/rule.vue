<!--  -->

<style lang='scss' type='stylesheet/scss' scoped>
.rule {
  padding: 10vh 11vw;
  box-sizing: border-box;
  text-align: center;
  height: 100vh;

  .campaign {
    font-size: 4vw;
    color: #221e1f;
    text-decoration: underline;
    margin-top: 2vw;
  }
}
.button-border {
  color: #221e1f;
  margin: 0 auto;
  margin-top: 2vw;
}

.content {
  min-height: 45vh;
}
</style>

<template>
  <div @click="showDetail=false">
    <div class="rule">
      <strip height="40px"></strip>

      <h1 class="title">{{$t('rule.title')}}</h1>

      <div v-html="$t('rule.content')"
           class="content"></div>

      <!-- <div v-for="(items,index) in text"
           class="p">
        <div v-for="(i,idx) in items"
             class="line">{{i}}</div>
      </div> -->

      <div class="btn"
           @click="start">{{$t('rule.start')}}</div>

      <p class="button-border"
         @click.stop="showDetail=true">{{$t('rule.terms')}}</p>
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
      text: [
        [
          "There are 4 queens with different styles,",
          "players should pick up their preferred queen of hearts."
        ],
        [
          "All four queens will randomly moving across the windows of the house, players need to catch their chosen Queen of Hearts to light up the grey cards."
        ],
        [
          "Players who successfully light up all grey cards are invited to the Estee Lauder Travel Retail counters to get the exclusive offer."
        ],
        [
          "Gift can only be redeemed at participating Estee Lauder travel retail counters while supplies last."
        ],
        [
          "*Estee Lauder Travel Retail reserves the final right for this campaign.V"
        ]
      ],
      showDetail: false
    };
  },
  methods: {
    start() {
      this.$emit("dumpIndex", 2);
    }
  }
};
</script>
