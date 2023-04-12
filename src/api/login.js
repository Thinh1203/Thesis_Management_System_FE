import instance from "../utils/instance";
import jwt_decode from "jwt-decode";
export const login = async (user, navigate) => {
    try {
        const res = await instance.post("/auth/login", user);
        const token = res.data.token;
        const decodedToken = jwt_decode(token);
        if (decodedToken.role === "SV") navigate("/student/home");
        else navigate("/admin/home");
        localStorage.setItem("token", token);
        return res.response;
    } catch (error) {
        return error;
    }
}
