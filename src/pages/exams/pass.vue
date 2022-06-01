<script setup lang="ts">
import { Modal } from "bootstrap";
import { useStore } from '~/stores/main';
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

const router = useRouter()
const mainStore = useStore()
const { t } = useI18n()

momentDurationFormatSetup(moment);

const { startTimer } = mainStore
const answeredQuestionsList = ref([])
const selectedSubject = ref({})
const modal = ref()
const timerID = ref()
const STORAGE_URL = import.meta.env.VITE_API_URL + 'storage/'

const diff = computed(() => mainStore.getDiff)

const userVariants = computed(() => mainStore.getUserVariants)
const selectedSubjects = computed(() => mainStore.getSelectedSubjects)

onMounted(async () => {
  const myModalEl = document.getElementById('stopExamModal')
  modal.value = Modal.getOrCreateInstance(myModalEl) // Returns a Bootstrap modal instance

  await mainStore.fetchQuestions()
  await startTimer();
})

onUnmounted(() => {
  mainStore.finishExam()
})

function getQuestionsList(subject: any) {
  selectedSubject.value = subject
}

async function stopExamProcess() {
  mainStore.finishExam()
  modal.value.hide()
  router.push(`/exams/results/${encodeURIComponent(mainStore.getExam.id)}`)
}

async function handleUserVariant(event, obj) {
  const exam_id = mainStore.getExam.id
  const subject_id = selectedSubject.value.id
  const subject_slug = selectedSubject.value.slug
  const question_id = obj.id
  const user_variant = event.target.value;

  mainStore.saveUserVariant({
    exam_id,
    subject_id,
    subject_slug,
    question_id,
    user_variant,
  })
}

function isCheckedOne(id, variant) {
  return userVariants.value.some(ans => {
    if (
      ans.subject_slug === selectedSubject.value.slug
      && ans.question_id === id
      && ans.user_variant === variant) {

      return true
    }
    return false
  })
}
</script>

