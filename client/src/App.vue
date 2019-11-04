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
import {mapActions} from "../src/Store/modules/userModule"
import { mapMutations } from 'vuex';
import * as types from "../src/Store/modules/types"

export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    appHeader,
    appFooter
  },
  created(){
    this.tryAutoLogin()
  },
  methods: {
    tryAutoLogin: function () {
      this.$store.dispatch(`userModule/${types.TRY_AUTO_LOGIN}`);
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
