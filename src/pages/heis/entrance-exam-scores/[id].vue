<script setup lang="ts">
import { useStore } from '~/stores/main'
import CircleIcon from '~/components/icons/CircleIcon.vue';

const props = defineProps<{ id: number }>()
const mainStore = useStore()
const { t } = useI18n()
const laravelData = computed(() => mainStore.getHeiPaginatedList)
const selectedHei = ref({})
const selectedEduForm = ref<number | null>()
const selectedEduLang = ref<number | null>()
const selectedAcademYear = ref<number | null>()

onMounted(async () => {
  console.log(props.id);
  const res = await mainStore.fetchHeiById(props.id)
  selectedHei.value = res
  // await getResults()
})

async function getResults(page = 1) {
  await mainStore.fetchHeiPaginatedList({ page })
}

async function onFilter() {
  const values = {
    edu_form: selectedEduForm.value,
    edu_lang: selectedEduLang.value,
    year: selectedAcademYear.value,
    page: 1
  }

  // try {
  //   const res = await filterHei(values)
  //   laravelData.value = res
  // } catch (error: any) {
  //   console.log('Error while fetching filtered data: ', error.message);
  // }
}
</script>

<template>
  <div class="container-fluid">
    <div class="row mt-5">
      <div class="col-auto">
        <div class="backBlock d-flex align-items-center">
          <!-- <RouterLink to="/heis/entrance-exam-scores"><img src="/src/assets/images/back.png" srcset=""></RouterLink> -->
          <BackButton />
          <h5>{{ selectedHei.title }}</h5>
        </div>
      </div>
      <div class="col-auto ms-auto">
        <EducationFormSelect v-model="selectedEduForm" name="edu_form" @change="onFilter" />
      </div>
      <div class="col-auto">
        <EducationLanguageSelect v-model="selectedEduLang" name="edu_lang" @change="onFilter" />
      </div>
      <div class="col-auto">
        <AcademicYearSelect v-model="selectedAcademYear" name="year" @change="onFilter" />
      </div>
    </div>
    <div class="row my-3">
      <div class="col">
        <div class="table-responsive box">
          <table class="w-100">
            <thead class="bg-light text-secondary">
              <tr>
                <td class="p-3">
                  <span class="">Yo‘nalishlar</span>
                </td>
                <td class="p-3">
                  <div role="button">
                    <CircleIcon class="text-success" />
                    Grant
                    <img src="/src/assets/images/sort.png" alt="Sort">
                  </div>
                </td>
                <td class="p-3">
                  <div role="button">
                    <CircleIcon class="text-danger" />
                    Shartnoma
                    <img src="/src/assets/images/sort.png" alt="Sort">
                  </div>
                </td>
                <td class="p-3">
                  <span class=""></span>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr class="border-top">
                <td class="p-3">
                  <h6>
                    Amaliy matematika va informatika
                  </h6>
                </td>
                <td class="fw1 p-3">
                  <CircleIcon class="text-success" />
                  142.3
                </td>
                <td class="fw2 p-3">
                  <CircleIcon class="text-danger" />
                  132,6
                </td>
                <td class="fw3 p-3">
                  <button class="btn btn-outline-primary rounded-pill">{{ t('pass_exam') }}</button>
                </td>
              </tr>
              <tr class="border-top">
                <td class="p-3">
                  <h6>
                    Amaliy sanat: badiiy kulolchilik
                  </h6>
                </td>
                <td class="fw1 p-3">
                  <CircleIcon class="text-success" />
                  125.85
                </td>
                <td class="fw2 p-3">
                  <CircleIcon class="text-danger" />
                  132,6
                </td>
                <td class="fw3 p-3">
                  <button class="btn btn-outline-primary rounded-pill">{{ t('pass_exam') }}</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-auto ms-auto">
        <CustomPagination :laravel-data="laravelData" @get-results="getResults" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
table tbody tr:hover {
  cursor: pointer;
  background-color: #F8F9FA;
}
</style>