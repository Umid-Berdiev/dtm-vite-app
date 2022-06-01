<script setup lang="ts">
import { useUserStore } from '../stores/user'

const user = useUserStore()
const name = ref(user.savedName)

const router = useRouter()
const go = () => {
  if (name)
    router.push(`/hi/${encodeURIComponent(name)}`)
}

const { t } = useI18n()
</script>

<template>
  <div class="container-fluid">
    <div class="row mt-5">
      <div class="col-md-12 mt-5">
        <div class="cardTable">
          <div class="tableInner">
            <table class="w-100">
              <thead>
                <tr>
                  <th class="tabelHeader" style="border-bottom: none;padding: 10px"> Oliy ta’lim muassasalari</th>
                  <th class="tabelHeader" style="border-bottom: none;padding: 10px"><span class="elips_otm"></span>
                    Mutaxassisliklar soni</th>
                  <th class="tabelHeader" style="border-bottom: none;padding: 10px"><span
                      class="elips_otm_center"></span> O‘rtacha kirish balli</th>
                  <th class="tabelHeader" style="border-bottom: none;padding: 10px"><span class="elips_otm_all"></span>
                    Umumiy qabul kvotasi</th>
                </tr>
              </thead>
              <tbody>
                <tr class="tbodyTable">
                  <td scope="row">Andijon davlat tibbiyot instituti</td>
                  <td class="TdNumber"><span class="elips_otm"></span> 8</td>
                  <td class="TdNumber"><span class="elips_otm_center"></span> 125</td>
                  <td class="TdNumber"><span class="elips_otm_all"></span> 145</td>
                </tr>
                <tr class="tbodyTable">
                  <td scope="row">Andijon davlat universiteti</td>
                  <td class="TdNumber"><span class="elips_otm"></span> 13</td>
                  <td class="TdNumber"><span class="elips_otm_center"></span> 152</td>
                  <td class="TdNumber"><span class="elips_otm_all"></span> 154</td>
                </tr>
                <tr class="tbodyTable">
                  <td scope="row">Andijon davlat universitetining Pedagogika instituti</td>
                  <td class="TdNumber"><span class="elips_otm"></span> 15</td>
                  <td class="TdNumber"><span class="elips_otm_center"></span> 321</td>
                  <td class="TdNumber"><span class="elips_otm_all"></span> 547</td>
                </tr>
                <tr class="tbodyTable">
                  <td scope="row">Andijon iqtisodiyot va qurilish instituti</td>
                  <td class="TdNumber"><span class="elips_otm"></span> 2</td>
                  <td class="TdNumber"><span class="elips_otm_center"></span> 152</td>
                  <td class="TdNumber"><span class="elips_otm_all"></span> 332</td>
                </tr>
                <tr class="tbodyTable">
                  <td scope="row">Andijon mashinasozlik instituti</td>
                  <td class="TdNumber"><span class="elips_otm"></span> 22</td>
                  <td class="TdNumber"><span class="elips_otm_center"></span> 231</td>
                  <td class="TdNumber"><span class="elips_otm_all"></span> 325</td>
                </tr>
                <tr class="tbodyTable">
                  <td scope="row">Andijon qishloq xo‘jaligi va agrotexnologiyalar instituti</td>
                  <td class="TdNumber"><span class="elips_otm"></span> 65</td>
                  <td class="TdNumber"><span class="elips_otm_center"></span> 114</td>
                  <td class="TdNumber"><span class="elips_otm_all"></span> 241</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.cardTable {

  width: 100%;
  height: 400px;
  position: relative;

  .tableInner {
    position: absolute;
    background-color: white;
    border-radius: 12px;
    width: 98%;
    top: 40px;
    left: 50%;
    transform: translateX(-50%);

    table {
      margin: 0 auto;
      width: 100%;

      thead {
        tr {
          th.tabelHeader {
            font-family: 'Inter' sans-serif;
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 20px;
            color: #858585;
            border-bottom: none !important;
          }
        }
      }

      tbody {

        //background-color: white;
        tr.tbodyTable {
          td {
            font-family: 'Inter' sans-serif;
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
            color: #000000;
            padding: 15px;
          }

          .TdNumber {
            font-family: 'Inter' sans-serif;
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 20px;
            color: #858585;

          }

          border-bottom: 1px solid rgb(0, 0, 0, 0.1);
        }

        tr.tbodyTable:hover {
          background-color: #F9F9F9;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
