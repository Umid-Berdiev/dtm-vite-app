import { createPinia } from "pinia";
import { markRaw } from "vue";
import { useRouter } from "vue-router";
import { type UserModule } from "../types";

const router = useRouter();

// Setup Pinia
// https://pinia.esm.dev/
export const install: UserModule = ({ isClient, initialState, app }) => {
  const pinia = createPinia();
  // pinia.use(({ store }) => {
  //   store.router = markRaw(router);
  // });
  app.use(pinia);
  // Refer to
  // https://github.com/antfu/vite-ssg/blob/main/README.md#state-serialization
  // for other serialization strategies.
  if (isClient) pinia.state.value = initialState.pinia || {};
  else initialState.pinia = pinia.state.value;
};
