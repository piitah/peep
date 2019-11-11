<template>
  <div id="app">
    <section>
      <Sidebar></Sidebar>
    </section>
    <section>
      <Backdrop></Backdrop>
    </section>
    <section>
      <app-header></app-header>
    </section>

    <router-view />
  </div>
</template>

<script>
import appFooter from "./components/Footer";
import appHeader from "../src/components/Header";
import { mapActions } from "../src/Store/modules/userModule";
import { mapMutations } from "vuex";
import * as types from "../src/Store/modules/types";
import { EventBus } from "@/main";
import userService from "../src/services/userService";
import apiService from "../src/services/apiServices";
import Sidebar from "@/components/shared/sidebar";
import Backdrop from "@/components/shared/Backdrop";

export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    appHeader,
    appFooter,
    Sidebar,
    Backdrop
  },
  created() {
    this.tryAutoLogin();
    this.getAuthUser();
  },
  methods: {
    tryAutoLogin: function() {
      this.$store.dispatch(`userModule/${types.TRY_AUTO_LOGIN}`);
    },
    getAuthUser: async function() {
      const response = await userService.GET_AUTH_USER();
      let data = response.data;
      let authUser = {};
      authUser.firstname = data.firstname;
      authUser.image = data.image;
      localStorage.setItem("authUser", JSON.stringify(authUser));
      EventBus.$emit("updateImages", response.data);
    }
  }
};
</script>
<style lang="scss">
#app {
  font-family: Camphor, Open Sans, Segoe UI, san-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgb(236, 236, 236);
}
.sidebar-wrapper {
  position: relative;
}
.sidebar {
  background-color: #fff;
  height: 100vh;
  width: 200px;
  position: fixed;
  z-index: 999;
}
</style>
