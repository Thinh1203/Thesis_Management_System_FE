import React, { useState } from "react";
import DropDown from "../../components/DropDown";
import Modal from "../../components/Modal";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TeacherLeftDashboard from "../../components/TeacherLeftDashboard";
import { BsPencilSquare } from "react-icons/bs";
import { FaDownload } from "react-icons/fa";
const CouncilDetail = () => {
    const [showModal, setShowModal] = useState(false);
    const [score, setScore] = useState(0);
    const topic = [
        {
            "id": 1,
            "name": "Hệ thống quản lý thi trắc nghiệm tiếng anh",
            "englishName": "English test management system",
            "code": "CNTTDT01",
            "author": "Quách Huy Thịnh",
            "startDate": "01/02/2023",
            "endDate": "27/04/2023",
            "major": "Công nghệ thông tin",
            "courses": "2022-2023",
            "file": true,
            "reportFile": "CNTTDT01.pdf"
        },
        {
            "id": 2,
            "name": "Hệ thống quản lý thi trắc nghiệm tiếng anh",
            "englishName": "English test management system",
            "code": "CNTTDT01",
            "author": "Quách Huy Thịnh",
            "startDate": "01/02/2023",
            "endDate": "27/04/2023",
            "major": "Công nghệ thông tin",
            "courses": "2022-2023",
            "file": true,
            "reportFile": "CNTTDT01.pdf"
        },
        {
            "id": 3,
            "name": "Hệ thống quản lý thi trắc nghiệm tiếng anh",
            "englishName": "English test management system",
            "code": "CNTTDT01",
            "author": "Quách Huy Thịnh",
            "startDate": "01/02/2023",
            "endDate": "27/04/2023",
            "major": "Công nghệ thông tin",
            "courses": "2022-2023",
            "file": true,
            "reportFile": "CNTTDT01.pdf"
        },

    ];
    const notify = () => {
        toast.success('Chấm điểm thành công!', {
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
                            <h4 className="mx-4 font-bold text-gray-700 text-lg">Danh sách đề tài</h4>
                            <span className="flex"><p className="ml-4 mr-2 font-medium text-md">Trang chủ &#62;</p>  <p className="text-md text-blue-800 font-semibold">Danh sách đề tài trong hội đồng</p></span>
                        </div>
                        <div className="border-2 rounded-xl mx-5 my-5 shadow-lg shadow-slate-400">
                            <div className="grid grid-cols-8 mt-10 text-left font-semibold text-sm">
                                <div className="mx-2 text-center">Mã đề tài</div>
                                <div className="text-left">Tên đề tài</div>
                                <div className="text-left px-4">Tên tiếng anh</div>
                                <div className="text-center">Ngành</div>
                                <div>Sinh viên thực hiện</div>
                                <div className="text-center">Tập tin</div>
                                <div className="text-center">Điểm</div>
                                <div className="text-center"></div>

                            </div>
                            <div className="pb-2 pt-2 grid grid-cols-8 text-left font-normal text-sm ">
                                {topic.map((e, index) => (
                                    <React.Fragment key={e.id}>
                                        <div className="mx-2 text-center">{e.code}</div>
                                        <div>{e.name}</div>
                                        <div className="text-left px-4">{e.englishName}</div>
                                        <div className="text-center">{e.major}</div>
                                        <div>{e.author}</div>
                                        <div ><button className="flex text-blue-800 m-auto"> <FaDownload /> Tải xuống </button></div>
                                        <div className=" text-center">{!score ? (<p className="text-red-700 font-semibold">Chưa chấm điểm</p>) : (<p className="text-green-700 font-semibold">{score}</p>)}</div>
                                        <div className="text-center">
                                            <button className="text-white bg-green-700 p-2 rounded-md flex" onClick={() => setShowModal(true)}>
                                                <BsPencilSquare className="mt-1 mr-1" />Chấm điểm
                                            </button>
                                            <Modal isVisible={showModal}>
                                                <div className="p-2 text-left">
                                                    <h3 className="text-xl font-semibold text-red-700 mb-5">Chấm điểm</h3>
                                                    <form action="#">
                                                        <input type="text" placeholder="Nhập điểm" onChange={(e) => setScore(e.target.value)} className="bg-gray-50 border-2 border-slate-400 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"/>
                                                        <div className="grid grid-cols-2 mt-2">
                                                            <button className="py-2 mx-2 bg-gray-500 text-white rounded " onClick={() => setShowModal(false)}>Đóng</button>
                                                            <button className="py-2 mx-2 bg-green-600 text-white rounded " onClick={() => { setShowModal(false); notify() }}>Lưu lại</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </Modal>
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
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default CouncilDetail;