import instance from "../../utils/instance";

export const createAccount = async (newUser) => {
    try {
        const token = localStorage.getItem("token");
        const headers = {
            'Authorization': `Bearer ${token}`
        };
      
        const res = await instance.post("/teacher/addTeacher", newUser, { headers });
        return res;
    } catch (error) {
        return (error.response.status);
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
        const res = await instance.post("/teacher/uploadFile", formData, { headers });
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

export const getOneTeacher = async (id) => {
    try {
        const token = localStorage.getItem("token");
        const headers = {
            'Authorization': `Bearer ${token}`
        };
        const res = await instance.get(`/teacher/getOne/${id}`, { headers });
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

export const updateStatus = async (id, data) => {
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

export const updateTeacherInformation = async (id, data) => {
    try {
        const token = localStorage.getItem("token");
        const headers = {
            'Authorization': `Bearer ${token}`
        };
        const res = await instance.patch(`/teacher/updateTeacher/${id}`, data ,{ headers });
        return res.data;
    } catch (error) {
        return (error);
    }
}

export const getAllTeacher = async (id, data) => {
    try {
        const token = localStorage.getItem("token");
        const headers = {
            'Authorization': `Bearer ${token}`
        };
        const res = await instance.get("/teacher/getListTeacher" ,{ headers });
        return res.data;
    } catch (error) {
        return (error);
    }
}

export const getAllTopicTutorial = async (id) => {
    try {
        const token = localStorage.getItem('token');
        const headers = {
            'Authorization': `Bearer ${token}`
        };
        const res = await instance.get(`/teacher/getAllTopicTutorial/${id}`, { headers });
        return res.data;
    } catch (err) {
        throw (err);
    }
}
