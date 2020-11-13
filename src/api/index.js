const apiList = []
function importAll(apis) {
  apis.keys().forEach(key => {
    apiList.push(apis(key).default)
  })
}
importAll(require.context("../api", true, /\.api\.js$/))
const install = function(Vue) {
  if (install.installed) return
  install.installed = true

  Object.defineProperties(Vue.prototype, {
    $axios: {
      get() {
        return Object.assign(...apiList)
      }
    }
  })
}

export default {
  install
}
