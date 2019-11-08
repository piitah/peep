<template>
  <div class="profile">
    <div class="main-profile-wrap mt-0">
      <div class="profile-bg"></div>
      <div
        class="profile-overlay"
        v-bind:style="{ backgroundImage: 'url(' + authUser.coverImage + ')' }"
      >&nbsp;</div>
      <div class="cover-image">
        <div class="image-upload">
          <label for="cover-image">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style="cursor:pointer;"
              viewBox="0 0 100 100"
              width="14"
            >
              <path
                d="M50 40c-8.285 0-15 6.718-15 15 0 8.285 6.715 15 15 15 8.283 0 15-6.715 15-15 0-8.282-6.717-15-15-15zm40-15H78c-1.65 0-3.428-1.28-3.949-2.846l-3.102-9.309C70.426 11.28 68.65 10 67 10H33c-1.65 0-3.428 1.28-3.949 2.846l-3.102 9.309C25.426 23.72 23.65 25 22 25H10C4.5 25 0 29.5 0 35v45c0 5.5 4.5 10 10 10h80c5.5 0 10-4.5 10-10V35c0-5.5-4.5-10-10-10zM50 80c-13.807 0-25-11.193-25-25 0-13.806 11.193-25 25-25 13.805 0 25 11.194 25 25 0 13.807-11.195 25-25 25zm36.5-38.007a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7z"
                fill="#fff"
              />
            </svg>
          </label>
          <input
            id="cover-image"
            type="file"
            name="coverImage"
            @change="onSelectedFile($event)"
            ref="coverImage"
          />
        </div>
      </div>
      <div class="cover-loader" v-if="loading1">
        <div class="d-flex w-100 h-100 align-items-center">
          <div class="m-loader"></div>
        </div>
      </div>
      <div class="profile-img">
        <div class="profile-loader" v-if="loading2">
          <div class="d-flex w-100 h-100 align-items-center">
            <div class="m-loader"></div>
          </div>
        </div>
        <div class="profile-img-1" v-if="authUser.image">
          <div
            class="profile-img-1"
            v-bind:style="{ backgroundImage: 'url(' + authUser.image + ')' }"
          ></div>
        </div>

        <div class="profile-img-1" v-else>
          <svg xmlns="http://www.w3.org/2000/svg" width="181" viewBox="0 0 53 53">
            <path
              d="M18.613 41.552l-7.907 4.313a7.106 7.106 0 0 0-1.269.903A26.377 26.377 0 0 0 26.5 53c6.454 0 12.367-2.31 16.964-6.144a7.015 7.015 0 0 0-1.394-.934l-8.467-4.233a3.229 3.229 0 0 1-1.785-2.888v-3.322c.238-.271.51-.619.801-1.03a19.482 19.482 0 0 0 2.632-5.304c1.086-.335 1.886-1.338 1.886-2.53v-3.546c0-.78-.347-1.477-.886-1.965v-5.126s1.053-7.977-9.75-7.977-9.75 7.977-9.75 7.977v5.126a2.644 2.644 0 0 0-.886 1.965v3.546c0 .934.491 1.756 1.226 2.231.886 3.857 3.206 6.633 3.206 6.633v3.24a3.232 3.232 0 0 1-1.684 2.833z"
              fill="#e7eced"
            />
            <path
              d="M26.953.004C12.32-.246.254 11.414.004 26.047-.138 34.344 3.56 41.801 9.448 46.76a7.041 7.041 0 0 1 1.257-.894l7.907-4.313a3.23 3.23 0 0 0 1.683-2.835v-3.24s-2.321-2.776-3.206-6.633a2.66 2.66 0 0 1-1.226-2.231v-3.546c0-.78.347-1.477.886-1.965v-5.126S15.696 8 26.499 8s9.75 7.977 9.75 7.977v5.126c.54.488.886 1.185.886 1.965v3.546c0 1.192-.8 2.195-1.886 2.53a19.482 19.482 0 0 1-2.632 5.304c-.291.411-.563.759-.801 1.03V38.8c0 1.223.691 2.342 1.785 2.888l8.467 4.233a7.05 7.05 0 0 1 1.39.932c5.71-4.762 9.399-11.882 9.536-19.9C53.246 12.32 41.587.254 26.953.004z"
              fill="#757575"
            />
          </svg>
        </div>
        <div class="image-upload profile-img-2" style="cursor:pointer !important;">
          <label
            for="profile-image"
            class="w-100 h-100 d-flex align-items-center justify-content-center"
            style="cursor:pointer !important;"
          >
            <h5 style="cursor:pointer !important;">Upload</h5>
          </label>
          <input
            id="profile-image"
            type="file"
            name="profileImage"
            @change="onSelectedFile($event)"
            ref="profileImage"
          />
        </div>
      </div>
    </div>
    <div class="profile-title mb-4">
      <div class="d-flex flex-row justify-content-center align-items-center mb-2">
        <div>
          <h2>{{authUser.firstname}} {{authUser.lastname}}</h2>
        </div>
        <div class="ml-3" v-if="auth !== authUser._id">
          <button class="bt btn-pri">Follow</button>
        </div>
      </div>

      <div
        class="d-flex flex-row justify-content-around align-items-center w-75"
        style="margin: auto!important;"
      >
        <div class="text-sec">
          <span class="num">
            <b>{{authUser.posts.length}}</b>
          </span> posts
        </div>
        <div class="text-sec">
          <span class="num">
            <b>{{authUser.followers.length}}</b>
          </span> followers
        </div>
        <div class="text-sec">
          <span class="num">
            <b>{{authUser.following.length}}</b>
          </span> following
        </div>
      </div>
    </div>

    <section>
      <div class="search-wrap container" v-if="auth === authUser._id">
        <div class="d-flex flex-row w-100 justify-content-center align-items-center g-success">
          <div class="mr-2">
            <span style="font-size: 20px; " class="mr-2">
              <i class="fas fa-user-circle icon"></i>
            </span>
          </div>
          <div class="w-75">
            <form @submit.prevent="createPost()">
              <div class="input-group mb">
                <div class="input-group-prepend">
                  <span
                    class="input-group-text"
                    style="border: none !important; background-color: rgb(236, 236, 236);"
                  >
                    <i class="fas fa-search"></i>
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Add Post"
                  v-model="post"
                  style="background-color: rgb(236, 236, 236); border: none; outline: none;"
                />
              </div>
            </form>
          </div>
          <div class="ml-3">
            <div class="image-upload">
              <label for="file-input" class="pt-2">
                <span style="font-size: 20px; " class="mr-2">
                  <i class="fas fa-camera icon"></i>
                </span>
              </label>
              <input
                id="file-input"
                type="file"
                name="upLoadFile"
                @change="onSelectedFile($event)"
                ref="postImage"
                multiple
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="post-wrapper mb-5" v-for="post in authPost" :key="post._id">
        <div class="d-flex flex-row w-100 align-items-center post-header">
          <div
            v-if="post.author.image"
            class="style-img mr-3"
            :style="{ backgroundImage: 'url(' + post.author.image + ')'}"
          >&nbsp;</div>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            class="mr-3"
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
          <div class="post-h1">
            <div class="d-flex flex-column" style="line-height: 18px;">
              <div class="user-name">{{post.author.firstname}} {{ post.author.lastname}}</div>
              <div class="time">{{convertDate(post.createdAt)}}</div>
            </div>
          </div>
          <div class="float-left post-h2">
            <b>...</b>
          </div>
        </div>
        <div class="mb-3 post-title text-left ml-4 mr-3">{{post.title}}</div>
        <div class="post-img">
          <div>
            <img :src="post.image" id="img-data" class="img-fluid" alt />
          </div>
        </div>
        <div class="post-detais pl-4 pr-4 pt-3 pb-3">
          <div class="d-flex flex-row w-100 pb-2 border-bottom">
            <div class="like text-sec">
              <b>{{post.likes.length}}</b> Likes
            </div>
            <div
              class="comment text-sec"
              style="cursor:pointer !important;"
              @click.prevent="toggle(post._id)"
            >
              <b>{{post.comments.length}}</b> Comments
            </div>
          </div>
          <div class="d-flex flex-row w-100 pt-2 pl-3 pr-3">
            <Like
              class="w-50 text-sec"
              :checkLiked="checkLiked(post._id,post.likes, user._id)"
              :postId="post._id"
            ></Like>
            <div
              class="w-50 text-sec"
              style="cursor:pointer !important;"
              @click.prevent="toggle(post._id)"
            >
              <b></b>
              <i class="fas fa-comment"></i> Comment
            </div>
          </div>
        </div>
        <Comment
          @commentData="createComment"
          :postId="post._id"
          :comments="post.comments"
          :show="show"
        />
      </div>
    </section>
  </div>
