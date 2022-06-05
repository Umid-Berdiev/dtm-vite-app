<script setup lang="ts">
import { fetchRegions, filterOtmByYear } from '~/api';

const { t } = useI18n()
const regions = reactive([])
const laravelData = ref([])
// const laravelData = computed(() => mainStore.getOtmPaginatedList)

onMounted(async () => {
  await getResults()
  const res = await fetchRegions()
  Object.assign(regions, res)
})

// Our method to GET results from a Laravel endpoint
async function getResults(page = 1) {
  const res = await filterOtmByYear({ page })
  laravelData.value = res
}

async function onYearChange(event: any) {
  const year = event.target.value
  const res = await filterOtmByYear({ page: 1, year })
  laravelData.value = res
}

</script>


<template>
  <div class="container-fluid">
    <div class="row mt-5">
      <div class="col-auto">
        <AcademicYearSelect @change.prevent="onYearChange" />
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
                  <span v-if="hei.rating?.status === 'up'"><img src="/src/assets/images/top.png" /></span>
                  <span v-if="hei.rating?.status === 'down'"><img src="/src/assets/images/bottom.png" /></span>
                  <span v-else><img src="/src/assets/images/revyu.png" /></span>
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