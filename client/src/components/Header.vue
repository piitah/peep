     <template>
  <div class="header-section">
    <nav class="navbar navbar-expand-lg primary-header">
      <div class="header-style d-flex flex-row w-100 align-items-center">
        <span v-if="isAuthenticated" class="mr-3 bar-icon" @click.prevent="toggleSidebar()">
          <i class="fas fa-bars"></i>
        </span>
        <router-link
          v-if="!isAuthenticated"
          tag="li"
          exact
          to="/"
          active-class="active"
          class="navbar-brand header-title"
        >
          <span>DevCircle</span>
        </router-link>
        <router-link
          v-else
          tag="li"
          exact
          to="/dashboard"
          active-class="active"
          class="navbar-brand header-title"
        >
          <span>DevCircle</span>
        </router-link>
        <ul class="navbar-nav header-search">
          <li class="nav-item search-parent" v-if="isAuthenticated">
            <form @submit.prevent="createPost()">
              <div class="input-group mb">
                <div class="input-group-prepend">
                  <span
                    class="input-group-text"
                    style="border: none !important; background-color: rgb(245, 245, 245);"
                    id="inputGroupPrepend2"
                  >
                    <i class="fas fa-search"></i>
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search"
                  v-model="search"
                  style="background-color: rgb(245, 245, 245); border: none; outline: none;"
                />
              </div>
            </form>
            <div :class="handles && search || error && search ?'search-dropdown' : 'search--hide'">
              <ul v-if="handles !== null">
                <li
                  v-for="handle in handles"
                  :key="handle._id"
                  @click="NavigateTo(handle._id, handle.firstname)"
                >
                  <div class="d-flex flex-row align-items-center ml-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      class="mr-2"
                      viewBox="0 0 53 53"
                    >
                      <path
                        d="M18.613 41.552l-7.907 4.313a7.106 7.106 0 0 0-1.269.903A26.377 26.377 0 0 0 26.5 53c6.454 0 12.367-2.31 16.964-6.144a7.015 7.015 0 0 0-1.394-.934l-8.467-4.233a3.229 3.229 0 0 1-1.785-2.888v-3.322c.238-.271.51-.619.801-1.03a19.482 19.482 0 0 0 2.632-5.304c1.086-.335 1.886-1.338 1.886-2.53v-3.546c0-.78-.347-1.477-.886-1.965v-5.126s1.053-7.977-9.75-7.977-9.75 7.977-9.75 7.977v5.126a2.644 2.644 0 0 0-.886 1.965v3.546c0 .934.491 1.756 1.226 2.231.886 3.857 3.206 6.633 3.206 6.633v3.24a3.232 3.232 0 0 1-1.684 2.833z"
                        fill="#e7eced"
                      />
                      <path
                        d="M26.953.004C12.32-.246.254 11.414.004 26.047-.138 34.344 3.56 41.801 9.448 46.76a7.041 7.041 0 0 1 1.257-.894l7.907-4.313a3.23 3.23 0 0 0 1.683-2.835v-3.24s-2.321-2.776-3.206-6.633a2.66 2.66 0 0 1-1.226-2.231v-3.546c0-.78.347-1.477.886-1.965v-5.126S15.696 8 26.499 8s9.75 7.977 9.75 7.977v5.126c.54.488.886 1.185.886 1.965v3.546c0 1.192-.8 2.195-1.886 2.53a19.482 19.482 0 0 1-2.632 5.304c-.291.411-.563.759-.801 1.03V38.8c0 1.223.691 2.342 1.785 2.888l8.467 4.233a7.05 7.05 0 0 1 1.39.932c5.71-4.762 9.399-11.882 9.536-19.9C53.246 12.32 41.587.254 26.953.004z"
                        fill="#757575"
                      />
                    </svg>
                    <div class="ml-2 d-flex flex-column">
                      <div class="text-sec">
                        <b>{{handle.firstname}} {{handle.lastname}}</b>
                      </div>
                      <div class="text-sec1 float">@{{handle.lastname}}</div>
                    </div>
                  </div>
                </li>
              </ul>

              <div v-if="error">
                <h4>{{error}}</h4>
              </div>
            </div>
          </li>
        </ul>
        <div
          class="navbar-nav header-icons d-flex flex-row align-items-center justify-content-end ml-auto"
        >
          <div class="nav-item menu-notify" v-if="isAuthenticated">
            <svg
              width="23"
              fill="rgba(0, 0, 0, 0.54)"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 611.999 611.999"
            >
              <path
                d="M570.107 500.254c-65.037-29.371-67.511-155.441-67.559-158.622v-84.578c0-81.402-49.742-151.399-120.427-181.203C381.969 34 347.883 0 306.001 0c-41.883 0-75.968 34.002-76.121 75.849-70.682 29.804-120.425 99.801-120.425 181.203v84.578c-.046 3.181-2.522 129.251-67.561 158.622a17.257 17.257 0 0 0 7.103 32.986h164.88c3.38 18.594 12.172 35.892 25.619 49.903 17.86 18.608 41.479 28.856 66.502 28.856 25.025 0 48.644-10.248 66.502-28.856 13.449-14.012 22.241-31.311 25.619-49.903h164.88a17.26 17.26 0 0 0 16.872-13.626 17.25 17.25 0 0 0-9.764-19.358zm-85.673-60.395c6.837 20.728 16.518 41.544 30.246 58.866H97.32c13.726-17.32 23.407-38.135 30.244-58.866h356.87zM306.001 34.515c18.945 0 34.963 12.73 39.975 30.082-12.912-2.678-26.282-4.09-39.975-4.09s-27.063 1.411-39.975 4.09c5.013-17.351 21.031-30.082 39.975-30.082zM143.97 341.736v-84.685c0-89.343 72.686-162.029 162.031-162.029s162.031 72.686 162.031 162.029v84.826c.023 2.596.427 29.879 7.303 63.465H136.663c6.88-33.618 7.286-60.949 7.307-63.606zm162.031 235.749c-26.341 0-49.33-18.992-56.709-44.246h113.416c-7.379 25.254-30.364 44.246-56.707 44.246z"
              />
              <path
                d="M306.001 119.235c-74.25 0-134.657 60.405-134.657 134.654 0 9.531 7.727 17.258 17.258 17.258 9.531 0 17.258-7.727 17.258-17.258 0-55.217 44.923-100.139 100.142-100.139 9.531 0 17.258-7.727 17.258-17.258-.001-9.532-7.728-17.257-17.259-17.257z"
              />
            </svg>
            <div class="menuDropdown-notification">
              <h4>no new notification</h4>
            </div>
          </div>
          <div class="nav-item ml-2 menu-parent" v-if="isAuthenticated">
            <div
              v-if="authUser.image"
              class="style-img"
              :style="{ backgroundImage: 'url(' + authUser.image + ')'}"
            >&nbsp;</div>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="28" viewBox="0 0 53 53">
              <path
                d="M18.613 41.552l-7.907 4.313a7.106 7.106 0 0 0-1.269.903A26.377 26.377 0 0 0 26.5 53c6.454 0 12.367-2.31 16.964-6.144a7.015 7.015 0 0 0-1.394-.934l-8.467-4.233a3.229 3.229 0 0 1-1.785-2.888v-3.322c.238-.271.51-.619.801-1.03a19.482 19.482 0 0 0 2.632-5.304c1.086-.335 1.886-1.338 1.886-2.53v-3.546c0-.78-.347-1.477-.886-1.965v-5.126s1.053-7.977-9.75-7.977-9.75 7.977-9.75 7.977v5.126a2.644 2.644 0 0 0-.886 1.965v3.546c0 .934.491 1.756 1.226 2.231.886 3.857 3.206 6.633 3.206 6.633v3.24a3.232 3.232 0 0 1-1.684 2.833z"
                fill="#e7eced"
              />
              <path
                d="M26.953.004C12.32-.246.254 11.414.004 26.047-.138 34.344 3.56 41.801 9.448 46.76a7.041 7.041 0 0 1 1.257-.894l7.907-4.313a3.23 3.23 0 0 0 1.683-2.835v-3.24s-2.321-2.776-3.206-6.633a2.66 2.66 0 0 1-1.226-2.231v-3.546c0-.78.347-1.477.886-1.965v-5.126S15.696 8 26.499 8s9.75 7.977 9.75 7.977v5.126c.54.488.886 1.185.886 1.965v3.546c0 1.192-.8 2.195-1.886 2.53a19.482 19.482 0 0 1-2.632 5.304c-.291.411-.563.759-.801 1.03V38.8c0 1.223.691 2.342 1.785 2.888l8.467 4.233a7.05 7.05 0 0 1 1.39.932c5.71-4.762 9.399-11.882 9.536-19.9C53.246 12.32 41.587.254 26.953.004z"
                fill="#757575"
              />
            </svg>

            <div class="menuDropdown">
              <ul class="dropdown-ul">
                <li class="dropdown-li">Profile</li>
                <li class="dropdown-li">Contact</li>
                <li class="dropdown-li" @click.prevent="logout">Logout</li>
              </ul>
            </div>
          </div>
          <router-link
            tag="li"
            exact
            to="/signup"
            active-class="active"
            class="nav-item header-item"
            v-if="!isAuthenticated"
          >
            <span class="nav-link header-link pl-4 pr-4">Sign Up</span>
          </router-link>
          <router-link
            tag="li"
            exact
            to="/login"
            active-class="active"
            class="nav-item ml-3 header-item"
            v-if="!isAuthenticated"
          >
            <span class="nav-link header-link pl-4 pr-4">Login</span>
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { EventBus } from "@/main";
import apiServices from "../services/apiServices";
import userService from "../services/userService";
import _ from "lodash";
import { mapState } from "vuex";
import * as types from "../Store/modules/types";

