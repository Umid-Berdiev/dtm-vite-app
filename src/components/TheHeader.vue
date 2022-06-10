<script setup lang="ts">
import { logout } from '~/api';

const { t } = useI18n()
const router = useRouter()

const options = ref([
  {
    value: 1,
    label: t('exam_questions_for_enrollees'),
  },
])

async function onLogout() {
  await logout()
  router.push('/auth/login')
}

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
        <LocaleSwitcher />
        <button class="btn btn-outline-secondary rounded-pill me-3" type="button" @click="onLogout">{{ t('logout')
        }}</button>
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
