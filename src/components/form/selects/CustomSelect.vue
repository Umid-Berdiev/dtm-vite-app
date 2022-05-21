<script setup lang="ts">

const props = defineProps({
  options: Array,
  modelValue: Number,
})
const emit = defineEmits(['update:modelValue'])

function handleChange(event: any) {
  emit('update:modelValue', event.target.value)
}

</script>

<template>
  <select
    class="form-select"
    :value="modelValue"
    @change="handleChange"
  >
    <option v-for="{value, label} in options" :key="value" :value="value">
      {{ label }}
    </option>
  </select>
</template>

<style scoped lang="scss">
.form-select {
  border: unset;
  background-color: unset;
}
</style>
