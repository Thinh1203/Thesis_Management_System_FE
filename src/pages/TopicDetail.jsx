import Header from "../components/Header";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getOneTheses } from "../api/adminApi/thesis";
const TopicDetail = () => {
    const location = useLocation();
    const id = location.state;
    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const res = await getOneTheses(id);
            setData(res.data);

        };
        fetchData();
    }, []);

    return (
        <div>
            <Header />
            <div className="grid m-auto mt-2 border-indigo-600 w-5/6 h-96">
                <div className="grid grid-rows-2 h-28">
                    <div className="mx-auto w-1/3 h-12 shadow-xl border-2 border-slate-300 rounded-md p-3 shadow-slate-500 text-center">
                        <h1 className="text-lg text-red-500 font-semibold">CHI TIẾT ĐỀ TÀI</h1>
                    </div>
                    <div className="mx-auto grid grid-cols-2 my-5 border-2 border-slate-300 w-auto h-80 rounded-md shadow-xl shadow-slate-500">
                        <div className="mx-auto font-semibold my-6">
                            <div className="my-2">Mã đề tài:</div>
                            <div className="my-2">Tên đề tài:</div>
                            <div className="my-2">Tên tiếng anh:</div>
                            <div className="my-2">Giảng viên hướng dẫn:</div>
                            <div className="my-2">Sinh viên thực hiện:</div>
                            <div className="my-2">Niên khóa:</div>
                            <div className="my-2">Học kỳ:</div>
                            <div className="my-2">Hội đồng bảo vệ LVTN:</div>
                        </div>
                        <div className="font-normal my-6">
                            <div className="my-2">CT550N{data?.topic.id}</div>
                            <div className="my-2 mr-2">{data?.topic.VietnameseName}</div>
                            <div className="my-2 mr-2">{data?.topic.EnglishName}</div>
                            <div className="my-2">{data?.teacher.fullName}</div>
                            <div className="my-2">{data?.student.fullName}</div>
                            <div className="my-2">{data?.shoolYear.year}</div>
                            <div className="my-2">{data?.shoolYear.semester}</div>
                            <div className="my-2">HD{data?.council.id}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopicDetail;