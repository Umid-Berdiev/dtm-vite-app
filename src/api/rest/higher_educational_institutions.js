import makeRequest from "../makeRequest";

export const fetchHeiList = async () => {
  try {
    const res = await makeRequest({
      url: `/api/higher_educational_institutions/`,
      headers: { authorization: true },
    });

    return res.data;
  } catch (err) {
    console.log(
      "Error while fetching higher educational institutions list: ",
      err
    );
    throw err;
  }
};

export const fetchDirections = async (heiId) => {
  try {
    const res = await makeRequest({
      url: `/api/directions/`,
      params: {
        id: heiId,
      },
      headers: { authorization: true },
    });

    return res.data;
  } catch (err) {
    console.log("Error while fetching directions list: ", err);
    throw err;
  }
};

export const fetchSubjects = async () => {
  try {
    const res = await makeRequest({
      url: `/api/subjects/`,
      headers: { authorization: true },
    });
    return res.data;
  } catch (error) {
    console.log("Error while fetching subjects list: ", error);
    throw error;
  }
};

export const fetchQuestions = async (subjectIds) => {
  try {
    const res = await makeRequest({
      url: `/api/questions/`,
      params: {
        ids: subjectIds,
      },
      headers: { authorization: true },
    });

    return res.data;
  } catch (error) {
    console.log("Error while fetching questions list: ", error);
    throw error;
  }
};
