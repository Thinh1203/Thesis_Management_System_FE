import instance from "../../utils/instance";

export const getAllTopic = async (page) => {
    try {      
        const res = await instance.get(`/topic/getAll?page=${page}`);
        return res.data;
    } catch (error) {
        return (error.response.status);
    }
}

export const addNewTopic = async (newTopic) => {
    try {
        const token = localStorage.getItem("token");
        const headers = {
            'Authorization': `Bearer ${token}`
        };
        
        const res = await instance.post("/topic/addTopic", newTopic, { headers });
        return res.data;
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
        const res = await instance.post("/topic/uploadFile", formData, { headers });
        return res;
    } catch (error) {
        return (error.response.status);
    }
}


export const getOneTopic = async (id) => {
    try {
        const res = await instance.get(`/topic/getOne/${id}`);
        return res.data;
    } catch (error) {
        return (error);
    }
}

export const modifyTopic = async (id, data) => {
    try {
        const token = localStorage.getItem("token");
        const headers = {
            'Authorization': `Bearer ${token}`
        };
        const res = await instance.patch(`/topic/updateTopic/${id}`, data ,{ headers });
        return res.data;
    } catch (error) {
        return (error);
    }
}

export const deleteOne= async (id) => {
    try {
        const token = localStorage.getItem("token");
        const headers = {
            'Authorization': `Bearer ${token}`
        };
        const res = await instance.delete(`/topic/deleteTopic/${id}`, { headers });
        console.log(res.data);
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
        const res = await instance.get(`/topic/search?q=${value}&page=${page}`, { headers });
        return res.data;
    } catch (error) {
        return (error);
    }
}


export const getListTopic = async () => {
    try {
        const token = localStorage.getItem("token");
        const headers = {
            'Authorization': `Bearer ${token}`
        };
        const res = await instance.get("/topic/getListTopic", { headers });
        return res.data;
    } catch (error) {
        return (error.response.status);
    }
}