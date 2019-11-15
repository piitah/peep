<template>
  <div>
    <div class="placeholder mb-4 mt-4">
        <div class="d-flex w-100 h-100 align-items-center">
          <div class="m-loader"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Placeholder",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.placeholder {
  background-color: rgb(216, 216, 216);
  width: 90%;
  height: 20rem;
  border-radius: 4px;

  margin: auto;
}
.m-loader {
  border: 3px solid hsla(185, 100%, 62%, 0.2);
  border-top-color: #738081;
  border-radius: 50%;
  margin: auto;
  width: 2em;
  height: 2em;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
@media only screen and (min-width: 320px) and (max-width: 480px) {
  .placeholder{
      width: 100%;
  }
}
</style>