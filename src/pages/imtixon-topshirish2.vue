<script setup lang="ts">
import { onUnmounted } from 'vue';
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
import BlackWhiteLogo from '~/components/icons/logos/BlackWhiteLogo.vue';
import useTimer from "~/composables/useTimer";

momentDurationFormatSetup(moment);

const { diff, setDiff } = useTimer()
const timerID = setDiff();

onUnmounted(() => {
  clearInterval(timerID)
})
</script>

<template>
  <div>
    <header class="navbar sticky-top flex-md-nowrap bg-light border-bottom">
      <div class="d-flex justify-content-between align-items-center w-100">
        <div class="px-4">
          <BlackWhiteLogo />
        </div>
        <div class="d-flex gap-3">
          <div class="btn btn-outline-primary rounded-pill px-4">Tarix</div>
          <div class="btn btn-outline-primary rounded-pill px-4">Ingliz tili</div>
          <div class="btn btn-outline-primary rounded-pill px-4">Ona tili</div>
          <div class="btn btn-outline-primary rounded-pill px-4">Matematika</div>
          <div class="btn btn-outline-primary rounded-pill px-4">O'zbekiston tarixi</div>
        </div>
        <div class="d-flex gap-3 align-items-center">
          <div>
            Vaqt: {{ moment.duration(diff).format('hh:mm:ss') }}
          </div>
          <div class="border-start px-2">
            <button class="btn"><i class="bi bi-x-lg" data-bs-toggle="modal"
                data-bs-target="#stopExamModal"></i></button>
          </div>
        </div>
      </div>
    </header>

    <div class="container-fluid">
      <div class="container py-4">
        <div class="row justify-content-center">
          <div class="col-8">
            <div class="d-flex justify-content-between mb-2">
              <span>Tarix (3.1)</span>
              <span>3/30</span>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-8">
            <button v-for="q in 30" class="q-btn btn border rounded-3 me-2 mb-2"
              :class="{ answered: q === 2 || q === 5 }">
              {{ q }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid bg-light">
      <div class="container py-4">
        <div class="row justify-content-center">
          <div class="col-8">
            <h5>1. Skif davlati Miloddan avvalgi IV- III asrlarda qaysi hududda tashkil topdi?</h5>
            <div class="my-3 p-3 border rounded-pill bg-white">
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                <label class="form-check-label" for="flexRadioDefault1">
                  A) Ural va Tobol daryosi bo‘ylarida
                </label>
              </div>
            </div>
            <div class="my-3 p-3 border rounded-pill bg-white">
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                <label class="form-check-label" for="flexRadioDefault2">
                  B) Dnepr va Dunayning quyi oqimlarida
                </label>
              </div>
            </div>
            <div class="my-3 p-3 border rounded-pill bg-white">
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3">
                <label class="form-check-label" for="flexRadioDefault3">
                  C) Dnepr, Don va Amudaryo bo‘ylarida
                </label>
              </div>
            </div>
            <div class="my-3 p-3 border rounded-pill bg-white">
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4">
                <label class="form-check-label" for="flexRadioDefault4">
                  D) Dnepr, Don va Amudaryo bo‘ylaridaBolqon yarimorolida
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- stop exam modal -->
    <div class="modal fade" id="stopExamModal" tabindex="-1" aria-labelledby="stopExamModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body text-center p-5 rounded-3">
            <h5 class="mb-4">Imtihonni yakunlash</h5>
            <h6 class="mb-4">Imtihonni yakunlashni tasdiqlaysizmi?</h6>
            <div class="d-flex justify-content-around">
              <button class="btn btn-outline-primary rounded-pill px-5">Ha</button>
              <button class="btn btn-outline-primary rounded-pill px-5" data-bs-dismiss="modal">Yo'q</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.answered {
  background-color: #E9F3FF;
}

.q-btn {
  min-width: 43.25px;
}
</style>

<route lang="yaml">
meta:
  layout: default2
</route>
