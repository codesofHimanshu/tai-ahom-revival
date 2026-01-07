import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

export const fetchDynasties = async () => {
  try {
    const res = await axios.get(`${API_BASE_URL}/dynasties`);
    return res.data;
  } catch (err) {
    console.error(err);
    return [];
  }
};
