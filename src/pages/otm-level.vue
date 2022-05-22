<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-9 mt-5">
         <form action="">
          <div class="row d-flex justify-content-start">
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
          <table class="w-100 table-hover table ">
            <thead class="HerderTable border-none" style="border:none">
              <tr>
                <th scope="col">
                  <div class="otmName">№</div>
                </th>
                <th scope="col">
                  <div class="otmName">Oliy ta’lim muassasalari</div>
                </th>
                <th scope="col">
                  <span class="otmName"></span>
                </th>
              </tr>
            </thead>
            <tbody class="otmTable box">
              <tr >
                <td scope="row">
                    <div class="NomerBox">1</div>
                </td>
                <td scope="row">
                  <span class="otmNameInnner">
                      Toshkent irrigatsiya va qishloq XMMI
                  </span>
                </td>
                <td class="fw1 text-end">
                  <span><img src="src/assets/images/top.png" alt="" srcset=""></span>
                </td>
              </tr>
              <tr >
                <td scope="row">
                    <div class="colorRangBotm">2</div>
                </td>
                <td scope="row">
                  <span class="otmNameInnner">
                      O‘zbekiston milliy universiteti
                  </span>
                </td>
                <td class="fw1 text-end">
                  <span><img src="src/assets/images/bottom.png" alt="" srcset=""></span>
                </td>
              </tr>
              <tr >
                <td scope="row">
                    <div class="NomerBox colorRangTop">3</div>
                </td>
                <td scope="row">
                  <span class="otmNameInnner">
                      Toshkent davlat o‘abek tili va adabiyoti universiteti
                  </span>
                </td>
                <td class="fw1 text-end">
                  <span><img src="src/assets/images/revyu.png" alt="" srcset=""></span>
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

<script>
export default {

}
</script>

<style lang="css" scoped>  

    
</style>
