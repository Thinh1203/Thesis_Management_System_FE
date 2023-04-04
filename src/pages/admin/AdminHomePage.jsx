import React, { useState } from "react";
import DropDown from "../../components/DropDown";
import TeacherLeftDashboard from "../../components/TeacherLeftDashboard";
import { FaUserAlt, FaUserGraduate , FaUsers } from "react-icons/fa";
import { GiBookmark } from "react-icons/gi";
const AdminHomePage = () => {
    return (
        <div>
            <div className="flex">
                <TeacherLeftDashboard />
                <div className="w-screen h-screen bg-slate-200">
                    <div className=" flex justify-end mx-10 my-5">
                        <DropDown />
                    </div>
                    <div className="mt-20">
                        <div className="border-2 rounded-xl mx-5 my-5 shadow-lg shadow-slate-400 py-4">
                            <h4 className="mx-4 font-bold text-gray-700 text-lg">Dashboard</h4>
                            <span className="flex"><p className="ml-4 mr-2 font-medium text-md">Trang chủ &#62;</p>  <p className="text-md text-blue-800 font-semibold">Thống kê</p></span>
                        </div>

                        <div className="grid grid-cols-4 gap-4 justify-items-center">
                            <div className="grid grid-cols-3 shadow-2xl w-5/6 h-32 shadow-slate-600 rounded-md">
                                <div className="col-span-2 p-2 my-3 mx-2">
                                    <h4 className="font-medium text-lg text-slate-700">GIẢNG VIÊN</h4>
                                    <p className="mt-2 font-semibold text-4xl">12</p>
                                </div>
                                <div className="rounded-full bg-sky-600 w-5/6 h-16 text-white px-4 mt-7"> 
                                    <div className="text-3xl mt-4 mx-1">
                                        <FaUserAlt />
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 shadow-2xl w-5/6 h-32 shadow-slate-600 rounded-md">
                                <div className="col-span-2 p-2 my-3 mx-2">
                                    <h4 className="font-medium text-lg text-slate-700">SINH VIÊN</h4>
                                    <p className="mt-2 font-semibold text-4xl">12</p>
                                </div>
                                <div className="rounded-full bg-violet-600 w-5/6 h-16 text-white px-4 mt-7"> 
                                    <div className="text-3xl mt-4 mx-1">
                                        <FaUserGraduate />
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 shadow-2xl w-5/6 h-32 shadow-slate-600 rounded-md">
                                <div className="col-span-2 p-2 my-3 mx-2">
                                    <h4 className="font-medium text-lg text-slate-700">HỘI ĐỒNG</h4>
                                    <p className="mt-2 font-semibold text-4xl">12</p>
                                </div>
                                <div className="rounded-full bg-green-700 w-5/6 h-16 text-white px-4 mt-7"> 
                                    <div className="text-3xl mt-4 mx-1">
                                        <FaUsers />
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 shadow-2xl w-5/6 h-32 shadow-slate-600 rounded-md">
                                <div className="col-span-2 p-2 my-3 mx-2">
                                    <h4 className="font-medium text-lg text-slate-700">KHOÁ LUẬN</h4>
                                    <p className="mt-2 font-semibold text-4xl">12</p>
                                </div>
                                <div className="rounded-full bg-yellow-500 w-5/6 h-16 text-white px-4 mt-7"> 
                                    <div className="text-3xl mt-4 mx-1">
                                        <GiBookmark />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminHomePage;