<script setup lang="ts">
import { fetchRegions } from '~/api';
import { useStore } from '~/stores/main'

const mainStore = useStore()
const { t } = useI18n()
const regions = reactive([])
const laravelData = computed(() => mainStore.getOtmPaginatedList)

onMounted(async () => {
  await getResults()
  const res = await fetchRegions()
  Object.assign(regions, res)
})

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
          <div class="row d-flex justify-content-start">
            <div class="form-group col-auto">
              <AcademicYearSelect />
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="row my-3">
      <div class="col-12">
        <div class="table-responsive box">
          <table class="w-100">
            <thead class="bg-light text-secondary">
              <tr>
                <td class="p-3">
                  <span>№</span>
                </td>
                <td class="p-3">
                  <span>Oliy ta’lim muassasalari</span>
                </td>
                <td class="p-3">
                  <span></span>
                </td>
              </tr>
            </thead>
            <tbody class="">
              <tr v-for="hei, heiIndex in laravelData.data" class="border-top">
                <td class="p-3">
                  <span class="NomerBox py-1 px-2">{{ heiIndex + 1 }}</span>
                </td>
                <td class="p-3">
                  <span class="otmNameInnner">
                    {{ hei.title }}
                  </span>
                </td>
                <td class="fw1">
                  <span><img src="/src/assets/images/top.png" /></span>
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