import Vue from 'vue'
import secondPage from './secondPage.vue'

Vue.config.productionTip = false

new Vue({
  render: (h) => h(secondPage)
}).$mount('#secondPage')
