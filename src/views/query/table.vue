<template>
  <Card dis-hover style="margin-top:10px">
    <Table
      :data="tableData"
      :columns="tableColumns"
      stripe
      class="table"
      @on-sort-change="hdlSortChange"
      :loading="isLoading"
    >
      <template slot="action" slot-scope="{ row, index }">
        <Button
          type="primary"
          size="small"
          style="margin-right: 5px"
          @click="hdlAction1(row, index)"
          >本行数据</Button
        >
      </template>
    </Table>
    <div style="margin: 10px;overflow: hidden" v-show="tableDataTotal > 0">
      <div style="float: right;">
        <Page
          :total="tableDataTotal"
          :current="1"
          @on-change="changePage"
        ></Page>
      </div>
    </div>
  </Card>
</template>

<script>
import { queryone } from "@/api/data";
export default {
  name: "q-table",
  data() {
    return {
      isLoading: false,
      tableData: [],
      tableColumns: [
        {
          title: "英文名",
          key: "name",
          align: "center",
          fixed: "left",
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
        { title: "列", key: "str8", align: "center", minWidth: 100 },
        {
          title: "操作",
          slot: "action",
          align: "center",
          fixed: "right",
          minWidth: 200
        }
      ],
      tablePageSize: 10,
      tableDataTotal: 0
    };
  },
  computed: {},
  methods: {
    changePage(index) {
      console.log(1);
      let self = this;
      self.isLoading = true;
      queryone({ size: this.tablePageSize, index })
        .then(res => {
          console.log(res);
          this.tableData = res.data.list;
          this.tableDataTotal = Number(res.data.total);
        })
        .finally(function() {
          self.isLoading = false;
        });
    },
    hdlClick() {
      this.$refs["formValidate"].validate(valid => {
        if (valid) {
          queryone({ size: this.tablePageSize, index: 0 }).then(res => {
            console.log(res);
            this.tableData = res.data.list;
            this.tableDataTotal = Number(res.data.total);
          });
        }
      });
    },
    hdlSortChange(column, key, order) {
      console.log(column, key, order);
      //请求
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
</style>
