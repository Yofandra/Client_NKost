import api from "./api";

export const getLocationByIdKost = async (idKost) => {
    try {
        const token = localStorage.getItem("token");
        const headers = token ? { Authorization: `Bearer ${token}` } : {};
        const response = await api.get(`location/kost/${idKost}`, { headers });
        return response.data;
    } catch (error) {
        throw error;
    }
};
