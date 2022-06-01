<script setup lang="ts">
import RadialProgressBar from "vue3-radial-progress";
import makeRequest from '~/api/makeRequest';

const router = useRouter()
const { t } = useI18n()
const props = defineProps<{ id: string }>()

const examData = ref({});

onMounted(async () => {
  examData.value = await getExam();
})

function gotoExamStartPage() {
  router.push('/exams')
}

async function getExam() {
  if (props.id) {
    const res = await makeRequest({
      url: `/api/exams/${props.id}/results`,
      params: { locale: 'uz' },
      headers: { authorization: true },
    })

    return res.data
  }
}

</script>

<template>
  <header class="navbar sticky-top flex-md-nowrap bg-light border-bottom">
    <div class="d-flex justify-content-between align-items-center w-100">
      <div class="px-4">
        <BlackWhiteLogo />
      </div>
      <div class="d-flex gap-3 align-items-center">
        <div class="border-start px-2">
          <button class="btn"><i class="bi bi-x-lg" data-bs-toggle="modal" data-bs-target="#stopExamModal"></i></button>
        </div>
      </div>
    </div>
  </header>
  <div class="bg-light py-5">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 class="text-center">{{ t('exam_results') }}</h2>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-12" v-if="!_.isEmpty(examData)">
          <div class="row">
            <div class="col-md-5 col-lg-4 col-xl-3">
              <div class="box py-md-5">
                <h4 class="mb-3 text-center">{{ t('total_score') }}</h4>
                <!-- <div class="pie innerCardResult" style="--p:80;--b:10px;--c:#1C84FF;--w:200px;--bg:#E9F3FF">
                          <div class="dateTitile text-center pb-2">128.8 {{t('score')}}</div>
                        </div> -->
                <radial-progress-bar class="mx-auto" :diameter="200" :completed-steps="examData.score_total"
                  :total-steps="189" :strokeWidth="12" :innerStrokeWidth="12" startColor="#1C84FF" endColor="#1C84FF"
                  innerStrokeColor="#E9F3FF">
                  <!-- Your inner content here -->
                  <!-- <span class="text-secondary">{{ t('total_score') }}</span> -->
                  <h4>
                    {{ examData.score_total }} {{ t('score') }}
                  </h4>
                </radial-progress-bar>
              </div>
            </div>
            <div class="col-md-7 col-lg-8 col-xl-9">
              <div class="box py-md-5 px-md-4">
                <h4 class="ms-3">{{ t('subjects') }}</h4>
                <div class="row row-cols-xl-5 g-0 mt-4 text-center">
                  <div class="col">
                    <h6>{{ examData.score_subject1.subject_title }}</h6>
                    <!-- <div class="pie innerCardResult" style="--p:80;--b:10px;--c:#00B533; --w:120px;--bg:#E6F8EB">
                      <div class="BallTitile text-center pb-2">49.6 {{t('score')}}</div>
                    </div> -->
                    <radial-progress-bar class="mx-auto" :diameter="150"
                      :completed-steps="examData.score_subject1.score" :total-steps="189" :strokeWidth="8"
                      :innerStrokeWidth="8" startColor="#00B533" endColor="#00B533" innerStrokeColor="#E6F8EB">
                      <h6>
                        {{ examData.score_subject1.score }} {{ t('score') }}
                      </h6>
                    </radial-progress-bar>
                  </div>
                  <div class="col">
                    <h6>{{ examData.score_subject2.subject_title }}</h6>
                    <!-- <div class="pie innerCardResult" style="--p:90;--b:10px;--c:#4339F2; --w:120px;--bg:#E3E1FD">
                      <div class="BallTitile text-center pb-2">55.8 {{t('score')}}</div>
                    </div> -->
                    <radial-progress-bar class="mx-auto" :diameter="150"
                      :completed-steps="examData.score_subject2.score" :total-steps="189" :strokeWidth="8"
                      :innerStrokeWidth="8" startColor="#4339F2" endColor="#4339F2" innerStrokeColor="#E3E1FD">
                      <h6>
                        {{ examData.score_subject2.score }} {{ t('score') }}
                      </h6>
                    </radial-progress-bar>
                  </div>
                  <div class="col">
                    <h6>{{ t('onatili') }}</h6>
                    <!-- <div class="pie innerCardResult" style="--p:50;--b:10px;--c:#F30B43; --w:120px;--bg:#FEE7ED">
                      <div class="BallTitile text-center pb-2">10.5 {{t('score')}}</div>
                    </div> -->
                    <radial-progress-bar class="mx-auto" :diameter="150" :completed-steps="examData.score_onatili"
                      :total-steps="189" :strokeWidth="8" :innerStrokeWidth="8" startColor="#F30B43" endColor="#F30B43"
                      innerStrokeColor="#FEE7ED">
                      <h6>
                        {{ examData.score_onatili }} {{ t('score') }}
                      </h6>
                    </radial-progress-bar>
                  </div>
                  <div class="col">
                    <h6>{{ t('mathematics') }}</h6>
                    <!-- <div class="pie innerCardResult" style="--p:90;--b:10px;--c:#F4C10C; --w:120px;--bg:#FEF9E7">
                      <div class="BallTitile text-center pb-2">16.8 {{t('score')}}</div>
                    </div> -->
                    <radial-progress-bar class="mx-auto" :diameter="150" :completed-steps="examData.score_matematika"
                      :total-steps="189" :strokeWidth="8" :innerStrokeWidth="8" startColor="#F4C10C" endColor="#F4C10C"
                      innerStrokeColor="#FEF9E7">
                      <h6>
                        {{ examData.score_matematika }} {{ t('score') }}
                      </h6>
                    </radial-progress-bar>
                  </div>
                  <div class="col">
                    <h6>{{ t('uzb_history') }}</h6>
                    <!-- <div class="pie innerCardResult" style="--p:60;--b:10px;--c:#9A37FD; --w:120px;--bg:#F0E1FF">
                      <div class="BallTitile text-center pb-2">14.7 {{t('score')}}</div>
                    </div> -->
                    <radial-progress-bar class="mx-auto" :diameter="150" :completed-steps="examData.score_uzb_tarixi"
                      :total-steps="189" :strokeWidth="8" :innerStrokeWidth="8" startColor="#9A37FD" endColor="#9A37FD"
                      innerStrokeColor="#F0E1FF">
                      <h6>
                        {{ examData.score_uzb_tarixi }} {{ t('score') }}
                      </h6>
                    </radial-progress-bar>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-2">
        <div class="col-12 mt-3">
          <div class="cardListOtm p-5">
            <p class="OtmEnter">Kirishiz mumkin bo‘lgan oliygohlar</p>
            <p class="OtmYear">Sizning natijangiz o‘tgan yilgi 2021/2022 qabul natijalari bilan taqqoslanadi. </p>
            <table class="table">
              <tbody>
                <tr class="HeaderOtm">
                  <td>Oliy ta’lim muassasalari</td>
                  <td><span class="elips_otm_center"></span> Grant</td>
                  <td><span class="elips_otm_shartnoma"></span> Shartnoma</td>
                </tr>
                <tr>
                  <th scope="row">
                    <div class="OtmName">1. Toshkent davlat yuridik universiteti</div>
                    <div class="OtmDeriction">Yurispidensiya: Fuqarolik va biznes huquqi</div>
                  </th>
                  <td><span class="elips_otm_center"></span> 141.4</td>
                  <td><span class="elips_otm_shartnoma"></span> 113,7</td>
                </tr>
                <tr>
                  <th scope="row">
                    <div class="OtmName">2. Toshkent davlat yuridik universiteti</div>
                    <div class="OtmDeriction">Yurispidensiya: Fuqarolik va biznes huquqi</div>
                  </th>
                  <td><span class="elips_otm_center"></span> 141.4</td>
                  <td><span class="elips_otm_shartnoma"></span> 113,7</td>
                </tr>
                <tr>
                  <th scope="row">
                    <div class="OtmName">3. Toshkent davlat yuridik universiteti</div>
                    <div class="OtmDeriction">Yurispidensiya: Fuqarolik va biznes huquqi</div>
                  </th>
                  <td><span class="elips_otm_center"></span> 141.4</td>
                  <td><span class="elips_otm_shartnoma"></span> 113,7</td>
                </tr>
                <tr>
                  <th scope="row">
                    <div class="OtmName">4. Toshkent davlat yuridik universiteti</div>
                    <div class="OtmDeriction">Yurispidensiya: Fuqarolik va biznes huquqi</div>
                  </th>
                  <td><span class="elips_otm_center"></span> 141.4</td>
                  <td><span class="elips_otm_shartnoma"></span> 113,7</td>
                </tr>
                <tr>
                  <th scope="row">
                    <div class="OtmName">5. Toshkent davlat yuridik universiteti</div>
                    <div class="OtmDeriction">Yurispidensiya: Fuqarolik va biznes huquqi</div>
                  </th>
                  <td><span class="elips_otm_center"></span> 141.4</td>
                  <td><span class="elips_otm_shartnoma"></span> 113,7</td>
                </tr>
                <tr>
                  <th scope="row">
                    <div class="OtmName">6. Toshkent davlat yuridik universiteti</div>
                    <div class="OtmDeriction">Yurispidensiya: Fuqarolik va biznes huquqi</div>
                  </th>
                  <td><span class="elips_otm_center"></span> 141.4</td>
                  <td><span class="elips_otm_shartnoma"></span> 113,7</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="position-fixed bottom-0 end-0">
      <div class="btn-group-vertical pe-4 pb-4">
        <button class="btn btn-outline-primary rounded-pill my-2" @click="gotoExamStartPage">Yangi test</button>
        <button class="btn btn-outline-primary rounded-pill my-2" @click="gotoExamStartPage">Yangi
          yo‘nalish</button>
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: default2
</route>

