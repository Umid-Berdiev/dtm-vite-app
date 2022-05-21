<!-- This example requires Tailwind CSS v2.0+ -->
<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import BlackWhiteLogo from './icons/logos/BlackWhiteLogo.vue';
import BrainLogo from './icons/logos/BrainLogo.vue';
import CustomSelect from './form/selects/CustomSelect.vue';
import PaymentServices from './dropdowns/PaymentServices.vue';
import LocaleSwitcher from './LocaleSwitcher.vue';

const { t } = useI18n()

const options = ref([
  {
    value: 1,
    label: t('Abituriyentlar uchun test savollari'),
  },
])
</script>

<template>
  <header class="navbar sticky-top flex-md-nowrap bg-light border-bottom">
    <div class="d-flex justify-content-between align-items-center w-100 px-4">
      <div>
        <BlackWhiteLogo />
        <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon" />
        </button>
      </div>
      <div class="d-flex gap-3">
        <BrainLogo />
        <CustomSelect v-model="options[0].value" :options="options" />
      </div>
      <div class="d-flex gap-3 align-items-center">
        <!-- <LocaleSwitcher /> -->
        <i class="bi bi-bell-fill" style="font-size: 1.2rem;" />
        <PaymentServices />
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.payment-first-box {
  background-color: rgb(243, 244, 246);
  /* Chrome, Safari, Edge, Opera */

}

.input-wrapper {
  input {
    border: none;
    border-bottom: 1px solid #ccc;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
}
</style>
