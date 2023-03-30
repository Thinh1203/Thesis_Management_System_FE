import React, { useState } from "react";
import DropDown from "../../components/DropDown";
import TeacherLeftDashboard from "../../components/TeacherLeftDashboard";
const TutorialTopic = () => {
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
            "file": false,
            "score": null,
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
            "file": false,
            "score": null,
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
            "file": false,
            "score": null,
        },
        {
            "id": 4,
            "name": "Hệ thống quản lý thi trắc nghiệm tiếng anh",
            "englishName": "English test management system",
            "code": "CNTTDT01",
            "author": "Quách Huy Thịnh",
            "startDate": "01/02/2023",
            "endDate": "27/04/2023",
            "major": "Công nghệ thông tin",
            "courses": "2022-2023",
            "file": false,
            "score": null,
        },
        {
            "id": 5,
            "name": "Hệ thống quản lý thi trắc nghiệm tiếng anh",
            "englishName": "English test management system",
            "code": "CNTTDT01",
            "author": "Quách Huy Thịnh",
            "startDate": "01/02/2023",
            "endDate": "27/04/2023",
            "major": "Công nghệ thông tin",
            "courses": "2022-2023",
            "file": false,
            "score": null,
        },
        {
            "id": 6,
            "name": "Hệ thống quản lý thi trắc nghiệm tiếng anh",
            "englishName": "English test management system",
            "code": "CNTTDT01",
            "author": "Quách Huy Thịnh",
            "startDate": "01/02/2023",
            "endDate": "27/04/2023",
            "major": "Công nghệ thông tin",
            "courses": "2022-2023",
            "file": false,
            "score": null,
        },

    ];
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
                            <h4 className="mx-4 font-bold text-gray-700 text-lg">Đề tài hướng dẫn</h4>
                            <span className="flex"><p className="ml-4 mr-2 font-medium text-md">Trang chủ &#62;</p>  <p className="text-md text-blue-800 font-semibold">Danh sách đề tài đang hướng dẫn</p></span>
                        </div>
                        <div className="border-2 rounded-xl mx-5 my-5 shadow-lg shadow-slate-400">
                            <div className="grid grid-cols-11 mt-10 text-left font-semibold text-sm">
                                <div className="mx-2 text-center">Mã đề tài</div>
                                <div className="text-center">Tên đề tài</div>
                                <div className="text-center">Tên tiếng anh</div>
                                <div className="text-center">Ngành</div>
                                <div>Sinh viên thực hiện</div>
                                <div>Thời gian bắt đầu</div>
                                <div>Thời gian kết thúc</div>
                                <div className="text-center">Niên khóa</div>
                                <div>Trạng thái tập tin</div>
                                <div className="text-center">Điểm</div>
                                <div>Kết quả</div>
                            </div>
                            <div className="pb-2 pt-2 grid grid-cols-11 text-left font-normal text-sm ">
                                {topic.map((e, index) => (
                                    <React.Fragment key={e.id}>
                                        <div className="mx-2 text-center">{e.code}</div>
                                        <div>{e.name}</div>
                                        <div className="text-left px-4">{e.englishName}</div>
                                        <div className="text-center">{e.major}</div>
                                        <div>{e.author}</div>
                                        <div className="px-2">{e.startDate}</div>
                                        <div>{e.endDate}</div>
                                        <div className="text-center">{e.courses}</div>
                                        <div>{(!e.file) ? (<p className="text-red-600 font-semibold">Chưa nộp</p>) : (<p className="text-green-700 font-semibold">Đã nộp</p>)}</div>
                                        <div className="text-center">{e.score}</div>
                                        {!e.score ? (<><div></div></>) : (<div className={e.score >= 4 ? "text-green-700 font-semibold" : "text-red-600 font-semibold"}>{e.score >= 4 ? "Đạt" : "Chưa đạt"}</div>)}
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

export default TutorialTopic;