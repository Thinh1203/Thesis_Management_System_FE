import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DropDown from "./DropDown";
import TeacherLeftDashboard from "./TeacherLeftDashboard";
import { changePassword } from "../api/teacherApi";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
const ChangePassword = () => {

    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const location = useLocation();
    const id = location.state;
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (oldPassword.length < 1) return toast.error("Mật khẩu cũ không được để trống!");
        if (newPassword.length < 1) return toast.error("Mật khẩu mới không được để trống!");
        if (confirmPassword.length < 1) return toast.error("Vui lòng xác thực mật khẩu mới!");

        const data = {
            oldPassword, newPassword, confirmPassword
        };
        const fetchApi = async () => {
            const token = localStorage.getItem("token");
            const res = await changePassword(id, data, token);
            if (res.statusCode !== 200)
                return toast.error(res.message);
            toast.success("Đổi mật khẩu thành công!");
        }
        fetchApi();
        setTimeout(() => {
            localStorage.removeItem("token");
            navigate("/login"); 
        }, 3000);
    }


    return (
        <div className="flex">
            <TeacherLeftDashboard />
            <div className="w-screen h-screen bg-slate-200">
                <div className=" flex justify-end mx-10 my-5">
                    <DropDown />
                </div>
                <div className="my-20">
                    <div className="border-2 rounded-xl mx-5 my-5 shadow-lg shadow-slate-400 py-4">
                        <h4 className="mx-4 font-bold text-gray-700 text-lg">Đổi mật khẩu</h4>
                        <span className="flex"><p className="ml-4 mr-2 font-medium text-md">Trang chủ &#62;</p>  <p className="text-md text-blue-800 font-semibold">Đổi mật khẩu</p></span>
                    </div>
                    <form onSubmit={handleSubmit} className="w-1/3 py-5 my-10 mx-5 border-2 rounded-xl shadow-lg shadow-slate-400">
                        <div className="flex flex-col my-4 mx-10 relative">
                            <label htmlFor="oldPassword">Mật khẩu cũ</label>
                            <input
                                id="oldPassword"
                                type={showOldPassword ? "text" : "password"}
                                className="w-full my-2 border-2 border-slate-500"
                                onChange={(e) => setOldPassword(e.target.value)} />

                            {oldPassword.length > 0 && (
                                <button type="button"
                                    className="absolute right-2 bottom-3"
                                    onClick={() => setShowOldPassword(!showOldPassword)}> {showOldPassword ? <AiFillEyeInvisible /> : <AiFillEye />} </button>
                            )}

                        </div>
                        <div className="flex flex-col my-4 mx-10 relative">
                            <label htmlFor="newPassword">Mật khẩu mới</label>
                            <input
                                id="newPassword"
                                type={showNewPassword ? "text" : "password"}
                                className="w-full my-2 border-2 border-slate-500"
                                onChange={(e) => setNewPassword(e.target.value)} />

                            {newPassword.length > 0 && (
                                <button type="button"
                                    className="absolute right-2 bottom-3"
                                    onClick={() => setShowNewPassword(!showNewPassword)}> {showNewPassword ? <AiFillEyeInvisible /> : <AiFillEye />} </button>
                            )}

                        </div>
                        <div className="flex flex-col my-4 mx-10 relative">
                            <label htmlFor="confirmPassword">Nhập lại mật khẩu mới</label>
                            <input
                                id="confirmPassword"
                                type={showConfirmPassword ? "text" : "password"}
                                className="w-full my-2 border-2 border-slate-500"
                                onChange={(e) => setConfirmPassword(e.target.value)} />

                            {confirmPassword.length > 0 && (
                                <button type="button"
                                    className="absolute right-2 bottom-3"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}> {showConfirmPassword ? <AiFillEyeInvisible /> : <AiFillEye />} </button>
                            )}

                        </div>
                        <button className="bg-green-700 text-white p-2 border rounded-md mx-10"  >Đổi mật khẩu</button>
                        <ToastContainer
                            position="top-right"
                            autoClose={2000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="light"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ChangePassword;