<template>
  <div class="searc-result">
    <div class="row">
      <div class="col-md-4" v-for="suggestion in suggestions" :key="suggestion._id">
        <div class="user pt-3 pb-3">
          <div
            class="sidebar-img mt-4"
            :style="{ backgroundImage: 'url(' + suggestion.image + ')'}"
          >&nbsp;</div>
          <div>
            <div class="text-sec mt-2">{{suggestion.firstname}}</div>
            <div>
              <button class="btn btn-pri mb-2">Follow</button>
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
.sidebar-img {
  margin: auto;
  background-position: center;
  background-size: cover;
  height: 6.5rem;
  width: 6.5rem;
  border-radius: 50%;
  border: 2px solid #fff;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
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
  padding: 3px 7px 3px 7px;
  color: #fff;
  border-radius: 3px;
  box-shadow: 0 2px 3px;
  font-size: 14px;
}
</style>