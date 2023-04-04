
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DropDown from "../../components/DropDown";
import React from "react";
import logo from "../../assets/image/logo.png";
import logoCit from "../../assets/image/logoCit.png";
import { AiFillHome } from "react-icons/ai";
const StudentChangePassword = () => {
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
        <div className="grid grid-rows-6">
            <div className="bg-white  grid grid-cols-2">
                <div className="grid grid-cols-3">
                    <div>
                        <img className="h-24 w-auto ml-auto my-2" src={logoCit} alt="" />
                    </div>
                    <div className="grid grid-rows-2 mx-2 col-span-2">
                        <div className="mt-4 text-lg font-bold text-blue-800">
                            TRƯỜNG CÔNG NGHỆ THÔNG TIN & TRUYỀN THÔNG
                        </div>

                        <div className="text-sm text-blue-700 font-semibold">HỆ THỐNG QUẢN LÝ LUẬN VĂN TỐT NGHIỆP</div>
                    </div>
                </div>

                <div className="flex justify-end my-5 mx-10 z-50"> <DropDown /></div>
            </div>
            <div className="bg-blue-800 row-span-3 relative flex justify-center">
                <div className="bg-slate-200 absolute w-1/3 h-56 mt-44 rounded-md shadow-xl shadow-slate-400 ">
                    <h3 className="mt-5 ml-8 font-semibold text-black text-xl">Đổi mật khẩu</h3>
                    <form onSubmit={handleSubmit} className="w-full">
                        <div className='grid grid-cols-5'>
                            <div className='flex flex-col col-span-2'>
                                <label htmlFor="oldPassword" className='my-2 ml-6'>Mật khẩu cũ</label>
                                <label htmlFor="newPassword" className='my-1 ml-6'>Mật khẩu mới</label>
                                <label htmlFor="confirmPassword" className='my-1 ml-6'>Nhập lại mật khẩu mới</label>
                            </div>
                            <div className='col-span-3'>
                            <input id="oldPassword" type="text" className="w-52 my-1 border-2 border-slate-500" />
                            <input id="newPassword" type="text" className="w-52 my-1 border-2 border-slate-500" />
                            <input id="confirmPassword" type="text" className="w-52 my-1 border-2 border-slate-500" />
                            </div>
                        </div>
                        <button className="bg-green-700 text-white p-2 border rounded-md ml-52 my-2"  >Đổi mật khẩu</button>
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
            <div className="bg-white row-span-2">

            </div>
            <div className="bg-blue-800 grid grid-cols-2 py-3">
                <div className="grid grid-cols-3">
                    <div>
                        <img className="h-20 w-auto ml-auto mr-2  my-2" src={logo} alt="" />
                    </div>
                    <div className=" mx-2 col-span-2">
                        <div className="mt-4 text-lg font-bold text-white">
                            ĐẠI HỌC CẦN THƠ
                        </div>
                        <div className="text-sm text-white font-semibold mt-3">TRƯỜNG CÔNG NGHỆ THÔNG TIN & TRUYỀN THÔNG</div>
                    </div>
                </div>
                <div className="grid grid-rows-2">
                    <div className="font-semibold text-md mt-4 text-white">THÔNG TIN</div>
                    <div className="flex">
                        <AiFillHome className="mt-1 text-white text-lg" />
                        <p className="mx-2 font-normal text-white">Khu 2, Đường 3/2, Phường Xuân Khánh, Quận Ninh Kiều, Thành phố Cần Thơ</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default StudentChangePassword;