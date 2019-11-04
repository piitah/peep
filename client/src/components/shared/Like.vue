<template>
  <div>
    <div class="w-50 text-sec" style="cursor:pointer !important;" @click.prevent="likeHandler()">
      <i class="fas fa-thumbs-up"></i>
      {{hasLiked ? "Unlike" : "like"}}
    </div>
  </div>
</template>

<script>
import apiServices from "../../services/apiServices";

export default {
  props: ["userId", "likes", "postId"],
  data() {
    return {
      hasLiked: "",
      authPost: null
    };
  },
  mounted() {
    this.hasLiked = this.likes.find(like => {
      console.log(like);
      return like.author === this.userId && like.post._id === this.postId;
    });
    console.log(this.hasLiked);
  },
  methods: {
    likeHandler() {
      this.hasLiked
        ? this.deleteLike(this.hasLiked._id)
        : this.createLike(this.postId);
      alert(this.hasLiked.name);
    },
    getAuthPost: async function() {
      const response = await apiServices.GET_AUTH_POST();
      this.authPost = response.data.payload;
    },
    createLike: async postId => {
      const response = await apiServices.CREATE_LIKE({
        postId: postId
      });
    },
    deleteLike: async likeId => {
      const response = await apiServices.DELETE_LIKE(likeId);
    }
  }
};
</script>

<style lang="scss" scoped>
.text-sec {
  font-size: 14px;
}
</style>