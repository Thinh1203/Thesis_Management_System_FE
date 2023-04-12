import instance from "../utils/instance";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const changePassword = async (password, navigate) => {
    try {
        const token = localStorage.getItem("token");
        const headers = {
            'Authorization': `Bearer ${token}`
        };
        const result = await instance.patch("/student/changePassword", password, { headers });
        if(result.data.statusCode !== 200) return toast.error(result.data.message);
        localStorage.removeItem("token");
        setTimeout(() => {
            navigate("/login");
        }, 3000)
        return toast.success(result.data.message, {autoClose: 2000});

    } catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
            toast.error(error.response.data.message);
        }
    }
}
