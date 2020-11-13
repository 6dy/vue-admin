import axios from "axios"
import router from "@/router"
import store from "@/store"
import qs from "qs"
import { SET_USER_INFO } from "@/store/mutation-types"
import * as config from "@/assets/scripts/config/config"
axios.defaults.withCredentials = true // 允许跨域带上cookie

const setUserInfo = function(user) {
  store.commit(SET_USER_INFO, user)
}

/**
 * 统一与后端数据交互
 * @param options
 */
export default function fetch(options) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL: config.serverBaseUrl,
      timeout: 30000,
      withCredentials: true, // 表示跨域请求时是否需要使用凭证
      credentials: "include",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
    if (options.headers === undefined) {
      // 参数格式转换
      options.data = qs.stringify(options.data)
    }
    instance.interceptors.request.use(
      response => {
        const authorization = response.headers["Authorization"]
        if (authorization === undefined) {
          response.headers["Authorization"] =
            "Bearer " + store.state.Authorization // 让每个请求携带token
        }

        return response
      },
      error => {
        return Promise.reject(error)
      }
    )
    instance(options)
      .then(response => {
        let result = response.data

        // 无数据
        if (!result) {
          return false
        }

        let isAuth = response.headers["x-auth-token"]
        if (
          (isAuth === "false" && options.url.indexOf("login") < 0) ||
          result.status === config.UNAUTHORIZED_CODE ||
          result.data === config.UNAUTHORIZED_CODE
        ) {
          // 清空用户信息
          setUserInfo(null)
          // 跳转至登录界面
          router.replace({ name: "login" })
          return false
        }

        resolve(result)
        return false
      })
      .catch(error => {
        setUserInfo(null)
        router.push({
          path: "/login"
        })
        reject(error)
      })
  })
}
