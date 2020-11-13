import axios from "@/assets/plugins/axios"
let baseUrl = ""
const basicAuthorization =
  "Basic d2ViX2FwcDpzcHJpbmctbWljcm9zZXJ2aWNlLWV4YW0tc2VjcmV0"
/**
 * 登录
 * @param params
 */
export function loginByUsername(values) {
  const grantType = "password"
  const scope = "read"
  return axios({
    url: "/api/auth/oauth/token",
    headers: {
      Authorization: basicAuthorization
    },
    method: "post",
    params: {
      username: values.username,
      credential: values.password,
      randomStr: "",
      code: "1111",
      grant_type: grantType,
      scope
    }
  })
}
/**
 * 登出
 */
function logout() {
  const url = `${baseUrl}/logout`

  return axios({
    url: url,
    method: "get"
  })
}

export default {
  loginByUsername,
  logout
}
