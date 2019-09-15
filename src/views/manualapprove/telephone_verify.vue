<template>
  <div class="page">
    <Card class="search-con" dis-hover>
      <Form
        ref="form"
        :model="formObj"
        lable-position="left"
        :label-width="100"
        inline
      >
        <FormItem>
          <template #label>
            <div class="label">登陆工号</div>
          </template>
          <Input v-model="formObj.gxNumber" size="large" clearable />
        </FormItem>

        <FormItem>
          <Button type="primary" icon="md-search" @click="login" size="large"
            >登陆</Button
          >
        </FormItem>

        <FormItem>
          <Button type="primary" icon="md-close" @click="logout" size="large"
            >退出</Button
          >
        </FormItem>
      </Form>
      <Row :gutter="16">
        <Col :span="1">
          <Button type="info" @click="onHook" size="large">挂机</Button>
        </Col>
        <Col :span="2">
          <Button type="info" @click="sendM" size="large">联系失败短信</Button>
        </Col>
        <Col :span="2">
          <Button type="info" @click="recoverX" size="large">录音找回</Button>
        </Col>
      </Row>
    </Card>
    <Card dis-hover style="margin-top:10px">
      <Row>
        <div style="font-size:16px;color:#464c5b;">联系信息</div>
      </Row>
      <Card dis-hover style="margin-top:10px">
        <div table ivu-table-wrapper>
          <div
            class="ivu-table ivu-table-large ivu-table-border ivu-table-stripe"
          >
            <table cellspacing="0" cellpadding="0" border="0" width="100%">
              <tbody class="ivu-table-tbody">
                <tr class="ivu-table-row">
                  <td width="20%" class="ivu-table-column-center">
                    <a href="#" @click="clickme(contactObj.mobilePhone)"
                      >本人手机：{{ contactObj.mobilePhone }}</a
                    >
                  </td>
                  <td width="20%" class="ivu-table-column-center">
                    <a href="#" @click="clickme(contactObj.peopleBankTel)"
                      >人行手机：{{ contactObj.peopleBankTel }}</a
                    >
                  </td>
                  <td width="20%" class="ivu-table-column-center">
                    <a href="#" @click="clickme(contactObj.homeTel)"
                      >家庭电话：{{ contactObj.homeTel }}</a
                    >
                  </td>
                  <td width="20%" class="ivu-table-column-center">
                    <a href="#" @click="clickme(contactObj.spouseMbl)"
                      >配偶手机：{{ contactObj.spouseMbl }}</a
                    >
                  </td>
                  <td width="20%" class="ivu-table-column-center">
                    <a href="#" @click="clickme(contactObj.companyTel)"
                      >单位电话：{{ contactObj.companyTel }}</a
                    >
                  </td>
                </tr>
                <tr class="ivu-table-row">
                  <td width="20%" class="ivu-table-column-center">
                    <a href="#" @click="clickme(contactObj.contactMbl)"
                      >联系人手机：{{ contactObj.contactMbl }}</a
                    >
                  </td>
                  <td width="20%" class="ivu-table-column-center">
                    <a href="#" @click="clickme(contactObj.contactTel)"
                      >联系人固话：{{ contactObj.contactTel }}</a
                    >
                  </td>
                  <td width="20%" class="ivu-table-column-center">
                    <a href="#" @click="clickme(contactObj.imFamilyMbl)"
                      >直系亲属手机：{{ contactObj.imFamilyMbl }}</a
                    >
                  </td>

                  <td width="20%" class="ivu-table-column-center">
                    <a href="#" @click="clickme(contactObj.imFamilyTel)"
                      >直系亲属固话：{{ contactObj.imFamilyTel }}</a
                    >
                  </td>

                  <td id="Control2" class="ivu-table-column-center">
                    <div>
                      新增号码:
                      <Input
                        v-model="extraNo"
                        size="large"
                        style="width: auto"
                        clearable
                      />
                      <img
                        src="./phone1.jpg"
                        width="20px"
                        height="20px"
                        @click="clickme(extraNo)"
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
              <tbody></tbody>
            </table>
          </div>
        </div>
      </Card>
    </Card>
    <Card dis-hover style="margin-top:10px">
      <Row>
        <div style="font-size:16px;color:#464c5b;">通话信息</div>
      </Row>
      <Card dis-hover style="margin-top:10px"></Card>
      <Table
        :data="callTableData"
        :columns="callTableColumns"
        size="large"
        stripe
        border
        class="table"
        :loading="isLoading"
      ></Table>
    </Card>
  </div>
