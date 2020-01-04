<template>
  <div>
    <!-- <hm-input placeholder="请输入用户名" aa="bb" @keyup.enter="fn" @blur="fn1"></hm-input><br>
    <hm-input placeholder="请输入用户名" type="password"></hm-input><br>
    <hm-input placeholder="请输入用户名" disabled></hm-input><br> -->
    <hm-input placeholder="请输入用户名" type="password" v-model="username" show-password></hm-input><br>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: ''
    }
  }
}
</script>

<style>

</style>
