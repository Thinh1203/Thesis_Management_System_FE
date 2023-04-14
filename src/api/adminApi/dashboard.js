import instance from "../../utils/instance";

export const getTotalTeacher = async () => {
    try {
        const token = localStorage.getItem("token");
        const headers = {
            'Authorization': `Bearer ${token}`
        };
       
        const res = await instance.get("/teacher/getTotalTeacher", { headers });
        return res.data;
    } catch (error) {
        return (error);
    }
}

export const getTotalStudent = async () => {
    try {
        const token = localStorage.getItem("token");
        const headers = {
            'Authorization': `Bearer ${token}`
        };
       
        const res = await instance.get("/student/getTotalStudent", { headers });
        return res.data;
    } catch (error) {
        return (error);
    }
}