import Vue from "vue";
import Router from "vue-router";
import routes from "./routers";
import iView from "iview";
import { setTitle } from "@/libs/util";
Vue.use(Router);

const router = new Router({
  routes
});

router.afterEach(to => {
  setTitle(to);
  iView.LoadingBar.finish();
  window.scrollTo(0, 0);
});

export default router;
