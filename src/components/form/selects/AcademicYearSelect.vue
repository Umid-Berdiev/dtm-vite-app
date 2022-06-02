<script setup lang="ts"></script>
<template>
  <select name="academic_year" class="form-select rounded-pill">
    <option v-for="year in 5" :value="year + 2016">{{ year + 2016 }} - {{ year + 2017 }}</option>
  </select>
</template>