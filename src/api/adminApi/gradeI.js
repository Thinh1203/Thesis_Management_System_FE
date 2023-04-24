import instance from "../../utils/instance";

export const getList = async () => {
    try {
        const token = localStorage.getItem("token");
        const headers = {
            'Authorization': `Bearer ${token}`
        };
       
        const res = await instance.get("/grade/getAll", { headers });
        return res.data;
    } catch (error) {
        return (error);
    }
}

export const download = async (id) => {
    try {
        const res = await instance.get(`/grade/downloadFile/${id}`, { responseType: 'blob' });
        return res;
    } catch (error) {
        return error.response.status;
    }
};


export const fileName = async (id) => {
    try {
        const res = await instance.get(`/grade/fileName/${id}`);
        return res.data;
    } catch (error) {
        return error.response.status;
    }
};