export const flowRecordColumns = [
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