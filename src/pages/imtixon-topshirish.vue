<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

const router = useRouter()
const availableTestsCount = ref<Number>(10)

const { t } = useI18n()

function goNext() {
  router.push('/imtixon-topshirish2')
}
</script>

<template>
  <div class="card mx-auto mt-5 p-4 box col-5">
    <div class="card-body">
      <h6 class="mb-3">
        {{ t("Tarif bo‘yicha qolgan testlar soni") }}: <span class="text-success">{{ availableTestsCount + ' ' + t("ta")
        }}</span>
      </h6>
      <h6 class="mb-3">
        {{ t("Mutaxassislik fanlari") }}
      </h6>
      <select id="" name="" class="form-select rounded-pill mb-3">
        <option selected disabled>
          {{ t("Birinchi fanni tanlang") }}
        </option>
      </select>
      <select id="" name="" class="form-select rounded-pill mb-3">
        <option selected disabled>
          {{ t("Ikkinchi fanni tanlang") }}
        </option>
      </select>
      <h6 class="mb-3">
        {{ t("Majburiy fanlar") }}
      </h6>
      <input id="" name="" class="form-control rounded-pill mb-3" disabled :placeholder="t('Ona tili')">
      <input id="" name="" class="form-control rounded-pill mb-3" disabled :placeholder="t('Matematika')">
      <input id="" name="" class="form-control rounded-pill mb-3" disabled :placeholder="t('O\'zbekiston tarixi')">
      <h6 class="mb-3">
        {{ t("Oliy ta'lim muassasi") }}
      </h6>
      <select id="" name="" class="form-select rounded-pill mb-3">
        <option selected disabled>
          {{ t("Oliy ta'lim muassasini tanlang") }}
        </option>
      </select>
      <h6 class="mb-3">
        {{ t("Ta'lim yo'nalishi") }}
      </h6>
      <select id="" name="" class="form-select rounded-pill mb-3">
        <option selected disabled>
          {{ t("Ta'lim yo'nalishini tanlang") }}
        </option>
      </select>
      <div class="d-flex align-items-center warning-block mb-3">
        <i class="bi bi-exclamation-triangle-fill" style="color: #f4c10c; font-size: 1rem;" />
        <span class="ms-2">
          {{ t("warning_message1") }}
        </span>
      </div>
      <div class="d-grid">
        <button class="btn btn-primary text-white rounded-pill" type="button" @click="goNext">
          {{ t("Testni topshirish") }}
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.warning-block {
  padding: 1rem;
  background-color: #FEF9E7;
  color: #F4C10C;
  border-radius: 1rem;
  border: 1px solid #F4C10C;
}
</style>
