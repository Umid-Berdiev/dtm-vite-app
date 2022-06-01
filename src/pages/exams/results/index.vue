<script  setup lang="ts">
import RadialProgressBar from "vue3-radial-progress";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
import { useStore } from '~/stores/main';

const router = useRouter()
const mainStore = useStore()
const { t } = useI18n()

momentDurationFormatSetup(moment);

const examResults = computed(() => mainStore.getExamResults)

onMounted(async () => {
  await mainStore.fetchExamResults()
})

function goTo(examID: number) {
  if (examID)
    router.push(`/exams/results/${encodeURIComponent(examID)}`)
}

function examTimeDuration(start_time: string, end_time: string) {
  const st = Date.parse(start_time)
  const et = Date.parse(end_time)
  return moment.duration(et - st).format('hh:mm:ss')

}

</script>

<template>
  <Suspense>
    <div class="container-fluid">
      <div class="">
        <div class="row my-5 row-cols-3">
          <div class="col" v-for="item in examResults">
            <div class="boxResultCard">
              <div class="d-flex justify-content-between innerCardResult">
                <div>
                  <div class="dateTitile">Sana:</div>
                  <div class="dateResult">{{ item.start_time }}</div>
                </div>
                <div>
                  <div class="dateTitile">Sarflangan vaqt:</div>
                  <div class="dateResult">{{ examTimeDuration(item.start_time, item.end_time) }}</div>
                </div>
              </div>
              <div v-if="item.hei_id" class="d-flex justify-content-start innerCardResult">
                <div>
                  <div class="dateTitile">{{ t('otm') }}:</div>
                  <div class="dateResult">{{ item.hei.title }}</div>
                </div>
              </div>
              <div v-if="item.direction_id" class="d-flex justify-content-start innerCardResult">
                <div>
                  <div class="dateTitile">{{ t('edu_direction') }}:</div>
                  <div class="dateResult">{{ item.direction.title }}</div>
                </div>
              </div>
              <div class="d-flex justify-content-center my-4">
                <radial-progress-bar :diameter="300" :completed-steps="item.score_total" :total-steps="189"
                  :strokeWidth="12" :innerStrokeWidth="12" startColor="#1C84FF" endColor="#1C84FF"
                  innerStrokeColor="#E9F3FF">
                  <!-- Your inner content here -->
                  <span class="text-secondary">{{ t('total_score') }}</span>
                  <h3>
                    <strong>
                      {{ item.score_total }} {{ t('score') }}
                    </strong>
                  </h3>
                </radial-progress-bar>

                <!-- <div class="chartResult">
                  <div class="pie innerCardResult" style="--p:75;--b:10px;--c:#1C84FF;">
                    <div class="dateTitile text-center pb-2">{{ t('total_score') }}</div>
                  </div>
                </div> -->
              </div>
              <!-- <div class="d-flex justify-content-center my-5">
                <button class="btn btn-outline-primary rounded-pill btn-block" type="button" @click="test">{{ t('more')
                }}</button>
              </div> -->
              <div class="d-grid my-5">
                <button class="btn btn-outline-primary rounded-pill btn-block mx-4 py-2" type="button"
                  @click="goTo(item.id)">{{
                      t('more')
                  }}</button>
              </div>
            </div>
          </div>
          <!-- <div v-else class="col text-center">
            <h5>{{ t('There is no exam results yet!') }}</h5>
          </div> -->

        </div>
      </div>
    </div>

    <!-- loading state via #fallback slot -->
    <template #fallback>
      Loading...
    </template>
  </Suspense>
</template>

<style lang="scss" scoped>
.boxResultCard {
  background: #FFFFFF;
  border: 1px solid #E7E7E7;
  border-radius: 15px;
  margin: 10px;

  .innerCardResult {
    padding: 10px 18px;

    .dateTitile {
      font-family: 'Inter' sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      color: #858585;
    }

    .dateResult {
      font-family: 'Inter' sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #000000;
    }

  }

  .chartResult {
    .pie {
      --w: 300px;
      width: var(--w);
      aspect-ratio: 1;
      position: relative;
      display: inline-grid;
      place-content: center;
      margin: 5px;
      font-size: 25px;
      font-weight: bold;
      font-family: sans-serif;
      background: #E9F3FF;
      border-radius: 50%;
    }

    .pie:before {
      content: "";
      position: absolute;
      border-radius: 50%;
      inset: 0;
      background: conic-gradient(var(--c) calc(var(--p)*1%), #0000 0);
      -webkit-mask: radial-gradient(farthest-side, #0000 calc(99% - var(--b)), #000 calc(100% - var(--b)));
      mask: radial-gradient(farthest-side, #0000 calc(99% - var(--b)), #000 calc(100% - var(--b)));
    }
  }

  .ResultMore {
    width: 75%;
    background: #FFFFFF;
    border: 1px solid #E7E7E7;
    border-radius: 40px;
    text-align: center;
    padding: 14px;
    font-weight: bold;
    font-family: sans-serif;
  }
}
</style>