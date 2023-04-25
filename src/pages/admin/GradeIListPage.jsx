import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SlSocialDropbox } from "react-icons/sl";
import DropDown from "../../components/DropDown";
import TeacherLeftDashboard from "../../components/TeacherLeftDashboard";
import React, { useEffect, useState } from 'react';
import { FaDownload } from "react-icons/fa";
import { getList, download, fileName, browse  } from "../../api/adminApi/gradeI";
import urlEmptyBox from "../../assets/image/empty_box.png";
import FileDownload from "js-file-download";
const GradeIListPage = () => {
    const [data, setData] = useState([]);
    

    useEffect(() => {
        const fetchApi = async () => {
            const res = await getList();
            setData(res);
        };
        fetchApi();
    }, []);
    const downloadFile = async (id) => {
        const file = await download(id);
        const nameFile = await fileName(id);
        FileDownload(file.data, nameFile);
    };
    const updateStatus = async (data, id) => {
        const res  = await browse(data,id);
        if(res.statusCode === 200) {
            const res = await getList();
            setData(res);
            toast.success('Đã duyệt!');
        } 
    };

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
                                    data.length > 0 && (<table className="w-5/6 m-auto">
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
                                            {
                                                data.map(e => (
                                                    <React.Fragment key={e.id}>
                                                        <tr>
                                                            <td className="border-2 border-slate-300  p-2">
                                                                {e.account}
                                                            </td>
                                                            <td className="border-2 border-slate-300  p-2">
                                                                {e.fullName}
                                                            </td>
                                                            <td className="border-2 border-slate-300  p-2">
                                                                <button onClick={() => downloadFile(e.gradei.id)} className="flex text-blue-800 m-auto"> <FaDownload /> Tải xuống </button>
                                                            </td>
                                                            <td className="border-2 border-slate-300  p-2">
                                                                {
                                                                    new Date(e.gradei.createdAt).toLocaleDateString('en-GB')
                                                                }
                                                            </td>
                                                            <td className="border-2 border-slate-300 p-2">
                                                                <button onClick={() => {  updateStatus("yes", e.gradei.id) }} className="bg-blue-700 hover:bg-blue-500 p-1 mr-1 text-white rounded-md">Đồng ý</button>
                                                                <button onClick={() => {  updateStatus("no", e.gradei.id) }} className="bg-red-700 hover:bg-red-500 p-1 text-white rounded-md">Từ chối</button>
                                                            </td>
                                                        </tr>
                                                    </React.Fragment>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                    )
                                }
                                {
                                    data.length < 1 && (
                                        <div className="flex flex-col items-center table-auto w-ful border-b-2 border-b-slate-300 rounded-sm text-center">
                                            <h1 className="text-red-500 text-2xl font-semibold py-2">Danh sách rỗng!</h1>
                                            <img className="w-1/6 h-1/6" src={urlEmptyBox} alt="Empty box" />
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-right"
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
    );
}

export default GradeIListPage;