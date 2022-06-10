<script setup lang="ts">
import { useUserStore } from '~/stores/user';

const { setLocale } = useUserStore();
const { locale, availableLocales } = useI18n({
  useScope: 'global'
})

const changeLocale = async (event: any) => {
  const localeValue = event.target.value
  await setLocale(localeValue)
  location.reload()
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
