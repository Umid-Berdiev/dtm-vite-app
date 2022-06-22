<script setup lang="ts">
import { filterHei } from '~/api';
import { useStore } from '~/stores/main'

const mainStore = useStore()
const router = useRouter()
const { t } = useI18n()
const laravelData = ref({})
const selectedRegion = ref<number | null>();
const selectedEduForm = ref<number | null>();
const selectedEduLang = ref<number | null>();
const selectedAcademYear = ref<number>((new Date()).getFullYear() - 1);

onMounted(async () => {
  await getResults()
})

function goTo(id: number) {
  router.push(`/heis/entrance-exam-scores/${encodeURIComponent(id)}`)
}

// Our method to GET results from a Laravel endpoint
async function getResults(page = 1, year = selectedAcademYear.value) {
  const res = await filterHei({ page, year })
  laravelData.value = res
}

async function onFilter() {
  const values = {
    region_soato: selectedRegion.value,
    edu_form: selectedEduForm.value,
    edu_lang: selectedEduLang.value,
    year: selectedAcademYear.value,
    page: 1
  }

  try {
    const res = await filterHei(values)
    laravelData.value = res
  } catch (error: any) {
    console.log('Error while fetching filtered data: ', error.message);
  }
}
</script>

<template>
  <div class="container-fluid">
    <div class="row mt-5">
      <div class="form-group col-auto">
        <RegionSelect v-model="selectedRegion" name="region_soato" @change="onFilter" />
      </div>
      <div class="form-group col-auto">
        <EducationFormSelect v-model="selectedEduForm" name="edu_form" @change="onFilter" />
      </div>
      <div class="form-group col-auto">
        <EducationLanguageSelect v-model="selectedEduLang" name="edu_lang" @change="onFilter" />
      </div>
      <div class="form-group col-auto">
        <AcademicYearSelect v-model="selectedAcademYear" name="year" @change="onFilter" />
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
                  <div role="button">
                    <CircleIcon class="text-warning" />
                    Mutaxassisliklar soni
                    <img src="/src/assets/images/sort.png" alt="Sort" />
                  </div>
                </td>
                <td class="p-3">
                  <div role="button">
                    <CircleIcon class="text-success" />
                    O‘rtacha kirish balli
                    <img src="/src/assets/images/sort.png" alt="Sort">
                  </div>
                </td>
                <td class="p-3">
                  <div role="button">
                    <CircleIcon class="text-primary" />
                    Umumiy qabul kvotasi
                    <img src="/src/assets/images/sort.png" alt="Sort">
                  </div>
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
                  <span><span class="elips_otm"></span> {{ hei.directions_count }}</span>
                </td>
                <td class="fw2 p-3">
                  <span><span class="elips_otm_center"></span> 132,6</span>
                </td>
                <td class="fw3 p-3">
                  <span><span class="elips_otm_all"></span> {{ hei.total_quota }}</span>
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