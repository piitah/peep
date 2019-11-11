<template>
  <div v-if="show" @click.prevent="closeSidebar()" class="backdrop">&nbsp;</div>
</template>

<script>
import { EventBus } from "@/main";
export default {
  data() {
    return {
      show: ""
    };
  },
  created() {
    EventBus.$on("openSidebar", value => {
      this.show = value;
    });
  },
  methods: {
    closeSidebar: function() {
      this.show = false;
      EventBus.$emit("closeSidebar", this.show);
    }
  }
};
</script>

<style lang="scss">
.backdrop {
  width: 100%;
  height: 100vh;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 200;
}
</style>