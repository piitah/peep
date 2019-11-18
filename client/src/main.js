import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./Store/store";
import Vuetify from './plugins/vuetify';
import Cloudinary from 'cloudinary-vue';
import bootstrapVue from 'bootstrap-vue';
import Vuelidate from 'vuelidate'
import 'vuetify/dist/vuetify.min.css'
import 'vuetify/dist/vuetify.js'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-vue/esm/components/modal/modal'
import 'bootstrap-vue/esm/directives/modal/modal'
import "../src/assets/styles/css/v.css"
import "../src/assets/animate.css"

export const EventBus = new Vue();

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.state.userModule.token) {
      next({
        path: "/login",
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

Vue.config.productionTip = false;
Vue.use(bootstrapVue)
Vue.use(Vuelidate)
Vue.use(Cloudinary, {
  configuration: {
    cloudName: "sidmach"
  },
  components: ["CldImage", "CldTransformation"]
});

new Vue({
  router,
  store,
  // Vuetify,
  render: h => h(App)
}).$mount("#app");
