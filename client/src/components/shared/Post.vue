<template>
  <div>
    <div class="main-sectin">
      <section style="z-index : 300 !important;">
        <div class="search-wrap container">
          <div :class="textarea ? 'border-bottom' : ''">
            <div
              class="d-flex flex-row w-100 justify-content-center align-items-top"
              :class="textarea? 'mb-3': ''"
            >
              <div class="mr-2">
                <span style="font-size: 20px; " class="mr-2">
                  <i class="fas fa-user-circle icon"></i>
                </span>
              </div>
              <div :class="textarea ? 'w-100' : 'w-75'">
                <form @submit.prevent="createPost()">
                  <div class="input-group mb">
                    <textarea
                      type="text"
                      @focus="textarea = true"
                      class="form-control"
                      placeholder="Add Post"
                      height="150"
                      v-model="post"
                      style="background-color: rgb(236, 236, 236);"
                    />
                  </div>
                </form>
              </div>
              <div class="ml-3" v-show="!textarea">
                <div class="image-upload">
                  <label for="file-input" class="pt-">
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

          <div v-if="textarea" class="d-flex flex-row w-100 mt-3">
            <div class="ml-2">
              <div class="image-upload">
                <label for="file-input" class="pt-2">
                  <span style="font-size: 15px; " class="mr-2 icon">
                    <i class="fas fa-camera ico"></i> Photo
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
            <div class="ml-auto">
              <div class="d-flex flex-row">
                <div class>
                  <button
                    class="btn btn-custom"
                    style="background-color: #ccc; "
                    @click.prevent="textarea = false"
                  >Cancel</button>
                </div>
                <div class="ml-2">
                  <button
                    @click.prevent="createPost()"
                    class="btn btn-custom"
                    style="background-color: blue;"
                    :disabled="post.length === 0"
                  >Share</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- <div class="search-wrap mt-4" style="text-align: start;">
        You have not yet setup a profile, please add some info.
        <span class="ml-2">
          <button class="btn" style="background-color:#7099ca; color:#fff">Create Profile</button>
        </span>
      </div>-->

      <section>
        <div class="post-wrapper mb-3" v-for="post in posts" :key="post._id">
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
              <img :src="post.image" class="img-fluid" alt />
            </div>
          </div>
          <div class="post-detais pl-4 pr-4 pt-3 pb-3">
            <div class="d-flex flex-row w-100 pb-2 border-bottom">
              <div class="like text-sec">
                <b>{{post.likes.length}}</b> Likes
              </div>
              <div class="comment text-sec" @click.prevent="toggle(post._id)">
                <b>{{post.comments.length}}</b> Comments
              </div>
            </div>
            <div class="d-flex flex-row w-100 pt-2 pl-3 pr-3">
              <Like
                class="w-50 text-sec"
                :checkLiked="checkLiked(post._id,post.likes, authUser._id)"
                :postId="post._id"
              ></Like>
              <div class="w-50 text-sec" @click.prevent="toggle(post._id)">
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
  </div>
</template>

<script>
import apiService from "../../services/apiServices";
import Comment from "../shared/comment";
import Like from "../shared/Like";
import { mapState } from "vuex";
import moment from "moment";
import { EventBus } from "@/main";

export default {
  data() {
    return {
      posts: null,
      show: "",
      textarea: false,
      post: "",
      image: "",
      active: false
    };
  },
  computed: {
    ...mapState("userModule", ["isAuthenticated", "authUser"])
  },
  mounted() {
    this.getFollowedPost();
    // this.posts = JSON.parse(localStorage.getItem("posts"));
  },
  created() {
    EventBus.$on("updateRender", event => {
      this.getFollowedPost();
    });
  },
  components: {
    Comment,
    Like
  },
  methods: {
    checkLiked: (postId, likes, useauthUId) => {
      let hasLiked = likes.find(like => {
        return like.author === useauthUId && like.post._id === postId;
      });
      return hasLiked;
    },
    toggle: function(id) {
      if (this.show === id) this.show = false;
      else this.show = id;
    },
    createPost: async function() {
      const response = await apiService.CREATE_POST({
        title: this.post,
        image: this.image
      });
      this.post = "";
      this.getFollowedPost();
    },
    convertDate: function(date) {
      return moment(date).fromNow();
    },
    createComment: async function(payload) {
      const response = await apiService.CREATE_COMMENT({
        postId: payload.postId,
        comment: payload.comment
      });
      this.getFollowedPost();
    },
    getFollowedPost: async function() {
      const response = await apiService.GET_FOLLOWED_POST();
      // localStorage.setItem("posts", JSON.stringify(response.data.payload));
      this.posts = response.data.payload;
    },
    onSelectedFile(event) {
      let image = event.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = event => {
        this.image = event.target.result;
      };
    }
  }
};
</script>

<style lang="scss">
.btn-custom {
  width: 4rem;
  height: 2.5rem;
  color: white;
}
.text-area1 {
  height: 40px;
  outline: none;
  border: none;
}
.text-area-focus1 {
  height: 80px;
  outline: none;
  border: none;
}
.main-section {
  background-color: #fff;
  color: orange red;
  box-shadow: 0 2px 2px #ccc;
}
.search-wrap {
  background-color: white;
  width: 100%;
  padding: 1rem;
  z-index: 999 !important;
  margin-bottom: 1rem;
  box-shadow: 0 2px 3px #ccc;
  border-radius: 4px;
  font-size: 14px;
}
.post-title {
  font-size: 14px;
  box-sizing: border-box;
}
.icon {
  background-color: rgb(245, 245, 245);
  padding: 0.6rem;
  border-radius: 3px;
  cursor: pointer;
}

.post-wrapper {
  background-color: #fff;
  width: 100%;
  border-radius: 5px;
  margin: auto;
  box-shadow: 0 2px 4px rgb(184, 183, 183);
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
.image-upload > input {
  display: none;
}

.image-upload span {
  cursor: pointer;
}
.style-img {
  background-position: center;
  background-size: cover;
  width: 1.7rem;
  height: 1.7rem;
  border-radius: 50%;
}
</style>