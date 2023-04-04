import React from "react";
import logo from "../../assets/image/logo.png";
import logoCit from "../../assets/image/logoCit.png";
import { AiFillHome } from "react-icons/ai";
import DropDown from "../../components/DropDown";
const StudentGradeI = () => {
    const file = [
        {
            "id": 1,
            "name": "Hệ thống quản lý thi trắc nghiệm tiếng anh",
            "status": "yes"
        },

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
                <div className="bg-slate-200 absolute w-1/3 h-56 mt-44 rounded-md shadow-xl shadow-slate-400 ">
                    <h3 className="mt-5 ml-8 font-semibold text-black text-xl">Xin điểm i</h3>
                    {
                        file.length ? 
                        (file.map((e, index) => (
                            
                                <>
                                    <div className="grid grid-cols-2 text-center mt-2">
                                        <div className="font-semibold">
                                            Tên file
                                        </div>
                                        <div className="font-semibold">
                                            Trạng thái
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 mt-2">
                                        <div className="mx-2">
                                            {e.name}
                                        </div>
                                        <div className="text-center">
                                            {e.status === "waiting" ? (<p className="text-yellow-600">Chờ duyệt</p>) : (<div className={e.status==="yes" ? "text-green-600 font-semibold" : "text-red-600 font-semibold"}>{e.status==="yes" ? "Đã duyệt" : "Đã bị từ chối"}</div>) }
                                        </div>
                                    </div></>
                            ) 
                        )) :  (( 
                            <input className="my-10 mx-20" type="file"
                                id="avatar" name="avatar"
                                accept="image/png, image/jpeg" /> 
                            ))
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

export default StudentGradeI;