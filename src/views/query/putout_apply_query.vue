<template>
  <div class="page">
    <Card class="search-con" dis-hover>
      <Form
        ref="formValidate"
        :model="formObj"
        lable-position="left"
        :label-width="100"
        inline
        :rules="validateRules"
      >
        <FormItem>
          <template #label>
            <div class="label">客户姓名</div>
          </template>
          <Input v-model="formObj.custName" size="large" clearable />
        </FormItem>
        <FormItem>
          <template #label>
            <div class="label">身份证号码</div>
          </template>
          <Input v-model="formObj.certNo" size="large" clearable />
        </FormItem>
        <FormItem prop="businessType">
          <template #label>
            <div class="label">产品名称</div>
          </template>
          <Select
            v-model="formObj.businessType"
            size="large"
            clearable
            filterable
          >
            <Option
              v-for="item in businessTypeItems"
              :key="item.code"
              :value="item.code"
              >{{ item.desc }}</Option
            >
          </Select>
        </FormItem>
        <FormItem>
          <template #label>
            <div class="label">放款编号</div>
          </template>
          <Input v-model="formObj.putoutApplyNo" size="large" clearable />
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
            <div class="label">承办人姓名</div>
          </template>
          <Input v-model="formObj.userName" size="large" clearable />
        </FormItem>
        <FormItem prop="result">
          <template #label>
            <div class="label">审批结果</div>
          </template>
          <Select v-model="formObj.result" size="large" clearable>
            <Option
              v-for="item in resultItems"
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
        <FormItem>
          <template #label>
            <div class="label">渠道</div>
          </template>
          <Input v-model="formObj.channel" size="large" clearable />
        </FormItem>
        <FormItem>
          <template #label>
            <div class="label">开始时间</div>
          </template>
          <DatePicker
            type="daterange"
            placement="bottom-end"
            style="width: 200px"
            v-model="formObj.beginTimeRange"
            size="large"
            clearable
          ></DatePicker>
        </FormItem>
        <FormItem>
          <template #label>
            <div class="label">合同编号</div>
          </template>
          <Input v-model="formObj.contractApplyNo" size="large" clearable />
        </FormItem>
        <FormItem prop="businessStatus">
          <template #label>
            <div class="label">业务状态</div>
          </template>
          <Select v-model="formObj.businessStatus" size="large">
            <Option
              v-for="item in statusItems"
              :key="item.code"
              :value="item.code"
              >{{ item.desc }}</Option
            >
          </Select>
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
    <Card dis-hover style="margin-top:10px;">
      <Table
        :data="tableData"
        :columns="tableColumns"
        size="large"
        stripe
        border
        class="table"
        @on-sort-change="hdlSortChange"
        :loading="isLoading"
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
  getDesc,
  taskStateMap,
  getProductInfo,
  getPhaseNumbers
} from "_c/common.js";
import { putout_apply_progress_query_url, queryByPage } from "@/api/data";
import { config, putoutApplyTableColumns } from "./common.js";
import { dateFormat, FULL_TIME_FORMAT, convertFormat } from "@/libs/date.js";
import "./query.less";
import FlowRecord from "_c/flow_record.vue";
import BusinessInfo from "_c/business_info.vue";

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
        custName: "",
        certNo: "",
        businessType: "",
        putoutApplyNo: "",
        phaseNo: "",
        userName: "",
        result: "",
        applyCity: "",
        contractApplyNo: "",
        channel: "",
        //Date类型的数组
        beginTimeRange: [],
        businessStatus: "0"
      },
      businessTypeItems: [],
      phaseNoItems: [],
      resultItems: config.resultMap,
      statusItems: config.businessStatusMap,
      taskStateItems: config.taskStateMap,
      tableData: [],
      tableColumns: putoutApplyTableColumns,
      pageSize: 10,
      total: 0,
      page: 1,
      validateRules: {
        businessStatus: [
          { required: false, message: "请选择一个", trigger: "change" }
        ]
      }
    };
  },
  mounted: function() {
    getPhaseNumbers().then(data => (this.phaseNoItems = data));
    getProductInfo().then(data => (this.businessTypeItems = data));
  },
  computed: {},
  methods: {
    hdlquery() {
      this.$refs["formValidate"].validate(valid => {
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
      queryByPage(
        putout_apply_progress_query_url,
        questData,
        this.page,
        this.pageSize
      )
        .then(res => {
          this.tableData = res.data;
          this.tableData.forEach(row => {
            row.beginTime = convertFormat(row.beginTime);
            row.endTime = convertFormat(row.endTime);
            row.transCode = getDesc(config.transCodeMap, row.transCode);
            row.result = getDesc(this.resultItems, row.result);
            row.businessType = getDesc(
              this.businessTypeItems,
              row.businessType
            );
          });
          this.total = Number(res.total);
        })
        .catch(err => this.$Message.warning("查询异常:" + err))
        .finally(() => (self.isLoading = false));
    },
    changePageSize(pageSize) {
      this.pageSize = pageSize;
    },
    hdlSortChange(column, key, order) {
      console.log(column, key, order);
      //请求
    },
    reset() {
      this.$refs["formValidate"].resetFields();
    }
  }
};
</script>
