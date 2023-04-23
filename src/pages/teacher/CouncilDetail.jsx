import React, { useEffect, useState } from "react";
import DropDown from "../../components/DropDown";
import Modal from "../../components/Modal";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TeacherLeftDashboard from "../../components/TeacherLeftDashboard";
import { BsPencilSquare } from "react-icons/bs";
import { FaDownload } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { download, fileName } from "../../api/studentApi";
import FileDownload from "js-file-download";
import { getOneCouncilDetail } from "../../api/adminApi/council";
import { postScore } from "../../api/teacherApi";
const CouncilDetail = () => {
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState([]);
    const [score, setScore] = useState({ score: 0 });
    const [idTheses, setIdTheses] = useState(0);
    const location = useLocation();
    const id = location.state;

    useEffect(() => {
        const fetchData = async () => {
            const res = await getOneCouncilDetail(id);
            setData(res.data);
            console.log(res.data);
        };
        fetchData();
    }, []);
    const downloadFile = async (id) => {
        const file = await download(id);
        const nameFile = await fileName(id);
        FileDownload(file.data, nameFile);
    };

    const patchScore = async () => {
        if (!score.score) {
            toast.error('Vui lòng nhập số điểm');
            return;
        };
        if (isNaN(score.score) || score.score < 0 || score.score > 10) {
            toast.error('Điểm số phải >= 0 và <= 10');
            return;
        };
        const res = await postScore(score, idTheses);
        if (res.statusCode === 200) {
            const newData = await getOneCouncilDetail(id);
            setData(newData.data);
            toast.success('Đã nhập điểm!');
            setShowModal(false);
            return;
        } else {
            toast.success('Có lỗi xảy ra!');
            setShowModal(false);
            return;
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
                            <h4 className="mx-4 font-bold text-gray-700 text-lg">Danh sách đề tài</h4>
                            <span className="flex"><p className="ml-4 mr-2 font-medium text-md">Trang chủ &#62;</p>  <p className="text-md text-blue-800 font-semibold">Danh sách đề tài trong hội đồng</p></span>
                        </div>
                        <div className="border-2 rounded-xl mx-5 my-5 shadow-lg shadow-slate-400">
                            <div className="grid grid-cols-12 mt-10 text-left font-semibold text-sm">
                                <div className="mx-2 text-center">Mã đề tài</div>
                                <div className="text-center col-span-3">Tên đề tài</div>
                                <div className="text-center px-4 col-span-3">Tên tiếng anh</div>
                                <div className="text-center col-span-2">Sinh viên thực hiện</div>
                                <div className="text-center">Tập tin</div>
                                <div className="text-center">Điểm</div>
                                <div className="text-center">Hành động</div>

                            </div>
                            <div className="pb-2 pt-2 grid grid-cols-12 text-left font-normal text-sm ">
                                {
                                    data && data?.map((e) => (
                                        <React.Fragment key={e.id}>
                                            <div className="mx-2 text-center">{e.topic.code}</div>
                                            <div className="col-span-3 text-center">{e.topic.VietnameseName}</div>
                                            <div className="text-center px-4 col-span-3">{e.topic.EnglishName}</div>
                                            <div className="text-center col-span-2">{e.student.fullName}</div>
                                            {e.reportFile ? (<div ><button onClick={() => downloadFile(e.id)} className="flex text-blue-800 mx-auto"> <FaDownload /> Tải xuống </button></div>) : <div className="flex text-slate-600  mx-auto"><FaDownload /> Tải xuống</div>}
                                            <div className=" text-center">{!e.score ? (<p className="text-red-700 font-semibold">Chưa chấm</p>) : (<p className="text-green-700 font-semibold">{e.score}</p>)}</div>
                                            <div className="text-center mt-1">
                                                <button className="text-white bg-green-700 p-1 rounded-md flex" onClick={() => { setIdTheses(e.id); setShowModal(true);}}>
                                                    <BsPencilSquare className="mt-1 mr-1" />Chấm điểm
                                                </button>


                                            </div>
                                        </React.Fragment>
                                    ))}
                            </div>
                            <Modal isVisible={showModal}>
                                <div className="p-2 text-left">
                                    <h3 className="text-xl font-semibold text-red-700 mb-5">Chấm điểm</h3>
                                    <input
                                        type="text"
                                        placeholder="Nhập điểm"
                                        onChange={(e) => setScore({ score: e.target.value })}
                                        className="bg-gray-50 border-2 border-slate-400 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" />
                                    <div className="grid grid-cols-2 mt-2">
                                        <button className="py-2 mx-2 bg-gray-500 text-white rounded " onClick={() => { setScore({ score: 0 }); setIdTheses(0); setShowModal(false); }}>Đóng</button>
                                        <button className="py-2 mx-2 bg-green-600 text-white rounded " onClick={() =>  patchScore()}>Lưu lại</button>
                                    </div>
                                </div>
                            </Modal>
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

export default CouncilDetail;