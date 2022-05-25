import Vue from 'vue'
import third from './third.vue'

Vue.config.productionTip = false

new Vue({
  render: (h) => h(third)
}).$mount('#third')
