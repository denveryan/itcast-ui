<template>
  <div>
    <hm-switch v-model="value" name="gender"></hm-switch>
    <hm-switch v-model="value" name="gender" active-color="#13ce66" inactive-color="#ff4949">></hm-switch>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      name: '1',
      value: true
    }
  },
  methods: {
    fn () {
      console.log(123)
    }
  }
}
</script>

<style>

</style>
