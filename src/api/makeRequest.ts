import axios from "axios";
import { errorHandler } from "./config";

export default async ({
  url = "/",
  method = "get",
  headers = {},
  params = {},
  data = {},
}) => {
  if (headers && headers.authorization) {
    const token = useStorage("accessToken", "");
    headers.authorization = "Bearer " + token.value;
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
