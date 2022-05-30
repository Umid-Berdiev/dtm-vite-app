import makeRequest from "../makeRequest.js";

export const login = async ({ username, password }) => {
  try {
    const res = await makeRequest({
      url: "/api/users/register",
      method: "post",
      data: {
        username,
        password,
      },
    });

    useStorage("token", res.data.token);
  } catch (err) {
    if (err.message === "WRONG_PASSWORD") {
      //
    }
  }
};

export const logout = async () => {
  await makeRequest({
    url: "/api/auth/logout",
    method: "post",
    headers: { authorization: true },
  });

  useStorage("token", "");
};
