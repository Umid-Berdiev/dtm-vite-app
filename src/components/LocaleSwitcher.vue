<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale, t, availableLocales } = useI18n()

const changeLocale = (event: any) => {
  locale.value = event.target.value
}
</script>

<template>
  <form>
    <select v-model="locale" class="form-select" @change="changeLocale">
      <option v-for="item, index in availableLocales" :key="item + index" :value="item">
        {{ item.toUpperCase() }}
      </option>
    </select>
  </form>
</template>
