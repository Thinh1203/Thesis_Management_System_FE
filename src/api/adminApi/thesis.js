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

export const getAllListTheses = async (page) => {
    try {
        const token = localStorage.getItem("token");
        const headers = {
            'Authorization': `Bearer ${token}`
        };
        const res = await instance.get(`/theses/getAllListTheses?page=${page}`, { headers });
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


export const updateNewTheses = async (data, id) => {
    try {
        const token = localStorage.getItem("token");
        const headers = {
            'Authorization': `Bearer ${token}`
        };
        const res = await instance.patch(`/theses/updateTheses/${id}`, data, { headers });
        return res.data;
    } catch (error) {
        return (error);
    }
}

export const getOneTheses = async (id) => {
    try {
        const token = localStorage.getItem("token");
        const headers = {
            'Authorization': `Bearer ${token}`
        };
        const res = await instance.get(`/theses/getOne/${id}`, { headers });
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
        console.log(value);
        const res = await instance.get(`/theses/search?q=${value}&page=${page}`, { headers });
        return res.data;
    } catch (error) {
        return (error);
    }
}
export const listThesesComplete = async (page) => {
    try {
        const token = localStorage.getItem("token");
        const headers = {
            'Authorization': `Bearer ${token}`
        };
        const res = await instance.get(`/theses/listThesesComplete?page=${page}`, { headers });
        return res.data;
    } catch (error) {
        return (error.response.status);
    }
}

export const searchThesesComplete = async (value,page) => {
    try {
        const token = localStorage.getItem("token");
        const headers = {
            'Authorization': `Bearer ${token}`
        };
        console.log(value);
        const res = await instance.get(`/theses/searchThesesComplete?q=${value}&page=${page}`, { headers });
        return res.data;
    } catch (error) {
        return (error);
    }
}