import React, { useEffect, useState } from "react";
import { FaLockOpen } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { getAllCouncil } from "../../api/teacherApi";
const CouncilPage = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    useState(() => {
        const fetchApi = async () => {
            const res = await getAllCouncil();
            setData(res);
        };
        fetchApi();
    }, []);

    const detailCouncil = async (id) => {
        navigate("/teacher/detail", {state: id});
    };
    return (
        <div>
            <div className="mt-20">
                <div className="border-2 rounded-xl mx-5 my-5 shadow-lg shadow-slate-400 py-4">
                    <h4 className="mx-4 font-bold text-gray-700 text-lg">Hội đồng</h4>
                    <span className="flex"><p className="ml-4 mr-2 font-medium text-md">Trang chủ &#62;</p>  <p className="text-md text-blue-800 font-semibold">Danh sách hội đồng tham gia</p></span>
                </div>
                <div className="border-2 rounded-xl mx-5 my-5 shadow-lg shadow-slate-400">
                    <div className="grid grid-cols-9 text-center font-semibold text-base mb-2">
                        <div>Mã hội đồng</div>
                        <div>Địa điểm diễn ra</div>
                        <div>Ngày bắt đầu</div>
                        <div>Giờ bắt đầu</div>
                        <div>Giờ kết thúc</div>
                        <div className="col-span-2">Chức vụ</div>
                        <div>Trạng thái</div>
                        <div>Hành động</div>
                    </div>
                    <div className="grid grid-cols-9 text-center  text-base">
                        { data && data.map((e) => (
                            <React.Fragment key={e.id}>
                                <div className="my-1">HD{e.id}</div>
                                <div className="my-1">{e.code}</div>
                                <div className="my-1">{new Date(e.startDate).toLocaleDateString('en-GB')}</div>
                                <div className="my-1">{e.timeStart.slice(0, -3)}</div>
                                <div className="my-1">{e.timeEnd.slice(0, -3)}</div>
                                {(e.position ==="gvhd") ? (<div className="my-1 col-span-2">Giảng viên hướng dẫn</div>) : (<div className="my-1 col-span-2">{e.position}</div>)}
                                {!e.status ? (<div className="text-red-700s text-red-700 m-auto"><FaLock /></div>) : (<div className="text-green-700  m-auto"><FaLockOpen /></div>)}
                                {e.status ? (<div>{(e.position!=='gvhd') && (<button onClick={() => detailCouncil(e.id)} className="  p-1 rounded-md text-blue-700 font-semibold hover:text-blue-500">Xem chi tiết</button>)}</div>) : (<div></div>)}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CouncilPage;