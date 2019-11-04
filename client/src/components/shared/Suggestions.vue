<template>
  <div class="searc-result">
    <div class="row">
      <div class="col-md-4" v-for="suggestion in suggestions" :key="suggestion._id">
        <div class="user pt-5 pb-5">
          <div class="avatar"></div>
          <div>
            <div class="text-sec">{{suggestion.firstname}}</div>
            <div>
              <button class="btn btn-pri">Follow</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import apiService from "../../services/apiServices";
export default {
  name: "searchResult",
  data() {
    return {
      suggestions: ""
    };
  },
  mounted() {
    this.getSuggestion();
  },
  methods: {
    getSuggestion: async function() {
      const response = await apiService.GET_SUGGESTION();
      this.suggestions = response.data.payload;
    }
  }
};
</script>

<style lang="scss" scoped>
.searc-result {
  margin-top: -2.2rem;
}
.user {
  background-color: #fff;
  width: 100%;
}
.avatar {
  background-color: orange;
  width: 6rem;
  padding-top: 6rem !important;
  text-align: center;
  margin: auto;
  height: 6rem;
  border-radius: 50%;
}

.text-sec {
  margin-top: px;
  margin-bottom: 14px;
  font-size: 14px;
  color: black;
}
.btn-pri {
  background-color: rgb(106, 150, 194);
  padding: 5px 7px 5px 7px;
  color: #fff;
  border-radius: 3px;
  box-shadow: 0 2px 3px;
  font-size: 14px;
}
</style>