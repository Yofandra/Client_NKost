import api from "./api";

export const getUserById = async (userId) => {
  try {
    const token = localStorage.getItem("token");
    const headers = token? {Authorization: `Bearer ${token}`} : {};
    const response = await api.get(`profile/id/${userId}`, {headers});
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllUser = async () => {
  try {
    const token = localStorage.getItem("token");
    const headers = token? {Authorization: `Bearer ${token}`} : {};
    const response = await api.get(`profile`, {headers});
    return response.data;
  } catch (error) {
    throw error;
  }
}