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
        <FormItem prop="key_select1">
          <Select
            v-model="formObj.key_select1"
            placeholder="请选择XXX"
            size="large"
          >
            <Option value="s1o1">选项1</Option>
            <Option value="s1o2">选项2</Option>
            <Option value="s1o3">选项3</Option>
          </Select>
          <template #label
            >固定选项</template
          >
        </FormItem>
        <FormItem label="后端数据渲染选项" prop="key_select2">
          <Select v-model="formObj.key_select2" size="large">
            <Option
              v-for="item in option_select2"
              :value="item.value"
              :key="item.key"
              >{{ item.value }}</Option
            >
          </Select>
        </FormItem>
        <FormItem label="内容输入框" prop="key_input1">
          <Input
            v-model="formObj.key_input1"
            size="large"
            placeholder="large size"
          />
        </FormItem>
        <Row>
          <FormItem style="margin-left:200px">
            <Button
              type="primary"
              icon="md-search"
              @click="hdlClick()"
              size="large"
              >查询</Button
            >
          </FormItem>
          <FormItem style="margin-left:200px">
            <Button type="primary" icon="md-close" @click="reset()" size="large"
              >清空</Button
            >
          </FormItem>
        </Row>
      </Form>
      <Row></Row>
    </Card>
    <Card dis-hover style="margin-top:10px">
      <Table
        :data="tableData"
        :columns="tableColumns"
        stripe
        border
        class="table"
        @on-sort-change="hdlSortChange"
        :loading="isLoading"
      >
        <template #action="{row,index}">
          <Button
            type="info"
            size="small"
            style="margin-right: 5px"
            @click="hdlAction1(row, index)"
            >本行数据</Button
          >
        </template>
      </Table>
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
import { queryone, querySample } from "@/api/data";
import "./common.less";

export default {
  name: "query",
  data() {
    return {
      isLoading: false,
      formObj: {
        key_select1: "s1o2",
        key_select2: "value3",
        key_input1: ""
      },
      tableData: [],
      tableColumns: [
        {
          title: "操作",
          slot: "action",
          align: "center",
          fixed: "left",
          minWidth: 100
        },
        {
          title: "英文名",
          key: "name",
          align: "center",
          width: 100
        },
        { title: "中文名", key: "cname", align: "center", minWidth: 100 },
        {
          title: "身份证",
          key: "id",
          align: "center",
          sortable: "custom",
          minWidth: 200
        },
        { title: "省", key: "province", align: "center", minWidth: 100 },
        { title: "市", key: "city", align: "center", minWidth: 100 },
        { title: "地", key: "county", align: "center", minWidth: 100 },
        { title: "邮箱", key: "email", align: "center", minWidth: 200 },
        { title: "时间", key: "createTime", align: "center", minWidth: 100 },
        { title: "列", key: "str0", align: "center", minWidth: 100 },
        { title: "列", key: "str1", align: "center", minWidth: 100 },
        { title: "列", key: "str2", align: "center", minWidth: 100 },
        { title: "列", key: "str3", align: "center", minWidth: 100 },
        { title: "列", key: "str4", align: "center", minWidth: 100 },
        { title: "列", key: "str5", align: "center", minWidth: 100 },
        { title: "列", key: "str6", align: "center", minWidth: 100 },
        { title: "列", key: "str7", align: "center", minWidth: 100 },
        { title: "列", key: "str8", align: "center", minWidth: 100 }
      ],
      pageSize: 10,
      total: 0,
      page: 1,
      option_select2: [],
      validateRules: {
        key_select2: [
          { required: true, message: "请选择一个", trigger: "change" }
        ]
      }
    };
  },
  mounted: function() {
    querySample().then(res => {
      console.log(res);
      this.option_select2 = res.data;
    });
  },
  computed: {},
  methods: {
    changePage(page) {
      let self = this;
      self.isLoading = true;
      this.page = page;
      queryone({ pageSize: this.pageSize, page: page })
        .then(res => {
          console.log("res :");
          console.log(res);
          self.tableData = res.data.list;
          self.total = Number(res.data.total);
        })
        .finally(function() {
          self.isLoading = false;
        });
    },
    changePageSize(pageSize) {
      this.pageSize = pageSize;
    },
    hdlClick() {
      this.$refs["formValidate"].validate(valid => {
        if (valid) {
          queryone({ pageSize: this.pageSize, page: this.page }).then(res => {
            console.log("res :");
            console.log(res);
            this.tableData = res.data.list;
            this.total = Number(res.data.total);
          });
        }
      });
    },
    hdlSortChange(column, key, order) {
      console.log(column, key, order);
      //请求
    },
    reset() {
      this.$refs["formValidate"].resetFields();
    },
    hdlAction1(row, index) {
      console.log(row);
      console.log(index);
    }
  }
};
</script>

<style lang="less" scoped>
.page {
  width: 100%;
  padding: 10px;
}

.table {
  width: 100%;
}

.ivu-form-item {
  margin-right: 50px;
  width: 300px;
}
</style>
