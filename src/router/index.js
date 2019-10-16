import Vue from "vue";
import Router from "vue-router";
import success from "@/pages/success.vue";
import home from "@/pages/home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: home
    },
    {
      path: "/success",
      name: "success",
      component: success
    }
  ]
});
