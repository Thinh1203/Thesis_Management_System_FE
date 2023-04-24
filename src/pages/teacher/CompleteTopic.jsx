import React, { useEffect, useState } from "react";
import DropDown from "../../components/DropDown";
import TeacherLeftDashboard from "../../components/TeacherLeftDashboard";
import { getAllTopicComplete } from "../../api/teacherApi";
import empty_box from "../../assets/image/empty_box.png";
import FileDownload from "js-file-download";
import { download, fileName } from "../../api/studentApi";
import { FaDownload } from "react-icons/fa";
const CompleteTopic = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await getAllTopicComplete();
            setData(res.data);
        };
        fetchData();
    },[])
    const downloadFile = async (id) => {
        const file = await download(id);
        const nameFile = await fileName(id);
        FileDownload(file.data, nameFile);
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
                            <h4 className="mx-4 font-bold text-gray-700 text-lg">Đề tài đã hoàn thành</h4>
                            <span className="flex"><p className="ml-4 mr-2 font-medium text-md">Trang chủ &#62;</p>  <p className="text-md text-blue-800 font-semibold">Danh sách đề tài đã hoàn thành</p></span>
                        </div>
                        <div className="border-2 rounded-xl mx-5 my-5 shadow-lg shadow-slate-400">
                            <div className="grid grid-cols-12 mt-10 text-center font-semibold text-sm">
                                <div className="mx-2 text-center">Mã đề tài</div>
                                <div className="text-center col-span-3">Tên đề tài</div>
                                <div className="text-center col-span-2">Tên tiếng anh</div>
                                <div className="col-span-2">Sinh viên thực hiện</div>
                                <div className="text-center">Niên khóa</div>
                                <div className="text-center">Học kỳ</div>
                                <div className="text-center">Điểm</div> 
                                <div className="text-center">Tập tin</div>
                            </div>
                            <div className="pb-2 pt-2 grid grid-cols-12 font-normal text-sm ">
                                {
                                    data && data?.map((e) => (
                                        <React.Fragment key={e.id}>
                                            <div className="mx-2 text-center mb-2">{e.topic.code}</div>
                                            <div className="text-center col-span-3 mb-2">{e.topic.VietnameseName}</div>
                                            <div className="text-center col-span-2 mb-2">{e.topic.EnglishName}</div>
                                            <div className="col-span-2 text-center  mb-2">{e.student.fullName}</div>
                                            <div className="text-center mb-2">{e.shoolYear.year}</div>
                                            <div className=" text-center mb-2">{e.shoolYear.semester}</div>
                                            <div className="text-center">{e.score}</div> 
                                            <div className=" text-center mb-2">
                                                {(!e.statusFile)
                                                    ? (<p className="text-red-600 font-semibold">Chưa nộp</p>)
                                                    : (
                                                        <button onClick={() => downloadFile(e.id)} className="flex">
                                                            <div className="mr-2 mt-1 text-blue-700"><FaDownload /></div>
                                                            <div className="text-blue-700">Tải tập tin</div>
                                                        </button>
                                                    )
                                                }
                                            </div>
                                        </React.Fragment>
                                    ))}
                                {
                                    data.length < 1 && (
                                        <div className="flex justify-center m-auto col-span-11">
                                            <img className="w-1/4 h-1/4 py-2" src={empty_box} alt="empty_box.png" />
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

export default CompleteTopic;