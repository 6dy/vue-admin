const requireComponent = require.context("./", false, /\.vue$/)

const install = Vue => {
  requireComponent.keys().forEach(fileName => {
    let config = requireComponent(fileName)
    let componentName = fileName.replace(/^\.\//, "").replace(/\.vue$/, "")
    Vue.component(componentName, config.default || config)
  })
}
export default {
  install
}
