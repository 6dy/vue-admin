const antdList = []
function importAll(antds) {
  antds.keys().forEach(key => {
    antdList.push(antds(key).default)
  })
}
importAll(require.context("../antd", true, /\.antd\.js$/))
const install = function(Vue) {
  if (install.installed) return
  install.installed = true

  Object.defineProperties(Vue.prototype, {
    $antd: {
      get() {
        return Object.assign(...antdList)
      }
    }
  })
}

export default {
  install
}
