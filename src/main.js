import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import ScrollLoader from 'vue-scroll-loader'
import router from './router'
import store from './store'
import 'vue-material-design-icons/styles.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(ScrollLoader)
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
