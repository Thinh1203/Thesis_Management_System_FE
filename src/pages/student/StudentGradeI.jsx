import React, { useEffect, useState } from "react";
import logo from "../../assets/image/logo.png";
import logoCit from "../../assets/image/logoCit.png";
import { AiFillHome } from "react-icons/ai";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import DropDown from "../../components/DropDown";
import { Link } from "react-router-dom";
import { uploadFile, getOne } from "../../api/adminApi/gradeI";
import { FaDownload } from "react-icons/fa";
import FileDownload from "js-file-download";
import { download, fileName } from "../../api/adminApi/gradeI";
const StudentGradeI = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [data, setData] = useState(null);
    const handleFileInput = (event) => {
        setSelectedFile(event.target.files[0]);
    };
    const postFile = async () => {
        const allowedTypes = ['application/pdf'];
        if (!selectedFile) {
            return toast.error('File nộp không được để trống!');
        } else {
            if (!allowedTypes.includes(selectedFile.type)) {
                toast.error('Chỉ cho phép nộp file PDF.');
            } else {
                const res = await uploadFile(selectedFile);

                if (res.statusCode === 200) {
                    const res = await getOne();
                    setData(res);
                    return toast.success('Đã gửi đơn xin điểm i');
                }
            }
        }
    };
    useEffect(() => {
        const fetchData = async () => {
            const res = await getOne();
            setData(res);
        };
        fetchData();
    }, []);

    const downloadFile = async (e) => {
        e.preventDefault();

        const file = await download(data.gradei.id);
        const nameFile = await fileName(data.gradei.id);
        FileDownload(file.data, nameFile);
    };

    return (
        <div className="grid grid-rows-6">
            <div className="bg-white  grid grid-cols-2">
                <div className="grid grid-cols-3">
                    <div>
                        <Link to="/student/home"><img className="h-24 w-auto ml-auto my-2" src={logoCit} alt="logo cict" /></Link>
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
                    <h3 className="mt-5 ml-8 font-semibold text-red-600 text-2xl">Xin điểm i</h3>
                    <div className="mt-2">
                        <div className="grid grid-cols-3">
                            <div className="grid grid-rows-2">
                                <div className="p-2 text-center text-base font-semibold">Đơn gửi (.pdf)</div>
                                <div className="p-2 text-center text-base font-semibold">Trạng thái tập tin</div>
                            </div>
                            <div className="col-span-2">
                                <div className="grid grid-rows-2">
                                    {
                                        (data && data.gradei) ? (
                                            <React.Fragment>
                                                <div className="mt-2">
                                                    <button
                                                        onClick={(e) => downloadFile(e)}
                                                        className="flex text-blue-700 hover:text-blue-500">
                                                        <FaDownload />
                                                        Tải tập tin xuống
                                                    </button>
                                                </div>
                                                <div className="mt-3">
                                                    { data && data.gradei.status === "waiting" ? (
                                                        <div className="text-yellow-600 font-semibold">Chờ duyệt</div>
                                                    ) : data.gradei.status === "yes" ? (
                                                        <div className="text-green-600 font-semibold">Đã duyệt</div>
                                                    ) : (
                                                        <div className="text-red-600">Không được duyệt</div>
                                                    )}
                                                </div>

                                            </React.Fragment>
                                        ) : (
                                            <React.Fragment>
                                                <div className="p-2">
                                                    <input type="file" onChange={(e) => handleFileInput(e)} />
                                                </div>
                                                <div className="pl-2">
                                                    <button onClick={() => postFile()} className="p-2 text-white rounded-sm bg-green-600">
                                                        Gửi đơn
                                                    </button>
                                                </div>
                                            </React.Fragment>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
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
        </div >
    );
}

export default StudentGradeI;