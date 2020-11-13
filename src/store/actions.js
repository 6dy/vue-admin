/** vuex的异步请求以及对mutation的封装 */

import * as types from "./mutation-types"

const actions = {
  [types.SET_USER_INFO]({ commit }, userInfo) {
    commit(types.SET_USER_INFO, userInfo)
  }
}

export default actions
