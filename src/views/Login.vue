<template>
  <div class="login-wrapper">
    <a-form
      id="components-form-demo-normal-login"
      :form="form"
      class="login-form"
      @submit="handleSubmit"
    >
      <a-form-item>
        <a-input
          v-decorator="[
            'userName',
            { rules: [{ required: true, message: '请输入账号!' }] }
          ]"
          placeholder="账号"
        >
          <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="[
            'password',
            { rules: [{ required: true, message: '请输入密码!' }] }
          ]"
          type="password"
          placeholder="密码"
        >
          <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit" class="login-form-button">
          登录
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { mapActions } from "vuex"
import { SET_USER_INFO, AUTHORIZATION } from "@/store/mutation-types"

export default {
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "normal_login" })
  },
  methods: {
    // 将store中的SET_USER_INFO映射到methods对象上
    ...mapActions({
      set_user_info: SET_USER_INFO,
      authorization: AUTHORIZATION
    }),

    // 点击登录按钮
    handleSubmit(e) {
      e.preventDefault()

      this.form.validateFields((err, values) => {
        if (!err) {
          if (this.$verify.isTel(values.userName)) {
            this.$axios.loginByUsername(values).then(res => {
              this.set_user_info({
                // 在vuex中存储用户已经登录的相关信息
                user: {
                  userName: values.userName
                }
              })
              this.authorization({
                authorization: res.authorization
              })
            })
          } else {
            this.$message.error("请输入正确的手机号") //账号不符合要求，弹窗提示
          }
        }
      })
    }
  }
}
</script>
<style type="less">
.login-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#components-form-demo-normal-login {
  max-width: 600px;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>
