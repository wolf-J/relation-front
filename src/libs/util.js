import config from "@/config";
const { title } = config;
/**
 * @param {Number} times 回调函数需要执行的次数
 * @param {Function} callback 回调函数
 */
export const doCustomTimes = (times, callback) => {
  let i = -1;
  while (++i < times) {
    callback(i);
  }
};

export const getRouteTitleHandled = route => {
  let router = { ...route };
  let meta = { ...route.meta };
  let title = "";
  if (meta.title) {
    if (typeof meta.title === "function") {
      meta.__titleIsFunction__ = true;
      title = meta.title(router);
    } else title = meta.title;
  }
  meta.title = title;
  router.meta = meta;
  return router;
};

export const showTitle = item => {
  let { title } = item.meta;
  if (!title) return;
  title = (item.meta && item.meta.title) || item.name;
  return title;
};

/**
 * @description 根据当前跳转的路由设置显示在浏览器标签的title
 * @param {Object} routeItem 路由对象
 */
export const setTitle = routeItem => {
  const handledRoute = getRouteTitleHandled(routeItem);
  const pageTitle = showTitle(handledRoute);
  const resTitle = pageTitle ? `${title} - ${pageTitle}` : title;
  window.document.title = resTitle;
};

/**
 * 
 * @param {Array<{code: string,desc:string}>} configMap
 * @param {string} code
 */
export const getDesc = (configMap, code) => {
  let obj = configMap.find(e => e.code == code);
  if (obj) {
    return obj.desc;
  } else return code;
};
