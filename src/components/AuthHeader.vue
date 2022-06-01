<script setup lang="ts">

const { locale, availableLocales } = useI18n()
const localeDropdown = ref()

function changelang(lang: string) {
  locale.value = event.target.value
  localeDropdown.value.style.display = 'none'
}
</script>

<template>
  <header class="main inner">

    <header class="main inner">
      <div class="container">
        <div class="navbar">
          <div class="logo">
            <a href="/">
              <img src="/assets/images/logo-blue.svg" alt="InBrain logo">
            </a>
          </div>
          <nav>
            <ul>
              <li>
                <a href="/#main-courses">
                  {{ $t('template.ourCourses') }}
                </a>
              </li>
              <li>
                <a href="/posts">{{ $t('template.Postlar') }}</a>
              </li>
              <li>
                <a href="/forum/news">{{ $t('template.Forum') }}</a>
              </li>
            </ul>
            <div class="dropdown cursor-pointer">
              <a href="#" class="button">
                <img :src="`/assets/images/${$i18n.locale === 'uz_latn' ? 'uz' : 'ru'}.svg`" alt="uz">
                {{ $i18n.locale === 'uz_latn' ? 'O‘zbekcha' : 'Русский' }}
              </a>
              <ul ref="dropdown-list">
                <li>
                  <a @click="changelang('uz_latn')">
                    <img src="/assets/images/uz.svg" alt="uz">
                    O‘zbekcha
                  </a>
                </li>
                <li>
                  <a @click="changelang('ru')">
                    <img src="/assets/images/ru.svg" alt="uz">
                    Русский
                  </a>
                </li>
              </ul>
            </div>
            <div class="menu-btn">
              <a href="#" class="menu-toggler">
                <img src="/assets/images/menu-dark.svg" alt="Menu">
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  </header>
</template>

<style lang="scss" scoped>
.slick-prev,
.slick-next {
  width: 56px;
  height: 56px;
}

.main-banner {
  background: url("/assets/img/pages/main/banner.png") center;
  background-size: cover;
  border-radius: 10px;
  position: relative;

  .banner-tape {
    border-radius: 10px;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
    background: rgba(0, 0, 0, .25);
  }

  .px-2.py-4 {
    position: relative;
    opacity: 0.95;
    z-index: 2;
  }
}

.banner-title {
  font-size: 56px;
  font-weight: 600;
  line-height: 70px;
  margin-bottom: 15px;
  word-break: break-word;
}

.banner-description {
  font-size: 17px;
  line-height: 27px;
  font-weight: 400;
  word-break: break-word;
}

.banner-footer {
  margin-top: 70px;

  button {
    background: none;
    border: none;
    font-size: 18px;
    font-weight: 400;
    cursor: pointer;
  }

  .start-button {
    background: #F4F5F8;
    border-radius: 100px;
  }

  .play-video {
    color: #ffffff;

    span {
      padding: 18px 23px;
      border: 1px solid #ffffff;
      border-radius: 50%;
      margin-right: 5px;
    }
  }
}

.main-features .feature-block {
  background: #F4F5F8;
  height: 350px;
}

.main-opportunities .feature-block {
  span {
    line-height: 30px;
  }
}

.feature-block {
  position: relative;
  margin: 10px 0;

  p {
    font-weight: 500;
    font-size: 26px;
    line-height: 40px;
  }

  div {
    position: absolute;
    bottom: 0;
    right: 0;

    img {
      margin-bottom: -3px;
      width: 250px;
    }
  }
}

.primary-feature-block {
  display: grid;
  grid-template-columns: 66% 32%;
  grid-gap: 2%;
}

.secondary-features-block {
  display: grid;
  grid-template-columns: 32% 32% 32%;
  grid-gap: 2%;
}

.prize-block {
  padding: 40px 0 40px 40px;
  border-radius: 10px;
  background: #F4F5F8;

  div {
    width: 50%;
  }

  .prize-info {
    p.text-xlg {
      font-size: 35px;
    }

    svg {
      margin-right: 10px;
      transform: translateY(5px);
    }

    span.text-lg {
      opacity: .4;
    }

    div>button.prize-btn {
      padding: 10px 20px;
      border-radius: 20px;
      border: none;
      background: #1C84FF;
      color: #ffffff;
      font-size: 18px;
      margin: 10px 0;
    }
  }

  .install-button {
    padding: 10px 30px;
    border-radius: 10px;
    width: 210px;
    border: 1px solid #e5e5e5;
    font-size: 18px;
    color: #000000;
    text-decoration: none;
    display: inline-flex;
    align-items: center;

    svg {
      transform: translateY(-1px);
    }
  }

  .prize-images {
    position: relative;

    img.position-absolute:first-child {
      transform: translateX(150px);
    }

    img.position-absolute:last-child {
      transform: rotate(-90deg);
    }
  }
}

.app-container {
  .prize-block {
    position: relative;
  }

  .app-image {
    position: absolute;
    right: 0;
    bottom: -3px;
    width: 40%;
  }
}

.subjects-container {
  display: grid;
  grid-template-columns: 30% 30% 30%;
  grid-gap: 3%;
  align-items: center;

  .subject-status {
    padding: 5px 10px;
    border-radius: 5px;
  }

  .subject-block {
    border-radius: 10px;
    transition: .3s;

    .text-xlg {
      word-break: break-word;
    }
  }

  .subject-block.enabled {
    border: 1px solid #EBEEF5;
    background: #ffffff;
  }

  .subject-block.disabled {
    background: #F2F2F2;

    .text-xlg {
      opacity: .7;
    }
  }

  .subject-status.enabled {
    background: #EFCC84;
  }

  .subject-status.disabled {
    background: #F4F5F8;
  }
}

.tariff-price {
  height: 80px;
  display: flex;
  align-items: center;
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
}

.tariff-description {
  display: flex;
  height: 160px;
  align-items: start;
  line-height: 24px;
}

.tariff-block {
  padding: 10px 20px;

  >div {
    width: 100%;
    height: 100%;
  }

  .tariff-title {
    word-break: break-word;
  }
}

.tariff-footer {
  a {
    display: inline-block;
    padding: 10px 20px;
    text-decoration: none;
    color: #ffffff;
    border-radius: 100px;
    font-size: .9rem;
    background: #000000;
  }
}

@media (max-width: 1000px) {
  .subjects-container {
    grid-template-columns: 49% 49%;
    grid-gap: 2%;
  }
}

@media (max-width: 830px) {
  .primary-feature-block {
    grid-template-columns: 49% 49%;
  }

  .secondary-features-block {
    grid-template-columns: 100%;
    grid-gap: 0;
  }

  .prize-block {
    padding: 40px;
    border-radius: 10px;
    background: #F4F5F8;

    div:first-child {
      width: 100%;
    }

    div:last-child {
      display: none;
    }
  }
}

@media (max-width: 660px) {
  .subjects-container {
    grid-template-columns: 100%;
    grid-gap: 0;
  }

  .main-banner {
    padding: 20px !important;

    .banner-title {
      font-size: 34px;
      line-height: 40px;
    }
  }
}

@media (max-width: 560px) {
  .main-features .feature-block {
    height: 180px;

    p {
      font-size: 20px;
      line-height: 30px;
    }

    img {
      width: 120px;
    }
  }

  .primary-feature-block {
    grid-template-columns: 100%;
    grid-gap: 0;
  }
}
</style>
