<script setup lang="ts">
import { fetchRegions } from '~/api';
import { useStore } from '~/stores/main'
import CustomPagination from '~/components/CustomPagination.vue';

const mainStore = useStore()
const router = useRouter()
const { t } = useI18n()
const regions = reactive([])
const laravelData = computed(() => mainStore.getOtmPaginatedList)

onMounted(async () => {
  await getResults()
  const res = await fetchRegions()
  Object.assign(regions, res)
})

function goTo(id) {
  router.push(`/otm/entrance-exam-scores/${encodeURIComponent(id)}`)
}

// Our method to GET results from a Laravel endpoint
async function getResults(page = 1) {
  await mainStore.fetchOtmPaginatedList({ page })
}
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 mt-5">
        <form action="">
          <div class="row">
            <div class="form-group col-md-3">
              <select name="region" class="form-select rounded-pill" :placeholder="t('select_region')">
                <option v-for="region in regions" :value="region.soato">
                  {{ region.name }}
                </option>
              </select>
            </div>
            <div class="form-group col-md-2">
              <select name="" class="form-select rounded-pill">
                <option value="" selected><b>Ta'lim shakli</b></option>
                <option value="">Sirtqi</option>
                <option value="">Kechki</option>
                <option value="">Kundizgi</option>
              </select>
            </div>
            <div class="form-group col-md-2">
              <select name="" class="form-select rounded-pill">
                <option value="" selected><b>Ta'lim tili</b></option>
                <option value="">O'zbekcha</option>
                <option value="">Qoraqolpoqcha</option>
                <option value="">Ruscha</option>
              </select>
            </div>
            <div class="form-group col-auto">
              <AcademicYearSelect />
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="col-12 my-3">
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