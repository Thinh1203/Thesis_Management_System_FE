import React, { useState } from "react";
import logo from "../../assets/image/logo.png";
import logoCit from "../../assets/image/logoCit.png";
import DropDown from "../../components/DropDown";
import { AiFillHome } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const StudentTopicDetail = () => {

    const navigate = useNavigate();

    const topic = [
        {
            "id": 1,
            "name": "Quách Huy Thịnh",
            "gvhd": "Lâm Nhựt Khang",
            "topicName": "Hệ thống quản lý thi trắc nghiệm tiếng anh",
            "englishName": "Hệ thống quản lý thi trắc nghiệm tiếng anh",
            "code": "CNTT2023-DT01",
            "score": "",
            "startDate": "01/02/2023",
            "endDate": "27/04/2023",
            "major": "Công nghệ thông tin",
            "courses": "2022-2023",
            "file": null
        }
    ];
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
                <div className="bg-slate-200 absolute w-5/6 h-96 mt-28 rounded-md shadow-xl shadow-slate-400 ">
                    <h3 className="mt-5 ml-8 font-semibold text-red-800 text-xl">Chi tiết khóa luận</h3>
                    <div className="grid grid-cols-2 mt-5 ml-10">
                        <div className="grid grid-cols-3">
                            {/* <h3 className="mt-5 ml-8 font-semibold text-black text-xl">Chi tiết khóa luận</h3> */}
                            <div>
                                <div className="my-1 mx-2">Mã đề tài:</div>
                                <div className="my-1 mx-2">Tên đề tài:</div>
                                <div className="my-1 mx-2">Tên tiếng anh:</div>
                                <div className="mx-2 my-1">Giảng viên hướng dẫn</div>
                                <div className="my-1 mx-2">Sinh viên thực hiện:</div>
                                <div className="mx-2 my-1">Thời gian bắt đầu:</div>
                                <div className="my-1 mx-2">Thời gian kết thúc:</div>
                                {/* <div className="mx-2">Ngành:</div> */}
                                <div className="my-1 mx-2">Niên khóa:</div>
                            </div>
                            <div className="col-span-2">
                                {
                                    topic.map((e, index) => (
                                        <React.Fragment key={e.id}>
                                            <div className="my-1">{e.code}</div>
                                            <div className="my-1">{e.topicName}</div>
                                            <div className="my-1">{e.englishName}</div>
                                            <div className="my-1">{e.gvhd}</div>
                                            <div className="my-1">{e.name}</div>
                                            <div>{e.startDate}</div>
                                            <div className="my-1">{e.endDate}</div>
                                            {/* <div>{e.major}</div> */}
                                            <div className="my-1">{e.courses}</div>
                                        </React.Fragment>
                                    ))
                                }
                            </div>
                        </div>
                        <div>
                            <h4 className="text-red-700 font-semibold">Tập tin luận văn</h4>
                            <div className="grid grid-cols-3">
                                <div className="grid grid-rows-2">
                                    <div className="my-4 mx-4">
                                        Link tập tin: <p className="font-medium text-yellow-600">&#40;File chỉ nộp một lần&#41;</p>
                                    </div>
                                    <div className="mx-4">
                                        Trạng thái:
                                    </div>
                                </div>
                                <div className="grid grid-rows-2 col-span-2">
                                    {
                                        topic.map((e, index) => (
                                            <React.Fragment key={e.id}>
                                                <div className="my-4">{e.file ? e.file : (
                                                    <input type="file"
                                                        id="avatar" name="avatar"
                                                        accept="image/png, image/jpeg" />
                                                )}</div>
                                                {e.file ? (<div className=" text-green-700">Đã nộp</div>) : (<div className=" text-red-600">Chưa nộp</div>)}
                                            </React.Fragment>
                                        ))
                                    }
                                </div>
                            </div>
                            <div>
                                <h4 className="text-red-700 font-semibold">Kết quả</h4>
                                <div className="grid grid-cols-3">
                                    <div className="grid grid-rows-2">
                                        <div className="my-4 mx-4">
                                            Điểm:
                                        </div>
                                        <div className="mx-4">
                                            Kết quả:
                                        </div>
                                    </div>
                                    <div className="grid grid-rows-2 col-span-2">
                                        {
                                            topic.map((e, index) => (
                                                <React.Fragment key={e.id}>
                                                    <div className="my-4">{e.score ? e.score : ""}</div>
                                                    {!e.score ? (<div className="text-yellow-600">Chưa chấm điểm</div>) : (<div className={e.score >= 4 ? "text-green-700 font-semibold" : "text-red-600 font-semibold"}>{e.score >= 4 ? "Đạt" : "Chưa đạt"}</div>)}
                                                </React.Fragment>
                                            ))
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
        </div>
    );
}

export default StudentTopicDetail;