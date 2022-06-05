<script setup lang="ts">
import moment from 'moment';

const { t } = useI18n()
const startYear = moment().format('Y') - 6
</script>
<template>
  <select name="academic_year" class="form-select rounded-pill">
    <option selected disabled>{{ t('select_edu_season') }}</option>
    <option v-for="year in 5" :value="year + startYear">{{ year + startYear }} - {{ year + startYear + 1 }}</option>
  </select>
</template>