import instance from "../../utils/instance";

export const getAll = async (page) => {
    try {
        const token = localStorage.getItem("token");
        const headers = {
            'Authorization': `Bearer ${token}`
        };
       
        const res = await instance.get(`/schoolYear/getAll?page=${page}`, { headers });
        return res.data;
    } catch (error) {
        return (error);
    }
}


export const addSchoolYear = async (data) => {
    try {
        const token = localStorage.getItem("token");
        const headers = {
            'Authorization': `Bearer ${token}`
        };
        const res = await instance.post(`/schoolYear/addYear`, data, { headers });
        return res.data;
    } catch (error) {
        return (error);
    }
}

export const deleteOne = async (id) => {
    try {
        const token = localStorage.getItem("token");
        const headers = {
            'Authorization': `Bearer ${token}`
        };
        const res = await instance.delete(`/schoolYear/deleteOne/${id}`, { headers });
        return res.data;
    } catch (error) {
        return (error);
    }
}

export const updateOne = async (id, data) => {
    try {
        const token = localStorage.getItem("token");
        const headers = {
            'Authorization': `Bearer ${token}`
        };
        const res = await instance.patch(`/schoolYear/updateYear/${id}`,data, { headers });
        return res.data;
    } catch (error) {
        return (error);
    }
}

export const getOne = async (id) => {
    try {
        const token = localStorage.getItem("token");
        const headers = {
            'Authorization': `Bearer ${token}`
        };
        const res = await instance.get(`/schoolYear/getOne/${id}`, { headers });
        return res.data;
    } catch (error) {
        return (error);
    }
}

export const getAllSemester = async () => {
    try {
        const token = localStorage.getItem("token");
        const headers = {
            'Authorization': `Bearer ${token}`
        };
        const res = await instance.get("/schoolYear/getAllSemester" ,{ headers });
        return res.data;
    } catch (error) {
        return (error);
    }
}

export const getListSemester = async () => {
    try {
        const token = localStorage.getItem("token");
        const headers = {
            'Authorization': `Bearer ${token}`
        };
        const res = await instance.get("/schoolYear/getListSemester" ,{ headers });
        return res.data;
    } catch (error) {
        return (error);
    }
}