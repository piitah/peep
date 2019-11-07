<template>
  <div id="app">
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

export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    appHeader,
    appFooter
  },
  created() {
    this.tryAutoLogin();
    this.getAuthUser();
    this.getFollowedPost();
  },
  methods: {
    tryAutoLogin: function() {
      this.$store.dispatch(`userModule/${types.TRY_AUTO_LOGIN}`);
    },
    getAuthUser: async function() {
      const response = await userService.GET_AUTH_USER();
      localStorage.setItem("authUser", JSON.stringify(response.data));
      EventBus.$emit("updateImages", response.data);
    },
    getFollowedPost: async function() {
      const response = await apiService.GET_FOLLOWED_POST();
      localStorage.setItem("posts", JSON.stringify(response.data.payload));
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
</style>
