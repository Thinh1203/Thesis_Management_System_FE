import React, { useEffect, useState } from "react";
import logo from "../../assets/image/logo.png";
import logoCit from "../../assets/image/logoCit.png";
import DropDown from "../../components/DropDown";
import { AiFillHome } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { getThesesDetail, uploadFile, download, fileName } from "../../api/studentApi";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { FaDownload } from "react-icons/fa";
import FileDownload from "js-file-download";
const StudentTopicDetail = () => {
    const location = useLocation();
    const id = location.state;
    const [data, setData] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const handleFileInput = (event) => {
        setSelectedFile(event.target.files[0]);
    }
    useEffect(() => {
        const fetchData = async () => {
            const res = await getThesesDetail(id);
            setData(res);
        };
        fetchData();
    }, [data]);

    const postFile = async () => {
        const allowedTypes = ['application/pdf'];
        if (!selectedFile) {
            toast.error('File nộp không được để trống!');
        } else {
            if (!allowedTypes.includes(selectedFile.type)) {
                toast.error('Chỉ cho phép nộp file PDF.');
            } else {
                const res = await uploadFile(data.id, selectedFile);
                if (res.statusCode === 200) {
                    const data = await getThesesDetail(id);
                    setData(data);
                    return toast.success('Đã nộp file báo cáo');
                }
            }
        }
    }

    const downloadFile = async (e) => {
        e.preventDefault();
        const file = await download(id);
        const nameFile = await fileName(id);
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
                <div className="bg-slate-200 absolute w-5/6 h-96 mt-28 rounded-md shadow-xl shadow-slate-400 ">
                    <h3 className="mt-5 ml-8 font-semibold text-red-800 text-xl">Chi tiết khóa luận</h3>
                    <div className="grid grid-cols-2 mt-5 ml-10">
                        <div className="grid grid-cols-3">
                            {/* <div className="grid grid-rows-8">
                                <div className=" mx-2">Mã đề tài:</div>
                                <div className=" mx-2">Tên đề tài:</div>
                                <div className=" mx-2">Tên tiếng anh:</div>
                                <div className="mx-2 ">Giảng viên hướng dẫn</div>
                                <div className=" mx-2">Sinh viên thực hiện:</div>
                                <div className=" mx-2">Hạn nộp báo cáo:</div>
                                <div className="mx-2">Niên khóa:</div>
                                <div className=" mx-2">Học kỳ:</div>
                            </div> */}
                            <div className="col-span-3 grid grid-rows-8 mx-auto">
                                {
                                    data && (
                                        <React.Fragment>
                                            <div> Mã đề tài: CT550N{data.topic.id}</div>
                                            <div > Tên đề tài: {data.topic.VietnameseName}</div>
                                            <div > Tên tiếng anh: {data.topic.EnglishName}</div>
                                            <div > Giảng viên hướng dẫn: {data.teacher.fullName}</div>
                                            <div > Sinh viên thực hiện: {data.student.fullName}</div>
                                            <div > Hạn nộp báo cáo: {new Date(data.endDate).toLocaleDateString('en-GB')}</div>
                                            <div > Niên khóa: {data.shoolYear.year}</div>
                                            <div > Học kỳ: {data.shoolYear.semester}</div>
                                            </React.Fragment>
                                    )
                                }

                            </div>
                        </div>
                        <div>
                            <h4 className="text-red-700 font-semibold">Tập tin luận văn</h4>
                            <div className="grid grid-cols-3">
                                <div className="grid grid-rows-2">
                                    <div className="my-2 mx-4">
                                        Tập tin (PDF): <p className="font-medium text-yellow-600">&#40;File chỉ nộp một lần&#41;</p>
                                    </div>
                                    <div className="mx-4">
                                        Trạng thái:
                                    </div>
                                </div>
                                <div className="grid grid-rows-2 col-span-2">
                                    {
                                        data && (
                                            <React.Fragment>
                                                {
                                                    data.reportFile ? (
                                                        <div className="mt-4">
                                                            <button onClick={(e) => downloadFile(e)} className="flex">
                                                                <div className="mr-2 mt-1 text-blue-600"><FaDownload /></div>
                                                                <div className="text-blue-600">Tải tập tin xuống</div>
                                                            </button>
                                                        </div>
                                                    ) : (
                                                        <div className="mt-2 flex hover:cursor-pointer">
                                                            <div>
                                                                <input type="file" onChange={(e) => handleFileInput(e)} />
                                                            </div>
                                                            <div>
                                                                <button
                                                                    className="rounded-sm bg-green-600 text-white hover:bg-green-700 p-1"
                                                                    onClick={() => postFile()} >
                                                                    Nộp file
                                                                </button>
                                                            </div>
                                                        </div>
                                                    )
                                                }

                                                <div>
                                                    {data.statusFile ? (<div className=" text-green-700">Đã nộp</div>) : (<div className=" text-red-600">Chưa nộp</div>)}
                                                </div>
                                            </React.Fragment>
                                        )
                                    }
                                </div>
                            </div>
                            <div>
                                <h4 className="text-red-700 font-semibold">Kết quả</h4>
                                <div className="grid grid-cols-3">
                                    <div className="grid grid-rows-2">
                                        <div className="my-2 mx-4">
                                            Điểm:
                                        </div>
                                        <div className="mx-4">
                                            Kết quả:
                                        </div>
                                    </div>
                                    <div className="grid grid-rows-2 col-span-2">
                                        {data &&
                                            <React.Fragment key={data.id}>
                                                <div className="my-2">{data.score ? data.score : ""}</div>
                                                {!data.score ? (<div className="text-yellow-600">Chưa chấm điểm</div>) : (<div className={data.score >= 4 ? "text-green-700 font-semibold" : "text-red-600 font-semibold"}>{data.score >= 4 ? "Đạt" : "Chưa đạt"}</div>)}
                                            </React.Fragment>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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

export default StudentTopicDetail;