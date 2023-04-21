import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useLocation } from "react-router-dom";
import { getOneCouncil } from "../api/adminApi/council";
const HomeDetail = () => {
    const location = useLocation();
    const id = location.state;
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const res = await getOneCouncil(id);
            setData(res.data);
        };
        fetchData();
    }, []);


    return (
        <div>
            <Header />
            <div className="w-1/4 h-12 shadow-xl p-3 rounded-md shadow-slate-500 m-auto mt-5 text-center border-2 border-slate-300">
                <h1 className="text-red-500 font-semibold text-lg border">CHI TIẾT HỘI ĐỒNG <span className="text-cyan-600">{data && data?.code}</span></h1>
            </div>
            <div className="rounded-xl h-full shadow-lg text-center shadow-slate-500 py-4 mt-5 mx-4">
                <div className="grid grid-cols-12">
                    <div className="border-slate-400 border p-2 w-3/4 col-span-9  rounded-md shadow-lg shadow-slate-500 mx-auto my-4">
                        <div className="grid grid-cols-3 font-semibold text-md ">
                            <div className="border border-r-slate-300">Mã giảng viên</div>
                            <div className="border border-r-slate-300">Vị trí</div>
                            <div>Tên giảng viên</div>
                        </div>
                        <hr className="border border-slate-300" />
                        {
                            data && data.councildetails && (
                                <div className="grid grid-cols-3">
                                    <div className="border border-r-slate-300">{data.councildetails[0].teacher.account}</div>
                                    <div className="border border-r-slate-300">{data.councildetails[0].position}</div>
                                    <div>{data.councildetails[0].teacher.fullName}</div>
                                    <div className="border border-r-slate-300">{data.councildetails[1].teacher.account}</div>
                                    <div className="border border-r-slate-300">{data.councildetails[1].position}</div>
                                    <div>{data.councildetails[1].teacher.fullName}</div>
                                    <div className="border border-r-slate-300">{data.councildetails[2].teacher.account}</div>
                                    <div className="border border-r-slate-300">{data.councildetails[2].position}</div>
                                    <div>{data.councildetails[2].teacher.fullName}</div>
                                </div>
                            )}
                    </div>
                    <div className="col-span-3 grid grid-cols-2 rounded-md shadow-lg shadow-slate-500 mr-8 my-4 border border-slate-400 p-2">
                        <div className="grid grid-rows-3">
                            <div className="border-b border-r border-slate-400 font-semibold">Ngày diễn ra</div>
                            <div className="border-b border-r border-slate-400 font-semibold">Thời gian bắt đầu</div>
                            <div className="border-r border-slate-400 font-semibold">Thời gian kết thúc</div>
                        </div>
                        <div className="grid grid-rows-3">
                            <div className="border-b border-slate-400">{data && (new Date(data.startDate).toLocaleDateString('en-GB'))}</div>
                            <div className="border-b border-slate-400">{data && data.timeStart.slice(0, -3)}</div>
                            <div className="border-slate-400">{data && data.timeEnd.slice(0, -3)}</div>
                        </div>
                    </div>
                </div>

                <div className="px-4 py-2">
                    <div className="grid grid-cols-12 border-b-2 border-black text-center font-semibold">
                        <div className="text-lg">Mã đề tài</div>
                        <div className="col-span-3 text-lg">Tên tiếng Việt</div>
                        <div className="col-span-2 text-lg">Tên tiếng Anh</div>
                        <div className="col-span-2 text-lg">Sinh viên thực hiện</div>
                        <div className="col-span-2 text-lg">Giảng viên hướng dẫn</div>
                        <div className="text-lg">Niên khóa</div>
                        <div className="text-lg">Học kỳ</div>
                    </div>

                    <div className="grid grid-cols-12 ">
                        {
                            data && data.theses?.map(e => (
                                <React.Fragment key={e.id}>
                                    <div className="text-center">{e.topic.code}</div>
                                    <div className="col-span-3 px-2 text-center">{e.topic.VietnameseName}</div>
                                    <div className="col-span-2 text-center ">{e.topic.EnglishName}</div>
                                    <div className="col-span-2 text-center">{e.student.fullName}</div>
                                    <div className="col-span-2 text-center">{e.teacher.fullName}</div>
                                    <div className="text-center">{data.shoolYear.year}</div>
                                    <div className="text-center ">{data.shoolYear.semester}</div>
                                </React.Fragment>
                            ))
                        }
                    </div>

                </div>

            </div>

        </div>
    );
}

export default HomeDetail;