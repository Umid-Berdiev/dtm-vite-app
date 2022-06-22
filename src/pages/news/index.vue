<script  setup lang="ts">
const router = useRouter()

function goTo(newsID: number) {
  if (newsID)
    router.push(`/news/${encodeURIComponent(newsID)}`)
}
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-11">
        <div class="row">
          <div class="col-md-4 my-4" role="button" @click="goTo(249)">
            <div class="newsBox">
              <div class="newsImages"><img src="src/assets/images/dtmpost.png" alt="" srcset=""></div>
              <div class="newsDate">
                <div><img src="src/assets/images/date.png" alt=""></div>
                <div class="dateText">28-fevral 09:15</div>
              </div>
              <div class="h5">Davlat test markazi va Britaniya Kengashi o‘rtasida
                uchrashuv</div>
            </div>
          </div>
          <div class="col-md-4 my-4" role="button" @click="goTo(249)">
            <div class="newsBox">
              <div class="newsImages"><img src="src/assets/images/pos2.png" alt="" srcset=""></div>
              <div class="newsDate">
                <div><img src="src/assets/images/date.png" alt=""></div>
                <div class="dateText">28-fevral 09:15</div>
              </div>
              <div class="h5">Davlat test markazi va Britaniya Kengashi o‘rtasida uchrashuv</div>
            </div>
          </div>
          <div class="col-md-4 my-4" role="button" @click="goTo(249)">
            <div class="newsBox">
              <div class="newsImages"><img src="src/assets/images/post3.png" alt="" srcset=""></div>
              <div class="newsDate">
                <div><img src="src/assets/images/date.png" alt=""></div>
                <div class="dateText">28-fevral 09:15</div>
              </div>
              <div class="h5">Maktab bitiruvchilari uchun ochiq eshiklar kuni o‘tkazildi</div>
            </div>
          </div>
          <div class="col-md-4 my-4" role="button" @click="goTo(249)">
            <div class="newsBox">
              <div class="newsImages"><img src="src/assets/images/post3.png" alt="" srcset=""></div>
              <div class="newsDate">
                <div><img src="src/assets/images/date.png" alt=""></div>
                <div class="dateText">28-fevral 09:15</div>
              </div>
              <div class="h5">Chet tili imtihoni uchun my.gov.uz sayti orqali onlayn ro‘yxatdan o‘tish
                bo‘yicha yo‘riqnoma</div>
            </div>
          </div>
          <div class="col-md-4 my-4" role="button" @click="goTo(249)">
            <div class="newsBox">
              <div class="newsImages"><img src="src/assets/images/post4.png" alt="" srcset=""></div>
              <div class="newsDate">
                <div><img src="src/assets/images/date.png" alt=""></div>
                <div class="dateText">28-fevral 09:15</div>
              </div>
              <div class="h5">Davlat test markazi va Britaniya Kengashi o‘rtasida uchrashuv</div>
            </div>
          </div>
          <div class="col-md-4 my-4">
            <div class="newsBox">
              <div class="newsImages"><img src="src/assets/images/post4.png" alt="" srcset=""></div>
              <div class="newsDate">
                <div><img src="src/assets/images/date.png" alt=""></div>
                <div class="dateText">28-fevral 09:15</div>
              </div>
              <div class="h5">Davlat test markazi va Britaniya Kengashi o‘rtasida uchrashuv</div>
            </div>
          </div>
          <div class="col-md-4 my-4">
            <div class="newsBox">
              <div class="newsImages"><img src="src/assets/images/post4.png" alt="" srcset=""></div>
              <div class="newsDate">
                <div><img src="src/assets/images/date.png" alt=""></div>
                <div class="dateText">28-fevral 09:15</div>
              </div>
              <div class="h5">Davlat test markazi va Britaniya Kengashi o‘rtasida uchrashuv</div>
            </div>
          </div>
          <div class="col-md-4 my-4">
            <div class="newsBox">
              <div class="newsImages"><img src="src/assets/images/post4.png" alt="" srcset=""></div>
              <div class="newsDate">
                <div><img src="src/assets/images/date.png" alt=""></div>
                <div class="dateText">28-fevral 09:15</div>
              </div>
              <div class="h5">Davlat test markazi va Britaniya Kengashi o‘rtasida uchrashuv</div>
            </div>
          </div>
          <div class="col-md-4 my-4">
            <div class="newsBox">
              <div class="newsImages"><img src="src/assets/images/post4.png" alt="" srcset=""></div>
              <div class="newsDate">
                <div><img src="src/assets/images/date.png" alt=""></div>
                <div class="dateText">28-fevral 09:15</div>
              </div>
              <div class="h5">Davlat test markazi va Britaniya Kengashi o‘rtasida uchrashuv</div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-1"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.newsBox {
  width: 100%;
  height: auto;
  border-radius: 8px;
  padding: 10px;

  .newsDate {
    margin: 10px 0px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .dateText {
      font-family: 'Inter' sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: #858585;
      padding-left: 10px;
      padding-top: 5px;

    }
  }

  .newsImages {
    width: 100%;
    overflow: hidden;

    img {
      width: 100%;
      object-fit: cover;
    }
  }
}
</style>