import Vue from "vue";
import Router from "vue-router";
import LandingPage from "../src/views/LandingPage.vue"
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "index",
      component: () =>
        import("./views/index.vue"),
      children: [
        {
          path: "",
          name: "LandingPage",
          component: LandingPage
        },
        {
          path: "signup",
          name: "signup",
          component: () =>
            import("./views/signup.vue")
        },
        {
          path: "login",
          name: "Login",
          component: () =>
            import("./views/login.vue")
        }
      ]
    },
    {
      path: "/Dashboard",
      name: "dashboard",
      component: () =>
        import("./views/Dashboard.vue"),
      meta: {
        requiresAuth: true
      },
      children: [
        {
          path: "",
          name: "Posts",
          component: () =>
            import("./components/shared/Post.vue")
        },
        {
          path: "Profile",
          name: "Profile",
          component: () =>
            import("../src/components/shared/profile.vue")
        },
        {
          path: "suggestion",
          name: "suggestion",
          component: () =>
            import("../src/components/shared/Suggestions.vue")
        },
        {
          path: 'search/:id',
          name: 'search',
          component: () =>
            import("./components/shared/Search.vue")
        }
      ]
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to) {
      return { x: 0, y: 0 }
    } else {
      return { x: 0, y: 0 }
    }
  }
});
