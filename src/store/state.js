/** vuex所有状态值 */
import { sessionStorage } from "@/assets/scripts/storage"

// 定义需要用到的状态常量
const state = {
  userInfo: sessionStorage.get("userInfo"),
  authorization: sessionStorage.get("Authorization"),
  opened: sessionStorage.get("open") ? sessionStorage.get("open") : "false"
}

// 将状态常量暴露给外部
export default state
