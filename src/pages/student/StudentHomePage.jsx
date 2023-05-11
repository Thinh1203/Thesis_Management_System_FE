import React, { useEffect, useState } from "react";
import logo from "../../assets/image/logo.png";
import logoCit from "../../assets/image/logoCit.png";
import DropDown from "../../components/DropDown";
import { AiFillHome } from "react-icons/ai";
import { useNavigate, Link } from "react-router-dom";
import { getTheses } from "../../api/studentApi";
import urlEmptyBox from "../../assets/image/empty_box.png";
const StudentHomePage = () => {
    const [data, SetData] = useState(null);
    const navigate = useNavigate();
    const handleNavigate = (id) => navigate("/student/topic/detail", { state: id });

    useEffect(() => {
        const fetchApi = async () => {
            const res = await getTheses();
            SetData(res);
        };
        fetchApi();
    }, []);
    return (
        <div className="grid grid-rows-6">
            <div className="bg-white  grid grid-cols-2">
                <div className="grid grid-cols-3">
                    <div >
                        <Link to="/student/home"><img className="h-24 w-auto ml-auto my-2" src={logoCit} alt="logo cict" /></Link>
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
                <div className="bg-slate-200 absolute w-5/6 h-56 mt-44 rounded-md shadow-xl shadow-slate-400 ">
                    <h3 className="mt-5 ml-8 font-semibold text-black text-xl">Khoá luận bảo vệ</h3>
                    {
                        data && (
                            <div className="grid grid-cols-7 text-center my-5 font-semibold text-md">
                                <div>Mã đề tài</div>
                                <div className="col-span-2">Tên đề tài</div>
                                <div>Hạn nộp file báo cáo</div>
                                <div>Hội đồng báo cáo</div>
                                <div>Trạng thái file báo cáo</div>
                                <div>Hành động</div>
                            </div>
                        )
                    }
                    {
                        data ? (
                            <div className="grid grid-cols-7 text-center">
                                <div className="">CT550N{data && data.topic.id}</div>
                                <div className="col-span-2">{data && data.topic.VietnameseName}</div>
                                <div className="">{data && (new Date(data.endDate).toLocaleDateString('en-GB'))}</div>
                                <div className="">HD{data && data.council.id}</div>
                                <div className="">{
                                    data?.statusFile ? (<div className=" text-green-700">Đã nộp</div>) : (<div className=" text-red-700">Chưa nộp</div>)
                                }</div>
                                <div>
                                    <button className="p-2 bg-green-800 text-white rounded-md" onClick={() => handleNavigate(data.id)}>Xem chi tiết</button>
                                </div>
                            </div>
                        ) : (
                            <div className="absolute w-7/12 flex flex-col items-end">
                                <img className="w-1/4 h-1/4" src={urlEmptyBox} alt="Empty box" />
                            </div>
                        )
                    }
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

export default StudentHomePage;