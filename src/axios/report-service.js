import api from "./api";

export const getReportByIdUser = async () => {
    try {
        const token = localStorage.getItem("token");
        const headers = token? {Authorization: `Bearer ${token}`} : {};
        const response = await api.get("/report/user", {headers});
        return response.data;
    }catch (error) {
        throw error;
    }
}   

export const updateReport = async (id, data) => {
    try {
        const token = localStorage.getItem("token");
        const headers = token? {Authorization: `Bearer ${token}`} : {};
        const response = await api.put(`/report/${id}`, data, {headers});
        return response.data;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
}

export const deleteReport = async (id) => {
    try {
        const token = localStorage.getItem("token");
        const headers = token? {Authorization: `Bearer ${token}`} : {};
        const response = await api.delete(`/report/${id}`, {headers});
        return response.data;
    }
    catch (error) {
        throw error;
    }
}

export const createReport = async (data) => {
    try {
        const token = localStorage.getItem("token");
        const headers = token? {Authorization: `Bearer ${token}`} : {}; 
        const response = await api.post("/report", data, {headers});
        return response.data;
    }
    catch (error) {
        throw error;
    }
}