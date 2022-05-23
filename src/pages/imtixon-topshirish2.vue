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
          <div class="btn__outline__primary active">Tarix</div>
          <div class="btn__outline__primary">Ingliz tili</div>
          <div class="btn__outline__primary">Ona tili</div>
          <div class="btn__outline__primary">Matematika</div>
          <div class="btn__outline__primary">O'zbekiston tarixi</div>
        </div>
        <div class="d-flex gap-3 align-items-center">
          <div class="dateStyle">
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

    <div class="container-fluid">
      <div class="container py-4">
        <div class="row justify-content-center">
          <div class="col-8">
            <div class="d-flex justify-content-between mb-2" id="FanNameWithBall">
              <span>Tarix (3.1)</span>
              <span>3/30</span>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-8">
            <button v-for="q in 30" class="q-btn btn me-2 mb-2"
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
          <div class="col-8 mb-2">
            <div class="quetion">1. Skif davlati Miloddan avvalgi IV- III asrlarda qaysi hududda tashkil topdi?</div>
            <div class="my-3 border rounded__pill">
              <div class="form-check d-flex align-items-center mx-3">
                <div>
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                </div>
                <div class="Answer100">
                  <label class="form-check-label LebelCheck" for="flexRadioDefault1">
                    <strong>A)</strong> Ural va Tobol daryosi bo‘ylarida
                  </label>
                </div>
              </div>
            </div>
            <div class="my-3 border rounded__pill answertrue">
              <div class="form-check d-flex align-items-center mx-3">
                <div>
                  <input class="form-check-input" type="radio" checked="checked" name="flexRadioDefault" id="flexRadioDefault2">
                </div>
                <div class="Answer100">
                  <label class="form-check-label LebelCheck answerText" for="flexRadioDefault2">
                    <strong>B)</strong> Dnepr va Dunayning quyi oqimlarida
                  </label>
                </div>
              </div>
            </div>
            <div class="my-3 border rounded__pill bg-white">
              <div class="form-check d-flex align-items-center mx-3">
                <div>
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3">
                </div>
                <div class="Answer100">
                  <label class="form-check-label LebelCheck" for="flexRadioDefault3">
                    <strong>C)</strong> Dnepr, Don va Amudaryo bo‘ylarida
                  </label>
                </div>
              </div>
            </div>
            <div class="my-3 border rounded__pill bg-white">
              <div class="form-check d-flex align-items-center mx-3">
                <div>
                  <input class="form-check-input radioAnsw" type="radio" name="flexRadioDefault" id="flexRadioDefault4">
                </div>
                <div class="Answer100">
                  <label class="form-check-label LebelCheck" for="flexRadioDefault4">
                    <strong>D)</strong> Dnepr, Don va Amudaryo bo‘ylaridaBolqon yarimorolida
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-8 mb-2">
            <div class="quetion">
              2. Quyidagi grafikda qaysi raqam ostida tarixiy asar va uning muallifi bir-biriga muvofiq keladi?
            </div>
            <div class="quetionImage"><img src="src/assets/images/savolimage.png" alt="" srcset=""></div>
            <div class="my-3 border rounded__pill bg-white">
              <div class="form-check d-flex align-items-center mx-3">
                <div>
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                </div>
                <div class="Answer100">
                  <label class="form-check-label LebelCheck" for="flexRadioDefault1">
                    <strong>A)</strong> Ural va Tobol daryosi bo‘ylarida
                  </label>
                </div>
              </div>
            </div>
            <div class="my-3 border rounded__pill">
              <div class="form-check d-flex align-items-center mx-3">
                <div>
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                </div>
                <div class="Answer100">
                  <label class="form-check-label LebelCheck" for="flexRadioDefault2">
                    <strong>B)</strong> Dnepr va Dunayning quyi oqimlarida
                  </label>
                </div>
              </div>
            </div>
            <div class="my-3 border rounded__pill">
              <div class="form-check d-flex align-items-center mx-3">
                <div>
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3">
                </div>
                <div class="Answer100">
                  <label class="form-check-label LebelCheck" for="flexRadioDefault3">
                    <strong>C)</strong> Dnepr, Don va Amudaryo bo‘ylarida
                  </label>
                </div>
              </div>
            </div>
            <div class="my-3 border rounded__pill">
              <div class="form-check d-flex align-items-center mx-3">
                <div>
                  <input class="form-check-input radioAnsw" type="radio" name="flexRadioDefault" id="flexRadioDefault4">
                </div>
                <div class="Answer100">
                  <label class="form-check-label LebelCheck" for="flexRadioDefault4">
                    <strong>D)</strong> Dnepr, Don va Amudaryo bo‘ylaridaBolqon yarimorolida
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-8 mb-2">
            <div class="quetion">
              3. "Bu hududda tarqoq manzilgohlar «nom» deb atalgan kichik davlatlarga birlashgan. Mil, avv. XVIII asr oxirida ko'chmanchi giksoslar qabilalari bu davlatga hujum qilgan. Davlatda Quyosh xudosi Amon-Ra hukmdorlarning bosh ilohi va homiysi hisoblangan."
              Yuqoridagi ma'lumotlar qaysi davlat haqida ekanligini toping.
            </div>
            <div class="my-3 border rounded__pill">
              <div class="form-check d-flex align-items-center mx-3">
                <div>
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                </div>
                <div class="Answer100">
                  <label class="form-check-label LebelCheck" for="flexRadioDefault1">
                    <strong>A)</strong> Ural va Tobol daryosi bo‘ylarida
                  </label>
                </div>
              </div>
            </div>
            <div class="my-3 border rounded__pill">
              <div class="form-check d-flex align-items-center mx-3">
                <div>
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                </div>
                <div class="Answer100">
                  <label class="form-check-label LebelCheck" for="flexRadioDefault2">
                    <strong>B)</strong> Dnepr va Dunayning quyi oqimlarida
                  </label>
                </div>
              </div>
            </div>
            <div class="my-3 border rounded__pill">
              <div class="form-check d-flex align-items-center mx-3">
                <div>
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3">
                </div>
                <div class="Answer100">
                  <label class="form-check-label LebelCheck" for="flexRadioDefault3">
                    <strong>C)</strong> Dnepr, Don va Amudaryo bo‘ylarida
                  </label>
                </div>
              </div>
            </div>
            <div class="my-3 border rounded__pill">
              <div class="form-check d-flex align-items-center mx-3">
                <div>
                  <input class="form-check-input radioAnsw" type="radio" name="flexRadioDefault" id="flexRadioDefault4">
                </div>
                <div class="Answer100">
                  <label class="form-check-label LebelCheck" for="flexRadioDefault4">
                    <strong>D)</strong> Dnepr, Don va Amudaryo bo‘ylaridaBolqon yarimorolida
                  </label>
                </div>
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


