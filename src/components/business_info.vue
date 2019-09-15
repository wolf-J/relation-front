<template>
  <div>
    <Button
      type="info"
      size="small"
      style="margin-top: 5px;"
      @click="hdlAction1(row, index)"
      >业务详情</Button
    >
  </div>
</template>

<script>
export default {
  name: "business-info",
  props: {
    row: Object,
    index: [String, Number]
  },
  methods: {
    hdlAction1(row, index) {
      console.log(row);
      console.log(index);
    }
  }
};
</script>
