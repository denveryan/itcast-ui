<template>
  <div>
    <div class="row">
      <hm-button>按钮</hm-button>
      <hm-button type="primary">按钮</hm-button>
      <hm-button type="success">按钮</hm-button>
      <hm-button type="info">按钮</hm-button>
      <hm-button type="warning">按钮</hm-button>
      <hm-button type="danger">按钮</hm-button>
    </div>
    <div class="row">
      <hm-button plain>按钮</hm-button>
      <hm-button plain type="primary">按钮</hm-button>
      <hm-button plain type="success">按钮</hm-button>
      <hm-button plain type="info">按钮</hm-button>
      <hm-button plain type="warning">按钮</hm-button>
      <hm-button plain type="danger">按钮</hm-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      color: '#f00'
    }
  }
}
</script>

<style lang="scss" scoped>
.row {
  padding: 10px 0;
}
.hm-button {
  margin-left: 10px;
}
</style>
