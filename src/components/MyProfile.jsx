import { Link, useNavigate } from "react-router-dom";
import DropDown from "./DropDown";
import TeacherLeftDashboard from "./TeacherLeftDashboard";
import { useEffect, useState } from "react";
import jwt_decode from 'jwt-decode';
import { getMyInf } from "../api/teacherApi";


const MyProfile = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem("token");
        const decoded = jwt_decode(token);
        const fetchApi = async () => {
            const res = await getMyInf(decoded.id, token);
            setUser(res);
        }
        fetchApi();
    }, []);
    return (
        <div className="flex">
            <TeacherLeftDashboard />
            <div className="w-screen h-screen bg-slate-200">
                <div className=" flex justify-end mx-10 my-5">
                    <DropDown />
                </div>
                <div className="my-20">
                    <div className="border-2 rounded-xl mx-5 my-5 shadow-lg shadow-slate-400 py-4">
                        <h4 className="mx-4 font-bold text-gray-700 text-lg">Thông tin cá nhân</h4>
                        <span className="flex"><p className="ml-4 mr-2 font-medium text-md">Trang chủ &#62;</p>  <p className="text-md text-blue-800 font-semibold">Thông tin cá nhân</p></span>
                    </div>
                    <div className="w-1/2 grid grid-cols-3 mx-5 mt-10 mb-5 border-2 rounded-xl my-5 shadow-lg shadow-slate-400">
                        <div className="py-5 px-10">
                            <ul>
                                <li className="font-medium text-blue-900 my-1">Tài khoản:</li>
                                <li className="font-medium text-blue-900 my-1"> Email:</li>
                                <li className="font-medium text-blue-900 my-1">Số điện thoại:</li>
                                <li className="font-medium text-blue-900 my-1">Họ và tên:</li>
                                <li className="font-medium text-blue-900 my-1"> Giới tính:</li>
                                <li className="font-medium text-blue-900 my-1"> Địa chỉ:</li>
                                <li className="font-medium text-blue-900 my-1"> Chức vụ:</li>

                            </ul>
                        </div>
                        <div className="span-cols-2 px-5 py-5">
                            {user && (
                                <ul>
                                    <li className="my-1">{user.account}</li>
                                    <li className="my-1">{user.email}</li>
                                    <li className="my-1">{user.numberPhone}</li>
                                    <li className="my-1">{user.fullName}</li>
                                    <li className="my-1">{user.gender}</li>
                                    <li className="my-1">{user.address}</li>
                                    <li className="my-1">{user.role.description}</li>
                                </ul>
                            )}
                        </div>
                    </div>
                    <button onClick={() => navigate("/updateInformation",{state:{user}})} className="bg-green-700 text-white p-2 border rounded-md mx-10">Cập nhật thông tin</button>
                </div>

            </div>
        </div>
    );
}

export default MyProfile;