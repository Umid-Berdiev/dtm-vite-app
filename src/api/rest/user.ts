import makeRequest from "../makeRequest";

export const user = async () => {
  try {
    const res = await makeRequest({
      url: "/api/user",
      headers: { authorization: true },
    });

    return res.data;
  } catch (err) {
    return console.log("Error while fetching user: ", err);
  }
};
