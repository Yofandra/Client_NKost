import api from "./api";

export const getRatingByIdKost = async (idKost) => {
    try {
        const token = localStorage.getItem("token");
        const headers = token ? { Authorization: `Bearer ${token}` } : {};
        const response = await api.get(`rating/kost/${idKost}`, { headers });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getRatingByUserId = async () => {
    try {
        const token = localStorage.getItem("token");
        const headers = token ? { Authorization: `Bearer ${token}` } : {};
        const response = await api.get(`rating/user`, { headers });
        return response.data;
    } catch (error) {
        throw error;
    }
}