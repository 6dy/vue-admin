<template>
  <div class="home" id="homeDetail">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <a-button type="primary">按钮</a-button>
    <my-button class="marginTop"></my-button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue"

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  created() {
    this.$antd.AntNotice("success", "title", "哈哈哈")
    this.$axios.personalList().then(res => {
      console.log(res)
    })
  }
}
</script>
<style type="less">
.margin-top {
  margin-top: 20px;
}
</style>
