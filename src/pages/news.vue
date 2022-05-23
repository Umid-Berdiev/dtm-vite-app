
<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-11">
                <div class="row">
                    <div class="col-md-4 my-4">
                        <div class="newsBox" @click="innernews">
                            <div class="newsImages"><img src="src/assets/images/dtmpost.png" alt="" srcset=""></div>
                            <div class="newsDate"><div><img src="src/assets/images/date.png" alt=""></div><div class="dateText">28-fevral 09:15</div></div>
                            <div class="newsText"><a @click="innernews">Davlat test markazi va Britaniya Kengashi o‘rtasida uchrashuv</a></div>
                        </div>
                    </div>
                    <div class="col-md-4 my-4" @click="innernews">
                        <div class="newsBox">
                            <div class="newsImages"><img src="src/assets/images/pos2.png" alt="" srcset=""></div>
                            <div class="newsDate"><div><img src="src/assets/images/date.png" alt=""></div><div class="dateText">28-fevral 09:15</div></div>
                            <div class="newsText"><a href="">Davlat test markazi va Britaniya Kengashi o‘rtasida uchrashuv</a></div>
                        </div>
                    </div>
                    <div class="col-md-4 my-4" @click="innernews">
                        <div class="newsBox">
                            <div class="newsImages"><img src="src/assets/images/post3.png" alt="" srcset=""></div>
                            <div class="newsDate"><div><img src="src/assets/images/date.png" alt=""></div><div class="dateText">28-fevral 09:15</div></div>
                            <div class="newsText"><a href="">Maktab bitiruvchilari uchun ochiq eshiklar kuni o‘tkazildi</a></div>
                        </div>
                    </div>
                    <div class="col-md-4 my-4" @click="innernews">
                        <div class="newsBox">
                            <div class="newsImages"><img src="src/assets/images/post3.png" alt="" srcset=""></div>
                            <div class="newsDate"><div><img src="src/assets/images/date.png" alt=""></div><div class="dateText">28-fevral 09:15</div></div>
                            <div class="newsText"><a href="">Chet tili imtihoni uchun my.gov.uz sayti orqali onlayn ro‘yxatdan o‘tish bo‘yicha yo‘riqnoma</a></div>
                        </div>
                    </div>
                    <div class="col-md-4 my-4" @click="innernews">
                        <div class="newsBox">
                            <div class="newsImages"><img src="src/assets/images/post4.png" alt="" srcset=""></div>
                            <div class="newsDate"><div><img src="src/assets/images/date.png" alt=""></div><div class="dateText">28-fevral 09:15</div></div>
                            <div class="newsText"><a href="">Davlat test markazi va Britaniya Kengashi o‘rtasida uchrashuv</a></div>
                        </div>
                    </div>      
                    <div class="col-md-4 my-4">
                        <div class="newsBox">
                            <div class="newsImages"><img src="src/assets/images/post4.png" alt="" srcset=""></div>
                            <div class="newsDate"><div><img src="src/assets/images/date.png" alt=""></div><div class="dateText">28-fevral 09:15</div></div>
                            <div class="newsText"><a href="">Davlat test markazi va Britaniya Kengashi o‘rtasida uchrashuv</a></div>
                        </div>
                    </div>      
                    <div class="col-md-4 my-4">
                        <div class="newsBox">
                            <div class="newsImages"><img src="src/assets/images/post4.png" alt="" srcset=""></div>
                            <div class="newsDate"><div><img src="src/assets/images/date.png" alt=""></div><div class="dateText">28-fevral 09:15</div></div>
                            <div class="newsText"><a href="">Davlat test markazi va Britaniya Kengashi o‘rtasida uchrashuv</a></div>
                        </div>
                    </div>      
                    <div class="col-md-4 my-4">
                        <div class="newsBox">
                            <div class="newsImages"><img src="src/assets/images/post4.png" alt="" srcset=""></div>
                            <div class="newsDate"><div><img src="src/assets/images/date.png" alt=""></div><div class="dateText">28-fevral 09:15</div></div>
                            <div class="newsText"><a href="">Davlat test markazi va Britaniya Kengashi o‘rtasida uchrashuv</a></div>
                        </div>
                    </div>      
                    <div class="col-md-4 my-4">
                        <div class="newsBox">
                            <div class="newsImages"><img src="src/assets/images/post4.png" alt="" srcset=""></div>
                            <div class="newsDate"><div><img src="src/assets/images/date.png" alt=""></div><div class="dateText">28-fevral 09:15</div></div>
                            <div class="newsText"><a href="">Davlat test markazi va Britaniya Kengashi o‘rtasida uchrashuv</a></div>
                        </div>
                    </div>      
                </div>
            </div>
            <div class="col-md-1"></div>    
        </div>
    </div>
</template>

<script  setup lang="ts">
    import { useRouter } from 'vue-router';

    const router = useRouter()

    function innernews() {
        router.push('/news-inner')
    }
</script>

<style lang="scss" scoped>
    .newsBox{
        width:100%;
        height: auto;
        border-radius: 8px;
        padding:10px;
        .newsDate{
          margin: 10px 0px;
          display: flex;
          justify-content: flex-start;
          align-items: center;
        .dateText{
            font-family: 'Inter' sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
            color: #858585;
            padding-left:10px;
            padding-top: 5px;

        }
    }
    .newsText{
        a{
            font-family: 'Inter'sans-serif;
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
            color: #000000;
            text-decoration: none;
        }
    }
    .newsImages{
        width: 100%;
        overflow: hidden;
        img{
            width: 100%;
            object-fit: cover;
        }
    }
    }
    
</style>