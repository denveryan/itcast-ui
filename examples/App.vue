<template>
  <div>
    <hm-button>按钮</hm-button>
    <hm-button type="primary">按钮</hm-button>
    <hm-button type="success">按钮</hm-button>
    <hm-button type="info">按钮</hm-button>
    <hm-button type="warning">按钮</hm-button>
    <hm-button type="danger">按钮</hm-button>
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
.hm-button {
  margin-left: 10px;
}
</style>
