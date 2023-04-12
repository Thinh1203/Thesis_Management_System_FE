import React, { useState } from "react";
import DropDown from "../../components/DropDown";
import Modal from "../../components/Modal";
import TeacherLeftDashboard from "../../components/TeacherLeftDashboard";
import { IoMdAddCircleOutline } from "react-icons/io";
import { BiEdit } from "react-icons/bi";
import { BsFillTrashFill, BsExclamationOctagonFill } from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SchoolYearPage = () => {
    const [remove, setRemove] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [addModal, setAddModal] = useState(false);
    const notify = (text) => {
        toast.success(text, {
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
                            <h4 className="mx-4 font-bold text-gray-700 text-lg">Niên khóa</h4>
                            <span className="flex"><p className="ml-4 mr-2 font-medium text-md">Trang chủ &#62;</p>  <p className="text-md text-blue-800 font-semibold">Niên khóa</p></span>
                        </div>
                        <div className="rounded-xl h-full shadow-lg shadow-slate-400 py-4 mx-4">
                            <div className="grid grid-cols-3">
                                <div className="ml-4">
                                    <h3 className="text-blue-700 text-lg font-semibold">Danh sách niên khóa</h3>
                                </div>
                                <div className="ml-4">
                                    <select className="border-2 border-slate-400 rounded-sm py-1 px-2 ml-5" name="" id="" value="">
                                        <option value="">Mặc định</option>
                                        <option value="true">2022-2023</option>
                                        <option value="false">2021-2022</option>
                                    </select>
                                </div>
                                <div className="flex justify-end mr-4">
                                    <button className="p-2 flex bg-green-700 hover:bg-green-500 text-white rounded-sm" onClick={() => setAddModal(true)}><IoMdAddCircleOutline className="mr-1 mt-1 text-lg" />Thêm niên khóa</button>
                                    <Modal isVisible={addModal}>
                                        <div className="p-2 text-left w-96">
                                            <h3 className="text-xl font-semibold text-red-700">Thêm niên khóa</h3>
                                            <form action="#">
                                                <div className="p-2">
                                                    <label htmlFor="" className="text-sm font-semibold">Niên khóa</label>
                                                    <input type="text" className="w-full border-2 border-slate-300 rounded-sm mt-2" />
                                                </div>

                                                <div className="p-2">
                                                    <label htmlFor="" className="text-sm font-semibold">Ngày bắt đầu</label>
                                                    <input type="date" className="w-full border-2 border-slate-300 rounded-sm mt-2" />
                                                </div>

                                                <div className="p-2">
                                                    <label htmlFor="" className="text-sm font-semibold">Ngày kết thúc </label>
                                                    <input type="date" className="w-full border-2 border-slate-300 rounded-sm mt-2" />
                                                </div>

                                                <div className="p-2">
                                                    <label htmlFor="" className="text-sm font-semibold">Học kỳ</label>
                                                    <select className="border-2 border-slate-400 rounded-sm py-1 px-2 ml-5" name="" id="" value="">
                                                        <option value="">1</option>
                                                        <option value="true">2</option>
                                                    </select>
                                                </div>
                                                <div className="grid grid-cols-2 mt-2">
                                                    <button className=" mx-2 py-2 bg-gray-500 text-white rounded " onClick={() => setAddModal(false)}>Đóng</button>
                                                    <button className=" mx-2 py-2 bg-green-600 text-white rounded " onClick={() => { setAddModal(false); notify('Đã thêm niên khóa!') }}>Lưu lại</button>
                                                </div>
                                            </form>
                                        </div>
                                    </Modal>
                                </div>
                            </div>
                            <div className="mt-4">
                                <table className="w-5/6 m-auto">
                                    <thead >
                                        <tr >
                                            <th className="border-2 border-slate-300 font-semibold">
                                                Niên khóa
                                            </th>
                                            <th className="border-y-2 border-r-2 border-slate-300 font-semibold">
                                                Học kỳ
                                            </th>
                                            <th className="border-y-2 border-r-2 border-slate-300 font-semibold">
                                                Ngày bắt đầu
                                            </th>
                                            <th className="border-y-2 border-r-2 border-slate-300 font-semibold">
                                                Ngày kết thúc
                                            </th>
                                            <th className="border-2 border-slate-300 font-semibold">
                                                Hành động
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-center">
                                        <tr>
                                            <td className="border-2 border-slate-300  p-2">
                                                2021-2022
                                            </td>
                                            <td className="border-2 border-slate-300  p-2">
                                                1
                                            </td>
                                            <td className="border-2 border-slate-300  p-2">
                                                01/02/2023
                                            </td>
                                            <td className="border-2 border-slate-300  p-2">
                                                28/04/2023
                                            </td>
                                            <td className="border-2 border-slate-300 p-2">
                                                <button onClick={() => setEditModal(true)} className="bg-blue-700 hover:bg-blue-500 p-1 mr-1 text-white rounded-sm"><BiEdit /></button>
                                                <Modal isVisible={editModal}>
                                                    <div className="p-2 text-left w-96">
                                                        <h3 className="text-xl font-semibold text-red-700">Thêm niên khóa</h3>
                                                        <form action="#">
                                                            <div className="p-2">
                                                                <label htmlFor="" className="text-sm font-semibold">Niên khóa</label>
                                                                <input type="text" className="w-full border-2 border-slate-300 rounded-sm mt-2" />
                                                            </div>

                                                            <div className="p-2">
                                                                <label htmlFor="" className="text-sm font-semibold">Ngày bắt đầu</label>
                                                                <input type="date" className="w-full border-2 border-slate-300 rounded-sm mt-2" />
                                                            </div>

                                                            <div className="p-2">
                                                                <label htmlFor="" className="text-sm font-semibold">Ngày kết thúc </label>
                                                                <input type="date" className="w-full border-2 border-slate-300 rounded-sm mt-2" />
                                                            </div>

                                                            <div className="p-2">
                                                                <label htmlFor="" className="text-sm font-semibold">Học kỳ</label>
                                                                <select className="border-2 border-slate-400 rounded-sm py-1 px-2 ml-5" name="" id="" value="">
                                                                    <option value="">1</option>
                                                                    <option value="true">2</option>
                                                                </select>
                                                            </div>
                                                            <div className="grid grid-cols-2 mt-2">
                                                                <button className=" mx-2 py-2 bg-gray-500 text-white rounded " onClick={() => setEditModal(false)}>Đóng</button>
                                                                <button className=" mx-2 py-2 bg-green-600 text-white rounded " onClick={() => { setEditModal(false); notify('Chỉnh sửa thành công!') }}>Lưu lại</button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </Modal>
                                                <button onClick={() => setRemove(true)} className="bg-red-700 hover:bg-red-500 p-1 text-white rounded-sm"><BsFillTrashFill /></button>
                                                <Modal isVisible={remove}>
                                                    <BsExclamationOctagonFill className="text-4xl text-yellow-400 m-auto animate-bounce " />
                                                    <form action="">
                                                        <h1 className="font-semibold text-lg">Bạn có chắc chắn muốn xóa niên khóa này?</h1>
                                                        <p>Khi xóa các thông tin liên quan đến niên khóa sẽ mất!</p>
                                                        <div className="grid grid-cols-2 mt-2">
                                                            <button className=" mx-10 py-2 bg-gray-500 text-white rounded " onClick={() => setRemove(false)}>Đóng</button>
                                                            <button className=" mx-10 py-2 bg-green-600 text-white rounded " onClick={() => { setRemove(false); notify('Đã xóa!') }}>Lưu lại</button>

                                                        </div>
                                                    </form>
                                                </Modal>
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
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SchoolYearPage;