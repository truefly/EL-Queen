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
  axios.post("https://www.rfisystem.com/holidaygame/interface/GameStart.php", {
    userId: gaUserID,
    channel: gaChannel,
    region: gaRegion,
    language: localStorage.getItem("language") || "en",
    device: gaDevice,
    network: gaNetwork
  });
};

Vue.prototype.$endGame = code => {
  axios.post("https://www.rfisystem.com/holidaygame/interface/GameOver.php", {
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
    let res = await axios.post(
      "https://www.rfisystem.com/holidaygame/interface/Conversion.php",
      {
        userId: gaUserID,
        channel: gaChannel,
        region: gaRegion,
        language: localStorage.getItem("language") || "en",
        device: gaDevice,
        network: gaNetwork,
        code: code
      }
    );

    resolve(res);
  });
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
  axios
    .get(
      "https://www.rfisystem.com/holidaygame/interface/Cross.php?url=" +
        encodeURIComponent(window.location.href.split("#")[0])
    )
    .then(data => {
      data = data.data;

      wx.config({
        debug: false,
        appId: data.appId,
        timestamp: data.timestamp,
        nonceStr: data.nonceStr,
        signature: data.signature,
        jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage"]
      });

      wx.ready(function() {
        let wechatShareText = {
          title: title,
          desc: desc,
          link: data.url,
          imgUrl: "https://www.rfisystem.com/holidaygame/share.jpg"
        };

        setWechatShareText(wechatShareText);
      });
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
