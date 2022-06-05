<script setup lang="ts">
import useRegion from "~/composables/useRegion";

const { t } = useI18n()

// const props = defineProps({
//   modelValue: {
//     type: Number
//   },
// })

const {
  setRegions,
  getRegions,
  setSelectedRegion,
  getSelectedRegion,
} = useRegion();

setRegions()
</script>

<template>
  <select name="region" class="form-select rounded-pill" :placeholder="t('select_region')">
    <option selected disabled>{{ t('select_region') }}</option>
    <option v-for="region in getRegions" :value="region.soato">
      {{ region.name }}
    </option>
  </select>
</template>