import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import api from "./api"
import antdPlugins from "./assets/plugins/antd"
import tools from "./assets/scripts/tools"
import ant from "ant-design-vue"
import "./assets/less/index.less"
import commonComponents from "./components/common"

Vue.use(ant)
Vue.use(api)
Vue.use(tools)
Vue.use(antdPlugins)
Vue.use(commonComponents)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
