import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import About from './pages/about';
import Works from './pages/works';
import Reviews from './pages/reviews';
import Login from './pages/login';



const router = new VueRouter({
  routes: [{
      path: '/',
      component: About
    },
    {
      path: '/works',
      component: Works
    },
    {
      path: '/reviews',
      component: Reviews
    },
    {
      path: '/login',
      component: Login
    }
  ]
});

Vue.use(VueRouter);


new Vue({
  el: "#app-root",
  router,
  render: h => h(App)
});