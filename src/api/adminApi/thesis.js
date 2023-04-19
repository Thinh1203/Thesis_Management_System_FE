import instance from "../../utils/instance";

export const getListThesis = async (page) => {
    try {
        const token = localStorage.getItem("token");
        const headers = {
            'Authorization': `Bearer ${token}`
        };
        const res = await instance.get(`/theses/getAll?page=${page}`, { headers });
        return res.data;
    } catch (error) {
        return (error.response.status);
    }
}

export const addNewThesis = async (newThesis) => {
    try {
        const token = localStorage.getItem("token");
        const headers = {
            'Authorization': `Bearer ${token}`
        };
        const res = await instance.post("/theses/addTheses", newThesis, { headers });
        return res;
    } catch (error) {
        return (error);
    }
}