.q-btn   {
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
  color:#1C84FF;
}
.btn__outline__primary{
  border: 1px solid #E7E7E7;
  border-radius: 48px;
  padding:8px 30px;
  font-family: 'Inter' sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
}
.btn__outline__primary:hover {
  background: #1C84FF;
  border-radius: 48px;
  color: #fff;
  cursor: pointer;
}
.active {
  background: #1C84FF;
  border-radius: 48px;
  color: #fff;
  cursor: pointer;
}
.dateStyle{
  width: 200px;
  font-family: 'Inter' sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: #000000;
  text-align: center;
}
.dateLineOne{

  height:4px;
  width: 60%;
  margin: 5px auto;
  background: #E7E7E7;
  border-radius: 25px;
  .dateInnerLine{
    height:4px;
    width: 80%;
    background: #1C84FF;
    border-radius: 25px;
  }
}
#FanNameWithBall{
  span{
    font-family: 'Inter' sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    color: #000000;
  }
}
.quetion{
  font-family: 'Inter' sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
  color: #000000;
  padding:15px;
}
.rounded__pill{
  background: #FFFFFF;
  border: 1px solid #E7E7E7;
  border-radius: 15px;
  cursor: pointer;
}
.answertrue{
  background: #E9F3FF;
  border: 1px solid #1C84FF !important;
  border-radius: 15px;
}
.Answer100{
  width: 100%;
}
.LebelCheck{
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
.answerText{
  font-family: 'Inter' sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: #1C84FF;
}
.quetionImage{
  margin: 15px 0px;
  width: 100%;
  img{
    width: 100%;
  }
}
</style>

<route lang="yaml">
meta:
  layout: default2
</route>
