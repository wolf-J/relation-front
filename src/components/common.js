import {
  phase_numbers_query_url,
  product_info_query_url,
  code_library_url,
  post
} from "@/api/data";

/**
 * 
 * @param {Array<{code: string,desc:string}>} configMap
 * @param {string} code
 */
export const getDesc = (configMap, code) => {
  if (!configMap || configMap.length == 0) {
    return code;
  }
  let obj = configMap.find(e => e.code == code);
  if (obj) {
    return obj.desc;
  } else return code;
};

/**
 * @returns {string} creditLimit
 * @param {Array<{capitalNo: string,limitCode:string,finalLimit:string}>} limitInfoVOList
 */
export const convertCreditLimit = (limitInfoVOList) => {
  let creditLimit = ""
  if (limitInfoVOList) {
    if (limitInfoVOList.length == 1) {
      creditLimit += limitInfoVOList[0].finalLimit;
    } else {
      limitInfoVOList.forEach(limitInfoVO => {
        if (limitInfoVO) {
          creditLimit +=
            "capitalNo:" +
            limitInfoVO.capitalNo +
            ",limitCode:" +
            limitInfoVO.limitCode +
            ",finalLimit:" +
            limitInfoVO.finalLimit +
            "; \n";
        }
      });
    }
  }
  return creditLimit;
};

export const transCodeMap = [
  { code: "XXCreditPreApply", desc: "预审申请" },
  { code: "XXCreditApproveApply", desc: "授信申请" },
  { code: "XXCreditContractApply", desc: "合同申请" },
  { code: "XXCreditPutoutApply", desc: "放款申请" },
  { code: "XXVerifiApply", desc: "核身申请" },
  { code: "XXChangeLimitApply", desc: "调额申请" }
];

export const taskStateMap = [
  { code: "APPROVED", desc: "审批通过" },
  { code: "REJECTED", desc: "审批拒绝" },
  { code: "UNDISPATCH", desc: "未分配" },
  { code: "DISPATCHED", desc: "已分配" },
  { code: "WAITING", desc: "任务等待中" },
  { code: "EXCEPTION", desc: "执行异常" },
  { code: "WAITTIMEOUT", desc: "任务超时" },
  { code: "EXPIRED", desc: "已过期" },
  { code: "RUNNING", desc: "任务执行中" },
  { code: "FALLBACK", desc: "回退" },
  { code: "REDISPATCHED", desc: "已转派" },
  { code: "RELEASED", desc: "已释放" },
  { code: "FINISHED", desc: "流程完成" }
];

/**
 * 获取产品信详情
 */
export const getProductInfo = () =>
  post(product_info_query_url)
    .then(data => {
      return data;
    })
    .catch(err => {
      console.log("获取产品信息失败：" + JSON.stringify(err));
    });
/**
 * 获取阶段信息详情
 */
export const getPhaseNumbers = () => {
  return post(phase_numbers_query_url)
    .then(data => {
      return data;
    })
    .catch(err => {
      console.log("获取阶段信息失败：" + JSON.stringify(err));
    });
};

export const getPhaseErrorInfo = () => {
  return post(code_library_url, { systemId: "XCas", codeNo: "PhaseError" })
    .then(data => {
      return data;
    })
    .catch(err => {
      console.log("获取阶段异常码失败：" + JSON.stringify(err));
    });
}
