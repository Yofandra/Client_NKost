import api from "./api";

export const createRoomRequest = async (data) => {
    try {
        const token = localStorage.getItem("token");
        const headers = token? {Authorization: `Bearer ${token}`} : {};
        const response = await api.post("/roomRequest/create", data, {headers});
        return response.data;
    }
    catch (error) {
        throw error;
    }
}