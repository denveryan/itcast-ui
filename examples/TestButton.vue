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
    <div class="row">
      <hm-button round plain>按钮</hm-button>
      <hm-button round plain type="primary">按钮</hm-button>
      <hm-button round plain type="success">按钮</hm-button>
      <hm-button round plain type="info">按钮</hm-button>
      <hm-button round plain type="warning">按钮</hm-button>
      <hm-button round plain type="danger">按钮</hm-button>
    </div>
    <div class="row">
      <hm-button icon="el-icon-check" circle plain></hm-button>
      <hm-button icon="el-icon-check" circle plain type="primary"></hm-button>
      <hm-button icon="el-icon-check" circle plain type="success"></hm-button>
      <hm-button icon="el-icon-check" circle plain type="info"></hm-button>
      <hm-button icon="el-icon-check" circle plain type="warning"></hm-button>
      <hm-button icon="el-icon-check" circle plain type="danger"></hm-button>
    </div>
  </div>
</template>

<script>
export default {

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