<template>
  <div>
    <header class="navbar sticky-top flex-md-nowrap bg-light border-bottom">
      <div class="d-flex justify-content-between align-items-center w-100">
        <div class="px-4">
          <BlackWhiteLogo />
        </div>
        <div class="d-flex gap-3">
          <!-- <div class="btn__outline__primary active">{{ selectedSubjects[0].title }}</div> -->
          <!-- <div v-for="subject in selectedSubjects" class="btn__outline__primary">{{ subject.title }}</div> -->
          <button v-for="subject, subjectIndex in selectedSubjects" class="btn btn-outline-primary rounded-pill"
            @click="getQuestionsList(subject)" :class="{ active: selectedSubject.slug === subject.slug }">
            {{ subject.title }}
          </button>
        </div>
        <div class="d-flex gap-3 align-items-center">
          <div class="dateStyle">
            <!-- Vaqt: {{ diff }} -->
            Vaqt: {{ moment.duration(diff).format('hh:mm:ss') }}
            <div class="dateLineOne">
              <div class="dateInnerLine"></div>
            </div>
          </div>
          <div class="border-start px-2">
            <button class="btn"><i class="bi bi-x-lg" data-bs-toggle="modal"
                data-bs-target="#stopExamModal"></i></button>
          </div>
        </div>
      </div>
    </header>

    <template v-if="!_.isEmpty(selectedSubject)">
      <div class="container-fluid">
        <div class="container py-4">
          <div class="row justify-content-center">
            <div class="col-8">
              <div class="d-flex justify-content-between mb-2" id="FanNameWithBall">
                <span>{{ selectedSubject.title }}</span>
                <span>{{ answeredQuestionsList.length + '/' + selectedSubject.questions.length }}</span>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-8">
              <a :href="'#question' + q.id" v-for="q, qIndex in selectedSubject.questions" class="q-btn btn me-2 mb-2"
                :class="{ answered: userVariants.some(item => item.question_id === q.id) }">
                {{ qIndex + 1 }}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid bg-light">
        <div class="container py-4">
          <!-- questions -->
          <div v-for="q, qIndex in selectedSubject.questions" class="row justify-content-center pt-5"
            :id="'question' + q.id">
            <div class="col-8 mb-2">
              <!-- question's text block -->
              <div class="question">
                <span>{{ qIndex + 1 }}</span>. {{ q.title }}
              </div>
              <!-- image block -->
              <div v-if="q.image_url" class="box py-3 text-center">
                <img height="280" class="rounded-3" :src="(STORAGE_URL + q.image_url)" alt="qusetion's image">
              </div>
              <!-- answers -->
              <div class="my-3 border rounded__pill">
                <div class="form-check d-flex align-items-center mx-3">
                  <div>
                    <input class="form-check-input" type="radio" :name="'flexRadioDefault' + qIndex"
                      :id="'flexRadioDefault1' + qIndex" @change="(event) => handleUserVariant(event, q)" :value="1"
                      :checked="isCheckedOne(q.id, 1)">
                  </div>
                  <div class="w-100">
                    <label class="form-check-label LebelCheck" :for="'flexRadioDefault1' + qIndex">
                      <strong>A)</strong> {{ q.variant_1 }}
                    </label>
                  </div>
                </div>
              </div>
              <div class="my-3 border rounded__pill">
                <div class="form-check d-flex align-items-center mx-3">
                  <div>
                    <input class="form-check-input" type="radio" :name="'flexRadioDefault' + qIndex"
                      :id="'flexRadioDefault2' + qIndex" @change="(event) => handleUserVariant(event, q)" :value="2"
                      :checked="isCheckedOne(q.id, 2)">
                  </div>
                  <div class="w-100">
                    <label class="form-check-label LebelCheck" :for="'flexRadioDefault2' + qIndex">
                      <strong>B)</strong> {{ q.variant_2 }}
                    </label>
                  </div>
                </div>
              </div>
              <div class="my-3 border rounded__pill">
                <div class="form-check d-flex align-items-center mx-3">
                  <div>
                    <input class="form-check-input" type="radio" :name="'flexRadioDefault' + qIndex"
                      :id="'flexRadioDefault3' + qIndex" @change="(event) => handleUserVariant(event, q)" :value="3"
                      :checked="isCheckedOne(q.id, 3)">
                  </div>
                  <div class="w-100">
                    <label class="form-check-label LebelCheck" :for="'flexRadioDefault3' + qIndex">
                      <strong>C)</strong> {{ q.variant_3 }}
                    </label>
                  </div>
                </div>
              </div>
              <div class="my-3 border rounded__pill">
                <div class="form-check d-flex align-items-center mx-3">
                  <div>
                    <input class="form-check-input radio" type="radio" :name="'flexRadioDefault' + qIndex"
                      :id="'flexRadioDefault4' + qIndex" @change="(event) => handleUserVariant(event, q)" :value="4"
                      :checked="isCheckedOne(q.id, 4)">
                  </div>
                  <div class="w-100">
                    <label class="form-check-label LebelCheck" :for="'flexRadioDefault4' + qIndex">
                      <strong>D)</strong> {{ q.variant_4 }}
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>

    <!-- stop exam modal -->
    <div class="modal fade" id="stopExamModal" tabindex="-1" aria-labelledby="stopExamModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body text-center p-5 rounded-3">
            <h5 class="mb-4">Imtihonni yakunlash</h5>
            <h6 class="mb-4">Imtihonni yakunlashni tasdiqlaysizmi?</h6>
            <div class="d-flex justify-content-around">
              <button @click="stopExamProcess" class="btn btn-outline-primary rounded-pill px-5">
                {{ t("Yes") }}
              </button>
              <button class="btn btn-outline-primary rounded-pill px-5" data-bs-dismiss="modal">
                {{ t("No") }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: topbar-layout
</route>

<style lang="scss" scoped>
.q-btn {
  min-width: 43.25px;
  background: #FFFFFF;
  border: 1px solid #E7E7E7;
  border-radius: 10px;
  font-family: 'Inter' sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
}

.answered {
  background: #E9F3FF;
  color: #1C84FF;
}

.active {
  background: #1C84FF;
  border-radius: 48px;
  color: #fff;
  cursor: pointer;
}

.dateStyle {
  width: 200px;
  font-family: 'Inter' sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: #000000;
  text-align: center;
}

.dateLineOne {

  height: 4px;
  width: 60%;
  margin: 5px auto;
  background: #E7E7E7;
  border-radius: 25px;

  .dateInnerLine {
    height: 4px;
    width: 80%;
    background: #1C84FF;
    border-radius: 25px;
  }
}

#FanNameWithBall {
  span {
    font-family: 'Inter' sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    color: #000000;
  }
}

.question {
  font-family: 'Inter' sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
  color: #000000;
  padding: 15px;
}

.rounded__pill {
  background: #FFFFFF;
  border: 1px solid #E7E7E7;
  border-radius: 15px;
  cursor: pointer;
}

.answertrue {
  background: #E9F3FF;
  border: 1px solid #1C84FF !important;
  border-radius: 15px;
}

.LebelCheck {
  padding: 15px;
  width: 100%;
  cursor: pointer;
  font-family: 'Inter' sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #000000;
}

.answerText {
  font-family: 'Inter' sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: #1C84FF;
}
</style>
