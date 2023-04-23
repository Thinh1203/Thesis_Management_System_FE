import instance from "../utils/instance";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import jwt_decode from 'jwt-decode';

export const changePassword = async (password) => {
    try {
        const token = localStorage.getItem("token");
        const headers = {
            'Authorization': `Bearer ${token}`
        };

        const decodedToken = jwt_decode(token);
        const { id } = decodedToken;
        const result = await instance.patch(`/student/changePassword/${id}`, password, { headers });
        return result.data;
    } catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
            return toast.error(error.response.data.message);
        }
    }
}

export const getTheses = async () => {
    try {
        const token = localStorage.getItem("token");
        const headers = {
            'Authorization': `Bearer ${token}`
        };
        const result = await instance.get("/student/getTheses", { headers });
        return result.data;
    } catch (error) {
        return error;
    }
}

export const getThesesDetail = async (id) => {
    try {
        const token = localStorage.getItem("token");
        const headers = {
            'Authorization': `Bearer ${token}`
        };
        const result = await instance.get(`/student/getThesesDetail/${id}`, { headers });
        return result.data;
    } catch (error) {
        return error;
    }
}

export const uploadFile = async (id, file) => {
    try {
        const token = localStorage.getItem("token");
        const headers = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
        };
        const formData = new FormData();
        formData.append('file', file);
        const res = await instance.patch(`/theses/uploadFile/${id}`, formData, { headers });
        return res.data;
    } catch (error) {
        return (error.response.status);
    }
}


export const download = async (id) => {
    try {
        const res = await instance.get(`/theses/downloadFile/${id}`, { responseType: 'blob' });
        return res;
    } catch (error) {
        return error.response.status;
    }
};


export const fileName = async (id) => {
    try {
        const res = await instance.get(`/theses/fileName/${id}`);
        return res.data;
    } catch (error) {
        return error.response.status;
    }
};
