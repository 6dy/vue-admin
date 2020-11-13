<template>
  <div class="breadDiv" id="domBread">
    <a-breadcrumb separator="/">
      <a-breadcrumb-item
        v-for="(item, index) in breadList"
        :href="item.path"
        :key="index"
        >{{ item.meta.title }}</a-breadcrumb-item
      >
    </a-breadcrumb>
  </div>
</template>

<script>
export default {
  data() {
    return {
      breadList: []
    }
  },
  watch: {
    $route: {
      handler(route) {
        console.log("route", route)
        let allList = route.matched.filter(item => {
          if (item.meta && item.meta.title) {
            if (item.redirect) {
              item.path = ""
            }
            return true
          }
        })
        if (allList[0].path !== "/" && allList[0].path !== "/dashbord") {
          allList.unshift({ path: "/", meta: { title: "首页" } })
        }
        this.breadList = allList
      },
      immediate: true
    }
  }
}
</script>

<style lang="scss" scoped></style>
