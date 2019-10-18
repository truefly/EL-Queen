<!--  -->

<style lang='scss' type='stylesheet/scss' scoped>
.language {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(15, 14, 14, 0.96);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>

<template>

  <div class="language"
       @click.stop
       v-show="showLanguage">
    <div @click="updateShowLanguage('en')"
         class="button-border bg">English</div>
    <div @click="updateShowLanguage('zh')"
         class="button-border bg">中文</div>
    <div @click="updateShowLanguage('zh')"
         class="button-border bg">Español</div>
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  props: ["showLanguage"],
  data() {
    return {};
  },
  methods: {
    updateShowLanguage(lan) {
      localStorage.setItem("language", lan);
      this.$i18n.locale = lan;
      // this.$emit("update:showLanguage", false);

      this.$emit("done");
    }
  }
};
</script>
