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

export const config = {
  transCodeMap: [
    { code: "XXCreditPreApply", desc: "预审申请" },
    { code: "XXCreditApproveApply", desc: "授信申请" },
    { code: "XXCreditContractApply", desc: "合同申请" },
    { code: "XXCreditPutoutApply", desc: "放款申请" },
    { code: "XXVerifiApply", desc: "核身申请" },
    { code: "XXChangeLimitApply", desc: "调额申请" }
  ],
  resultMap: [{ code: "A", desc: "通过" }, { code: "D", desc: "拒绝" }],
  businessStatusMap: [
    { code: "0", desc: "所有业务" },
    { code: "1", desc: "在办业务" },
    { code: "2", desc: "办结业务" }
  ],
  taskStateMap: [
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
  ],
  flowRecordColumns: [
    {
      title: "操作",
      slot: "action2",
      align: "center",
      fixed: "left",
      minWidth: 150
    },
    {
      title: "阶段流水号",
      key: "flowTaskId",
      sortable: true,
      align: "center",
      minWidth: 300
    },
    {
      title: "阶段编号",
      key: "phaseNo",
      sortable: true,
      align: "center",
      minWidth: 120
    },
    {
      title: "阶段名称",
      key: "phaseName",
      sortable: true,
      align: "center",
      minWidth: 200
    },
    {
      title: "阶段意见",
      key: "phaseChoice",
      sortable: true,
      align: "center",
      minWidth: 120
    },
    {
      title: "上一阶段流水号",
      key: "lastTaskId",
      sortable: true,
      align: "center",
      minWidth: 300
    },
    {
      title: "承办人",
      key: "userName",
      sortable: true,
      align: "center",
      minWidth: 120
    },
    {
      title: "执行开始时间",
      key: "beginTime",
      sortable: true,
      align: "center",
      minWidth: 200
    },
    {
      title: "执行完成时间",
      key: "endTime",
      sortable: true,
      align: "center",
      minWidth: 200
    },
    {
      title: "审批结果",
      key: "taskState",
      sortable: true,
      align: "center",
      minWidth: 120
    },
    {
      title: "风险拒绝代码",
      key: "riskRejectReasonCode",
      sortable: true,
      align: "center",
      minWidth: 120
    },
    {
      title: "审批拒绝代码",
      key: "applyRejectReasonCode",
      sortable: true,
      align: "center",
      minWidth: 120
    },
    {
      title: "欺诈拒绝代码",
      key: "fraudRejectReasonCode",
      sortable: true,
      align: "center",
      minWidth: 120
    },
    {
      title: "人工拒绝代码",
      key: "opRejectReasonCode",
      sortable: true,
      align: "center",
      minWidth: 120
    },
    {
      title: "额度",
      key: "limit",
      sortable: true,
      align: "center",
      minWidth: 120
    }
  ]
};

export const preApplyTableColumns = [
  {
    title: "操作",
    key: "flowObjectId",
    slot: "action",
    align: "center",
    fixed: "left",
    minWidth: 120
  },
  { title: "业务类型", key: "transCode", align: "center", minWidth: 120 },
  {
    title: "客户姓名",
    key: "customerName",
    align: "center",
    minWidth: 120
  },
  { title: "身份证号码", key: "certNo", align: "center", minWidth: 200 },
  {
    title: "产品名称",
    key: "businessType",
    sortable: true,
    align: "center",
    minWidth: 200
  },
  {
    title: "预审编号",
    key: "preApplyNo",
    sortable: true,
    align: "center",
    minWidth: 300
  },
  {
    title: "阶段名称",
    key: "phaseName",
    sortable: true,
    align: "center",
    minWidth: 200
  },
  {
    title: "承办人",
    key: "userName",
    sortable: true,
    align: "center",
    minWidth: 120
  },
  {
    title: "进件城市",
    key: "applyCity",
    sortable: true,
    align: "center",
    minWidth: 120
  },
  {
    title: "审批结果",
    key: "result",
    sortable: true,
    align: "center",
    minWidth: 120
  },
  {
    title: "授信额度",
    key: "creditLimit",
    sortable: true,
    align: "center",
    minWidth: 200
  },
  {
    title: "拒绝代码",
    key: "rejectCode",
    sortable: true,
    align: "center",
    minWidth: 120
  },
  {
    title: "渠道",
    key: "channel",
    sortable: true,
    align: "center",
    minWidth: 200
  },
  {
    title: "开始时间",
    key: "beginTime",
    sortable: true,
    align: "center",
    minWidth: 200
  },
  {
    title: "结束时间",
    key: "endTime",
    sortable: true,
    align: "center",
    minWidth: 200
  },
  {
    title: "任务优先级",
    key: "taskPriority",
    sortable: true,
    align: "center",
    minWidth: 120
  }
];

