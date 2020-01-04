<template>
  <div>
    <hm-button @click="dialogVisible = true">显示对话框</hm-button>
    <hm-dialog width="30%" top="200px" title="提示" :visible.sync="dialogVisible" @opened="open" @closed="close">
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <template v-slot:footer>
        <hm-button @click="dialogVisible = false">取 消</hm-button>
        <hm-button type="primary" @click="dialogVisible = false">确 定</hm-button>
      </template>
    </hm-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialogVisible: false
    }
  },
  methods: {
    open () {
      console.log('对话框显示了')
    },
    close () {
      console.log('对话框关闭了')
    }
  }
}
</script>

<style>

</style>
