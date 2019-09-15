import Mock from "mockjs";
import mockData from "./data";

// 配置Ajax请求延时，可用来测试网络延迟大时项目中一些效果
Mock.setup({
  timeout: 1000
});

//mock 路径
Mock.mock(/\/query1/, mockData.query1);
Mock.mock(/\/test_url/, mockData.test_url);
Mock.mock(/credit_manage\/product_info_query/, mockData.map_url_mock(5));
Mock.mock(/credit_manage\/phase_numbers_query/, mockData.map_url_mock(5));
Mock.mock(/credit_manage\/business_progress_query\/pre_apply_query/, mockData.pre_apply_query(10));
Mock.mock(/credit_manage\/business_progress_query\/approve_apply_query/, mockData.approve_apply_query(10));
Mock.mock(/credit_manage\/business_progress_query\/putout_apply_query/, mockData.putout_apply_query(10));
Mock.mock(/credit_manage\/business_progress_query\/flow_record/, mockData.flow_record(30));
Mock.mock(/credit_manage\/business_progress_query\/blaze_bom/, mockData.blaze_bom);
Mock.mock(/credit_manage\/task_manage\/send_task_list_query/, mockData.send_task_list_query(10));
Mock.mock(/credit_manage\/task_manage\/adjust_task_list_query/, mockData.send_task_list_query(10));
Mock.mock(/credit_manage\/task_manage\/select_users/, mockData.select_user(10));
Mock.mock(/credit_manage\/manual_approve\/telephone_verify\/get_contact_info/, mockData.get_contact_info);
Mock.mock(/credit_manage\/manual_approve\/telephone_verify\/get_call_info/, mockData.get_call_info(10));
Mock.mock(/credit_manage\/exception_queue\/get_exception_queue/, mockData.get_exception_queue(10));
Mock.mock(/credit_manage\/code_library_query/, mockData.map_url_mock(10));
Mock.mock(/credit_manage\/exception_queue\/get_exception_state_list/, mockData.get_exception_state_list(10));


export default Mock;
