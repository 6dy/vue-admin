<template>
  <div class="wrapper" :class="{ closeBar: opened }">
    <m-header></m-header>
    <div class="wrapper_con">
      <side-bar></side-bar>
      <page-main></page-main>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
