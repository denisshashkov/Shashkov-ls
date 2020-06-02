import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from './requests';



Vue.prototype.$axios = axios;





new Vue({
  el: "#app-root",
  router,

  render: h => h(App)
});