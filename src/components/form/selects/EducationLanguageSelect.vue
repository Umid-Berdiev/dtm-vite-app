<script setup lang="ts">
import useEducationLanguage from "~/composables/useEducationLanguage";

defineProps({
  modelValue: Number
});

const emits = defineEmits(['update:modelValue'])

const { t } = useI18n()

const {
  setEducationLanguages,
  getEducationLanguages,
} = useEducationLanguage();

setEducationLanguages()
</script>

<template>
  <select :value="modelValue" @change="emits('update:modelValue', $event.target.value)" class="form-select rounded-pill"
    :placeholder="t('select_edu_lang')">
    <option selected disabled value="">{{ t('select_edu_lang') }}</option>
    <option v-for="item in getEducationLanguages" :value="item.id">
      {{ item.name }}
    </option>
  </select>
</template>