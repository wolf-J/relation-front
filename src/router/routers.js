export default [
  {
    path: "/",
    name: "home",
    meta: {
      title: "首页"
    },
    component: () => import(/* webpackChunkName: "query" */ "@/views/index.vue")
  },
  {
    path: "/demo",
    name: "demo",
    meta: {
      title: "示例"
    },
    component: () => import(/* webpackChunkName: "demo" */ "@/views/demo.vue")
  },
  {
    path: "/credit_manage/business_progress_query/pre_apply_query",
    name: "pre_apply_query",
    meta: {
      title: "预审业务查询"
    },
    component: () =>
      import(
        /* webpackChunkName: "pre_apply_query" */ "@/views/query/pre_apply_query.vue"
      )
  },
  {
    path: "/credit_manage/business_progress_query/approve_apply_query",
    name: "approve_apply_query",
    meta: {
      title: "正审业务查询"
    },
    component: () =>
      import(
        /* webpackChunkName: "approve_apply_query" */ "@/views/query/approve_apply_query.vue"
      )
  },
  {
    path: "/credit_manage/business_progress_query/putout_apply_query",
    name: "putout_apply_query",
    meta: {
      title: "放款业务查询"
    },
    component: () =>
      import(
        /* webpackChunkName: "putout_apply_query" */ "@/views/query/putout_apply_query.vue"
      )
  },
  {
    path: "/credit_manage/task_manage/send_task",
    name: "send_task",
    meta: {
      title: "人工派件"
    },
    component: () =>
      import(
        /* webpackChunkName: "send_task" */ "@/views/taskmanage/send_task.vue"
      )
  },
  {
    path: "/credit_manage/task_manage/adjust_task",
    name: "adjust_task",
    meta: {
      title: "人工转件"
    },
    component: () =>
      import(
        /* webpackChunkName: "adjust_task" */ "@/views/taskmanage/adjust_task.vue"
      )
  },
  {
    path: "/credit_manage/manual_approve/telephone_verify",
    name: "telephone_verify",
    meta: {
      title: "电话核实"
    },
    component: () =>
      import(
        /* webpackChunkName: "telephone_verify" */ "@/views/manualapprove/telephone_verify.vue"
      )
  },
  {
    path: "/credit_manage/exceptionqueue/exception_queue_list",
    name: "exception_queue_list",
    meta: {
      title: "异常队列"
    },
    component: () =>
      import(
        /* webpackChunkName: "exception_queue_list" */ "@/views/exceptionqueue/exception_queue_list.vue"
      )
  },
  {
    path: "/credit_manage/exceptionqueue/exception_state_list",
    name: "exception_state_list",
    meta: {
      title: "异常终止待处理任务"
    },
    component: () =>
      import(
        /* webpackChunkName: "exception_state_list" */ "@/views/exceptionqueue/exception_state_list.vue"
      )
  }
];
