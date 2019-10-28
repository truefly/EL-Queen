<style lang='scss' type='stylesheet/scss' scoped>
</style>

<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  created() {
    let localLanguage = window.localStorage.getItem("language");
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

    let title = this.$t("title");
    document.title = title;
    let desc = this.$t("desc");
    this.$share(title, desc);
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
  @media screen and (min-width: 768px) and (max-width: 1025px) {
    margin: 2vw 0;
  }
  margin: 4.5vw 0;
  .line {
    font-size: 4vw;
    line-height: 6vw;
    color: #221e1f;
    text-align: left;
    &.big {
      font-size: 5vw;
      line-height: 1.5;
      text-align: center;
    }
    &.small {
      font-size: 3vw;
      line-height: 4.5vw;
    }
    @media screen and (min-width: 768px) and (max-width: 1025px) {
      font-size: 3vw;
      line-height: 4.5vw;
      &.small {
        font-size: 2.5vw;
        line-height: 3.5vw;
      }
    }
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
