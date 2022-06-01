<script setup lang="ts">

const { locale, availableLocales } = useI18n()

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
