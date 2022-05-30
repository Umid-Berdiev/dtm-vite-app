import makeRequest from "../makeRequest";

export const user = async () => {
  try {
    const res = await makeRequest({
      url: "/api/user",
      headers: { authorization: true },
    });

    return res.data;
  } catch (err) {
    return console.log("error while fetching user: ", err);
  }
};
