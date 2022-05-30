import axios from "axios";
import { errorHandler, getToken } from "./config";
// import { useAxios } from "@vueuse/integrations/useAxios";

export default async ({
  url = "/",
  method = "get",
  headers = {},
  params = {},
  data = {},
}) => {
  if (headers && headers.authorization) {
    headers.authorization = "Bearer " + getToken.value;
  }

  try {
    axios.defaults.baseURL = import.meta.env.VITE_API_URL;
    return await axios({
      url,
      method,
      headers,
      params,
      data,
    });
  } catch (error) {
    errorHandler(error, { url, method, headers, params, data });
    throw error;
  }
};
