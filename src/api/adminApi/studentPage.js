import instance from "../../utils/instance";

export const addStudent = async (newUser) => {
    try {
        const token = localStorage.getItem("token");
        const headers = {
            'Authorization': `Bearer ${token}`
        };
       
        const res = await instance.post("/student/addStudent", newUser, { headers });
        return res;
    } catch (error) {
        return (error);
    }
}

export const uploadFile = async (file) => {
    try {
        const token = localStorage.getItem("token");
        const headers = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
        };
        const formData = new FormData();
        formData.append('csv', file);
        const res = await instance.post("/student/uploadFile", formData, { headers });
        return res;
    } catch (error) {
        return (error);
    }
}

export const getListStudent = async (page) => {
    try {
        const token = localStorage.getItem("token");
        const headers = {
            'Authorization': `Bearer ${token}`
        };
        const res = await instance.get(`/student/getAll?page=${page} `, { headers });
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
        const res = await instance.get(`/student/getOne/${id}`, { headers });
        return res.data;
    } catch (error) {
        return (error);
    }
}

export const search = async (value,page) => {
    try {
        const token = localStorage.getItem("token");
        const headers = {
            'Authorization': `Bearer ${token}`
        };
        const res = await instance.get(`/student/search?q=${value}&page=${page}`, { headers });
        return res.data;
    } catch (error) {
        return (error);
    }
}

export const updateStatus = async (id, data) => {
    try {
        const token = localStorage.getItem("token");
        const headers = {
            'Authorization': `Bearer ${token}`
        };
        const res = await instance.patch(`/student/accountStatus/${id}`, {data}, { headers });

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
        const res = await instance.delete(`/student/deleteOne/${id}`, { headers });
        return res.data;
    } catch (error) {
        return (error);
    }
}

export const roleAccount = async () => {
    try {
        const token = localStorage.getItem("token");
        const headers = {
            'Authorization': `Bearer ${token}`
        };
        const res = await instance.get("/role/getAll", { headers });
        return res.data;
    } catch (error) {
        return (error);
    }
}

export const updateStudentInformation = async (id, data) => {
    try {
        const token = localStorage.getItem("token");
        const headers = {
            'Authorization': `Bearer ${token}`
        };
        const res = await instance.patch(`/student/updateStudent/${id}`, data ,{ headers });
        return res.data;
    } catch (error) {
        return (error);
    }
}


export const getAllStudent = async (id, data) => {
    try {
        const token = localStorage.getItem("token");
        const headers = {
            'Authorization': `Bearer ${token}`
        };
        const res = await instance.get("/student/getListStudent" ,{ headers });
        return res.data;
    } catch (error) {
        return (error);
    }
}



