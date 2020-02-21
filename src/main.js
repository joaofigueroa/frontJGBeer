import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import ScrollLoader from 'vue-scroll-loader'
import 'vue-material-design-icons/styles.css';

Vue.use(ScrollLoader)
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
