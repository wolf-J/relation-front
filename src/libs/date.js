/**
 *
 * @param {Date} date 日期
 * @param {String} fmt 格式 默认
 */
export const dateFormat = (date, fmt = "yyyy-MM-dd HH:mm:ss") => {
  if (!date) {
    return "";
  }
  if (typeof date === "string") {
    date = new Date(date.replace(/-/g, "/"));
  }
  if (typeof date === "number") {
    date = new Date(date);
  }
  var o = {
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours() % 12 === 0 ? 12 : date.getHours() % 12,
    "H+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds(),
    "q+": Math.floor((date.getMonth() + 3) / 3),
    S: date.getMilliseconds()
  };
  var week = {
    "0": "\u65e5",
    "1": "\u4e00",
    "2": "\u4e8c",
    "3": "\u4e09",
    "4": "\u56db",
    "5": "\u4e94",
    "6": "\u516d"
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  if (/(E+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (RegExp.$1.length > 1
        ? RegExp.$1.length > 2
          ? "\u661f\u671f"
          : "\u5468"
        : "") + week[date.getDay() + ""]
    );
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
    }
  }
  return fmt;
};

/**
 * @returns {string} formatString "yyyy-MM-dd HH:mm:ss"
 * @param {String} fullTimeFormat "yyyyMMddHHmmss"
 */
export const convertFormat = fullTimeFormat => {
  if (fullTimeFormat) {
    let formatString = "";
    if (fullTimeFormat.substring(0, 4) != "")
      formatString += fullTimeFormat.substring(0, 4);
    if (fullTimeFormat.substring(4, 6) != "")
      formatString += "-" + fullTimeFormat.substring(4, 6);
    if (fullTimeFormat.substring(6, 8) != "")
      formatString += "-" + fullTimeFormat.substring(6, 8);
    if (fullTimeFormat.substring(8, 10) != "")
      formatString += " " + fullTimeFormat.substring(8, 10);
    if (fullTimeFormat.substring(10, 12) != "")
      formatString += ":" + fullTimeFormat.substring(10, 12);
    if (fullTimeFormat.substring(12, 14) != "")
      formatString += ":" + fullTimeFormat.substring(12, 14);
    return formatString;
  }
  return fullTimeFormat;
};

export const YYYY_MM_DD = "yyyy-MM-dd";
export const Date_format = "yyyy/MM/dd";
export const YYYYMMDD = "yyyyMMdd";
export const TIME_FORMAT = "HH:mm:ss";
export const FULL_TIME_SPLIT_FORMAT = "yyyy-MM-dd HH:mm:ss";
export const FULL_TIME_FORMAT = "yyyyMMddHHmmss";
