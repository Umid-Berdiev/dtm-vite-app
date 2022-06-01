import { useToast } from "vue-toastification";

const toast = useToast();

export const errorHandler = (
  err: any,
  { url, method, headers, params, data }: any
) => {
  // do smth to inform user about error
  toast.error(err.message);
};