export default {
  name: "header",
  data() {
    return {
      handles: "",
      search: "",
      error: "",
      authpost: "",
      show: false,
      // authUser: "",
      user: ""
    };
  },
  watch: {
    search: _.debounce(async function(value) {
      if (this.search !== "") {
        try {
          const response = (await apiServices.GET_SEARCH(value)).data;
          this.handles = response.payload;
          this.error = "";
        } catch (error) {
          this.handles = "";
          this.error = error.response.data;
        }
      }
    }, 700)
  },
  computed: {
    ...mapState("userModule", ["isAuthenticated", "authUser"])
  },
  methods: {
    toggleSidebar: function() {
      this.show = true;
      EventBus.$emit("openSidebar", this.show);
    },
    logout: function() {
      this.$store.dispatch(`userModule/${types.USER_LOGOUT}`);
    },
    getUser: async function(id) {
      const response = await apiServices.GET_USER(id);
      this.user = response.data;
    },
    getPost: async function(id) {
      const response = await apiServices.GET_POST(id);
      this.authPost = response.data.payload;
    },
    NavigateTo: async function(id, name) {
      this.$router.push(`/dashboard/search/${name}`);
      this.$store.commit(`userModule/${types.SEARCH_ID}`, id);
      this.search = "";
      this.error = "";
    }
  }
};
</script>

