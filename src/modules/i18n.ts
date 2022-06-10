import { createI18n } from "vue-i18n";
import { type UserModule } from "../types";

// Import i18n resources
// https://vitejs.dev/guide/features.html#glob-import
//
// Don't need this? Try vitesse-lite: https://github.com/antfu/vitesse-lite
const messages = Object.fromEntries(
  Object.entries(import.meta.globEager("../locales/*.json")).map(
    ([key, value]) => {
      return [key.slice(11, -5), value.default];
    }
  )
);

export const install: UserModule = ({ app }) => {
  const i18n = createI18n({
    legacy: false,
    locale: "uz",
    fallbackLocale: "uz", // set fallback locale
    messages,
    globalInjection: true,
  });

  app.use(i18n);
};
