import api from "./api";

export const getKostByRoom = async () => {
    try {
        const token = localStorage.getItem("token");
        const headers = token? {Authorization: `Bearer ${token}`} : {};
        const response = await api.get("/kost/mykost", {headers});
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const getKost = async () => {
    try {
        const token = localStorage.getItem("token");
        const headers = token? {Authorization: `Bearer ${token}`} : {};
        const response = await api.get("/kost", {headers});
        return response.data;
    }
    catch (error) {
        throw error;
    }
}

export const getKostById = async (id) => {
    try {
        const token = localStorage.getItem("token");
        const headers = token? {Authorization: `Bearer ${token}`} : {};
        const response = await api.get(`/kost/id/${id}`, {headers});
        return response.data;
    }
    catch (error) {
        throw error;
    }
}