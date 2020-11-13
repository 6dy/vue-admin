/** vuex所有的mutation */

// 引入mutations-types
import * as types from "./mutation-types"
import { sessionStorage } from "@/assets/scripts/storage"

// 定义mutation，其内部是一些修改方法
const mutations = {
  // 第一个参数是状态值
  // 第二个参数为提交状态修改是传入的对象参数
  [types.SET_USER_INFO](state, userInfo) {
    state.userInfo = userInfo
    sessionStorage.set("userInfo", userInfo, 1)
  },

  // authorization
  [types.AUTHORIZATION](state, authorization) {
    state.authorization = authorization
    sessionStorage.set("authorization", authorization)
  },

  //slider 开关
  [types.SET_OPENED](state, open) {
    state.opened = open
    sessionStorage.set("open", open)
  }
}

// 暴露给外部
export default mutations
