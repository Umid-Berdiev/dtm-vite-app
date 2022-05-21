import { useStorage } from "@vueuse/core";
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
    headers.authorization = "Bearer " + useStorage("token");
  }

  try {
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
