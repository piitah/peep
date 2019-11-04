<template>
  <div>
    <div class="profile-img-1">
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
        for="file-input"
        class="w-100 h-100 d-flex align-items-center justify-content-center"
        style="cursor:pointer !important;"
      >
        <h5 style="cursor:pointer !important;">Upload</h5>
      </label>
      <!-- <input
        id="file-input"
        type="file"
        name="profileImage"
        @change="onSelectedFile"
        ref="profileImage"
      />-->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: ""
    };
  },
  methods: {
    onSelectedFile(event) {
      console.log("Profile image");
      let image = event.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = event => {
        this.$emit("OnprofileImageHandler", {
          image: event.target.result
        });
      };
    }
  }
};
</script>

<style lang="scss">
.image-upload > input {
  display: none;
}

.image-upload svg {
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
</style>