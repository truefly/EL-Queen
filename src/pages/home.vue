<style lang='scss' type='stylesheet/scss'>
</style>

<template>
  <div class="container"
       @click="timeout">
    <start v-show="pageIndex===0"
           @start="timeout"
           @dumpIndex="dumpIndex"></start>

    <rule v-show="pageIndex===1"
          @dumpIndex="dumpIndex"></rule>

    <game v-show="pageIndex===2"
          @dumpIndex="dumpIndex"></game>

    <success v-show="pageIndex===3"></success>
  </div>
</template>

<script>
import start from "./start";
import rule from "./rule";
import game from "./game";
import success from "./success";
export default {
  name: "home",
  components: { start, rule, game, success },
  data() {
    return {
      pageIndex: 0,
      timeoutFunc: null
    };
  },
  methods: {
    dumpIndex(index) {
      this.pageIndex = index;
    },
    timeout() {
      clearTimeout(this.timeoutFunc);

      this.timeoutFunc = setTimeout(() => {
        location.reload();
      }, 1000 * 60 * 2);
    }
  },
  destroyed() {
    clearTimeout(this.timeoutFunc);
  }
};
</script>
