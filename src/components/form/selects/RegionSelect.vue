<script setup lang="ts">
import useRegion from "~/composables/useRegion";

defineProps({
  modelValue: Number
});

const emits = defineEmits(['update:modelValue'])

const { t } = useI18n()

const {
  setRegions,
  getRegions,
} = useRegion();

setRegions()
</script>

<template>
  <select :value="modelValue" @change="emits('update:modelValue', $event.target.value)" name="region"
    class="form-select rounded-pill" :placeholder="t('select_region')">
    <option selected disabled value="">{{ t('select_region') }}</option>
    <option v-for="region in getRegions" :value="region.soato">
      {{ region.name }}
    </option>
  </select>
</template>