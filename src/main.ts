import { ViteSSG } from "vite-ssg";
import { setupLayouts } from "virtual:generated-layouts";
import App from "./App.vue";
import generatedRoutes from "~pages";
import Toast, { PluginOptions } from "vue-toastification";

import "bootstrap";

import "vue-toastification/dist/index.css";
import "~/styles/main.scss";

const routes = setupLayouts(generatedRoutes);

export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  (ctx) => {
    // install all modules under `modules/`
    // example: ctx.app.use(i18n);

    const toastOptions: PluginOptions = {
      // You can set your default options here
    };

    ctx.app.use(Toast, toastOptions);

    Object.values(import.meta.globEager("./modules/*.ts")).forEach((i) =>
      i.install?.(ctx)
    );
  }
);
