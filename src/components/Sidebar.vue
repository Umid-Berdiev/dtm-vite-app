<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-flex sidebar collapse border-right px-0">
    <div class="bg-light px-2 pt-3 border-end">
      <ul class="nav nav-pills nav-flush flex-column mb-auto text-center gap-3">
        <li class="nav-item">
          <a href="https://app.inbrain.uz/user" class="nav-link" aria-current="page" :title="t('home_page')"
            data-bs-toggle="tooltip" data-bs-placement="right">
            <ColumnsGapIcon />
          </a>
        </li>
        <li>
          <a href="https://app.inbrain.uz/course-tariffs" class="nav-link" :title="t('course_tariffs')"
            data-bs-toggle="tooltip" data-bs-placement="right">
            <DtmIcon />
          </a>
        </li>
        <li>
          <a href="https://app.inbrain.uz/competition" class="nav-link" :title="t('competition')"
            data-bs-toggle="tooltip" data-bs-placement="right">
            <SwordsIcon />
          </a>
        </li>
        <li>
          <a href="https://app.inbrain.uz/forum/news" class="nav-link" :title="t('forum')" data-bs-toggle="tooltip"
            data-bs-placement="right">
            <PeopleRoundedIcon />
          </a>
        </li>
        <li>
          <a href="https://app.inbrain.uz/posts" class="nav-link" :title="t('posts')" data-bs-toggle="tooltip"
            data-bs-placement="right">
            <NotesIcon />
          </a>
        </li>
      </ul>
    </div>

    <div class="position-sticky pt-3 w-100 border-end">
      <ul class="nav flex-column">
        <li class="nav-item active">
          <RouterLink class="nav-link" to="/exams">
            {{ t("pass_exam") }}
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/exams/results">
            {{ t("exam_results") }}
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/otm/entrance-exam-scores">
            {{ t("hei_entry_scores") }}
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/otm/ratings">
            {{ t("hei_ratings") }}
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/news">
            {{ t("news") }}
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/statistics">
            {{ t("statistics") }}
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
