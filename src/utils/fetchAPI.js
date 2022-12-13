import axios from "axios";

export const BASE_URL = "https://api.dev.classforma.com:5010";

export const fetchFromAPI = async (url) => {
  const options = {
    params: { app_id: "menu_parser" },
  };
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};

// export const fetchDocumentAPI = async (url, task_uuid) => {
//   const options = {
//     params: {
//       field_key: "menu",
//       task_uuid: task_uuid,
//     },
//   };
//   const { data } = await axios.get(`${BASE_URL}/${url}`, options);
//   return data;
// };
