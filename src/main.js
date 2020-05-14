import Vue from 'vue'
import LandingPage from './views/LandingPage'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(LandingPage)
}).$mount('#app')
