import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SlSocialDropbox } from "react-icons/sl";
import DropDown from "../../components/DropDown";
import TeacherLeftDashboard from "../../components/TeacherLeftDashboard";
import { useState } from 'react';
import { FaDownload } from "react-icons/fa";
const GradeIListPage = () => {
    const [status, setStatus] = useState(true);
    const notify = (text) => {
        toast.success(text, {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

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
                            <h4 className="mx-4 font-bold text-gray-700 text-lg">Danh sách điểm i</h4>
                            <span className="flex"><p className="ml-4 mr-2 font-medium text-md">Trang chủ &#62;</p>  <p className="text-md text-blue-800 font-semibold">Sinh viên xin điểm i</p></span>
                        </div>
                        <div className="rounded-xl h-full shadow-lg shadow-slate-400 py-4 mx-4">
                            <div className="grid grid-cols-3">
                                <div className="ml-4">
                                    <h3 className="text-blue-700 text-lg font-semibold">Danh sách sinh viên xin điểm i</h3>
                                </div>
                            </div>
                            <div className="mt-4">
                                {
                                    status ? (
                                        <table className="w-5/6 m-auto">
                                            <thead >
                                                <tr >
                                                    <th className="border-2 border-slate-300 font-semibold">
                                                        Mã sinh viên
                                                    </th>
                                                    <th className="border-y-2 border-r-2 border-slate-300 font-semibold">
                                                        Tên sinh viên
                                                    </th>
                                                    <th className="border-y-2 border-r-2 border-slate-300 font-semibold">
                                                        File
                                                    </th>
                                                    <th className="border-y-2 border-r-2 border-slate-300 font-semibold">
                                                        Ngày xin
                                                    </th>
                                                    <th className="border-2 border-slate-300 font-semibold">
                                                        Hành động
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-center">
                                                <tr>
                                                    <td className="border-2 border-slate-300  p-2">
                                                        2021-2022
                                                    </td>
                                                    <td className="border-2 border-slate-300  p-2">
                                                        1
                                                    </td>
                                                    <td className="border-2 border-slate-300  p-2">
                                                        <button className="flex text-blue-800 m-auto"> <FaDownload /> Tải xuống </button>
                                                    </td>
                                                    <td className="border-2 border-slate-300  p-2">
                                                        28/04/2023
                                                    </td>
                                                    <td className="border-2 border-slate-300 p-2">
                                                        <button onClick={() => notify('Đã duyệt!')} className="bg-blue-700 hover:bg-blue-500 p-1 mr-1 text-white rounded-md">Đồng ý</button>
                                                        <button onClick={() => notify('Đã từ chối!')} className="bg-red-700 hover:bg-red-500 p-1 text-white rounded-md">Từ chối</button>

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
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>

                                    ) : (
                                        <div>
                                            <div className="flex justify-center text-5xl text-yellow-600">
                                                <SlSocialDropbox />
                                            </div>
                                            <h4 className="text-center font-semibold text-md text-red-700">Danh sách rỗng</h4>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GradeIListPage;