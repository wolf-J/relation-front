<template>
  <div>
    <Button
      type="info"
      size="small"
      style="margin-top: 5px"
      @click="queryFlowRecord(row, index)"
      >流转记录</Button
    >
    <Modal v-model="showFlowRecord" title="流转记录" :width="1500">
      <Table
        :data="flowRecordData"
        :columns="flowRecordColumns"
        :loading="isLoading"
        size="large"
        :max-height="600"
        stripe
        border
      >
        <template #action2="{row, index}">
          <Button
            type="info"
            size="small"
            style="margin-top: 5px"
            @click="queryBlazeBom(row)"
            >风险策略BOM</Button
          >
        </template>
      </Table>
    </Modal>
  </div>
</template>
<script>
import {
  baseUrl,
  flow_record_url,
  query_blaze_bom_url,
  post
} from "@/api/data";
import { taskStateMap, getDesc } from "./common.js";
import { convertFormat } from "@/libs/date.js";
import { flowRecordColumns } from "./flow_record.js";

export default {
  name: "flow-record",
  props: {
    row: Object,
    index: [String, Number]
  },
  data() {
    return {
      isLoading: false,
      showFlowRecord: false,
      taskStateItems: taskStateMap,
      flowRecordData: [],
      flowRecordColumns: []
    };
  },
  computed: {},
  methods: {
    queryFlowRecord(row, index) {
      console.log(index);
      let self = this;
      self.isLoading = true;
      this.showFlowRecord = true;
      this.flowRecordColumns = flowRecordColumns;
      post(flow_record_url, { flowObjectId: row.flowObjectId })
        .then(data => {
          this.flowRecordData = data;
          this.flowRecordData.forEach(record => {
            record.beginTime = convertFormat(record.beginTime);
            record.endTime = convertFormat(record.endTime);
            record.taskState = getDesc(this.taskStateItems, record.taskState);
          });
        })
        .finally(() => (self.isLoading = false));
    },
    queryBlazeBom(row) {
      window.open(
        baseUrl + query_blaze_bom_url + "?&flowTaskId=" + row.flowTaskId
      );
    }
  }
};
</script>
