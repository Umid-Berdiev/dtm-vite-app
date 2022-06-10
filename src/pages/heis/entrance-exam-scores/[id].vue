<script setup lang="ts">
import { useStore } from '~/stores/main'

const props = defineProps<{ id: number }>()
const mainStore = useStore()
const { t } = useI18n()
const laravelData = computed(() => mainStore.getHeiPaginatedList)
const selectedHei = ref({})

onMounted(async () => {
  console.log(props.id);
  const res = await mainStore.fetchHeiById(props.id)
  selectedHei.value = res
  // await getResults()
})

async function getResults(page = 1) {
  await mainStore.fetchHeiPaginatedList({ page })
}
</script>

<template>
  <div class="container-fluid">
    <div class="row mt-5">
      <div class="col-auto">
        <div class="backBlock d-flex align-items-center">
          <RouterLink to="/heis/entrance-exam-scores"><img src="/src/assets/images/back.png" srcset=""></RouterLink>
          <div class="UzName">{{ selectedHei.title_uz }}</div>
        </div>
      </div>
      <div class="col-auto ms-auto">
        <EducationFormSelect />
      </div>
      <div class="col-auto">
        <EducationLanguageSelect />
      </div>
      <div class="col-auto">
        <AcademicYearSelect />
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
                  <span class=""> <span class="elips_otm"></span> Grant <img src="/src/assets/images/sort.png"
                      alt="Sort" width="10px"></span>
                </td>
                <td class="p-3">
                  <span class=""> <span class="elips_otm_center"></span> Shartnoma <img
                      src="/src/assets/images/sort.png" alt="Sort" width="10px"></span>
                </td>
                <td class="p-3">
                  <span class=""></span>
                </td>
              </tr>
            </thead>
            <tbody class="">
              <tr class="border-top">
                <td class="p-3">
                  <h6>
                    Amaliy matematika va informatika
                  </h6>
                </td>
                <td class="fw1 p-3">
                  <span><span class="elips_otm"></span> 8</span>
                </td>
                <td class="fw2 p-3">
                  <span><span class="elips_otm_center"></span> 132,6</span>
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
                  <span><span class="elips_otm"></span> 8</span>
                </td>
                <td class="fw2 p-3">
                  <span><span class="elips_otm_center"></span> 132,6</span>
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