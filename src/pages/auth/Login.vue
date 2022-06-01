<script setup lang="ts">
import { login } from "~/api";
import { useUserStore } from "~/stores/user";

const { t } = useI18n()
const router = useRouter()
const userStore = useUserStore();
const token = useStorage('accessToken', '')

!_.isEmpty(token) && router.push('/')

async function onSubmit(event: Event) {
  const values = Object.fromEntries(new FormData(event.target))
  const res = await login(values)
  userStore.user.email = res.email
  router.push('/')
}
</script>

<template>
  <div class="container-fluid w-100">
    <div class="row justify-content-center mt-5">
      <div class="col-md-6 col-xl-3">
        <form @submit.prevent="onSubmit">
          <div class="mb-3 row">
            <label for="inputEmail" class="col-sm-1-12 col-form-label">Email</label>
            <div class="col-sm-1-12">
              <input required type="email" class="form-control rounded-pill" name="email" id="inputEmail"
                :placeholder="t('enter_email')">
            </div>
          </div>
          <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-1-12 col-form-label">Password</label>
            <div class="col-sm-1-12">
              <input required type="password" class="form-control rounded-pill" name="password" id="inputPassword"
                :placeholder="t('enter_password')">
            </div>
          </div>
          <div class="mb-3 row">
            <div class="col-auto ms-auto">
              <button type="submit" class="btn btn-outline-primary rounded-pill">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: auth
</route>
