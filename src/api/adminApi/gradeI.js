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

export const uploadFile = async (file) => {
    try {
        const token = localStorage.getItem("token");
        const headers = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
        };
        const formData = new FormData();
        formData.append('file', file);
        const res = await instance.post("/grade/uploadFile", formData, { headers });
        return res.data;
    } catch (error) {
        return (error.response.status);
    }
}

export const getOne = async () => {
    try {
        const token = localStorage.getItem("token");
        const headers = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
        };
        const res = await instance.get("/grade/getOne", { headers });
        return res.data;
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


export const browse = async (data, id) => {
    try {
        const token = localStorage.getItem("token");
        const headers = {
            'Authorization': `Bearer ${token}`
        };
        const status = { status: data }; 
        const res = await instance.patch(`/grade/updateOne/${id}`, status, { headers });
        return res.data;
    } catch (error) {
        return error;
    }
};
