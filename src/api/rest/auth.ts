import makeRequest from "../makeRequest.js";

const token = useStorage("accessToken", "");

export const login = async (payload: any) => {
  try {
    const res = await makeRequest({
      url: "/api/login",
      method: "post",
      data: payload,
    });

    const { email, accessToken } = res.data;

    if (accessToken) {
      token.value = accessToken;
      return { email };
    } else throw new Error("Auth failed");
  } catch (error: any) {
    console.log("Error while logout user: ", error.message);
    throw error;
  }
};

export const logout = async () => {
  try {
    await makeRequest({
      url: "/api/logout",
      method: "post",
      headers: { authorization: true },
    });

    token.value = "";
  } catch (error: any) {
    console.log("Error while logout user: ", error.message);
    throw error;
  }
};
