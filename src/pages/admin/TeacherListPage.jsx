import React, { useState } from "react";
import DropDown from "../../components/DropDown";
import ImportModal from "../../components/admin/ImportModal";
import AddAccount from "../../components/admin/AddAccount";
import TeacherLeftDashboard from "../../components/TeacherLeftDashboard";
import { IoMdAddCircleOutline, IoMdRemoveCircleOutline } from "react-icons/io";
import { BiExport, BiEdit } from "react-icons/bi";
import { AiFillFileText } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const TeacherListPage = () => {
    const [accountListModal, setAccountListModal] = useState(false);
    const [accountModal, setAccountModal] = useState(false);
    const teacher = [
        {
            "id": 1,
            "code": "DV001",
            "name": "Lâm Nhựt Khang",
            "email": "thinhb1910454@gmail.com",
            "address": "Cần Thơ",
            "gender": "Nữ",
            "phone": "0345139122",
            "position": "giảng viên",
        },
        {
            "id": 1,
            "code": "DV001",
            "name": "Lâm Nhựt Khang",
            "email": "thinhb1910454@gmail.com",
            "address": "Cần Thơ",
            "gender": "Nữ",
            "phone": "0345139122",
            "position": "giảng viên",
        },
        {
            "id": 1,
            "code": "DV001",
            "name": "Lâm Nhựt Khang",
            "email": "thinhb1910454@gmail.com",
            "address": "Cần Thơ",
            "gender": "Nữ",
            "phone": "0345139122",
            "position": "giảng viên",
        },
        {
            "id": 1,
            "code": "DV001",
            "name": "Lâm Nhựt Khang",
            "email": "thinhb1910454@gmail.com",
            "address": "Cần Thơ",
            "gender": "Nữ",
            "phone": "0345139122",
            "position": "giảng viên",
        },
        {
            "id": 1,
            "code": "DV001",
            "name": "Lâm Nhựt Khang",
            "email": "thinhb1910454@gmail.com",
            "address": "Cần Thơ",
            "gender": "Nữ",
            "phone": "0345139122",
            "position": "giảng viên",
        },
        {
            "id": 1,
            "code": "DV001",
            "name": "Lâm Nhựt Khang",
            "email": "thinhb1910454@gmail.com",
            "address": "Cần Thơ",
            "gender": "Nữ",
            "phone": "0345139122",
            "position": "giảng viên",
        },
        {
            "id": 1,
            "code": "DV001",
            "name": "Lâm Nhựt Khang",
            "email": "thinhb1910454@gmail.com",
            "address": "Cần Thơ",
            "gender": "Nữ",
            "phone": "0345139122",
            "position": "giảng viên",
        },
        {
            "id": 1,
            "code": "DV001",
            "name": "Lâm Nhựt Khang",
            "email": "thinhb1910454@gmail.com",
            "address": "Cần Thơ",
            "gender": "Nữ",
            "phone": "0345139122",
            "position": "giảng viên",
        },
        {
            "id": 1,
            "code": "DV001",
            "name": "Lâm Nhựt Khang",
            "email": "thinhb1910454@gmail.com",
            "address": "Cần Thơ",
            "gender": "Nữ",
            "phone": "0345139122",
            "position": "giảng viên",
        },
        {
            "id": 1,
            "code": "DV001",
            "name": "Lâm Nhựt Khang",
            "email": "thinhb1910454@gmail.com",
            "address": "Cần Thơ",
            "gender": "Nữ",
            "phone": "0345139122",
            "position": "giảng viên",
        },



    ];
    const notify = () => {
        toast.success('Đã cập nhật giảng viên!', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }


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
                            <h4 className="mx-4 font-bold text-gray-700 text-lg">Giảng viên</h4>
                            <span className="flex"><p className="ml-4 mr-2 font-medium text-md">Trang chủ &#62;</p>  <p className="text-md text-blue-800 font-semibold">Danh sách giảng viên</p></span>
                        </div>
                        <div className="rounded-xl h-full shadow-lg shadow-slate-400 py-4 mx-4">
                            <div className="">
                                <input className="w-1/3 border-2 p-1 mx-4 rounded-lg outline-none border-slate-400" type="text" placeholder="Tài khoản, tên, số điện thoại ..." />
                            </div>
                            <div className="grid grid-cols-3">
                                <div className="ml-4 mt-2">
                                    <h3 className="text-blue-700 text-lg font-semibold">Danh sách giảng viên</h3>
                                </div>
                                <div className="ml-4 mt-2 col-span-2 flex justify-end">
                                    <button onClick={() => setAccountListModal(true)} className="mx-4 p-2 rounded-sm bg-green-700 text-white flex">
                                        <BiExport className="mr-1 mt-1 text-lg" />
                                        <p>Import File</p>
                                    </button>
                                    <ImportModal isVisible={accountListModal}>
                                        <h1 className="font-bold text-xl px-2 pb-2">Import danh sách giảng viên</h1>
                                        <hr className=" border border-slate-300" />
                                        <div className="mx-4 mt-2 py-2 bg-yellow-200">
                                            <h4 className="ml-2 text-lg font-semibold">Chú ý!</h4>
                                            <p className="mx-5 text-sm">- Dữ liệu không được để trống</p>
                                            <p className="mx-5 text-sm">- Mã giảng viên, email và số điện thọai không được trùng nhau</p>
                                        </div>
                                        <div className="mx-4 mt-2 flex">
                                            <h5 className="text-sm font-bold mt-1 mr-1">Chọn tập tin (.csv)</h5>
                                            <p className="text-red-700 font-semibold"> (*)</p>
                                        </div>
                                        <div className="mx-5 mt-1 border-2 border-slate-300 rounded-sm">
                                            <input className="p-2" type="file" />
                                        </div>
                                        <div className="grid grid-cols-2 mt-2">
                                            <button className=" mx-10 py-2 bg-gray-500 text-white rounded " onClick={() => setAccountListModal(false)}>Đóng</button>
                                            <button className=" mx-10 py-2 bg-green-600 text-white rounded " onClick={() => { setAccountListModal(false); notify(); }}>Lưu lại</button>
                                        </div>
                                    </ImportModal >

                                    <button onClick={() => setAccountModal(true)} className="px-2 mr-4 rounded-sm bg-green-700 text-white flex"><IoMdAddCircleOutline className="mr-1 mt-3 text-lg" /><p className="mt-2">Thêm giảng viên</p></button>
                                    <AddAccount isVisible={accountModal}>
                                        <h1 className="font-bold text-2xl px-2 pb-2">Thêm giảng viên</h1>
                                        <div className="grid grid-cols-3 p-4">
                                            <div className="px-2 grid grid-rows-7">
                                                <div className="font-semibold mt-1">Tài khoản<span className="text-red-700 font-semibold">(*)</span></div>
                                                <div className="font-semibold mt-1">Email<span className="text-red-700 font-semibold">(*)</span></div>
                                                <div className="font-semibold mt-1">Họ và tên<span className="text-red-700 font-semibold">(*)</span></div>
                                                <div className="font-semibold mt-1">Địa chỉ<span className="text-red-700 font-semibold">(*)</span></div>
                                                <div className="font-semibold mt-1">Giới tính<span className="text-red-700 font-semibold">(*)</span></div>
                                                <div className="font-semibold mt-1">Số điện thoại<span className="text-red-700 font-semibold">(*)</span></div>
                                                <div className="font-semibold mt-1">Chức vụ<span className="text-red-700 font-semibold">(*)</span></div>
                                            </div>
                                            <div className="col-span-2 grid grid-rows-7">
                                                <div className="mt-1">
                                                    <input className="w-full  border border-slate-400 rounded-sm" type="text" />
                                                </div>
                                                <div className="mt-1">
                                                    <input className="w-full border border-slate-400 rounded-sm" type="email" />
                                                </div>
                                                <div className="mt-1">
                                                    <input className="w-full border border-slate-400 rounded-sm" type="text" />
                                                </div>
                                                <div className="mt-1">
                                                    <input className="w-full border border-slate-400 rounded-sm" type="text" />
                                                </div>
                                                <div className="mt-1">
                                                    <select name="" id="" className="border border-black rounded-sm">
                                                        <option value="">Nam</option>
                                                        <option value="">Nữ</option>
                                                    </select>
                                                </div>
                                                <div className="mt-1">
                                                    <input className="w-full  border border-slate-400 rounded-sm" type="text" />
                                                </div>
                                                <div className="mt-1">
                                                    <select name="" id="" className="border border-black rounded-sm">
                                                        <option value="">Giảng viên</option>
                                                        <option value="">Sinh viên</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 mt-2">
                                            <button className=" mx-10 py-2 bg-gray-500 text-white rounded " onClick={() => setAccountModal(false)}>Đóng</button>
                                            <button className=" mx-10 py-2 bg-green-600 text-white rounded " onClick={() => { setAccountModal(false); notify(); }}>Lưu lại</button>
                                        </div>
                                    </AddAccount>
                                    <ToastContainer
                                        position="top-center"
                                        autoClose={1000}
                                        hideProgressBar={false}
                                        newestOnTop={false}
                                        closeOnClick
                                        rtl={false}
                                        pauseOnFocusLoss
                                        draggable
                                        pauseOnHover
                                        theme="light"
                                    />
                                </div>
                            </div>
                            <div class="table-auto w-full border-t-2 border-b-2 grid grid-cols-11 border-y-slate-300 rounded-sm mt-2  text-center font-semibold">
                                <div className="border-r-2 border-slate-300 py-1">Tài khoản</div>
                                <div className="border-r-2 col-span-2 border-slate-300 py-1">Email</div>
                                <div className="col-span-2 border-r-2 border-slate-300 py-1">Họ và tên</div>
                                <div className="border-r-2 border-slate-300 py-1">Địa chỉ</div>
                                <div className="border-r-2 border-slate-300 py-1">Giới tính</div>
                                <div className="border-r-2 border-slate-300 py-1">Số điện thoại</div>
                                <div className="py-1 border-r-2 border-slate-300">Chức vụ</div>
                                <div className="py-1  border-r-2 border-slate-300">Đề tài</div>
                                <div className="py-1">Hành động</div>
                            </div>
                            {
                                teacher.map((e, index) => (
                                    <div class="table-auto w-ful grid grid-cols-11 border-b-2 border-b-slate-300 rounded-sm text-center">
                                        <div className="border-r-2 border-slate-300 py-1">{e.code}</div>
                                        <div className="border-r-2 col-span-2 border-slate-300 py-1">{e.email}</div>
                                        <div className="col-span-2 border-r-2 border-slate-300 py-1">{e.name}</div>
                                        <div className="border-r-2 border-slate-300 py-1">{e.address}</div>
                                        <div className="border-r-2 border-slate-300 py-1">{e.gender}</div>
                                        <div className="border-r-2 border-slate-300 py-1">{e.phone}</div>
                                        <div className="py-1 border-r-2 border-slate-300">{e.position}</div>
                                        <div className="py-1  border-r-2 border-slate-300"><button className="text-white bg-blue-700 rounded-sm p-1"><AiFillFileText /></button></div>
                                        <div className="py-1"><button className="text-white bg-blue-700 rounded-sm p-1"><BiEdit /></button> <button className="text-white bg-red-700 rounded-sm p-1"><BsFillTrashFill /></button></div>
                                    </div>))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeacherListPage;