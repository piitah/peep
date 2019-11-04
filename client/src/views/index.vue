<template>
  <div>
    <div class>
      &nbsp;
      <div class="mt-4">
        <router-view></router-view>
      </div>
    </div>
    <section>
      <app-footer></app-footer>
    </section>
  </div>
</template>

<script>
import appFooter from "../components/Footer";
import appHeader from "../components/Header";
export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    appHeader,
    appFooter
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
