import Vue from 'vue'
import roles from './roles.vue'
import router from '@/router/roles'

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(roles)
}).$mount('#roles')
