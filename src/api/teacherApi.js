import instance from "../utils/instance";

export const getMyInf = async (id, token) => {
    try {
        const headers = {
            'Authorization': `Bearer ${token}`
        };
        const res = await instance.get(`/teacher/getOne/${id}`, { headers });
        return res.data;
    } catch (err) {
        throw (err);
    }
}

export const updateProfile = async (id, newInformation, token) => {
    try {
        const headers = {
            'Authorization': `Bearer ${token}`
        };
        const res = await instance.patch(`/teacher/updateTeacher/${id}`, newInformation, { headers });
        return res.data;
    } catch (err) {
        throw (err);
    }
}

export const changePassword = async (id, newPassword, token) => {
    try {
        const headers = {
            'Authorization': `Bearer ${token}`
        };
        const res = await instance.patch(`/teacher/changePassword/${id}`, newPassword, { headers });
        return res.data;
    } catch (err) {
        throw (err);
    }
}

export const ListOfGuidedTopics = async (token) => {
    try {
        const headers = {
            'Authorization': `Bearer ${token}`
        };
        const res = await instance.get("/theses/ListOfGuidedTopics", { headers });
        return res.data;
    } catch (err) {
        throw (err);
    }
}

export const getAllCouncil = async () => {
    try {
        const token = localStorage.getItem("token");
        const headers = {
            'Authorization': `Bearer ${token}`
        };
        const res = await instance.get("/teacher/getAllCouncil", { headers });
        return res.data;
    } catch (err) {
        throw (err);
    }
}


export const postScore = async (data, id) => {
    try {
        const token = localStorage.getItem("token");
        const headers = {
            'Authorization': `Bearer ${token}`
        };
        const res = await instance.post(`/theses/transcript/${id}`, data, { headers });
        return res.data;
    } catch (err) {
        throw (err);
    }
}