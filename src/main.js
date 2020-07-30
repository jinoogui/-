import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './css/umi.css'
// import './css/nomalize.css'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
