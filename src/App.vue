<script setup lang="ts">
import { useUserStore } from './stores/user';

const { getUserLocale } = useUserStore();
const { locale } = useI18n({
  useScope: 'global'
})
locale.value = getUserLocale



</script>

<template>
  <RouterView />
</template>

<style>
</style>
