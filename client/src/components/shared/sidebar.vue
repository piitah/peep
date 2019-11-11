<template>
  <div :class="show ? 'active' : 'sidebar-wrapper'">
    <div class="sidebar">
      <div style="border-bottom: 1px solid grey;">
        <div
          v-if="user.image"
          class="sidebar-img"
          :style="{ backgroundImage: 'url(' + user.image + ')'}"
        >&nbsp;</div>
        <!-- <svg xmlns="http://www.w3.org/2000/svg" width="30" class="mr-3" viewBox="0 0 53 53">
          <path
            d="M18.613 41.552l-7.907 4.313a7.106 7.106 0 0 0-1.269.903A26.377 26.377 0 0 0 26.5 53c6.454 0 12.367-2.31 16.964-6.144a7.015 7.015 0 0 0-1.394-.934l-8.467-4.233a3.229 3.229 0 0 1-1.785-2.888v-3.322c.238-.271.51-.619.801-1.03a19.482 19.482 0 0 0 2.632-5.304c1.086-.335 1.886-1.338 1.886-2.53v-3.546c0-.78-.347-1.477-.886-1.965v-5.126s1.053-7.977-9.75-7.977-9.75 7.977-9.75 7.977v5.126a2.644 2.644 0 0 0-.886 1.965v3.546c0 .934.491 1.756 1.226 2.231.886 3.857 3.206 6.633 3.206 6.633v3.24a3.232 3.232 0 0 1-1.684 2.833z"
            fill="#e7eced"
          />
          <path
            d="M26.953.004C12.32-.246.254 11.414.004 26.047-.138 34.344 3.56 41.801 9.448 46.76a7.041 7.041 0 0 1 1.257-.894l7.907-4.313a3.23 3.23 0 0 0 1.683-2.835v-3.24s-2.321-2.776-3.206-6.633a2.66 2.66 0 0 1-1.226-2.231v-3.546c0-.78.347-1.477.886-1.965v-5.126S15.696 8 26.499 8s9.75 7.977 9.75 7.977v5.126c.54.488.886 1.185.886 1.965v3.546c0 1.192-.8 2.195-1.886 2.53a19.482 19.482 0 0 1-2.632 5.304c-.291.411-.563.759-.801 1.03V38.8c0 1.223.691 2.342 1.785 2.888l8.467 4.233a7.05 7.05 0 0 1 1.39.932c5.71-4.762 9.399-11.882 9.536-19.9C53.246 12.32 41.587.254 26.953.004z"
            fill="#757575"
          />
        </svg>-->
        <div class="ml-4 mb-3" style="text-align: start!important; text-size: 12px !important;">
          <h4>{{user.firstname}}</h4>
          @{{user.firstname}}
        </div>
      </div>

      <ul>
        <router-link to="/Dashboard" class="user text-sec" tag="li">
          <span>
            <i class="fas fa-home mr-2"></i> Home
          </span>
        </router-link>

        <router-link to="/Dashboard/suggestion" class="user text-sec" tag="li">
          <span>
            <i class="fas fa-users mr-2"></i> Developers
          </span>
        </router-link>
        <router-link to="/Dashboard" class="user text-sec" tag="li">
          <span>
            <i class="fas fa-street-view mr-2"></i> Suggestions
          </span>
        </router-link>
        <router-link to="/Dashboard" class="user text-sec" tag="li">
          <span>
            <i class="fas fa-ad mr-2"></i> update
          </span>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
import { EventBus } from "@/main";

export default {
  name: "sidebar",
  data() {
    return {
      user: null,
      show: ""
    };
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem("authUser"));
  },
  created() {
    EventBus.$on("openSidebar", value => {
      this.show = value;
    });
    EventBus.$on("closeSidebar", value => {
      this.show = value;
    });
  }
};
</script>

<style lang="scss" scoped>
.sidebar-wrapper {
  height: 100vh;
  width: 200px;
  background-color: #fff;
  position: fixed;
  top: 0;
  transition: 0.3s;
  left: -200px;
  z-index: 999;
}
.active {
  height: 100vh;
  width: 200px;
  background-color: #fff;
  position: fixed;
  top: 0;
  transition: 0.3s;
  z-index: 999;
}
.sidebar-img {
  margin: 1rem 0px 0.6rem 0.6rem;
  background-position: center;
  background-size: cover;
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  border: 2px solid #fff;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
}
ul {
  list-style: none;
}
li {
  text-decoration: none;
}
.user {
  cursor: pointer;
}
.text-sec {
  text-align: start;
  padding: 0.7rem;
  width: 170px;
  cursor: pointer;
  margin: auto;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.87);
  font-weight: 400;
  transition: opacity 4s ease-in-out;
}
.text-sec:hover {
  background-color: #ccc;
}
</style>