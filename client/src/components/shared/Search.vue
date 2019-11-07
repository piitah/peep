<template>
  <div class="profile">
    <div class="main-profile-wrap mt-0">
      <div class="profile-bg"></div>
      <div
        class="profile-overlay"
        v-bind:style="{ backgroundImage: 'url(' + authUser.coverImage + ')' }"
      >&nbsp;</div>
      <div class="profile-img">
        <div class="profile-img-1" v-if="authUser.image">
          <img :src="authUser.image" class="img-fluid profile-img-1" alt />
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
      </div>
    </div>
    <div class="profile-title mb-4">
      <div class="d-flex flex-row justify-content-center align-items-center mb-2">
        <div>
          <h2>{{authUser.firstname}} {{authUser.lastname}}</h2>
        </div>
        <div class="ml-3" v-if="auth !== authUser._id">
          <Follow :following="authUser" :isFollowing="isFollowing(authUser)"></Follow>
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
            <span style="font-size: 20px; " class="mr-2">
              <i class="fas fa-camera icon"></i>
            </span>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="post-wrapper mb-5" v-for="post in authPost" :key="post._id">
        <div class="d-flex flex-row w-100 align-items-center post-header">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" class="mr-3" viewBox="0 0 53 53">
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
              <div class="time">10 days ago</div>
            </div>
          </div>
          <div class="float-left post-h2">
            <b>...</b>
          </div>
        </div>
        <div class="mb-3 post-title text-left ml-4 mr-3">{{post.title}}</div>
        <div class="post-img">
          <div>
            <img :src="post.image" class="img-fluid" alt />
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
            <Like class="w-50 text-sec" :likes="post.likes" :userId="user._id" :postId="post._id"></Like>
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
        <div class="border-top" :class="show  === post._id ? 'show' : 'hide'">
          <div class="d-flex flex-row align-items-center pt-2 pl-1 pr-3">
            <div class="comment-input pt-2">
              <textarea placeholder="Add Comment" class="formControl" v-model="comment" />
            </div>
            <div
              class="comment-post"
              style="cursor:pointer !important;"
              @click.prevent="createComment(post._id)"
            >Post</div>
          </div>
        </div>
        <div class="border-top" :class="show  === post._id ? 'show' : 'hide'">
          <div
            class="d-flex flex-row align-items-cer pt-2 pl-3 pb-2 pr-3"
            v-for="comment in post.comments"
            :key="comment._id"
          >
            <div class>
              <div class="user-avatar mr-2"></div>
            </div>
            <div class="user-comment">
              <span class="user-name">{{post.author.firstname}} {{ post.author.lastname}}</span>
              {{comment.comment}}
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import apiService from "../../services/apiServices.js";
import userService from "../../services/userService.js";
import Comment from "../shared/comment";
import Follow from "../shared/Follow";
import Like from "../shared/Like";
import { mapState } from "vuex";
import { EventBus } from "@/main";

export default {
  name: "search",
  data() {
    return {
      hideLike: true,
      show: "",
      authUser: null,
      authPost: null,
      auth: "",
      comment: "",
      post: "",
      follow: null,
      isFollow: false
    };
  },
  components: {
    Comment,
    Follow,
    Like
  },
  computed: {
    ...mapState("userModule", ["isAuthenticated", "user"])
  },
  created() {
    this.auth = this.user._id;
    EventBus.$on("updateUser", () => {
      console.log("listening to event");
      let instance = this;
      setTimeout(() => {
        instance.getUser();
        instance.isFollowing(instance.authUser);
      }, 2000);
    });
  },
  mounted() {
    this.getUser();
    this.getPost();
    console.log("remounting");
  },
  methods: {
    toggle: function(id) {
      if (this.show === id) this.show = false;
      else this.show = id;
    },
    isFollowing(following) {
      console.log(following);
      let isFollowing = this.user.following.find(user => {
        return user.user === following._id;
      });
      return isFollowing;
    },
    createFollow: async function(id) {
      const response = await apiService.CREATE_Follow({
        userId: id
      });
      this.follow = response.data.payload;
    },
    getUser: async function() {
      const id = this.$route.params.id;
      const response = await apiService.GET_USER(id);
      this.authUser = response.data;
    },
    getPost: async function() {
      const id = this.$route.params.id;
      const response = await apiService.GET_POST(id);
      this.authPost = response.data.payload;
    },
    createPost: async function() {
      const response = await apiService.CREATE_POST({
        title: this.post
      });
      this.post = "";
      this.getPost();
      this.getUser();
    },
    createLike: async function(postId) {
      const response = await apiService.CREATE_LIKE({
        postId: postId
      });
      this.getPost();
      this.hideLike = false;
    },
    createComment: async function(payload) {
      const response = await apiService.CREATE_COMMENT({
        postId: payload,
        comment: this.comment
      });
      this.comment = "";
      this.getPost();
    }
  }
};
</script>


<style lang="scss" scoped>
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
  box-shadow: 0 2px 3px #ccc;
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
.profile-overlay {
  background-image: url("../../assets/img/deep-web-1292333_1920.jpg");
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
.btn-del {
  background-color: rgb(170, 176, 184);
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
  box-shadow: 0 2px 4px rgb(184, 183, 183);
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
.comment {
  width: 50%;
  text-align: end !important;
}
.formControl {
  border: none;
  width: 90%;
  //   background-color: orange;
  //   padding: 0.8rem;
  outline: none;
  box-sizing: content-box;
  overflow-wrap: break-word;
  //   line-height: 16px;
  font-size: 15px;
  color: rgba(0, 0, 0, 0.87);
}
.formControl:focus {
  outline: none;
  border: none;
}
.comment-input {
  width: 90%;
  overflow-wrap: break-word;
}
.comment-post {
  width: 10%;
  font-size: 15px;
  font-weight: 600;
  color: rgba(10, 60, 129, 0.721);
}
.user-avatar {
  background-color: orangered;
  width: 27px;
  height: 27px;
  border-radius: 50%;
}
.user-comment {
  background-color: rgb(233, 233, 233);
  font-size: 14px;
  border-radius: 8px;
  width: 100%;
  overflow-wrap: break-word;
  padding: 5px 10px 5px 4px;
  text-align: start;
  display: block;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.87);
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
</style>
