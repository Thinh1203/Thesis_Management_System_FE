import DropDown from "../../components/DropDown";
import { useLocation } from "react-router-dom";
import TeacherLeftDashboard from "../../components/TeacherLeftDashboard";
import React, { useEffect, useState } from "react";
import { getOneCouncil } from "../../api/adminApi/council";
const CouncilDetailPage = () => {
    
    const [councilDetail, setCouncilDetail] = useState({});
    const location = useLocation();
    const id = location.state;
    useEffect(() => {
        const fetchApi = async () => {
            const res = await getOneCouncil(id);
            setCouncilDetail(res.data);
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
                            <h4 className="mx-4 font-bold text-gray-700 text-lg">Hội đồng</h4>
                            <span className="flex"><p className="ml-4 mr-2 font-medium text-md">Trang chủ &#62;</p> <p className="text-md text-blue-800 font-semibold">Chi tiết hội đồng</p></span>
                        </div>
                        <div className="rounded-xl h-full shadow-lg shadow-slate-400 py-4 mx-4">
                            <div className="mx-5">
                                <h2 className="text-red-700 text-2xl font-semibold">HD{councilDetail && councilDetail.id}</h2>
                            </div>
                            <div className="p-2 w-4/6 text-center rounded-md shadow-lg shadow-slate-400 mx-auto my-4">
                                <div className="grid grid-cols-3 font-semibold text-md ">
                                    <div className="border border-r-slate-300">Mã giảng viên</div>
                                    <div className="border border-r-slate-300">Vị trí</div>
                                    <div>Tên giảng viên</div>
                                </div>
                                <hr className="border border-slate-300" />
                                    {councilDetail && councilDetail.councildetails && (
                                        <div className="grid grid-cols-3">
                                            <div className="border border-r-slate-300">{councilDetail.councildetails[0].teacher.account}</div>
                                            <div className="border border-r-slate-300">{councilDetail.councildetails[0].position}</div>
                                            <div>{councilDetail.councildetails[0].teacher.fullName}</div>
                                            <div className="border border-r-slate-300">{councilDetail.councildetails[1].teacher.account}</div>
                                            <div className="border border-r-slate-300">{councilDetail.councildetails[1].position}</div>
                                            <div>{councilDetail.councildetails[1].teacher.fullName}</div>
                                            <div className="border border-r-slate-300">{councilDetail.councildetails[2].teacher.account}</div>
                                            <div className="border border-r-slate-300">{councilDetail.councildetails[2].position}</div>
                                            <div>{councilDetail.councildetails[2].teacher.fullName}</div>
                                        </div>
                                    )}

                            </div>
                            <div className="px-4">
                                <div className="grid grid-cols-12 border-b-2 border-black text-center font-semibold">
                                    <div>Mã đề tài</div>
                                    <div className="col-span-3">Tên tiếng Việt</div>
                                    <div className="col-span-2">Tên tiếng Anh</div>
                                    <div className="col-span-2">Sinh viên thực hiện</div>
                                    <div className="col-span-2">Giảng viên hướng dẫn</div>
                                    <div>Niên khóa</div>
                                    <div>Học kỳ</div>
                                </div>

                                <div className="grid grid-cols-12">
                                    {
                                        councilDetail && councilDetail.theses?.map(e => (
                                            <React.Fragment key={e.id}>
                                                <div className="text-center">CT550N{e.topic.id}</div>
                                                <div className="col-span-3 px-2 text-center">{e.topic.VietnameseName}</div>
                                                <div className="col-span-2 mx-2 text-center">{e.topic.EnglishName}</div>
                                                <div className="col-span-2 text-center">{e.student.fullName}</div>
                                                <div className="col-span-2 text-center">{e.teacher.fullName}</div>
                                                <div className="text-center">{councilDetail.shoolYear.year}</div>
                                                <div className="text-center">{councilDetail.shoolYear.semester}</div>
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
    );
}

export default CouncilDetailPage;