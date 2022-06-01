<script setup lang="ts">
const router = useRouter()
const availableTestsCount = ref<Number>(10)

</script>
<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3 mt-5">
        <div class="backBlock d-flex align-items-center">
          <div><img src="src/assets/images/back.png" srcset=""></div>
          <div class="UzName">Andijon davlat universiteti</div>
        </div>
      </div>
      <div class="col-md-9 mt-5">
        <form action="">
          <div class="row d-flex justify-content-end">
            <div class="form-group col-md-3">
              <select name="" class="form-select rounded-pil" id="otm_enter_select">
                <option value="" selected><b>Ta'lim shakli</b></option>
                <option value="">Sirtqi</option>
                <option value="">Kechki</option>
                <option value="">Kundizgi</option>
              </select>
            </div>
            <div class="form-group col-md-3">
              <select name="" class="form-select rounded-pil" id="otm_enter_select">
                <option value="" selected><b>Ta'lim tili</b></option>
                <option value="">O'zbekcha</option>
                <option value="">Qoraqolpoqcha</option>
                <option value="">Ruscha</option>
              </select>
            </div>
            <div class="form-group col-md-3">
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
          <table class="w-100">
            <thead class="HerderTable">
              <tr style="background: #f8f9fa;margin: 20px;border:none">
                <th scope="col">
                  <div class="otmName">Yo‘nalishlar</div>
                </th>
                <th scope="col">
                  <span class="otmName"> <span class="elips_otm"></span> Grant <img src="/src/assets/images/sort.png"
                      alt="Sort" width="10px"></span>
                </th>
                <th scope="col">
                  <span class="otmName"> <span class="elips_otm_center"></span> Shartnoma <img
                      src="/src/assets/images/sort.png" alt="Sort" width="10px"></span>
                </th>
                <th scope="col">
                  <span class="otmName"></span>
                </th>
              </tr>
            </thead>
            <tbody class="otmTable box">
              <tr>
                <td scope="row">
                  <span class="otmNameInnner">
                    Amaliy matematika va informatika
                  </span>
                </td>
                <td class="fw1">
                  <span><span class="elips_otm"></span> 8</span>
                </td>
                <td class="fw2">
                  <span><span class="elips_otm_center"></span> 132,6</span>
                </td>
                <td class="fw3">
                  <div class="TestEnter">Testni topshirish</div>
                </td>
              </tr>
              <tr>
                <td scope="row">
                  <span class="otmNameInnner">
                    Amaliy sanat: badiiy kulolchilik
                  </span>
                </td>
                <td class="fw1">
                  <span><span class="elips_otm"></span> 8</span>
                </td>
                <td class="fw2">
                  <span><span class="elips_otm_center"></span> 132,6</span>
                </td>
                <td class="fw3">
                  <div class="TestEnter">Testni topshirish</div>
                </td>
              </tr>
              <tr>
                <td scope="row">
                  <span class="otmNameInnner">
                    Arxivshunoslik
                  </span>
                </td>
                <td class="fw1">
                  <span><span class="elips_otm"></span> 8</span>
                </td>
                <td class="fw2">
                  <span><span class="elips_otm_center"></span> 132,6</span>
                </td>
                <td class="fw3">
                  <div class="TestEnter">Testni topshirish</div>
                </td>
              </tr>
              <tr>
                <td scope="row">
                  <span class="otmNameInnner">
                    Cholg'u ijrochiligi: xalq cholg'ulari (rubob prima, qashqar va afg'on rubobi)
                  </span>
                </td>
                <td class="fw1">
                  <span><span class="elips_otm"></span> 8</span>
                </td>
                <td class="fw2">
                  <span><span class="elips_otm_center"></span> 132,6</span>
                </td>
                <td class="fw3">
                  <div class="TestEnter">Testni topshirish</div>
                </td>
              </tr>
              <tr>
                <td scope="row">
                  <span class="otmNameInnner">
                    Ekologiya va atrof-muhit muhofazasi (tarmoqlar va sohalar bo'yicha)
                  </span>
                </td>
                <td class="fw1">
                  <span><span class="elips_otm"></span> 8</span>
                </td>
                <td class="fw2">
                  <span><span class="elips_otm_center"></span> 132,6</span>
                </td>
                <td class="fw3">
                  <div class="TestEnter">Testni topshirish</div>
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
              <a class="page-link" href="#">
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
table {}

thead {
  border-bottom: none !important;
}

.otmTable tr {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.otmTable tr:hover {
  background-color: #F9F9F9;
}
</style>