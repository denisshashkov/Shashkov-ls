import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import tooltip from './modules/tooltip';
import user from './modules/user';
import reviews from './modules/reviews';



export default new Vuex.Store({
  modules: {
    tooltip,
    user,
    reviews,
  }
});