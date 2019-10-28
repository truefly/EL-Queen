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

};

Vue.prototype.$endGame = code => {

};

Vue.prototype.$conversion = code => {

};

function setWechatShareText(wechatShareText) {
  wx.ready(function() {
    //自定义微信分享内容功能
    wx.onMenuShareTimeline({
      title: wechatShareText.title,
      link: wechatShareText.link,
      imgUrl: wechatShareText.imgUrl,
      success: function() {}
    });
    wx.onMenuShareAppMessage({
      title: wechatShareText.title,
      desc: wechatShareText.desc,
      link: wechatShareText.link,
      imgUrl: wechatShareText.imgUrl,
      type: "",
      dataUrl: "",
      success: function() {}
    });
  });
}

Vue.prototype.$share = (title, desc) => {

};

const i18n = new VueI18n({
  locale: "zh", // 语言标识
  messages: {
    zh: require("./language/zh"),
    en: require("./language/en"),
    es: require("./language/es")
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
