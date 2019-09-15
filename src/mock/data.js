import Mock from "mockjs";
import { doCustomTimes } from "@/libs/util";

const POST_SUCCESS = "SUCCESS";
export default {
  query1: requestData => {
    console.log("mockData :");
    console.log(requestData);
    let responseData = {};
    let tableData = [];
    let pageSize = JSON.parse(requestData.body).pageSize;
    doCustomTimes(pageSize, () => {
      tableData.push(
        Mock.mock({
          name: "@name",
          email: "@email",
          id: "@id",
          status: "@pick(['a', 'e', 'i', 'o', 'u'])",
          province: "@province",
          city: "@city",
          county: "@county",
          cname: "@cname",
          ip: "@ip",
          str0: "@string('upper', 5)",
          str1: "@string('upper', 5)",
          str2: "@string('upper', 5)",
          str3: "@string('upper', 5)",
          str4: "@string('upper', 5)",
          str5: "@string('upper', 5)",
          str6: "@string('upper', 5)",
          str7: "@string('upper', 5)",
          str8: "@string('upper', 5)",
          desc: "@word(5)",
          range: "@range(10)",
          address: "@address",
          createTime: "@date(yyyyMMddHHmmss)"
        })
      );
    });
    responseData.total = "100";
    responseData.list = tableData;
    return responseData;
  },

  test_url: () => {
    let responseData = [];
    let i = 1;
    doCustomTimes(3, () => {
      responseData.push(
        Mock.mock({
          key: "key" + i,
          value: "value" + i
        })
      );
      i++;
    });
    return responseData;
  },

  map_url_mock: n => {
    let data = [];
    let i = 1;
    doCustomTimes(n, () => {
      data.push(
        Mock.mock({
          code: "code" + i,
          desc: "@cword(5)"
        })
      );
      i++;
    });
    return { code: POST_SUCCESS, data: data };
  },

  pre_apply_query: n => {
    let data = [];
    let i = 1;
    doCustomTimes(n, () => {
      data.push(
        Mock.mock({
          flowObjectId: "flowObjectId" + "@Integer(1,20)",
          preApplyNo: "BA" + "@date(yyyyMMdd)" + "@String('number',19)",
          transCode: "XXCreditPreApply",
          customerName: "@cname",
          certNo: "@String('number',18)",
          businessType: "@cword(3)",
          phaseName: "code" + "@Integer(1,5)",
          userName: "@cname",
          applyCity: "@city",
          result: "@character('AD')",
          limitInfoVOList: [
            { capitalNo: "no1", limitCode: "code" + "@Integer(1,20)", finalLimit: "@String('number',5)" }
          ],
          rejectCode: "@word(5)",
          channel: "@cword(5)",
          beginTime: "@date(yyyyMMddHHmmss)",
          endTime: "@date(yyyyMMddHHmmss)",
          taskPriority: ""
        })
      );
      i++;
    });
    return { code: POST_SUCCESS, data: data, total: "50" };
  },

  flow_record: n => {
    let data = [];
    let i = 1;
    doCustomTimes(n, () => {
      data.push(
        Mock.mock({
          flowTaskId: "flowTaskId" + i,
          phaseNo: "@word(5)",
          phaseName: "@cword(5)",
          phaseChoice: "@word(5)",
          lastTaskId: "flowTaskId" + "@Integer(1,20)",
          userName: "@cname",
          beginTime: "@date(yyyyMMddHHmmss)",
          endTime: "@date(yyyyMMddHHmmss)",
          taskState: "APPROVED",
          riskRejectReasonCode: "riskCode" + "@Integer(1,20)",
          applyRejectReasonCode: "applyCode" + "@Integer(1,20)",
          fraudRejectReasonCode: "fraudCode" + "@Integer(1,20)",
          opRejectReasonCode: "opCode" + "@Integer(1,20)",
          limit: "@string('number',6)"
        })
      );
      i++;
    });
    return { code: POST_SUCCESS, data: data };
  },

  blaze_bom: requestData => {
    console.log(requestData);
    return { code: POST_SUCCESS, data: "风险策略BOM内容" };
  },

  approve_apply_query: n => {
    let data = [];
    let i = 1;
    doCustomTimes(n, () => {
      data.push(
        Mock.mock({
          flowObjectId: "flowObjectId" + "@Integer(1,20)",
          approveApplyNo: "BA201907161151057130378784768" + i,
          approveApplyNo: "BA" + "@date(yyyyMMdd)" + "@String('number',19)",
          transCode: "XXCreditApproveApply",
          customerName: "@cname",
          certNo: "@String('number',18)",
          businessType: "@cword(3)",
          phaseName: "code" + "@Integer(1,5)",
          userName: "@cname",
          applyCity: "@city",
          result: "@character('AD')",
          limitInfoVOList: [
            { capitalNo: "no1", limitCode: "code" + "@Integer(1,20)", finalLimit: "@String('number',5)" },
            { capitalNo: "no2", limitCode: "code" + "@Integer(1,20)", finalLimit: "@String('number',5)" }
          ],
          contractNo: "contractNo" + "@Integer(1,20)",
          rejectCode: "@word(5)",
          channel: "@cword(5)",
          projectNo: "projectNo" + "@Integer(1,20)",
          patchApplyCode: "@cword(5)",
          beginTime: "@date(yyyyMMddHHmmss)",
          endTime: "@date(yyyyMMddHHmmss)",
          taskPriority: ""
        })
      );
      i++;
    });
    return { code: POST_SUCCESS, data: data, total: "50" };
  },
  putout_apply_query: n => {
    let data = [];
    let i = 1;
    doCustomTimes(n, () => {
      data.push(
        Mock.mock({
          flowObjectId: "flowObjectId" + "@Integer(1,20)",
          putoutApplyNo: "BA" + "@date(yyyyMMdd)" + "@String('number',19)",
          transCode: "XXCreditApproveApply",
          customerName: "@cname",
          certNo: "@String('number',18)",
          businessType: "@cword(3)",
          phaseName: "code" + "@Integer(1,5)",
          userName: "@cname",
          applyCity: "@city",
          result: "@character('AD')",
          businessSum: "@String('number',6)",
          contractNo: "contractNo" + "@Integer(1,20)",
          rejectCode: "@word(5)",
          channel: "@cword(5)",
          beginTime: "@date(yyyyMMddHHmmss)",
          endTime: "@date(yyyyMMddHHmmss)",
          taskPriority: ""
        })
      );
      i++;
    });
    return { code: POST_SUCCESS, data: data, total: "50" };
  },

  send_task_list_query: n => {
    let data = [];
    let i = 1;
    doCustomTimes(n, () => {
      data.push(
        Mock.mock({
          flowTaskId: "flowTaskId" + "@Integer(1,20)",
          flowObjectId: "flowObjectId" + "@Integer(1,20)",
          phaseNo: "phaseNo" + "@Integer(1,20)",
          custName: "@cname",
          applyId: "BA" + "@date(yyyyMMdd)" + "@String('number',19)",
          transCode: "XXCreditApproveApply",
          phaseName: "code" + "@Integer(1,5)",
          queueNo: "queueNo" + "@Integer(1,50)",
          beginTime: "@date(yyyyMMddHHmmss)",
          applyCity: "@city",
          businessType: "@cword(3)",
          projectNo: "projectNo" + "@Integer(1,20)"
        })
      );
      i++;
    });
    return { code: POST_SUCCESS, data: data, total: "50" };
  },

  select_user: n => {
    let data = [];
    let i = 1;
    doCustomTimes(n, () => {
      data.push(
        Mock.mock({
          userId: "userId" + i,
          userName: "@cname",
          roleNameList: ["查证岗", "信审经理", "信审主任", "信审岗"]
        })
      );
      i++;
    });
    return { code: POST_SUCCESS, data: data };
  },

  get_contact_info: () => {
    let data = Mock.mock({
      mobilePhone: "1@String('number',10)",
      peopleBankTel: "1@String('number',10)",
      homeTel: "1@String('number',10)",
      spouseMbl: "1@String('number',10)",
      contactMbl: "1@String('number',10)",
      contactTel: "1@String('number',10)",
      imFamilyMbl: "1@String('number',10)",
      imFamilyTel: "1@String('number',10)",
      companyTel: "1@String('number',10)"
    });
    return { code: POST_SUCCESS, data: data };
  },

  get_call_info: n => {
    let data = [];
    let i = 1;
    doCustomTimes(n, () => {
      data.push(
        Mock.mock({
          userName: "@cname",
          tel: "1@String('number',10)"
        })
      );
      i++;
    });
    return { code: POST_SUCCESS, data: data };
  },
  get_exception_queue: n => {
    let data = [];
    let i = 1;
    doCustomTimes(n, () => {
      data.push(
        Mock.mock({
          flowObjectId: "flowObjectId" + "@Integer(1,20)",
          flowTaskId: "flowTaskId" + "@Integer(1,20)",
          applyId: "BA" + "@date(yyyyMMdd)" + "@String('number',19)",
          certNo: "@String('number',18)",
          custName: "@cname",
          businessType: "@cword(3)",
          phaseError: "ERROR" + "@Integer(1,20)",
          fromTransCode: "BA" + "@date(yyyyMMdd)" + "@String('number',19)",
          transCode: "XXCreditApproveApply",
          beginTime: "@date(yyyyMMddHHmmss)",
          applyCity: "@city"
        })
      );
      i++;
    });
    return { code: POST_SUCCESS, data: data, total: "50" };
  },
  get_exception_state_list: n => {
    let data = [];
    let i = 1;
    doCustomTimes(n, () => {
      data.push(
        Mock.mock({
          flowObjectId: "flowObjectId" + "@Integer(1,20)",
          flowTaskId: "flowTaskId" + "@Integer(1,20)",
          applyId: "BA" + "@date(yyyyMMdd)" + "@String('number',19)",
          transCode: "XXCreditApproveApply",
          phaseName: "@cword(5)",
          phaseError: "ERROR" + "@Integer(1,20)",
          creator: "@cname",
          createTime: "@date(yyyyMMddHHmmss)",
          userName: "@cname",
          beginTime: "@date(yyyyMMddHHmmss)"
        })
      );
      i++;
    });
    return { code: POST_SUCCESS, data: data, total: "50" };
  }
};
