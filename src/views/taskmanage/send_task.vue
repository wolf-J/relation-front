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
            <div class="label">客户姓名</div>
          </template>
          <Input v-model="formObj.custName" size="large" clearable />
        </FormItem>
        <FormItem prop="transCode">
          <template #label>
            <div class="label">流程类型</div>
          </template>
          <Select v-model="formObj.transCode" size="large" clearable>
            <Option
              v-for="item in transCodeItems"
              :key="item.code"
              :value="item.code"
              >{{ item.desc }}</Option
            >
          </Select>
        </FormItem>
        <FormItem prop="phaseNo">
          <template #label>
            <div class="label">阶段编号</div>
          </template>
          <Select v-model="formObj.phaseNo" size="large" clearable filterable>
            <Option
              v-for="item in phaseNoItems"
              :key="item.code"
              :value="item.code"
              >{{ item.desc }}</Option
            >
          </Select>
        </FormItem>
        <FormItem>
          <template #label>
            <div class="label">进件城市</div>
          </template>
          <Input v-model="formObj.applyCity" size="large" clearable />
        </FormItem>
        <Row>
          <Col span="8" :push="4">
            <FormItem>
              <Button
                type="primary"
                icon="md-search"
                @click="hdlquery()"
                size="large"
                >查询</Button
              >
            </FormItem>
          </Col>
          <Col span="8" :push="4">
            <FormItem>
              <Button
                type="primary"
                icon="md-close"
                @click="reset()"
                size="large"
                >清空</Button
              >
            </FormItem>
          </Col>
        </Row>
      </Form>
      <Row></Row>
    </Card>
    <Card dis-hover style="margin-top:10px">
      <Row>
        <Col span="2">
          <Button type="info" size="large" @click="queryFlowRecord"
            >流转记录</Button
          >
        </Col>
        <Col span="1">
          <Button type="info" size="large" @click="hdlShowSendTaskModel"
            >派件</Button
          >
        </Col>
      </Row>
      <Table
        :data="tableData"
        :columns="tableColumns"
        size="large"
        stripe
        border
        class="table"
        :loading="isLoading"
        @on-select="hdlSelect"
        @on-select-cancel="hdlSelectCancel"
        @on-select-all="hdlSelectAll"
        @on-select-all-cancel="hdlSelectAllCancel"
      ></Table>
      <Modal v-model="showFlowRecord" title="流转记录" :width="1800" scrollable>
        <Table
          :data="flowRecordData"
          :columns="flowRecordColumns"
          :loading="isLoading"
          :max-height="600"
          size="large"
          stripe
          border
        >
          <template #action2="{row,index}">
            <Button
              type="info"
              size="small"
              style="margin-top: 5px"
              @click="queryBlazeBom(row, index)"
              >风险策略BOM</Button
            >
          </template>
        </Table>
      </Modal>
      <Modal
        v-model="showSendTaskModel"
        title="人工派件"
        ok-text="提交"
        @on-ok="sendTaskList"
        scrollable
      >
        <Form
          :model="taskObject"
          lable-position="left"
          :label-width="100"
          inline
        >
          <FormItem prop="userId">
            <template #label>
              <div class="label">选择信审员</div>
            </template>
            <Select v-model="taskObject.userId" size="large">
              <Option
                v-for="item in userItems"
                :key="item.userId"
                :value="item.userId"
                >{{ item.userName + "(" + item.roleNames + ")" }}</Option
              >
            </Select>
          </FormItem>
        </Form>
      </Modal>
      <div style="margin: 10px;overflow: hidden;float: right;">
        <Page
          :total="total"
          :current="page"
          :page-size-opts="[10, 20, 50, 100]"
          @on-change="changePage"
          @on-page-size-change="changePageSize"
          show-sizer
          show-elevator
          show-total
        ></Page>
      </div>
    </Card>
  </div>
</template>

<script>
import {
  phase_numbers_query_url,
  send_task_list_query_url,
  post,
  queryByPage,
  flow_record_url,
  send_task_list_url,
  select_users_url
} from "@/api/data";
import { getDesc, transCodeMap, taskStateMap } from "_c/common.js";
import { flowRecordColumns } from "_c/flow_record";
import { convertFormat } from "@/libs/date.js";
import "../common.less";

