import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import TeacherLeftDashboard from "./TeacherLeftDashboard";
import DropDown from "./DropDown";
import { useState } from "react";
const UpdateInformation = () => {
    const [name, setName] = useState("Quách Huy Thịnh");
    const [email, setEmail] = useState("thinhb1910454@student.ctu.edu.vn");
    const [phone, setPhone] = useState("0345139122");
    const [address, setAddress] = useState("Cần Thơ");
    const [gender, setGender] = useState("Nam");
    const navigate = useNavigate();
        const handleSubmit = (e) => {
            e.preventDefault();
            toast.success('Cập nhật thành công!', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setTimeout(() => {
                navigate("/myProfile");
            }, 3000);
        }
    return (
        <div>
            <div className="flex">
                <TeacherLeftDashboard />
                <div className="w-screen h-screen bg-slate-200">
                    <div className=" flex justify-end mx-10 my-5">
                        <DropDown />
                    </div>
                    <div className="my-20">
                        <div className="border-2 rounded-xl mx-5 my-5 shadow-lg shadow-slate-400 py-4">
                            <h4 className="mx-4 font-bold text-gray-700 text-lg">Cập nhật thông tin</h4>
                            <span className="flex"><p className="ml-4 mr-2 font-medium text-md">Trang chủ &#62;</p>  <p className="text-md text-blue-800 font-semibold">Cập nhật thông tin cá nhân</p></span>
                        </div>
                        <div className="w-1/2 py-4 grid grid-cols-3 mx-5 mt-10 mb-5 border-2 rounded-xl shadow-lg shadow-slate-400">
                            <div>
                                <ul className="mx-7">
                                    <li className="font-medium text-blue-900 my-2"> Email:</li>
                                    <li className="font-medium text-blue-900 mt-2">Số điện thoại:</li>
                                    <li className="font-medium text-blue-900 my-3">Họ và tên:</li>
                                    <li className="font-medium text-blue-900 mt-2"> Địa chỉ:</li>
                                    <li className="font-medium text-blue-900 mt-3"> Giới tính:</li>
                                </ul>
                            </div>
                            <div className="col-span-2">
                                <form onSubmit={handleSubmit}>
                                    <ul>
                                        <li className="my-1"><input className="w-64 border-2 border-slate-500 rounded-sm" type="text" value={email} onChange={(e) => setEmail(e.target.value)} /></li>
                                        <li className="my-2"><input className="w-64 border-2 border-slate-500 rounded-sm" type="text" value={phone} onChange={(e) => setPhone(e.target.value)} /></li>
                                        <li className="my-2"><input className="w-64 border-2 border-slate-500 rounded-sm" type="text" value={name} onChange={(e) => setName(e.target.value)} /></li>
                                        <li className="my-2"><input className="w-64 border-2 border-slate-500 rounded-sm" type="text" value={address} onChange={(e) => setAddress(e.target.value)} /></li>
                                        <li className="my-2">
                                            <select className="border-2 border-slate-500 rounded-sm" name="" id="" value={gender} onChange={(e) => setGender(e.target.value)}>
                                                <option value="Nam">Nam</option>
                                                <option value="Nữ"> Nữ</option>
                                            </select>
                                        </li>
                                    </ul>
                                    <button className="bg-green-700 text-white p-2 border rounded-md py-2">Cập nhật</button>
                                </form>
                                <ToastContainer
                                    position="top-center"
                                    autoClose={1000}
                                    hideProgressBar={false}
                                    newestOnTop={false}
                                    closeOnClick
                                    rtl={false}
                                    pauseOnFocusLoss
                                    draggable
                                    pauseOnHover
                                    theme="light"
                                />
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default UpdateInformation;