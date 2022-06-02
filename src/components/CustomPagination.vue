<script setup lang="ts">
import Pagination from 'laravel-vue-pagination';

defineProps({
  laravelData: {
    type: Object,
    default: () => { }
  }
})

const emit = defineEmits(['getResults'])

const { t } = useI18n()

</script>

<template>
  <Pagination :data="laravelData" @pagination-change-page="(e) => emit('getResults', e)">
    <template #prev-nav>
      <span>&lt; {{ t('Previous') }}</span>
    </template>
    <template #next-nav>
      <span>{{ t('Next') }} &gt;</span>
    </template>
  </Pagination>
</template>