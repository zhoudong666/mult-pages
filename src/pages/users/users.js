import Vue from 'vue'
import users from './users.vue'

Vue.config.productionTip = false

new Vue({
  render: (h) => h(users)
}).$mount('#users')
