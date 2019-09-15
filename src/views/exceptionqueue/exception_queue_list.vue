<template>
  <div class="page">
    <Card class="search-con" dis-hover>
      <Form
        ref="formObj"
        :model="formObj"
        lable-position="left"
        :label-width="100"
        inline
      >
        <FormItem>
          <template #label>
            <div class="label">身份证号码</div>
          </template>
          <Input v-model="formObj.certNo" size="large" clearable />
        </FormItem>
        <FormItem>
          <template #label>
            <div class="label">进件城市</div>
          </template>
          <Input v-model="formObj.applyCity" size="large" clearable />
        </FormItem>
        <FormItem>
          <template #label>
            <div class="label">申请编号</div>
          </template>
          <Input v-model="formObj.applyId" size="large" clearable />
        </FormItem>
        <FormItem prop="phaseError">
          <template #label>
            <div class="label">阶段异常代码</div>
          </template>
          <Select
            v-model="formObj.phaseError"
            size="large"
            clearable
            filterable
          >
            <Option
              v-for="item in phaseErrorItems"
              :key="item.code"
              :value="item.code"
              >{{ item.desc }}</Option
            >
          </Select>
        </FormItem>
        <FormItem>
          <template #label>
            <div class="label">开始执行时间</div>
          </template>
          <DatePicker
            type="daterange"
            placement="bottom-end"
            style="width: 200px"
            v-model="formObj.beginTimeRange"
            size="large"
          ></DatePicker>
        </FormItem>
        <FormItem prop="phaseNo">
          <template #label>
            <div class="label">阶段编号</div>
          </template>
          <Input
            v-model="formObj.phaseNo"
            size="large"
            placeholder="N980000"
            readonly
          />
        </FormItem>
        <FormItem>
          <template #label>
            <div class="label">任务流水号</div>
          </template>
          <Input v-model="formObj.flowTaskId" size="large" clearable />
        </FormItem>
        <FormItem>
          <template #label>
            <div class="label">进件编号</div>
          </template>
          <Input v-model="formObj.fromTransCode" size="large" clearable />
        </FormItem>
        <Row>
          <Col span="8" :push="4">
            <FormItem>
              <Button
                type="primary"
                icon="md-search"
                @click="hdlquery"
                size="large"
                >查询</Button
              >
            </FormItem>
          </Col>
          <Col span="8" :push="4">
            <FormItem>
              <Button type="primary" icon="md-close" @click="reset" size="large"
                >清空</Button
              >
            </FormItem>
          </Col>
        </Row>
      </Form>
      <Row></Row>
    </Card>
    <Card dis-hover style="margin-top:10px;">
      <Row>
        <Col span="2">
          <Button type="info" size="large" @click="hdlShowModal"
            >转入任务队列</Button
          >
          <Modal v-model="showModal" title="转入任务队列" @on-ok="restartTask">
            <div style="font-size: 16px;">
              你确定要把选中的异常节点任务转入任务队列吗？
            </div>
          </Modal>
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
      >
        <template #action="{row,column,index}">
          <!-- 业务详情 -->
          <BusinessInfo :row="row" :index="index"></BusinessInfo>
          <!-- 流转记录 -->
          <FlowRecord :row="row" :index="index"></FlowRecord>
        </template>
      </Table>
      <div style="margin: 10px;float: right;">
        <Page
          :total="total"
          :current="page"
          :page-size-opts="[10, 20, 50, 100]"
          @on-change="changePage"
          @on-page-size-change="changePageSize"
          show-sizer
          show-elevator
          show-total
          transfer
        ></Page>
      </div>
    </Card>
  </div>
</template>

<script>
import {
  get_exception_queue_url,
  post,
  queryByPage,
  restart_task_url
} from "@/api/data";
import {
  getDesc,
  transCodeMap,
  getProductInfo,
  getPhaseErrorInfo
} from "_c/common.js";
import BusinessInfo from "_c/business_info.vue";
import FlowRecord from "_c/flow_record.vue";
import { dateFormat, FULL_TIME_FORMAT, convertFormat } from "@/libs/date.js";
import "../common.less";

