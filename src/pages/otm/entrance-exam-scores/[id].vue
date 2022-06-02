<script setup lang="ts">
import { useStore } from '~/stores/main'

const mainStore = useStore()
const { t } = useI18n()
const laravelData = computed(() => mainStore.getOtmPaginatedList)

onMounted(async () => {
  await getResults()
})

async function getResults(page = 1) {
  await mainStore.fetchOtmPaginatedList({ page })
}
</script>

<template>
  <div class="container-fluid">
    <div class="row pt-5">
      <div class="col-auto">
        <div class="backBlock d-flex align-items-center">
          <div><img src="/src/assets/images/back.png" srcset=""></div>
          <div class="UzName">Andijon davlat universiteti</div>
        </div>
      </div>
      <div class="col-auto ms-auto">
        <form action="">
          <div class="row d-flex justify-content-end">
            <div class="form-group col-auto">
              <select name="" class="form-select rounded-pill">
                <option value="" selected><b>Ta'lim shakli</b></option>
                <option value="">Sirtqi</option>
                <option value="">Kechki</option>
                <option value="">Kundizgi</option>
              </select>
            </div>
            <div class="form-group col-auto">
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
                  <div class="TestEnter">Testni topshirish</div>
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
                  <div class="TestEnter">Testni topshirish</div>
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