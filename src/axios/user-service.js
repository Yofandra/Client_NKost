import api from "./api";

export const getUserById = async (userId) => {
  try {
    const response = await api.get(`profile/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
