import Vue from 'vue'
import App from './App.vue'
import ChartPlugin from './plugins/ChartPlug.js';

Vue.config.productionTip = false
Vue.use(ChartPlugin);

new Vue({
  render: h => h(App),
}).$mount('#app')
