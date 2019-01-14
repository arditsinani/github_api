import Vue from 'vue';
import App from './App'
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css';
import router from './router'
import FlashMessage from '@smartweb/vue-flash-message';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import axios from 'axios';

const token = localStorage.getItem('token');
if (token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(FlashMessage)
Vue.use(Vuetify)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
