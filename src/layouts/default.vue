<script lang="ts" setup>
import TheHeader from '../components/TheHeader.vue';
import Sidebar from '../components/Sidebar.vue';
</script>

<template>
  <TheHeader />

  <div class="container-fluid">
    <div class="row">
      <Sidebar />

      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4 bg-light min-vh-100">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<style>
</style>
