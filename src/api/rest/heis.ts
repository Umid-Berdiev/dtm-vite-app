import makeRequest from "../makeRequest";

export const fetchEducationForms = async () => {
  try {
    const res = await makeRequest({
      url: `/api/education_forms`,
      headers: { authorization: true },
    });
    return res.data;
  } catch (err: any) {
    console.log("Error while fetching education forms: ", err.message);
    throw err;
  }
};

export const fetchEducationLanguages = async () => {
  try {
    const res = await makeRequest({
      url: `/api/education_languages`,
      headers: { authorization: true },
    });
    return res.data;
  } catch (err: any) {
    console.log("Error while fetching education languages: ", err.message);
    throw err;
  }
};

export const filterHeiByYear = async (params: any) => {
  try {
    const res = await makeRequest({
      url: `/api/heis/filter`,
      params,
      headers: { authorization: true },
    });
    return res.data;
  } catch (err: any) {
    console.log("Error while fetching filtered heis: ", err.message);
    throw err;
  }
};
