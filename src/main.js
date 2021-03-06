import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './index.scss'
import 'vis/dist/vis.min.css'
import 'vis/dist/vis-timeline-graph2d.min.css'
import 'vis/dist/vis-network.min.css'
import VCalendar from 'v-calendar';

Vue.use(VCalendar);
Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
