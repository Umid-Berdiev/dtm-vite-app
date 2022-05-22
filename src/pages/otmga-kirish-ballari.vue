<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const availableTestsCount = ref<Number>(10)


function direction() {
  router.push('/otmga-kirish-ballari-deriction')
}
</script>
<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12 mt-5">
        <form action="">
          <div class="row">
            <div class="form-group col-md-3">
              <select name="" class="form-select rounded-pil" id="otm_enter_select">
                  <option value="" selected><b>Hududni tanlang</b></option>
                  <option value="">Toshkent Shaxar</option>
                  <option value="">Buxoro Viloyat</option>
                  <option value="">Jizzax Viloyat</option>
                  <option value="">Samarqand Viloyat</option>
              </select>
            </div>
            <div class="form-group col-md-2">
                <select name="" class="form-select rounded-pil" id="otm_enter_select">
                  <option value="" selected><b>Ta'lim shakli</b></option>
                    <option value="">Sirtqi</option>
                    <option value="">Kechki</option>
                    <option value="">Kundizgi</option>
                </select>
            </div>
            <div class="form-group col-md-2">
              <select name="" class="form-select rounded-pil" id="otm_enter_select">
                <option value="" selected><b>Ta'lim tili</b></option>
                  <option value="">O'zbekcha</option>
                  <option value="">Qoraqolpoqcha</option>
                  <option value="">Ruscha</option>
              </select>
            </div>
            <div class="form-group col-md-2">
              <select name="" class="form-select rounded-pil" id="otm_enter_select">
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
      <div class="col-md-12">
        <div class="table-responsive box mt-3">
          <table class="w-100 table-hover table ">
            <thead class="HerderTable border-none" style="border:none">
              <tr>
                <th scope="col">
                  <div class="otmName">Oliy ta’lim muassasalari</div>
                </th>
                <th scope="col">
                  <span class="otmName"> <span class="elips_otm"></span> Mutaxassisliklar soni <img src="/src/assets/images/sort.png" alt="Sort"/></span>
                </th>
                <th scope="col">
                  <span class="otmName"> <span class="elips_otm_center"></span> O‘rtacha kirish balli <img src="src/assets/images/sort.png" alt="Sort"></span>
                </th>
                <th scope="col">
                  <span class="otmName"> <span class="elips_otm_all"></span> Umumiy qabul kvotasi <img src="src/assets/images/sort.png" alt="Sort"></span>
                </th>
              </tr>
            </thead>
            <tbody class="otmTable box">
              <tr @click="direction">
                <td scope="row">
                  <span class="otmNameInnner">
                      Andijon davlat tibbiyot instituti
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
              <tr>
                <td scope="row">
                  <span class="otmNameInnner">
                      Andijon qishloq xo‘jaligi va agrotexnologiyalar instituti
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
              <tr>
                <td scope="row">
                  <span class="otmNameInnner">
                      Buxoro davlat tibbiyot instituti
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
              <tr>
                <td scope="row">
                  <span class="otmNameInnner">
                      Andijon qishloq xo‘jaligi va agrotexnologiyalar instituti
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
              <tr>
                <td scope="row">
                  <span class="otmNameInnner">
                      Andijon davlat universiteti
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
      <div class="col-md-12">
         <nav style="float:right;">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link"  href="#">
                  <img src="src/assets/images/left.png" alt="">
                </a>
              </li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">...</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item">
                <a class="page-link" href="#">
                  <img src="src/assets/images/right.png" alt="">
                </a>
              </li>
            </ul>
          </nav>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>


</style>