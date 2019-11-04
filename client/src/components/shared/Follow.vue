<template>
  <div>
    <button
      class="bt"
      :class="isFollowing ? 'btn-grey': 'btn-pri'"
      @click.prevent="followHandler()"
    >{{isFollowing ? "following" : "follow"}}</button>
  </div>
</template>

<script>
import apiServices from "../../services/apiServices";

export default {
  props: ["user", "following"],
  data() {
    return {
      isFollowing: ""
    };
  },
  mounted() {
    this.isFollowing = this.user.following.find(user => {
      return user.user === this.following._id;
    });
  },
  methods: {
    followHandler() {
      this.isFollowing
        ? this.deleteFollow(this.isFollowing._id)
        : this.createFollow(this.following._id);
    },
    createFollow: async userId => {
      const response = await apiServices.CREATE_FOLLOW({
        userId: userId
      });
    },
    deleteFollow: async Id => {
      const response = await apiServices.DELETE_FOLLOW(Id);
    }
  }
};
</script>

<style lang="scss" scoped>
.btn-pri {
  background-color: rgb(106, 150, 194);
  padding: 5px 7px 5px 7px;
  color: #fff;
  border-radius: 3px;
  box-shadow: 0 2px 3px;
  font-size: 14px;
}
.btn-grey {
  background-color: #999;
  padding: 5px 7px 5px 7px;
  color: #fff;
  border-radius: 3px;
  box-shadow: 0 2px 3px;
  font-size: 14px;
}
</style>