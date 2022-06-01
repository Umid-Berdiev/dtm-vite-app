import { ViteSSG } from "vite-ssg";
import { setupLayouts } from "virtual:generated-layouts";
import App from "./App.vue";
import generatedRoutes from "~pages";
import Toast, { PluginOptions } from "vue-toastification";

import "bootstrap";

import "vue-toastification/dist/index.css";
import "~/styles/main.scss";
import axios from "axios";

axios.interceptors.response.use(undefined, async function (error) {
  if (error) {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      // const res = await store.dispatch('refreshToken');
      // if (res.status) {
      //   location.reload();
      //   originalRequest._retry = true;
      // } else {
      //   localStorage.removeItem('token');
      //   localStorage.removeItem('required_details');
      // }
      // localStorage.setItem("accessToken", "");
      // location.replace("/auth/login");
    }
    throw error;
  }
});

const routes = setupLayouts(generatedRoutes);

export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  (ctx) => {
    // install all modules under `modules/`
    // example: ctx.app.use(i18n);
    const { app, router } = ctx;

    console.log("ctx: ", ctx);

    router.beforeEach((to, from, next) => {
      const isAuth = localStorage.getItem("accessToken");

      if (to.meta.requiresAuth) {
        if (!isAuth) {
          router.push("/auth/login");
          // window.location.href = "/auth/login";
        } else next();
      } else next();
    });

    const toastOptions: PluginOptions = {
      // You can set your default options here
    };

    app.use(Toast, toastOptions);

    Object.values(import.meta.globEager("./modules/*.ts")).forEach((i) =>
      i.install?.(ctx)
    );
  }
);
