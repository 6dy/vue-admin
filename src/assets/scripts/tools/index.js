import verify from "./verify"
import uri from "./uri"
import utils from "./utils"

export { verify, uri, utils }

const install = function(Vue) {
  if (install.installed) return
  install.installed = true

  // 定义属性到Vue原型中
  Object.defineProperties(Vue.prototype, {
    $verify: {
      get() {
        return verify
      }
    },
    $utils: {
      get() {
        return utils
      }
    }
  })
}

export default {
  install
}
