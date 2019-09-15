import axios from "@/libs/api.request.js";
import Qs from "qs";
import config from "@/config";

export const baseUrl =
  process.env.NODE_ENV === "development"
    ? config.baseUrl.dev
    : config.baseUrl.pro;

export const pre_apply_progress_query_url = "credit_manage/business_progress_query/pre_apply_query";
export const phase_numbers_query_url = "credit_manage/phase_numbers_query";
export const product_info_query_url = "credit_manage/product_info_query";
export const flow_record_url = "credit_manage/business_progress_query/flow_record";
export const query_blaze_bom_url = "credit_manage/business_progress_query/blaze_bom";
export const approve_apply_progress_query_url = "credit_manage/business_progress_query/approve_apply_query";
export const putout_apply_progress_query_url = "credit_manage/business_progress_query/putout_apply_query";
export const send_task_list_query_url = "credit_manage/task_manage/send_task_list_query";
export const send_task_list_url = "credit_manage/task_manage/send_task_list";
export const adjust_task_list_query_url = "credit_manage/task_manage/adjust_task_list_query";
export const adjust_task_list_url = "credit_manage/task_manage/adjust_task_list";
export const select_users_url = "credit_manage/task_manage/select_users";
export const get_gx_number_url = "credit_manage/manual_approve/telephone_verify/get_gx_number";
export const get_contact_info_url = "credit_manage/manual_approve/telephone_verify/get_contact_info";
export const get_call_info_url = "credit_manage/manual_approve/telephone_verify/get_call_info";
export const get_exception_queue_url = "credit_manage/exception_queue/get_exception_queue";
export const restart_task_url = "credit_manage/exception_queue/restart_task";
export const code_library_url = "credit_manage/code_library_query";
export const get_exception_state_list_url = "credit_manage/exception_queue/get_exception_state_list";
export const restart_exception_state_task_url = "credit_manage/exception_queue/restart_exception_state_task";

const POST_SUCCESS = "SUCCESS";

/**
 * 分页查询数据
 * @param {string} url url
 * @param {*} requestData 请求数据
 * @param {Number} page 页面序号
 * @param {Number} pageSize 页面大小
 */
export const queryByPage = (url, requestData, page, pageSize) => {
  requestData.page = page;
  requestData.pageSize = pageSize;
  return axios
    .request({
      url: url,
      data: Qs.stringify(requestData),
      method: "post"
    })
    .then(res => {
      return new Promise((resolve, reject) => {
        if (res.data == null) {
          reject("返回为空");
        } else if (res.data.code != POST_SUCCESS) {
          reject(res.data.message);
        } else {
          resolve(res.data);
        }
      });
    });
};

/**
 * post
 * @param {string} url
 * @param {*} requestData
 */
export const post = (url, requestData) => {
  return axios
    .request({
      url: url,
      data: Qs.stringify(requestData),
      method: "post"
    })
    .then(res => {
      return new Promise((resolve, reject) => {
        if (res.data == null) {
          reject("返回为空");
        } else if (res.data.code != POST_SUCCESS) {
          reject(res.data.message);
        } else {
          resolve(res.data.data);
        }
      });
    });
};

/**
 * 
 * @param {string} url
 */
export const get = url => {
  return axios.request({
    url: url,
    method: "get"
  });
};

export const queryone = data => {
  console.log("data :");
  console.log(data);
  return axios
    .request({
      url: "query1",
      method: "post",
      data: data
    })
    .catch(err => {
      console.log(err);
    });
};

export const querySample = requestData => {
  return axios
    .request({
      url: "test_url",
      data: requestData,
      method: "post"
    })
    .catch(err => {
      console.log(err);
    });
};
