<template>
  <div>
    <div class="border-top" :class="show === postId ? 'show' : 'hide'">
      <div class="d-flex flex-row align-items-center pt-2 pl-1 pr-3">
        <div class="comment-input pt-2">
          <textarea placeholder="Add Comment" class="formControl" v-model="Comment" />
        </div>
        <div class="comment-post" @click.prevent="createComment(postId)">Post</div>
      </div>
    </div>
    <div class="border-top" :class="show === postId  ? 'show' : 'hide'">
      <div
        class="d-flex flex-row align-items-cer pt-2 pl-3 pb-2 pr-3"
        v-for="comment in comments"
        :key="comment._id"
      >
        <div class>
          <div class="user-avatar mr-2"></div>
        </div>
        <div class="user-comment">
          <span class="user-name">{{comment.author.firstname}}</span>
          {{comment.comment}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["show", "comments", "postId"],
  data() {
    return {
      Comment: ""
    };
  },
  methods: {
    createComment: function(payload) {
      this.$emit("commentData", {
        comment: this.Comment,
        postId: payload
      });
      this.Comment = "";
    }
  }
};
</script>

<style lang="scss" scoped>
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
  border-radius: 13px;
  width: max-content;
  overflow-wrap: break-word;
  padding: 5px 10px 5px 13px;
  text-align: start;
  display: block;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.87);
}
.user-name {
  color: rgba(10, 60, 129, 0.721);
  font-size: 14px;
  font-weight: 600;
}
.user {
  display: block;
  transition: all 0.4s ease-in-out;
}
.hide {
  display: none;
  transition: all 0.4s ease-in-out;
}
</style>