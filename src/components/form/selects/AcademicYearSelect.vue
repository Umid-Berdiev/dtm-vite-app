<script setup lang="ts">
import moment from 'moment';

defineProps({
  modelValue: Number
});

const emits = defineEmits(['update:modelValue'])

const { t } = useI18n()
const startYear: number = parseInt(moment().format('Y')) - 6
</script>
<template>
  <select :value="modelValue" @change="emits('update:modelValue', $event.target.value)" name="academic_year"
    class="form-select rounded-pill">
    <option selected disabled value="">{{ t('select_edu_season') }}</option>
    <option v-for="year in 5" :value="year + startYear">{{ year + startYear }} - {{ year + startYear + 1 }}</option>
  </select>
</template>