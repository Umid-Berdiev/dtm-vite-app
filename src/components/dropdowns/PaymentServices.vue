<script setup lang="ts">
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useUserStore } from '~/stores/user';

const { t } = useI18n()
const paymentAmount = ref<Number>()
const paymentService = ref<String>()
const notAllowed = computed(() => !paymentAmount.value || !paymentService.value)
const { getUserBalance, fetchUserBalance } = useUserStore()

fetchUserBalance()
</script>

<template>
  <div class="dropdown">
    <button id="payment-services" class="btn dropdown-toggle d-flex align-items-center gap-2" type="button"
      data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
      <i class="bi bi-plus-circle-fill" style="font-size: 1.2rem;" />
      <span class="fw-bold">806000 UZS</span>
    </button>
    <form class="dropdown-menu p-3 dropdown-menu-end" style="min-width: max-content; width: 300px;;"
      aria-labelledby="payment-services">
      <div class="rounded-3 bg-light payment-first-box p-3">
        <h5>{{ t("Joriy balance") }}</h5>
        <h3 class="text-success fw-bold mt-3">
          {{ 806000 + ' UZS' }}
        </h3>
      </div>
      <div class="my-4 input-wrapper">
        <input v-model="paymentAmount" type="number" class="w-100" :placeholder="t('To\'lov miqdori')">
      </div>
      <div class="row row-cols-1 row-cols-md-3 g-3">
        <div class="col">
          <div class="card h-100">
            <div class="card-body p-0">
              <input id="btn-check-1" v-model="paymentService" type="radio" value="payme" class="btn-check"
                autocomplete="off">
              <label class="btn px-4 py-3" for="btn-check-1">
                <img src="/src/assets/images/payme.png" alt="Payme logo" width="40">
              </label>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <div class="card-body p-0">
              <input id="btn-check-2" v-model="paymentService" type="radio" value="click" class="btn-check"
                autocomplete="off">
              <label class="btn px-4 py-3" for="btn-check-2">
                <img src="/src/assets/images/click.png" alt="Click logo" width="40">
              </label>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <div class="card-body p-0">
              <input id="btn-check-3" v-model="paymentService" type="radio" value="oson" class="btn-check"
                autocomplete="off">
              <label class="btn px-4 py-3" for="btn-check-3">
                <img src="/src/assets/images/oson.png" alt="Oson logo" width="40">
              </label>
            </div>
          </div>
        </div>
      </div>
      <button type="submit" class="btn btn-outline-dark rounded-pill mt-3 submit-btn" :disabled="notAllowed">
        {{ t("Balansni to'ldirish") }}
      </button>
    </form>
  </div>
</template>

<style scoped lang="scss">
.payment-first-box {
  background-color: rgb(243, 244, 246);
}

.input-wrapper {
  input:focus-visible {
    outline: none;
  }

  /* Chrome, Safari, Edge, Opera */
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

.btn:disabled {
  cursor: not-allowed;
  pointer-events: initial;
}
</style>
