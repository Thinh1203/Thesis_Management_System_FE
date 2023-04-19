import instance from "../../utils/instance";

export const getAllSemester = async () => {
    try {
        const token = localStorage.getItem("token");
        const headers = {
            'Authorization': `Bearer ${token}`
        };
       
        const res = await instance.get("/council/getAllSemester", { headers });
        return res.data;
    } catch (error) {
        return (error);
    }
}

export const getAllTeacher = async () => {
    try {
        const token = localStorage.getItem("token");
        const headers = {
            'Authorization': `Bearer ${token}`
        };
       
        const res = await instance.get("/council/getAllTeacher", { headers });
        return res.data;
    } catch (error) {
        return (error);
    }
}

export const addCouncil = async (data) => {
    try {
        const token = localStorage.getItem("token");
        const headers = {
            'Authorization': `Bearer ${token}`
        };
        const res = await instance.post("/council/createCouncil", data, { headers });
        return res.data;
    } catch (error) {
        return (error);
    }
}

export const getAll = async (page) => {
    try {
        const token = localStorage.getItem("token");
        const headers = {
            'Authorization': `Bearer ${token}`
        };
        const res = await instance.get(`/council/getAll?page=${page}`, { headers });
        return res.data;
    } catch (error) {
        return (error);
    }
}

export const statusCouncil = async (id, data) => {
    try {
        const token = localStorage.getItem("token");
        const headers = {
            'Authorization': `Bearer ${token}`
        };
        const res = await instance.patch(`/council/councilStatus/${id}`, {status: data}, { headers });
        return res.data;
    } catch (error) {
        return (error);
    }
}

export const updateCouncil = async (id, data) => {
    try {
        const token = localStorage.getItem("token");
        const headers = {
            'Authorization': `Bearer ${token}`
        };
        const res = await instance.patch(`/council/updateCouncil/${id}`, data, { headers });
        return res.data;
    } catch (error) {
        return (error);
    }
}

export const getOneUpdate = async (id) => {
    try {
        const token = localStorage.getItem("token");
        const headers = {
            'Authorization': `Bearer ${token}`
        };
        
        const res = await instance.get(`/council/getOneUpdate/${id}`, { headers });
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
        const res = await instance.delete(`/council/deleteOne/${id}`, { headers });
        return res.data;
    } catch (error) {
        return (error);
    }
}

export const getAllCouncil = async () => {
    try {
        const token = localStorage.getItem("token");
        const headers = {
            'Authorization': `Bearer ${token}`
        };
        const res = await instance.get("/council/getListCouncil", { headers });
        return res.data;
    } catch (error) {
        return (error);
    }
}

export const getOneCouncil = async (id) => {
    try {
        const token = localStorage.getItem("token");
        const headers = {
            'Authorization': `Bearer ${token}`
        };
        const res = await instance.get(`/council/getOne/${id}`, { headers });
        return res.data;
    } catch (error) {
        return (error);
    }
}