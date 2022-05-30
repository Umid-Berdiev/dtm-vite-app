import { useStorage } from "@vueuse/core";
import { ref } from "vue";
import { useToast } from "vue-toastification";

const toast = useToast();
const token = ref("");

export const setToken = (value) => {
  token.value = value;
  useStorage("token", value);
};

export const getToken = () => token.value || useStorage("token", "");
export const errorHandler = (err, { url, method, headers, params, data }) => {
  // do smth to inform user about error
  toast.error(data);
};
