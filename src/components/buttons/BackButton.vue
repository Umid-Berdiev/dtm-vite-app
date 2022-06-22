<script setup lang="ts">

const router = useRouter()
function goBack() {
  router.go(-1)
}
</script>

<template>
  <button class="btn back-btn" @click="goBack">
    <i class="bi bi-arrow-left fs-5" />
  </button>
</template>

<style scoped lang="scss">
.back-btn {
  border-radius: .625rem !important;
  // border: 1px solid #ccc;
  // background-color: #fff;

  // &:hover {
  //   background-color: #ccc;
  //   color: #fff;
  // }
}
</style>