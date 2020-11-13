<template>
  <div class="sideCollapse" id="domColapse">
    <i
      :class="{ 'el-icon-s-unfold': opened, 'el-icon-s-fold': !opened }"
      @click="toggleOpen()"
    ></i>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  computed: {
    ...mapGetters(["opened"])
  }
}
</script>

<style lang="scss" scoped></style>
