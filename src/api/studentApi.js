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
