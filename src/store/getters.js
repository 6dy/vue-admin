/** vuex中state的映射 */

export const userInfo = state => state.userInfo
export const opened = state => {
  if (state.app.opened === "false") {
    return false
  } else if (state.app.opened === "true") {
    return true
  }
}
