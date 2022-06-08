import Vue from 'vue'
import firstPage from './firstPage.vue'
import router from '@/router/firstPage'

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(firstPage)
}).$mount('#firstPage')
