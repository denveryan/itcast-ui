<template>
  <div class="hm-dialog__wrapper">
    <div class="el-dialog">
      哈哈
    </div>
  </div>
</template>

<script>
export default {
  name: 'HmDialog'
}
</script>

<style lang="scss">
.hm-dialog__wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    margin: 0;
    z-index: 2001;
    background-color: rgba(0,0,0, .5);
}

</style>
