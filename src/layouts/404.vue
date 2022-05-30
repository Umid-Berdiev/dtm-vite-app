<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

const router = useRouter()
const { t } = useI18n()
</script>

<template>
  <main class="px-2 py-5 text-center">
    <i class="bi bi-exclamation-lg" style="font-size: 2rem;"></i>
    <RouterView />
    <div>
      <button class="btn btn-warning fs-5 mx-2 mt-4" @click="router.push('/')">
        {{ t('go_to_home_page') }}
      </button>
    </div>
  </main>
</template>
