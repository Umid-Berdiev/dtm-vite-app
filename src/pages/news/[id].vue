<script  setup lang="ts">
const router = useRouter()
function news() {
  router.push('/news')
}
</script>

<template>
  <div class="container-fluid">
    <div class="row mt-4">
      <div class="col-md-2">
        <BackButton class="btn-outline-secondary" />
      </div>
      <div class="col-md-8 m-auto">
        <div class="newsInnerImage">
          <img src="/src/assets/images/postInner.png" />
        </div>
        <div>
          <div class="newsDate">
            <div><img src="/src/assets/images/date.png" alt=""></div>
            <div class="dateText">28-fevral 09:15</div>
          </div>
        </div>
        <div>
          <p class="newsText"><a>Davlat test markazi va Britaniya Kengashi o‘rtasida uchrashuv</a></p>
        </div>
        <div>
          <p>
            2022-yil 21-fevral kuni Davlat test markazi va Britaniya Kengashi (British Council) o‘rtasida hamkorlikni
            yanada rivojlantirish bo‘yicha uchrashuv bo‘lib o‘tdi.
          </p>
          <p>
            Uchrashuvda Davlat test markazi direktori M.Karimov, direktor o‘rinbosarlari S.Radjabov hamda Sh.Batirov,
            Chet tilini bilish va egallash darajasini baholash boshqarmasi boshlig‘i J.Nurmatov, Davlat test markazi
            huzuridagi Ilmiy-o‘quv amaliy markazi boshlig‘i A.Baratov, Xalqaro reytinglar bo‘yicha faoliyatni amalga
            oshirish bo‘limi bosh mutaxassisi N.Lutfiyev, O‘zbekistondagi Britaniya Kengashi direktori Denis Veddingem
            hamda Britaniya Kengashi vakillari Viktoriya Klark, Joanna Mooteram, J.Gulyamova, A.Maksakov, A.Sadikov
            ishtirok etdi.
          </p>
          <p>
            Uchrashuvda “O‘qituvchilar uchun Aptis” test sinovini yanada ommalashtirish, test topshiruvchilarga ushbu
            test yuzasidan to‘liq ma’lumot berish, Britaniya Kengashi vakillari bilan ovozli chatlar tashkil etish
            orqali savollarga javob olish kabi fikrlar ilgari surildi.
          </p>
          <p>
            Shuningdek, uchrashuv mobaynida hamkorlik doirasini yanada kengaytirish va belgilangan hamkorlik sohalarini
            amalga oshirish maqsadida tegishli ishlarni amalga oshirishga kelishib olindi.
          </p>
        </div>
      </div>
      <div class="col-md-2"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.newsInnerImage {
  width: 100%;
  height: auto;
  border-radius: 10px;

  img {
    width: 100%;
  }
}

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

.newsText {
  a {
    font-family: 'Inter' sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 32px;
    color: #000000;
    text-decoration: none;
  }
}
</style>