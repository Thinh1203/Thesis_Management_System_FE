import React, { useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DropDown from "./DropDown";
import TeacherLeftDashboard from "./TeacherLeftDashboard";
const ChangePassword = () => {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success('Đổi mật khẩu thành công!', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        setTimeout(() => {
            navigate("/login");
        }, 4000);
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
                        <div className="flex flex-col my-4 mx-10">
                            <label htmlFor="">Mật khẩu cũ</label>
                            <input type="text" className="w-52 my-2 border-2 border-slate-500" />
                        </div>
                        <div className="flex flex-col my-4 mx-10">
                            <label htmlFor="">Mật khẩu mới</label>
                            <input type="text" className="w-52 my-2 border-2 border-slate-500" />
                        </div>
                        <div className="flex flex-col my-4 mx-10">
                            <label htmlFor="">Nhập lại mật khẩu mới</label>
                            <input type="text" className="w-52 my-2 border-2 border-slate-500" />
                        </div>
                        <button className="bg-green-700 text-white p-2 border rounded-md mx-10"  >Đổi mật khẩu</button>
                        <ToastContainer
                            position="top-center"
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