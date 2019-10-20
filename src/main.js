// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import axios from "axios";

import "./fonts/stylesheet.css"; // swiper 样式

Vue.config.productionTip = false;

import VueI18n from "vue-i18n";

Vue.use(VueI18n);

Vue.prototype.$startGame = () => {
  axios.post("http://47.105.94.195/interface/GameStart.php", {
    userId: gaUserID,
    channel: gaChannel,
    region: gaRegion,
    language: localStorage.getItem("language") || "en",
    device: gaDevice,
    network: gaNetwork
  });
};

Vue.prototype.$endGame = code => {
  axios.post("http://47.105.94.195/interface/GameOver.php", {
    userId: gaUserID,
    channel: gaChannel,
    region: gaRegion,
    language: localStorage.getItem("language") || "en",
    device: gaDevice,
    network: gaNetwork,
    code: code,
    status: 1
  });
};

Vue.prototype.$conversion = code => {
  return new Promise(async (resolve, reject) => {
    let res = await axios.post("http://47.105.94.195/interface/Conversion.php", {
      userId: gaUserID,
      channel: gaChannel,
      region: gaRegion,
      language: localStorage.getItem("language") || "en",
      device: gaDevice,
      network: gaNetwork,
      code: code
    });

    resolve(res);
  });
};

const i18n = new VueI18n({
  locale: "zh", // 语言标识
  messages: {
    zh: require("./language/zh"),
    en: require("./language/en")
  }
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  i18n,
  router,
  components: { App },
  template: "<App/>"
});
