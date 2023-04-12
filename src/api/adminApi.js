import instance from "../utils/instance";
import jwt_decode from "jwt-decode";
export const createAccount = async (newUser) => {
    try {
        const token = localStorage.getItem("token");
        const headers = {
            'Authorization': `Bearer ${token}`
        };
      
        const res = await instance.post("/teacher/addTeacher", newUser, { headers });
        console.log(res);
        return res;
    } catch (error) {
        return (error.response.status);
    }
}

export const getListTeacher = async (page) => {
    try {
        const token = localStorage.getItem("token");
        const headers = {
            'Authorization': `Bearer ${token}`
        };
        const res = await instance.get(`/teacher/getAll?page=${page} `, { headers });
        return res.data;
    } catch (error) {
        return (error);
    }
}

export const search = async (value) => {
    try {
        const token = localStorage.getItem("token");
        const headers = {
            'Authorization': `Bearer ${token}`
        };

        const res = await instance.get(`/teacher/search?q=${value}`, { headers });
        return res.data;
    } catch (error) {
        return (error);
    }
}

export const updateTeacher = async (id, data) => {
    try {
        const token = localStorage.getItem("token");
        const headers = {
            'Authorization': `Bearer ${token}`
        };
        const res = await instance.patch(`/teacher/accountStatus/${id}`, {data}, { headers });
    
        return res.data;
    } catch (error) {
        return (error);
    }
}


export const deleteAccount = async (id) => {
    try {
        const token = localStorage.getItem("token");
        const headers = {
            'Authorization': `Bearer ${token}`
        };
        const res = await instance.delete(`/teacher/deleteOne/${id}`, { headers });
        console.log(res);
        return res.data;
    } catch (error) {
        return (error);
    }
}