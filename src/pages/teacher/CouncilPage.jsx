import React, { useState } from "react";
import { FaLockOpen } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
const CouncilPage = () => {
    const council = [
        {
            "id": 1,
            "code": "CNTT01",
            "startDate": "24/04/2023",
            "timeStart": "7:30",
            "timeEnd": "11:30",
            "status": true,
            "position": "Chủ tịch"
        },
        {
            "id": 2,
            "code": "CNTT01",
            "startDate": "24/04/2023",
            "timeStart": "7:30",
            "timeEnd": "11:30",
            "status": false
        },
        {
            "id": 3,
            "code": "CNTT01",
            "startDate": "24/04/2023",
            "timeStart": "7:30",
            "timeEnd": "11:30",
            "status": false,
            "position": "Thư ký"
        },
    ];
    return (
        <div>
            <div className="mt-20">
                <div className="border-2 rounded-xl mx-5 my-5 shadow-lg shadow-slate-400 py-4">
                    <h4 className="mx-4 font-bold text-gray-700 text-lg">Hội đồng</h4>
                    <span className="flex"><p className="ml-4 mr-2 font-medium text-md">Trang chủ &#62;</p>  <p className="text-md text-blue-800 font-semibold">Danh sách hội đồng tham gia</p></span>
                </div>
                <div className="border-2 rounded-xl mx-5 my-5 shadow-lg shadow-slate-400">
                    <div className="grid grid-cols-7 text-center font-semibold text-base mb-2">
                        <div>Mã hội đồng</div>
                        <div>Ngày bắt đầu</div>
                        <div>Giờ bắt đầu</div>
                        <div>Giờ kết thúc</div>
                        <div>Chức vụ</div>
                        <div>Trạng thái</div>
                        <div>Hành động</div>
                    </div>
                    <div className="grid grid-cols-7 text-center  text-base">
                        {council.map((e, index) => (
                            <React.Fragment key={e.id}>
                                <div className="my-2">{e.code}</div>
                                <div className="my-2">{e.startDate}</div>
                                <div className="my-2">{e.timeStart}</div>
                                <div className="my-2">{e.timeEnd}</div>
                                {!e.position ? (<div className="my-2">Giảng viên hướng dẫn</div>) : (<div className="my-2">{e.position}</div>)}
                                {!e.status ? (<div className="text-red-700s text-red-700 m-auto"><FaLock/></div>): (<div className="text-green-700  m-auto"><FaLockOpen /></div>)}
                                {e.status ? (<div>{e.position && (<Link to="/teacher/detail"><button className="my-1 bg-green-700 p-1 rounded-md text-white">Xem chi tiết</button></Link>)}</div>) : (<div></div>)}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CouncilPage;