<style scoped lang="scss">
.style-img {
  background-position: center;
  background-size: cover;
  width: 1.7rem;
  height: 1.7rem;
  border-radius: 50%;
}
.header-style {
  padding: 1rem 1.2rem;
  width: 85% !important;
  margin: auto;
}
.header-title {
}
.header-search {
  margin-left: 4.5rem;
}
.header-icons {
  align-items: flex-end;
}
.primary-header {
  background-color: #fff;
  color: black;
  padding: 0em !important;
  box-shadow: 0 1px 1px #ccc;
  border-bottom: 1px solid #ccc;
  position: fixed;
  width: 100% !important;
  z-index: 120;
  .navbar-brand {
    color: rgb(51, 111, 148);
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    font-size: 19px;
    cursor: pointer;
  }
  .header-item {
    border: 1px solid rgb(51, 111, 148);
    border-radius: 2rem;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 2px 3px #ccc;
    .header-link {
      font-size: 14px;
    }
  }
  .header-item:hover {
    color: #fff;
    background-color: rgb(51, 111, 148);
  }
}
.text-sec {
  font-size: 13px;
  font-weight: 400;
}
.text-sec1 {
  color: #999;
  font-size: 13px;
  font-weight: 400;
}
.menu-parent {
  position: relative;
  cursor: pointer;
  transition: all 0.4s ease-in;
  width: 2rem;
}
.menuDropdown {
  position: absolute;
  border-radius: 4px;
  top: 25px;
  right: 0;
  background-color: #fff;
  width: 8rem;
  height: 8rem;
  box-shadow: 0 2px 3px #999;
  box-sizing: border-box;
  overflow: hidden;
  display: none;
  transition: all 0.4s ease-in-out;
}

.dropdown-ul {
  margin-top: 0.4rem;
}
.dropdown-li {
  list-style: none;
  padding: 6px;
  margin: 4px;
  font-size: 14px;
}
.dropdown-li:hover {
  background-color: rgb(245, 245, 245);
}
.menu-parent:hover .menuDropdown {
  display: block;
}

.menu-notify {
  position: relative;
  cursor: pointer;
  width: 2rem;
}
.menuDropdown-notification {
  position: absolute;
  border-radius: 4px;
  top: 25px;
  right: -33px;
  background-color: #fff;
  width: 15rem;
  height: 8rem;
  box-shadow: 0 2px 3px #999;
  box-sizing: border-box;
  overflow: hidden;
  display: none;
  transition: all 0.4s ease-in-out;
}
.menu-notify:hover .menuDropdown-notification {
  display: block;
}
.search.parent {
  position: relative;
}
.search-dropdown {
  width: 17rem;
  position: absolute;
  top: 4rem;
  background-color: #fff;
  box-shadow: 0 2px 2px #ccc;
  border-radius: 5px;
  cursor: pointer;
}
.search-dropdown ul li {
  list-style: none;
  padding: 0.8rem;
}
.search-dropdown ul li:hover {
  background-color: rgb(231, 228, 228);
  padding: 0.8rem;
}
.search--hide {
  display: none;
}
.bar-icon {
  font-size: 20px;
  cursor: pointer;
  display: none;
}
@media only screen and (min-width: 320px) and (max-width: 480px) {
  .bar-icon {
    display: block;
  }
  .header-search {
    margin-left: 0rem;
  }
  .header-style {
    padding: 1.3rem 1.2rem;
    width: 100% !important;
    margin: auto;
  }
  .header-icons {
    align-items: flex-end;
    margin-left: 1rem !important;
  }
  .header-title {
    display: none;
  }
}
@media only screen and (min-width: 481px) and (max-width: 964px) {
  .bar-icon {
    display: block;
  }
  .header-search {
    margin-left: 0rem;
  }
  .header-style {
    padding: 1rem 1.2rem;
    width: 100% !important;
    margin: auto;
  }
}
@media only screen and (min-width: 1224px) {
  /* Styles */
}

@media only screen and (min-width: 1824px) {
  /* Styles */
}
</style>