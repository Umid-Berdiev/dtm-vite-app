<script setup lang="ts">
import { useStore } from '~/stores/main'

const mainStore = useStore()
const router = useRouter()
const { t } = useI18n()
const laravelData = computed(() => mainStore.getHeiPaginatedList)

onMounted(async () => {
  await getResults()
})

function goTo(id: number) {

  router.push(`/heis/entrance-exam-scores/${encodeURIComponent(id)}`)
}

// Our method to GET results from a Laravel endpoint
async function getResults(page = 1) {
  await mainStore.fetchHeiPaginatedList({ page })
}

async function onFilter(event: any) {
  const values = event.target.value
  console.log({ values });

}
</script>

<template>
  <div class="container-fluid">
    <div class="row mt-5">
      <div class="form-group col-auto">
        <RegionSelect @change="onFilter" />
      </div>
      <div class="form-group col-auto">
        <EducationFormSelect />
      </div>
      <div class="form-group col-auto">
        <EducationLanguageSelect />
      </div>
      <div class="form-group col-auto">
        <AcademicYearSelect />
      </div>
    </div>
    <div class="row">
      <div class="col my-3">
        <div class="table-responsive box">
          <table class="w-100">
            <thead class="bg-light text-secondary">
              <tr>
                <td class="p-3">
                  <span>Oliy ta’lim muassasalari</span>
                </td>
                <td class="p-3">
                  <span> <span class="elips_otm"></span> Mutaxassisliklar soni <img src="/src/assets/images/sort.png"
                      alt="Sort" /></span>
                </td>
                <td class="p-3">
                  <span> <span class="elips_otm_center"></span> O‘rtacha kirish balli <img
                      src="/src/assets/images/sort.png" alt="Sort"></span>
                </td>
                <td class="p-3">
                  <span> <span class="elips_otm_all"></span> Umumiy qabul kvotasi <img src="/src/assets/images/sort.png"
                      alt="Sort"></span>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr class="border-top" v-for="hei in laravelData.data" @click="goTo(hei.id)">
                <td class="p-3">
                  <span class="otmNameInnner">
                    {{ hei.title }}
                  </span>
                </td>
                <td class="fw1 p-3">
                  <span><span class="elips_otm"></span> 8</span>
                </td>
                <td class="fw2 p-3">
                  <span><span class="elips_otm_center"></span> 132,6</span>
                </td>
                <td class="fw3 p-3">
                  <span><span class="elips_otm_all"></span> 2425</span>
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