<template>
  <div class="container-fluid">
      <div class="row my-5">
          <div class="col-md-2"></div>
          <div class="col-md-8 m-auto">
              <div class="row">
                  <div class="col-md-6">
                      <div class="boxResultCard">
                        <div class="d-flex justify-content-between innerCardResult">
                            <div>
                                <div class="dateTitile">Sana:</div>
                                <div class="dateResult">20.03.2022</div>
                            </div>
                            <div>
                                <div class="dateTitile">Sarflangan vaqt:</div>
                                <div class="dateResult">01:42:26</div>
                            </div>
                        </div>
                        <div class="d-flex justify-content-start innerCardResult">
                            <div>
                                <div class="dateTitile">Taʼlim yo‘nalishi:</div>
                                <div class="dateResult">Yurispidensiya: Fuqarolik va biznes huquqi</div>
                            </div>
                        </div>
                        <div class="d-flex justify-content-center my-4">
                            <div class="chartResult">
                               <div class="pie innerCardResult" style="--p:75;--b:10px;--c:#1C84FF;">
                                   <div class="dateTitile text-center pb-2">Umumiy bal</div>
                                   <div class="dateResult" style="font-size:30px"><strong>128.8 ball</strong></div>
                                </div> 
                            </div>
                        </div>
                        <div class="d-flex justify-content-center my-5">
                            <div class="ResultMore" @click="test">Batafsil</div>
                        </div>
                      </div>
                  </div>
                  <div class="col-md-6">
                      <div class="boxResultCard">
                        <div class="d-flex justify-content-between innerCardResult">
                            <div>
                                <div class="dateTitile">Sana:</div>
                                <div class="dateResult">20.03.2022</div>
                            </div>
                            <div>
                                <div class="dateTitile">Sarflangan vaqt:</div>
                                <div class="dateResult">01:42:26</div>
                            </div>
                        </div>
                        <div class="d-flex justify-content-start innerCardResult">
                            <div>
                                <div class="dateTitile">Taʼlim yo‘nalishi:</div>
                                <div class="dateResult">Xalqaro munosabatlar</div>
                            </div>
                        </div>
                        <div class="d-flex justify-content-center my-4">
                            <div class="chartResult">
                               <div class="pie innerCardResult" style="--p:80;--b:10px;--c:#1C84FF;">
                                   <div class="dateTitile text-center pb-2">Umumiy bal</div>
                                   <div class="dateResult" style="font-size:30px"><strong>148.8 ball</strong></div>
                                </div> 
                            </div>
                        </div>
                        <div class="d-flex justify-content-center my-5">
                            <div class="ResultMore" @click="test">Batafsil</div>
                        </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="col-md-2"></div>
      </div>
  </div>
</template>

<script  setup lang="ts">
    import { useRouter } from 'vue-router';

    const router = useRouter()

    function test() {
        router.push('/test')
    }
</script>
<style lang="scss" scoped>
    .boxResultCard{
        background: #FFFFFF;
        border: 1px solid #E7E7E7;
        border-radius: 15px;
        margin: 10px;
        .innerCardResult{
            padding:10px 18px;
            .dateTitile{
                font-family: 'Inter' sans-serif ;
                font-style: normal;
                font-weight: 500;
                font-size: 14px;
                line-height: 20px;
                color: #858585;
            }
            .dateResult{
                font-family: 'Inter' sans-serif ;
                font-style: normal;
                font-weight: 500;
                font-size: 16px;
                line-height: 24px;
                color: #000000;
            }
            
        }
        .chartResult{
            .pie {
                --w:300px;
                width: var(--w);
                aspect-ratio: 1;
                position: relative;
                display: inline-grid;
                place-content: center;
                margin: 5px;
                font-size: 25px;
                font-weight: bold;
                font-family: sans-serif;
                background: #E9F3FF;
                border-radius: 50%;
                }
                .pie:before {
                    content: "";
                    position: absolute;
                    border-radius: 50%;
                    inset: 0;
                    background: conic-gradient(var(--c) calc(var(--p)*1%),#0000 0);
                    -webkit-mask:radial-gradient(farthest-side,#0000 calc(99% - var(--b)),#000 calc(100% - var(--b)));
                            mask:radial-gradient(farthest-side,#0000 calc(99% - var(--b)),#000 calc(100% - var(--b)));
                }
        }
        .ResultMore{
            width:75%;
            background: #FFFFFF;
            border: 1px solid #E7E7E7;
            border-radius: 40px;
            text-align: center;
            padding:14px;
            font-weight: bold;
            font-family: sans-serif;
        }
    }
</style>