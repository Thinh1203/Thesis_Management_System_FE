import DropDown from "../../components/DropDown";
import TeacherLeftDashboard from "../../components/TeacherLeftDashboard";
import React, { useEffect, useState } from 'react';
import { getListStudentGrade } from "../../api/studentApi";
const StudentGradeList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const res = await getListStudentGrade();
            setData(res)
        };
        fetchApi();
    }, []);

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
                            <h4 className="mx-4 font-bold text-gray-700 text-lg">Danh sách sinh viên xin điểm i</h4>
                            <span className="flex"><p className="ml-4 mr-2 font-medium text-md">Trang chủ &#62;</p>  <p className="text-md text-blue-800 font-semibold">Sinh viên xin điểm i đã duyệt</p></span>
                        </div>
                        <div className="rounded-xl h-full shadow-lg shadow-slate-400 py-4 mx-4">
                            <div className="ml-4 mt-2">
                                <h3 className="text-blue-700 text-lg font-semibold">Thông tin sinh viên xin điểm i</h3>
                            </div>
                            <div className="grid grid-cols-12 mx-2 text-center text-base font-semibold mt-2">
                                <div className="border-2 border-slate-300">
                                    Tài khoản
                                </div>
                                <div className="col-span-2 border-y-2 border-r-2 border-slate-300">
                                    Họ và tên
                                </div>
                                <div className="border-y-2 border-r-2 border-slate-300">
                                    Mã đề tài
                                </div>
                                <div className="col-span-3 border-y-2 border-r-2 border-slate-300">
                                    Tên đề tài
                                </div>
                                <div className="col-span-3 border-y-2 border-r-2 border-slate-300">
                                    Tên tiếng Anh
                                </div>
                                <div className="border-y-2 border-r-2 border-slate-300">
                                    Niên khóa
                                </div>
                                <div className="border-y-2 border-r-2 border-slate-300">
                                    Học kỳ
                                </div>
                            </div>
                            {
                                data && data.map(e => (
                                    <div className="grid grid-cols-12 mx-2 text-center border-x-2 border-b-2 border-slate-300" key={e.id}>
                                        <div className="border-r-2 border-slate-300">
                                            {e.account}
                                        </div>
                                        <div className="col-span-2 border-r-2 border-slate-300">
                                            {e.fullName}
                                        </div>
                                        <div className="border-r-2 border-slate-300">
                                            {e.thesis.topic.code}
                                        </div>
                                        <div className="col-span-3 border-r-2 border-slate-300">
                                            {e.thesis.topic.VietnameseName}
                                        </div>
                                        <div className="col-span-3 border-r-2 border-slate-300">
                                            {e.thesis.topic.EnglishName}
                                        </div>
                                        <div className="border-r-2 border-slate-300">
                                            {e.thesis.shoolYear.year}
                                        </div>
                                        <div className="border-r-2 border-slate-300">
                                            {e.thesis.shoolYear.semester}
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default StudentGradeList;