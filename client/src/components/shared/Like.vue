<template>
  <div>
    <div class="w-50 text-sec" style="cursor:pointer !important;" @click.prevent="likeHandler()">
      <i class="fas fa-thumbs-up"></i>
      {{checkLiked ? "Unlike" : "like"}}
    </div>
  </div>
</template>

<script>
import apiServices from "../../services/apiServices";
import { EventBus } from "@/main";

export default {
  props: ["userId", "likes", "postId", "checkLiked"],
  data() {
    return {
      hasLiked: ""
    };
  },
  methods: {
    likeHandler() {
      this.checkLiked
        ? this.deleteLike(this.checkLiked._id)
        : this.createLike(this.postId);
      EventBus.$emit("updateRender");
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