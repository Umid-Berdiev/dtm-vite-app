import makeRequest from "../makeRequest";

export const fetchRegions = async () => {
  try {
    const res = await makeRequest({
      url: `/api/regions`,
    });
    return res.data;
  } catch (err: any) {
    console.log("error while fetching regions: ", err.message);
    throw err;
  }
};
