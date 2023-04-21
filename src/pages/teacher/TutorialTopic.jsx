import React, { useState } from "react";
import DropDown from "../../components/DropDown";
import TeacherLeftDashboard from "../../components/TeacherLeftDashboard";
import { ListOfGuidedTopics } from "../../api/teacherApi";
import empty_box from "../../assets/image/empty_box.png";
const TutorialTopic = () => {
    const token = localStorage.getItem('token');
    const [listTopic, setListTopic] = useState([]);
    useState(() => {
        const fetchApi = async () => {
            const res = await ListOfGuidedTopics(token);
            setListTopic(res.data);
        };
        fetchApi();
    }, []);

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
                            <div className="grid grid-cols-11 mt-10 text-center font-semibold text-sm">
                                <div className="mx-2 text-center">Mã đề tài</div>
                                <div className="text-center col-span-2">Tên đề tài</div>
                                <div className="text-center col-span-2">Tên tiếng anh</div>
                                <div className="col-span-2">Sinh viên thực hiện</div>
                                <div className="text-center">Hạn nộp báo cáo</div>
                                <div className="text-center">Niên khóa</div>
                                <div className="text-center">Học kỳ</div>
                                <div className="text-center">Trạng thái tập tin</div>
                            </div>
                            <div className="pb-2 pt-2 grid grid-cols-11 font-normal text-sm ">
                                {
                                    listTopic && listTopic?.map((e) => (
                                        <React.Fragment key={e.id}>
                                            <div className="mx-2 text-center mb-2">{e.topic.code}</div>
                                            <div className="col-span-2 mb-2">{e.topic.VietnameseName}</div>
                                            <div className="text-center col-span-2 mb-2">{e.topic.EnglishName}</div>
                                            <div className="col-span-2 text-center  mb-2">{e.student.fullName}</div>
                                            <div className="px-2 mb-2 text-center">{new Date(e.endDate).toLocaleDateString('en-GB')}</div>
                                            <div className="text-center mb-2">{e.shoolYear.year}</div>
                                            <div className=" text-center mb-2">{e.shoolYear.semester}</div>
                                            <div className=" text-center mb-2">{(!e.statusile) ? (<p className="text-red-600 font-semibold">Chưa nộp</p>) : (<p className="text-green-700 font-semibold">Đã nộp</p>)}</div>
                                        </React.Fragment>
                                    ))}
                                {
                                listTopic.length < 1 && (
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

export default TutorialTopic;