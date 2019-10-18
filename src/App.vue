<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    let localLanguage = window.localStorage.getItem("language");
    // if (localLanguage) {
    //   switch (localLanguage) {
    //     case "en":
    //       this.lanText = "Language";
    //       break;
    //     case "kr":
    //       this.lanText = "언어";
    //       break;
    //     case "zh":
    //       this.lanText = "语言";
    //       break;
    //     default:
    //       this.lanText = "اللغةالعربية";
    //       break;
    //   }
    //   this.$store.state.language = localLanguage;
    // } else
    var lan =
      localStorage.getItem("language") ||
      (navigator.language || navigator.browserLanguage).toLowerCase();
    if (lan.indexOf("zh") >= 0) {
      this.$i18n.locale = "zh";
    } else if (lan.indexOf("en") >= 0) {
      this.$i18n.locale = "en";
    } else if (lan.indexOf("es") >= 0) {
      this.$i18n.locale = "es";
    } else {
      this.$i18n.locale = "en";
    }
  }
};
</script>

<style lang='scss' type='stylesheet/scss'>
.btn {
  width: 40vw;
  height: 10vw;
  background-image: url("./assets/btn.png");
  background-size: 100% 100%;
  color: white;
  text-align: center;
  line-height: 10vw;
  font-size: 4vw;
  margin: 0 auto;
}

.head-box {
  width: 80vw;
  height: 26vw;
  margin: 0 auto;
  background: url("./assets/head-bg.png");
  background-size: 100% 100%;
  font-size: 4vw;
  line-height: 6vw;
  color: white;
  box-sizing: border-box;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 1vw;
  span {
    display: block;
  }
}

.p {
  margin: 4.5vw 0;
  .line {
    font-size: 4vw;
    line-height: 6vw;
    color: #221e1f;
    text-align: left;
  }
}

.title {
  font-size: 6.5vw;
  color: #221e1f;
}

.button-border {
  width: 40vw;
  height: 10vw;
  line-height: 10vw;
  color: white;
  &.bg {
    background-image: url("./assets/btn-border.png");
    background-size: 100% 100%;
    text-decoration: none;
  }
  text-decoration: underline;
  background-size: 100% 100%;
  box-sizing: border-box;
  text-align: center;
  font-size: 4vw;
  margin: 2vw 0;
}
</style>
