import Vue from "vue";
import VueRouter from "vue-router";
import routes from "@/router/routes";
import axios from 'axios';
import store from '@/store';

Vue.use(VueRouter);

const router = new VueRouter({
  routes
});

router.beforeEach(async (to, from, next) => {
  const isPublicRoute = to.matched.some(record => record.meta.public);
  const isUserlogged = store.getters["user/userIsLogged"];


  //Если в  store нет сохраненного пользователя
  if (!isUserlogged) {
    const token = localStorage.getItem('token');

    console.warn('[строка 22] isUserLogged is false');

    if (!token && isPublicRoute) {
      console.warn('[строка 25] I\'is public route and the is no token found in localStorage');

      next();
    } else if (token) {
      console.warn('[строка 29] token found in localStorage');

      axios.defaults.headers['Authorization'] = `Bearer ${ token }`;

      try {
        const response = await axios.get('/user');

        store.commit("user/SET_USER", response.data.user);

        console.warn('[строка38] The user\'s object was successfully fetched', from.path);

        (from.path === "/login") ? next(): next({
          path: from.path
        });
      } catch (e) {
        console.warn('[строка 44] The user\'s object was not fetched');

        localStorage.removeItem('token');

        next('/login');
      }
    } else {
      console.warn('[строка 51] token was no found in localStorage');

      next('/login');
    }
  }
  //Если запрашиваемый путь  публичный и в store есть объект пользователя
  else if (isPublicRoute && isUserlogged) {
    console.warn('[строка 58] isPublicRoute & isUserLogged is true');

    //переадресация пользователя на страницу откуда пришел path =
    next({
      path: from.path
    });


  }
  // в другом случае
  else {
    console.warn('[строка 67] The global else block')

    next();
  }
});

export default router;