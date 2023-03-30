import React from "react";
import logo from "../../assets/image/logo.png";
import logoCit from "../../assets/image/logoCit.png";
import DropDown from "../../components/DropDown";
import { AiFillHome } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const StudentHomePage = () => {

    const navigate = useNavigate();
    const handleNavigate = () => navigate("/student/topic/detail");
    const topic = [
        {
            "id": 1,
            "name": "Hệ thống quản lý thi trắc nghiệm tiếng anh",
            "englishName": "Hệ thống quản lý thi trắc nghiệm tiếng anh",
            "code": "CNTT2023-DT01",
            "score": null,
            "startDate": "01/02/2023",
            "endDate": "27/04/2023",
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
                <div className="bg-slate-200 absolute w-5/6 h-56 mt-44 rounded-md shadow-xl shadow-slate-400 ">
                    <h3 className="mt-5 ml-8 font-semibold text-black text-xl">Khoá luận bảo vệ</h3>
                    <div className="grid grid-cols-6 text-center my-5 font-semibold text-md">
                        <div>Mã đề tài</div>
                        <div>Tên đề tài</div>
                        <div>Ngày bắt đầu</div>
                        <div>Ngày kết thúc</div>
                        <div>Trạng thái</div>
                        <div>Hành động</div>
                    </div>
                    <div className="grid grid-cols-6 text-center">
                        {  
                            topic.map((e, index) => (
                                <React.Fragment key={e.id}>
                                    <div className="my-2">{e.code}</div>
                                    <div className="my-2">{e.name}</div>
                                    <div className="my-2">{e.startDate}</div>
                                    <div className="my-2">{e.endDate}</div>
                                    {!e.score ? (<div className="my-2 text-red-700">Đang thực hiện</div>) : (<div className="my-2 text-green-700">Đã hoàn thành</div>)}
                                    <div>
                                        <button className="p-2 bg-green-800 text-white rounded-md" onClick={() => handleNavigate()}>Xem chi tiết</button>
                                    </div>
                                </React.Fragment>
                            ))
                        }
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

export default StudentHomePage;