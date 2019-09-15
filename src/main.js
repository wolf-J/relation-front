import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import iView from "iview";
import "./index.less";
Vue.config.productionTip = false;
if (process.env.NODE_ENV !== "production") require("@/mock");
Vue.use(iView);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
