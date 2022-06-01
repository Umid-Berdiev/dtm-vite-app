<script setup lang="ts">
import { fetchRegions } from '~/api';
import { useStore } from '~/stores/main'
import Pagination from 'laravel-vue-pagination';

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
              <select name="" class="form-select rounded-pill" id="otm_enter_select" :placeholder="t('select_region')">
                <option v-for="region in regions" :value="region.soato">
                  {{ region.name }}
                </option>
              </select>
            </div>
            <!-- <el-select name="" class="col-auto" id="otm_enter_select" :placeholder="t('select_region')">
              <el-option v-for="region in regions" :value="region.soato">
                {{ region.name }}
              </el-option>
            </el-select> -->
            <div class="form-group col-md-2">
              <select name="" class="form-select rounded-pill" id="otm_enter_select">
                <option value="" selected><b>Ta'lim shakli</b></option>
                <option value="">Sirtqi</option>
                <option value="">Kechki</option>
                <option value="">Kundizgi</option>
              </select>
            </div>
            <div class="form-group col-md-2">
              <select name="" class="form-select rounded-pill" id="otm_enter_select">
                <option value="" selected><b>Ta'lim tili</b></option>
                <option value="">O'zbekcha</option>
                <option value="">Qoraqolpoqcha</option>
                <option value="">Ruscha</option>
              </select>
            </div>
            <div class="form-group col-md-2">
              <select name="" class="form-select rounded-pill" id="otm_enter_select">
                <option value="" selected><b>O'quv yili</b></option>
                <option value="">2019-2020</option>
                <option value="">2020-2021</option>
                <option value="">2021-2022</option>
                <option value="">2022-2023</option>
              </select>
            </div>
          </div>
        </form>
      </div>
      <div class="col-12 my-3">
        <div class="table-responsive box p-4">
          <table class="table table-hover">
            <thead>
              <tr>
                <th>
                  <div class="otmName">Oliy ta’lim muassasalari</div>
                </th>
                <th>
                  <span class="otmName"> <span class="elips_otm"></span> Mutaxassisliklar soni <img
                      src="/src/assets/images/sort.png" alt="Sort" /></span>
                </th>
                <th>
                  <span class="otmName"> <span class="elips_otm_center"></span> O‘rtacha kirish balli <img
                      src="/src/assets/images/sort.png" alt="Sort"></span>
                </th>
                <th>
                  <span class="otmName"> <span class="elips_otm_all"></span> Umumiy qabul kvotasi <img
                      src="/src/assets/images/sort.png" alt="Sort"></span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="hei in laravelData.data" @click="goTo(hei.id)">
                <td>
                  <span class="otmNameInnner">
                    {{ hei.title }}
                  </span>
                </td>
                <td class="fw1">
                  <span><span class="elips_otm"></span> 8</span>
                </td>
                <td class="fw2">
                  <span><span class="elips_otm_center"></span> 132,6</span>
                </td>
                <td class="fw3">
                  <span><span class="elips_otm_all"></span> 2425</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-auto ms-auto">
        <Pagination :data="laravelData" @pagination-change-page="getResults" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.otmTable tr {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.otmTable tr:hover {
  background-color: #F9F9F9;
}

.table tbody tr:hover {
  cursor: pointer;
}
</style>