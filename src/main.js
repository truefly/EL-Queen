// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";

import "./fonts/stylesheet.css"; // swiper 样式

Vue.config.productionTip = false;

import VueI18n from "vue-i18n";

Vue.use(VueI18n);

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