export default {
  name: "send_task",
  data() {
    return {
      isLoading: false,
      formObj: {
        custName: "",
        transCode: "",
        phaseNo: "",
        applyCity: ""
      },
      transCodeItems: transCodeMap,
      phaseNoItems: [],
      flowTaskIdList: [],
      flowObjectId: "",
      showFlowRecord: false,
      showSendTaskModel: false,
      taskObject: {
        userId: ""
      },
      userItems: [],
      flowRecordData: [],
      flowRecordColumns: [],
      tableData: [],
      tableColumns: [
        {
          title: " ",
          align: "center",
          type: "index",
          fixed: "left",
          width: 100
        },
        {
          align: "center",
          fixed: "left",
          type: "selection",
          minWidth: 50
        },
        {
          title: "阶段编号",
          key: "phaseNo",
          sortable: true,
          align: "center",
          minWidth: 120
        },
        {
          title: "客户姓名",
          key: "custName",
          sortable: true,
          align: "center",
          minWidth: 120
        },
        {
          title: "流程申请编号",
          key: "applyId",
          sortable: true,
          align: "center",
          minWidth: 300
        },
        {
          title: "流程类型",
          key: "transCode",
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
          title: "阶段队列编号",
          key: "queueNo",
          sortable: true,
          align: "center",
          minWidth: 200
        },
        {
          title: "流程申请时间",
          key: "beginTime",
          sortable: true,
          align: "center",
          minWidth: 200
        },
        {
          title: "进件城市",
          key: "applyCity",
          sortable: true,
          align: "center",
          minWidth: 120
        },
        {
          title: "产品名称",
          key: "businessType",
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
        }
      ],
      pageSize: 10,
      total: 0,
      page: 1
    };
  },
  mounted: function() {
    post(phase_numbers_query_url)
      .then(data => {
        this.phaseNoItems = data;
      })
      .catch(err => {
        this.$Message.error("获取阶段信息失败：" + JSON.stringify(err));
      });
    post(select_users_url)
      .then(data => {
        data.forEach(user => {
          let userItem = {};
          userItem.userId = user.userId;
          userItem.userName = user.userName;
          let roleNames = "";
          user.roleNameList.forEach(roleName => {
            roleNames += roleName + ",";
          });
          if (roleNames.length > 0) {
            roleNames = roleNames.substr(0, roleNames.length - 1);
          }
          userItem.roleNames = roleNames;
          this.userItems.push(userItem);
        });
      })
      .catch(err => {
        console.log(err);
        this.$Message.error("获取信审员信息失败：" + err);
      });
  },
  computed: {},
  methods: {
    hdlquery() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          this.changePage(this.page);
        }
      });
    },
    changePage(page) {
      this.page = page;
      let self = this;
      self.isLoading = true;
      let questData = this.formObj;
      console.log("questData:" + JSON.stringify(questData));
      queryByPage(send_task_list_query_url, questData, this.page, this.pageSize)
        .then(res => {
          this.tableData = res.data;
          this.tableData.forEach(row => {
            row.beginTime = convertFormat(row.beginTime);
            row.transCode = getDesc(transCodeMap, row.transCode);
          });
          this.total = Number(res.total);
        })
        .catch(err => {
          console.log(err);
          this.$Message.warning("查询异常:" + err);
        })
        .finally(() => (self.isLoading = false));
    },
    changePageSize(pageSize) {
      this.pageSize = pageSize;
    },
    reset() {
      this.$refs["form"].resetFields();
    },
    hdlSelectAll(selection) {
      this.flowTaskIdList = selection.map(row => row.flowTaskId);
    },
    hdlSelectAllCancel(selection) {
      this.flowTaskIdList = [];
    },
    hdlSelect(selection, row) {
      console.log(row.flowObjectId);
      this.flowObjectId = row.flowObjectId;
      this.flowTaskIdList.push(row.flowTaskId);
    },
    hdlSelectCancel(selection, row) {
      console.log(row.flowObjectId);
      this.flowObjectId = "";
      this.flowTaskIdList.splice(
        this.flowTaskIdList.findIndex(
          flowTaskId => flowTaskId == row.flowTaskId
        ),
        1
      );
    },
    queryFlowRecord() {
      if (this.flowObjectId == false) {
        this.$Message.error("请选择一条记录");
      } else {
        let self = this;
        self.isLoading = true;
        this.showFlowRecord = true;
        this.flowRecordColumns = flowRecordColumns;
        post(flow_record_url, { flowObjectId: this.flowObjectId })
          .then(data => {
            this.flowRecordData = data;
            this.flowRecordData.forEach(record => {
              record.beginTime = convertFormat(record.beginTime);
              record.endTime = convertFormat(record.endTime);
              record.taskState = getDesc(taskStateMap, record.taskState);
            });
          })
          .finally(() => (self.isLoading = false));
      }
    },
    hdlShowSendTaskModel() {
      if (this.flowTaskIdList.length === 0) {
        this.$Message.error("请选择至少一条记录");
      } else {
        this.showSendTaskModel = true;
      }
    },
    sendTaskList() {
      let userId = this.taskObject.userId;
      let user = this.userItems.find(user => user.userId == userId);
      let userName = "";
      if (user) userName = user.userName;
      post(send_task_list_url, {
        userId: userId,
        userName: userName,
        flowTaskIdList: this.flowTaskIdList
      })
        .then(() =>
          this.$Message.info({
            content: "提交成功",
            duration: 10,
            closable: true
          })
        )
        .catch(err => {
          this.$Message.error("派件失败:" + err);
        });
    }
  }
};
</script>
