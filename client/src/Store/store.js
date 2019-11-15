import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import profileModule from './modules/profileModule'
import userModule from '../Store/modules/userModule'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    userModule,
    profileModule
  }
  // plugins: [
  //   createPersistedState({
  //     path: ["userModule.token", "userModule.isAuthenticated"]
  //   })
  // ]
});
