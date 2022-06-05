<script setup lang="ts">
import useEducationForm from "~/composables/useEducationForm";

const { t } = useI18n()

const {
  setEducationForms,
  getEducationForms,
  setSelectedEducationForm,
  getSelectedEducationForm,
} = useEducationForm();

setEducationForms()
</script>

<template>
  <select name="region" class="form-select rounded-pill" :placeholder="t('select_edu_form')">
    <option selected disabled>{{ t('select_edu_form') }}</option>
    <option v-for="item in getEducationForms" :value="item.id">
      {{ item.title }}
    </option>
  </select>
</template>