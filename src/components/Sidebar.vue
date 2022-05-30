<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import ColumnsGapIcon from './icons/sidebar/ColumnsGapIcon.vue';
import DtmIcon from './icons/sidebar/DtmIcon.vue';
import SwordsIcon from './icons/sidebar/SwordsIcon.vue';
import PeopleRoundedIcon from './icons/sidebar/PeopleRoundedIcon.vue';
import NotesIcon from './icons/sidebar/NotesIcon.vue';

const { t } = useI18n()
</script>

<template>
  <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-flex sidebar collapse border-right px-0">
    <div class="bg-light" style="width: 4.5rem">
      <ul class="nav nav-pills nav-flush flex-column mb-auto text-center">
        <li class="nav-item">
          <a href="https://app.inbrain.uz/user" class="nav-link py-3 " aria-current="page" :title="t('Bosh sahifa')"
            data-bs-toggle="tooltip" data-bs-placement="right">
            <ColumnsGapIcon />
          </a>
        </li>
        <li>
          <a href="https://app.inbrain.uz/course-tariffs" class="nav-link py-3" :title="t('Kurs tariflari')"
            data-bs-toggle="tooltip" data-bs-placement="right">
            <DtmIcon />
          </a>
        </li>
        <li>
          <a href="https://app.inbrain.uz/competition" class="nav-link py-3 " :title="t('Musobaqa')"
            data-bs-toggle="tooltip" data-bs-placement="right">
            <SwordsIcon />
          </a>
        </li>
        <li>
          <a href="https://app.inbrain.uz/forum/news" class="nav-link py-3 " :title="t('Forum')"
            data-bs-toggle="tooltip" data-bs-placement="right">
            <PeopleRoundedIcon />
          </a>
        </li>
        <li>
          <a href="https://app.inbrain.uz/posts" class="nav-link py-3 " :title="t('Post')" data-bs-toggle="tooltip"
            data-bs-placement="right">
            <NotesIcon />
          </a>
        </li>
      </ul>
    </div>

    <div class="position-sticky pt-3 w-100">
      <ul class="nav flex-column">
        <li class="nav-item active">
          <RouterLink class="nav-link" to="/exams">
            {{ t("Imtixon topshirish") }}
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/exams/results">
            {{ t("Imtihon natijalari") }}
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/otmga-kirish-ballari">
            {{ t("OTMga kirish ballari") }}
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/otm-level">
            {{ t("OTM reytingi") }}
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/news">
            {{ t("Yangiliklar") }}
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/statistics">
            {{ t("Statistika") }}
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
