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
          <div
            v-if="comment.author.image"
            class="style-img mr-2"
            :style="{ backgroundImage: 'url(' + comment.author.image + ')'}"
          >&nbsp;</div>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            width="30"
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
.style-img {
  background-position: center;
  background-size: cover;
  width: 1.7rem;
  height: 1.7rem;
  border-radius: 50%;
}
</style>