</template>

<script>
import apiService from "../../services/apiServices.js";
import userService from "../../services/userService.js";
import Comment from "../shared/comment";
import moment from "moment";
import Like from "../shared/Like";
import { mapState } from "vuex";
import { EventBus } from "@/main";
import Bound from "bounds.js";
export default {
  name: "searchResult",
  data() {
    return {
      hideLike: true,
      show: "",
      authUser: null,
      authPost: null,
      auth: "",
      image: "",
      comment: "",
      post: "",
      loading1: false,
      loading2: false,
      status: false
    };
  },
  components: {
    Comment,
    Like
  },
  computed: {
    ...mapState("userModule", ["isAuthenticated", "user"])
  },
  created() {
    this.auth = this.user._id;
    // this.getAuthUser();
    EventBus.$on("updateRender", event => {
      this.getAuthPost();
    });
  },
  mounted() {
    // this.authPost = JSON.parse(localStorage.getItem("authPosts"));
    // this.authUser = JSON.parse(localStorage.getItem("authUser"));
    this.getAuthUser();
    this.getAuthPost();
  },
  methods: {
    convertDate: function(date) {
      return moment(date).fromNow();
    },
    checkLiked: (postId, likes, userId) => {
      let hasLiked = likes.find(like => {
        return like.author === userId && like.post._id === postId;
      });
      return hasLiked;
    },
    toggle: function(id) {
      if (this.show === id) this.show = false;
      else this.show = id;
    },
    getAuthUser: async function() {
      const response = await userService.GET_AUTH_USER();
      // localStorage.setItem("authUser", JSON.stringify(response.data));
      this.authUser = response.data;
      this.loading1 = false;
      this.loading2 = false;
      EventBus.$emit("updateImages", response.data);
    },
    getAuthPost: async function() {
      const response = await apiService.GET_AUTH_POST();
      // localStorage.setItem("authPosts", JSON.stringify(response.data.payload));
      this.authPost = response.data.payload;
    },
    createPost: async function() {
      const response = await apiService.CREATE_POST({
        title: this.post,
        image: this.image
      });
      this.post = "";
      this.getAuthPost();
      this.getAuthUser();
    },
    createComment: async function(payload) {
      const response = await apiService.CREATE_COMMENT({
        postId: payload.postId,
        comment: payload.comment
      });
      this.getAuthPost();
    },
    updateCoverImage: async function(image) {
      this.loading1 = true;
      const response = await userService.UPDATE_COVER_IMAGE({
        image: image
      });
      this.getAuthUser();
    },
    updateProfileImage: async function(image) {
      this.loading2 = true;
      const response = await userService.UPDATE_PROFILE_IMAGE({
        image: image
      });
      this.getAuthUser();
      this.getAuthPost();
    },
    onSelectedFile(event) {
      let event_instance = event;
      let image = event.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = event => {
        if (event_instance.target.name === "coverImage") {
          this.updateCoverImage(event.target.result);
        }
        if (event_instance.target.name === "profileImage") {
          this.updateProfileImage(event.target.result);
        }
        if (event_instance.target.name === "upLoadFile") {
          this.image = event.target.result;
        }
      };
    }
  }
};
</script>


