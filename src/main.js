import Vue from 'vue'
import LandingPage from './views/LandingPage'
import vuetify from './plugins/vuetify'
import Highcharts from 'highcharts'
import HighchartsVue from 'highcharts-vue'
import highchartsVariablePie from 'highcharts/modules/variable-pie'

highchartsVariablePie(Highcharts);

Vue.use(HighchartsVue, {
	highcharts: Highcharts
})

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(LandingPage)
}).$mount('#app')
