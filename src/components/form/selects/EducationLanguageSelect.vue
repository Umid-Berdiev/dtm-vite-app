<script setup lang="ts">
import useEducationLanguage from "~/composables/useEducationLanguage";

const { t } = useI18n()

const {
  setEducationLanguages,
  getEducationLanguages,
  setSelectedEducationLanguage,
  getSelectedEducationLanguage,
} = useEducationLanguage();

setEducationLanguages()
</script>

<template>
  <select name="region" class="form-select rounded-pill" :placeholder="t('select_edu_lang')">
    <option selected disabled>{{ t('select_edu_lang') }}</option>
    <option v-for="item in getEducationLanguages" :value="item.id">
      {{ item.name }}
    </option>
  </select>
</template>