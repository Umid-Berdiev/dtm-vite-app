<script setup lang="ts">
import { useStore } from '~/stores/main';

const mainStore = useStore()
mainStore.fetchHeiList()
if (!_.isEmpty(mainStore.selectedHei)) {
  mainStore.fetchDirectionsList()
}
mainStore.fetchSubjectsList()
mainStore.fetchDefaultSubjects()

const router = useRouter()
const availableTestsCount = ref<Number>(10)

const { t } = useI18n()

const selectedSubject1 = computed({
  get: () => mainStore.getSelectedSubject1,
  set: (val) => {
    mainStore.selectedSubject1 = val
    mainStore.selectedHei = {}
    mainStore.selectedDirection = {}
  }
})

const selectedSubject2 = computed({
  get: () => mainStore.getSelectedSubject2,
  set: (val) => {
    mainStore.selectedSubject2 = val
    mainStore.selectedHei = {}
    mainStore.selectedDirection = {}
  }
})

const selectedHei = computed({
  get: () => mainStore.getSelectedHei,
  set: (val: any) => {
    mainStore.selectedHei = val
    mainStore.fetchDirectionsList()
  }
})

const selectedDirection = computed({
  get: () => mainStore.getSelectedDirection,
  set: (val: any) => {
    mainStore.selectedDirection = val
    const s1 = mainStore.getSubjectsList.find(item => item.id === val.subject_1)
    const s2 = mainStore.getSubjectsList.find(item => item.id === val.subject_2)
    mainStore.selectedSubject1 = s1
    mainStore.selectedSubject2 = s2
  }
})

async function goNext() {
  mainStore.selectedSubjects.unshift(mainStore.selectedSubject1, mainStore.selectedSubject2)
  router.push('/exams/pass')
}
</script>

<template>
  <div class="card mx-auto mt-5 p-4 box col-lg-8 col-xl-6">
    <div class="card-body">
      <h6 class="mb-3">
        {{ t("Tarif bo'yicha qolgan testlar soni") }}: <span class="text-success">{{ availableTestsCount + ' ' + t("ta")
        }}</span>
      </h6>
      <h6 class="mb-3">
        {{ t("Mutaxassislik fanlari") }}
      </h6>
      <select class="form-select rounded-pill mb-3" v-model="selectedSubject1">
        <option selected disabled :value="{}">
          {{ t("Birinchi fanni tanlang") }}
        </option>
        <option v-for="item in mainStore.getSubjectsList" :value="item" :disabled="item.id === selectedSubject2.id">{{
            item.title
        }}</option>
      </select>
      <select class="form-select rounded-pill mb-3" v-model="selectedSubject2">
        <option selected disabled :value="{}">
          {{ t("Ikkinchi fanni tanlang") }}
        </option>
        <option v-for="item in mainStore.getSubjectsList" :value="item" :disabled="item.id === selectedSubject1.id">{{
            item.title
        }}</option>
      </select>
      <h6 class="mb-3">
        {{ t("Majburiy fanlar") }}
      </h6>
      <input class="form-control rounded-pill mb-3" disabled :placeholder="mainStore.selectedSubjects[0]?.title">
      <input class="form-control rounded-pill mb-3" disabled :placeholder="mainStore.selectedSubjects[1]?.title">
      <input class="form-control rounded-pill mb-3" disabled :placeholder="mainStore.selectedSubjects[2]?.title">
      <h6 class="mb-3">
        {{ t("Oliy ta'lim muassasi") }}
      </h6>
      <select class="form-select rounded-pill mb-3" v-model="selectedHei">
        <option selected disabled :value="{}">
          {{ t("Oliy ta'lim muassasini tanlang") }}
        </option>
        <option v-for="item in mainStore.getHeiList" :value="item">{{ item.title }}</option>
      </select>
      <h6 class="mb-3">
        {{ t("Ta'lim yo'nalishi") }}
      </h6>
      <select class="form-select rounded-pill mb-3" v-model="selectedDirection">
        <option selected disabled :value="{}">
          {{ t("Ta'lim yo'nalishini tanlang") }}
        </option>
        <option v-for="item in mainStore.getDirectionsList" :value="item">{{ item.title }}</option>
      </select>
      <div class="d-flex align-items-center warning-block mb-3">
        <i class="bi bi-exclamation-triangle-fill" style="color: #f4c10c; font-size: 1rem;" />
        <span class="ms-2">
          {{ t("warning_message1") }}
        </span>
      </div>
      <div class="d-grid">
        <button class="btn btn-primary text-white rounded-pill" type="button" @click="goNext"
          :disabled="_.isEmpty(selectedSubject1) && _.isEmpty(selectedSubject2)">
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
