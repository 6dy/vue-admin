<template>
  <div>
    <a-dropdown class="userDd">
      <div class="userDrop">
        <span class="userDrop_text"
          >{{ userName }}<i class="el-icon-caret-bottom"></i
        ></span>
        <img src="./user01.jpg" alt="user" />
      </div>
      <a-dropdown-menu solt="dropdown">
        <a-dropdown-item>
          <router-link to="/"><i class="el-icon-s-home"></i>首页</router-link>
        </a-dropdown-item>
        <a-dropdown-item>
          <router-link to="/personal"
            ><i class="el-icon-s-custom"></i>我的主页</router-link
          >
        </a-dropdown-item>
        <a-dropdown-item divided>
          <a @click="_loginOut()"><i class="el-icon-switch-button"></i>登出</a>
        </a-dropdown-item>
      </a-dropdown-menu>
    </a-dropdown>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