<style lang="scss" scoped>
.BodyAnswer {
  position: relative;

  .TwoBtnContainer {
    position: sticky;
    max-width: 230px;
    bottom: 20px;
    left: 87%;

    div {
      padding: 12px;
      margin: 10px 0px;
      font-size: 18px;
      line-height: 24px;
    }

    .EnterActive {
      background: #1C84FF;
      font-family: 'Inter' sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 24px;
      color: #FFFFFF;
    }
  }
}

.TestPageText {
  font-family: 'Inter' sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  color: #000000;
  text-align: center;
  padding: 25px 0px;
}

.chartResultTestPage {
  width: 100%;
  // height: 338px;
  text-align: center;
  padding: 40px;
  background: #FFFFFF;
  border: 1px solid #E7E7E7;
  border-radius: 1rem;

  .umumiyTestText {
    font-family: 'Inter' sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    color: #000000;

  }

}

.boxSinceResult {
  width: 100%;
  // height: 338px;
  padding: 60px;
  background: #FFFFFF;
  border: 1px solid #E7E7E7;
  border-radius: 1rem;

  .umumiyTestText {
    font-family: 'Inter' sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    color: #000000;
  }

  .Fanjon {
    display: flex;
    justify-content: space-between;
  }

  .boxFan {
    width: 120px;
  }

  .snc {
    text-align: center;
    font-family: 'Inter' sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #000000;
  }

  .BallTitile {
    font-family: 'Inter' sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #000000;

  }
}

.pie {
  width: var(--w);
  aspect-ratio: 1;
  position: relative;
  display: inline-grid;
  place-content: center;
  margin: 5px;
  font-size: 28px;
  font-weight: bold;
  font-family: sans-serif;
  background: var(--bg);
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

.cardListOtm {
  background: #FFFFFF;
  border: 1px solid #E7E7E7;
  border-radius: 1rem;

  tr {
    border-style: none;
  }

  .OtmEnter {
    font-family: 'Inter' sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 32px;
    color: #000000;
    text-align: center;
  }

  .OtmYear {
    font-family: 'Inter' sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #858585;
    text-align: center;
  }

  td {
    font-family: 'Inter' sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #858585;
  }

  .HeaderOtm td {
    font-family: 'Inter' sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #858585;
  }

  .OtmName {
    font-family: 'Inter' sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
  }

  .OtmDeriction {
    font-family: 'Inter' sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #858585;
  }

  .elips_otm_shartnoma {
    display: inline-block;
    width: 12px;
    height: 12px;
    background: #9A37FD;
    border-radius: 50px;
  }
}
</style>