export default {
  name: "query",
  components: {
    BusinessInfo,
    FlowRecord
  },
  data() {
    return {
      isLoading: false,
      formObj: {
        certNo: "",
        applyCity: "",
        applyId: "",
        phaseError: "",
        //Date类型的数组
        beginTimeRange: [],
        phaseNo: "N980000",
        flowTaskId: "",
        fromTransCode: ""
      },
      businessTypeItems: [],
      phaseErrorItems: [],
      flowTaskIdList: [],
      showModal: false,
      tableData: [],
      tableColumns: [
        {
          title: "操作",
          key: "flowObjectId",
          slot: "action",
          align: "center",
          fixed: "left",
          minWidth: 120
        },
        {
          align: "center",
          fixed: "left",
          type: "selection",
          minWidth: 50
        },
        {
          title: "申请编号",
          key: "applyId",
          sortable: true,
          align: "center",
          minWidth: 300
        },
        { title: "身份证号码", key: "certNo", align: "center", minWidth: 200 },
        {
          title: "客户姓名",
          key: "custName",
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
          title: "阶段异常代码",
          key: "phaseError",
          sortable: true,
          align: "center",
          minWidth: 120
        },
        {
          title: "进件编号",
          key: "fromTransCode",
          sortable: true,
          align: "center",
          minWidth: 300
        },
        { title: "业务类型", key: "transCode", align: "center", minWidth: 120 },
        {
          title: "开始时间",
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
        }
      ],
      pageSize: 10,
      total: 0,
      page: 1
    };
  },
  mounted: function() {
    getProductInfo().then(data => (this.businessTypeItems = data));
    getPhaseErrorInfo().then(data => (this.phaseErrorItems = data));
  },
  computed: {},
  methods: {
    hdlquery() {
      console.log(this.$refs["formObj"]);
      this.$refs["formObj"].validate(valid => {
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
      questData.beginTime = dateFormat(
        this.formObj.beginTimeRange[0],
        FULL_TIME_FORMAT
      );
      questData.endTime = dateFormat(
        this.formObj.beginTimeRange[1],
        FULL_TIME_FORMAT
      );
      queryByPage(get_exception_queue_url, questData, this.page, this.pageSize)
        .then(res => {
          this.tableData = res.data;
          this.tableData.forEach(row => {
            this.total = Number(res.total);
            row.beginTime = convertFormat(row.beginTime);
            row.transCode = getDesc(transCodeMap, row.transCode);
            row.businessType = getDesc(
              this.businessTypeItems,
              row.businessType
            );
          });
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
      this.$refs["formObj"].resetFields();
    },
    hdlSelectAll(selection) {
      this.flowTaskIdList = selection.map(row => row.flowTaskId);
    },
    hdlSelectAllCancel(selection) {
      this.flowTaskIdList = [];
    },
    hdlSelect(selection, row) {
      console.log(row.flowTaskId);
      this.flowTaskIdList.push(row.flowTaskId);
    },
    hdlSelectCancel(selection, row) {
      console.log(row.flowTaskId);
      this.flowTaskIdList.splice(
        this.flowTaskIdList.findIndex(
          flowTaskId => flowTaskId == row.flowTaskId
        ),
        1
      );
    },
    hdlShowModal() {
      if (this.flowTaskIdList.length === 0) {
        this.$Message.error("请选择至少一条记录");
      } else {
        this.showModal = true;
      }
    },
    restartTask() {
      console.log(this.flowTaskIdList);
      post(restart_task_url, { flowTaskIdList: this.flowTaskIdList })
        .then(data =>
          this.$Message.info({
            content: "操作成功,处理失败的节点数量:" + data,
            duration: 10,
            closable: true
          })
        )
        .catch(err => {
          this.$Message.error("操作失败:" + JSON.stringify(err));
        });
    }
  }
};
</script>