export const approveApplyTableColumns = [
  {
    title: "操作",
    key: "flowObjectId",
    slot: "action",
    align: "center",
    fixed: "left",
    minWidth: 120
  },
  { title: "业务类型", key: "transCode", align: "center", minWidth: 120 },
  {
    title: "客户姓名",
    key: "customerName",
    align: "center",
    minWidth: 120
  },
  { title: "身份证号码", key: "certNo", align: "center", minWidth: 200 },
  {
    title: "产品名称",
    key: "businessType",
    sortable: true,
    align: "center",
    minWidth: 200
  },
  {
    title: "授信编号",
    key: "approveApplyNo",
    sortable: true,
    align: "center",
    minWidth: 300
  },
  {
    title: "阶段名称",
    key: "phaseName",
    sortable: true,
    align: "center",
    minWidth: 200
  },
  {
    title: "承办人",
    key: "userName",
    sortable: true,
    align: "center",
    minWidth: 120
  },
  {
    title: "进件城市",
    key: "applyCity",
    sortable: true,
    align: "center",
    minWidth: 120
  },
  {
    title: "拒绝代码",
    key: "rejectCode",
    sortable: true,
    align: "center",
    minWidth: 120
  },
  {
    title: "授信额度",
    key: "creditLimit",
    sortable: true,
    align: "center",
    minWidth: 200
  },
  {
    title: "合同编号",
    key: "contractNo",
    sortable: true,
    align: "center",
    minWidth: 120
  },
  {
    title: "渠道",
    key: "channel",
    sortable: true,
    align: "center",
    minWidth: 200
  },
  {
    title: "项目编号",
    key: "projectNo",
    sortable: true,
    align: "center",
    minWidth: 200
  },
  {
    title: "补件代码",
    key: "patchApplyCode",
    sortable: true,
    align: "center",
    minWidth: 200
  },
  {
    title: "开始时间",
    key: "beginTime",
    sortable: true,
    align: "center",
    minWidth: 200
  },
  {
    title: "结束时间",
    key: "endTime",
    sortable: true,
    align: "center",
    minWidth: 200
  },
  {
    title: "任务优先级",
    key: "taskPriority",
    sortable: true,
    align: "center",
    minWidth: 150
  }
];

export const putoutApplyTableColumns = [
  {
    title: "操作",
    key: "flowObjectId",
    slot: "action",
    align: "center",
    fixed: "left",
    minWidth: 120
  },
  { title: "业务类型", key: "transCode", align: "center", minWidth: 120 },
  {
    title: "客户姓名",
    key: "customerName",
    align: "center",
    minWidth: 120
  },
  { title: "身份证号码", key: "certNo", align: "center", minWidth: 200 },
  {
    title: "产品名称",
    key: "businessType",
    sortable: true,
    align: "center",
    minWidth: 200
  },
  {
    title: "放款编号",
    key: "putoutApplyNo",
    sortable: true,
    align: "center",
    minWidth: 300
  },
  {
    title: "阶段名称",
    key: "phaseName",
    sortable: true,
    align: "center",
    minWidth: 200
  },
  {
    title: "承办人",
    key: "userName",
    sortable: true,
    align: "center",
    minWidth: 120
  },
  {
    title: "进件城市",
    key: "applyCity",
    sortable: true,
    align: "center",
    minWidth: 120
  },
  {
    title: "审批结果",
    key: "result",
    sortable: true,
    align: "center",
    minWidth: 120
  },
  {
    title: "拒绝代码",
    key: "rejectCode",
    sortable: true,
    align: "center",
    minWidth: 120
  },
  {
    title: "放款金额",
    key: "businessSum",
    sortable: true,
    align: "center",
    minWidth: 120
  },
  {
    title: "合同编号",
    key: "contractNo",
    sortable: true,
    align: "center",
    minWidth: 120
  },
  {
    title: "渠道",
    key: "channel",
    sortable: true,
    align: "center",
    minWidth: 200
  },
  {
    title: "开始时间",
    key: "beginTime",
    sortable: true,
    align: "center",
    minWidth: 120
  },
  {
    title: "结束时间",
    key: "endTime",
    sortable: true,
    align: "center",
    minWidth: 200
  },
  {
    title: "任务优先级",
    key: "taskPriority",
    sortable: true,
    align: "center",
    minWidth: 120
  }
];