<style lang="scss" scoped>
.style-img {
  background-position: center;
  background-size: cover;
  width: 1.7rem;
  height: 1.7rem;
  border-radius: 50%;
}
.style-img {
  border-radius: 50%;
  width: 1.7rem;
  height: 1.7rem;
}
.comment {
  width: 50%;
  text-align: end !important;
}
.cover-image {
  position: absolute;
  top: 8px;
  left: 16px;
  background-color: rgba(0, 0, 0, 0.87);
  width: 2rem;
  height: 1.8rem;
  border-radius: 3px;
  display: inline-block;
  z-index: 99;
  cursor: pointer;
}
.cover-loader {
  background-color: rgba(0, 0, 0, 0.57);
  position: absolute;
  top: 0px;
  right: 0px;
  width: 100%;
  height: 100%;
  align-items: center;
  border-radius: 1rem;
  display: inline-block;
  z-index: 99;
}
.profile-loader {
  background-color: rgba(0, 0, 0, 0.57);
  position: absolute;
  top: 0px;
  right: 0px;
  width: 100%;
  height: 100%;
  align-items: center;
  border-radius: 50%;
  display: inline-block;
  z-index: 100;
}
.image-upload > input {
  display: none;
}

.image-upload svg {
  cursor: pointer;
}
.main-profile-wrap {
  position: relative;
  width: 100%;
  box-sizing: border-box;
}
.profile-bg {
  background-color: #fff;
  height: 20rem;
  width: 100%;
  border-radius: 1rem;
  position: absolute;
  top: 20;
  left: 0;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
}
.profile-img {
  justify-content: center;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  z-index: 99;
  position: absolute;
  top: 65%;
  margin: auto;
  left: 0;
  right: 0;
  cursor: pointer;
}
.profile-img-1 {
  background-position: center;
  background-size: cover;
  justify-content: center;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  box-shadow: 0 2px 3px #ccc;
  z-index: 99;
  position: absolute;
  top: 0;
  margin: auto;
  left: 0;
  right: 0;
}
.profile-img-2 {
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.47);
  width: 180px;
  height: 180px;
  border-radius: 50%;
  color: #fff;
  box-shadow: 0 2px 3px #ccc;
  z-index: 99;
  position: absolute;
  top: 0;
  margin: auto;
  left: 0;
  right: 0;
  display: none;
}
.profile-img:hover .profile-img-2 {
  display: block;
}
.profile-overlay {
  background-position: center;
  background-size: cover;
  width: 100%;
  border-radius: 1rem;
  box-shadow: 0 4px 5px #ccc;
  position: relative;
  height: 20rem;
}
.title {
  display: inline !important;
}
.profile-title {
  width: 100%;
  margin-top: 5rem;
}
.profile-title h2 {
  //   font-size: 28px;
  color: black !important;
  font-weight: 400;
}
.btn-pri {
  background-color: rgb(106, 150, 194);
  padding: 5px 7px 5px 7px;
  color: #fff;
  border-radius: 3px;
  box-shadow: 0 2px 3px;
  font-size: 14px;
}
.text-sec {
  font-size: 14px;
}
.num {
  font-size: 14px !important;
}
.post-wrapper {
  background-color: #fff;
  width: 90%;
  border-radius: 5px;
  margin: auto;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
}
.post-title {
  font-size: 14px;
  box-sizing: border-box;
}
.user-name {
  color: rgba(10, 60, 129, 0.721);
  font-size: 14px;
  font-weight: 600;
}
.time {
  color: #ccc;
}
.post-header {
  padding: 15px 3px 5px 25px;
}
.avatar {
  background-color: orangered;
  width: 37px;
  height: 37px;
  border-radius: 50%;
}
.post-h1 {
  width: 80%;
  text-align: start;
  font-size: 14px;
}
.post-h2 {
  width: 10%;
}
.like {
  width: 50%;
  text-align: start;
}
.user {
  display: block;
  transition: all 0.4s ease-in-out;
}
.hide {
  display: none;
  transition: all 0.4s ease-in-out;
}
.search-wrap {
  background-color: white;
  width: 90%;
  padding: 1rem;

  margin-bottom: 1rem;
  box-shadow: 0 2px 3px #ccc;
  border-radius: 4px;
  font-size: 14px;
}
.icon {
  background-color: rgb(236, 236, 236);
  padding: 0.6rem;
  border-radius: 3px;
  cursor: pointer;
}
.m-loader {
  border: 3px solid hsla(185, 100%, 62%, 0.2);
  border-top-color: #738081;
  border-radius: 50%;
  margin: auto;
  width: 2em;
  height: 2em;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