</template>

<script>
import {
  get_gx_number_url,
  post,
  select_user_url,
  get_contact_info_url,
  get_call_info_url
} from "@/api/data";
import { getDesc, transCodeMap, taskStateMap } from "_c/common.js";
import { flowRecordColumns } from "_c/flow_record";
import { convertFormat } from "@/libs/date.js";
import "../common.less";
import "./GxCcApiSDK";

export default {
  name: "telephone_verify",
  data() {
    return {
      isLoading: false,
      formObj: {
        gxNumber: ""
      },
      applyId: "",
      contactObj: {},
      callTableData: [],
      callTableColumns: [
        {
          title: "操作人姓名",
          key: "userName",
          align: "center",
          minWidth: 120
        },
        {
          title: "电话号码",
          key: "tel",
          align: "center",
          minWidth: 120
        },
        {
          title: "开始时间",
          key: "beginTime",
          align: "center",
          minWidth: 200
        },
        {
          title: "结束时间",
          key: "endTime",
          align: "center",
          minWidth: 200
        },
        {
          title: "通话总时长",
          key: "callTime",
          align: "center",
          minWidth: 120
        },
        {
          title: "接听情况",
          key: "status",
          align: "center",
          minWidth: 120
        },
        {
          title: "备注",
          key: "remarks",
          align: "center",
          minWidth: 120
        },
        {
          title: "录音地址",
          key: "recordingUrl",
          align: "center",
          minWidth: 120
        }
      ],
      extraNo: "",
      WEB_SOCKET_SWF_LOCATION: "./WebSocketMain.swf",
      gxCcApi: null,
      logoutFlag: "0",
      voiceRecord: "", //通话记录Id
      mobilePhone: "", //呼叫号码
      beginTime: null, //开始时间
      endTime: null, //结束时间
      jobNumber: null //坐席外呼电话
    };
  },
  mounted: function() {
    let params = this.$route.query;
    if (params.applyId) this.applyId = params.applyId;
    //获取联系信息
    post(get_contact_info_url, { applyId: this.applyId })
      .then(data => {
        this.contactObj = data;
      })
      .catch(err => {
        this.$Message.error("获取联系信息失败：" + JSON.stringify(err));
      });
    //获取通话信息
    post(get_call_info_url, { applyId: this.applyId })
      .then(data => {
        this.callTableData = data;
      })
      .catch(err => {
        this.$Message.error("获取通话信息失败：" + JSON.stringify(err));
      });
    //获取登录工号
    post(get_gx_number_url)
      .then(data => {
        this.formObj.gxNumber = data;
      })
      .catch(err => {
        this.$Message.error("获取登录工号失败：" + JSON.stringify(err));
      });
  },
  computed: {},
  methods: {
    //外呼接口
    clickme(phoneno) {
      console.log($.GxCcApi());
      this.gxCcApi = new $.GxCcApi();
      if (jobNumber == "null") {
        alert("请点击退出后重新登录");
        return;
      }

      //暂时只支持11位手机号和10或11或12位固话号
      var pattern = /^(\d{10}|\d{11}|\d{12})$/;
      if (!pattern.test(phoneno)) {
        alert("您输入的电话号码格式有误！");
        return;
      }
      mobilePhone = phoneno;
      var nowTime = new Date().Format("yyyyMMddhhmmss");
      voiceRecord =
        "XX" + nowTime + Math.round(Math.random() * (2000 - 1000) + 1000);
      gxCcApi.dial({
        //信审外呼外显号码 95105337 ，03 表示信审组（01客服/02电营）
        //caller : '9510533703',
        // 20161109，因95105337客服号码停用， 暂时更改外显号码为 83142441 --0810change to 83142452
        // 20161109，因95105337客服号码停用， 暂时更改外显号码为 83142452 --0930 change to 28023488
        caller: "28023488",
        called: phoneno,
        recid: voiceRecord,
        btype: "1",
        callback: callResult
      });
    },
    login() {},
    logout() {},
    onHook() {},
    sendM() {},
    recoverX() {}
  }
};
</script>
