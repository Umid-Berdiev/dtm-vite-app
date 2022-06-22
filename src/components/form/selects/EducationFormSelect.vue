<script setup lang="ts">
import useEducationForm from "~/composables/useEducationForm";

defineProps({
  modelValue: Number
});

const emits = defineEmits(['update:modelValue'])

const { t } = useI18n()

const {
  setEducationForms,
  getEducationForms,
} = useEducationForm();

setEducationForms()
</script>

<template>
  <select :value="modelValue" @change="emits('update:modelValue', $event.target.value)" class="form-select rounded-pill"
    :placeholder="t('select_edu_form')">
    <option selected disabled value="">{{ t('select_edu_form') }}</option>
    <option v-for="item in getEducationForms" :value="item.id">
      {{ item.title }}
    </option>
  </select>
</template>