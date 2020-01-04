<template>
  <div>
    <!-- <test-button></test-button> -->
    <!-- <test-dialog></test-dialog> -->
    <test-table></test-table>
  </div>
</template>

<script>
// import TestButton from './TestButton'
// import TestDialog from './TestDialog'
import TestTable from './TestTable'
export default {
  components: {
    // TestButton,
    // TestDialog
    TestTable
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
