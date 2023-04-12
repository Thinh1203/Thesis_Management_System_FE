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