import api from "./api";

export const getRoomByIdUser = async () => {
    try {
        const token = localStorage.getItem("token");
        const headers = token? {Authorization: `Bearer ${token}`} : {};
        const response = await api.get("/room/user", {headers});
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const getRoomByIdKost = async (id_kost) => {
    try {
        const token = localStorage.getItem("token");
        const headers = token? {Authorization: `Bearer ${token}`} : {};
        const response = await api.get(`/room/kost/${id_kost}`, {headers});
        return response.data;
    }
    catch (error) {
        throw error;
    }
}