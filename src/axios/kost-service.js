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