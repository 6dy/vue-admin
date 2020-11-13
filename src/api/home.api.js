import axios from "@/assets/plugins/axios"
let baseUrl = "/api/user/v1/user/"

/**
 * 获取线下个人
 * @param params
 */

function personalList() {
  return axios({
    url: baseUrl + "personalList",
    method: "get"
  })
}

export default {
  personalList
}
