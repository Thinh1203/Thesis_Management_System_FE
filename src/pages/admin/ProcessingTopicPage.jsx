import DropDown from "../../components/DropDown";
import TeacherLeftDashboard from "../../components/TeacherLeftDashboard";
import { BiExport, BiEdit } from "react-icons/bi";
import { IoMdAddCircleOutline } from "react-icons/io";
import { BsFillTrashFill, BsExclamationOctagonFill } from "react-icons/bs";
import Modal from "../../components/Modal";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ProcessingTopicPage = () => {
    const [editThesis, setEditThesis] = useState(false);
    const [removeThesis, setRemoveThesis] = useState(false);
    const [addThesis, setAddThesis] = useState(false);
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
                            <h4 className="mx-4 font-bold text-gray-700 text-lg">Khóa luận</h4>
                            <span className="flex"><p className="ml-4 mr-2 font-medium text-md">Trang chủ &#62;</p>  <p className="text-md text-blue-800 font-semibold">Danh sách khóa luận</p></span>
                        </div>
                        <div className="rounded-xl h-full shadow-lg shadow-slate-400 py-4 mx-4">
                            <div >
                                <input className="w-1/3 border-2 p-1 mx-4 mt-2 rounded-lg outline-none border-slate-400" type="text" placeholder="Mã đề tài, tên đề tài ..." />
                            </div>
                            <div className="grid grid-cols-3">
                                <div className="ml-4 mt-2">
                                    <h3 className="text-blue-700 text-lg font-semibold">Danh sách khóa luận</h3>
                                </div>

                                <div className="ml-4  col-span-2 flex justify-end">
                                    <button onClick={() => setAddThesis(true)} className="px-2  mr-4 rounded-sm bg-green-700 hover:bg-green-500 text-white flex">
                                        <IoMdAddCircleOutline className=" mt-3 mr-1 text-lg" />
                                        <p className="mt-2">Tạo khóa luận</p>
                                    </button>

                                </div>
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
                            <div class="table-auto w-full border-t-2 border-b-2 grid grid-cols-12 border-y-slate-300 rounded-sm mt-2  text-center font-semibold">
                                <div className="border-r-2 border-slate-300 py-1">Mã đề tài</div>
                                <div className="border-r-2 col-span-2 border-slate-300 py-1">Tên đề tài</div>
                                <div className="col-span-2 border-r-2 border-slate-300 py-1">Tên tiếng Anh</div>
                                <div className="py-1 border-r-2 border-slate-300">Sinh viên thực hiện</div>
                                <div className="py-1 border-r-2 border-slate-300">Giảng viên hướng dẫn</div>
                                <div className="py-1 border-r-2 border-slate-300">Ngày bắt đầu</div>
                                <div className="py-1 border-r-2 border-slate-300">Ngày kết thúc</div>
                                <div className="py-1 border-r-2 border-slate-300">Niên khóa</div>
                                <div className="py-1 border-r-2 border-slate-300">Học kỳ</div>
                                <div className="py-1 ">Hành động</div>
                            </div>
                            <div class="table-auto w-full border-b-2 grid grid-cols-12 border-y-slate-300 rounded-sm  font-normal">
                                <div className="border-r-2 ml-2 border-slate-300 py-1">Mã đề tài</div>
                                <div className="border-r-2 ml-2 col-span-2 border-slate-300 py-1">Tên đề tài</div>
                                <div className="col-span-2 ml-2 border-r-2 border-slate-300 py-1">Tên tiếng Anh</div>
                                <div className="py-1 ml-2 border-r-2 border-slate-300">Sinh viên thực hiện</div>
                                <div className="py-1 ml-2 border-r-2 border-slate-300">Giảng viên hướng dẫn</div>
                                <div className="py-1 ml-2 border-r-2 border-slate-300">Ngày bắt đầu</div>
                                <div className="py-1 ml-2 border-r-2 border-slate-300">Ngày kết thúc</div>
                                <div className="py-1 ml-2 border-r-2 border-slate-300">Niên khóa</div>
                                <div className="py-1 ml-2 border-r-2 border-slate-300 text-center">1</div>
                                <div className="py-1 text-center">
                                    <button onClick={() => setEditThesis(true)} className="text-white bg-blue-700 rounded-sm hover:bg-blue-500 p-1 mr-1"><BiEdit /></button>
                                    <button onClick={() => setRemoveThesis(true)} className="text-white bg-red-700 rounded-sm hover:bg-red-500  p-1 mr-1"><BsFillTrashFill /></button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal isVisible={addThesis}>
                <form action="">
                    <h1 className="font-bold text-xl px-2 pb-2">Thêm khóa luận</h1>
                    <hr className=" border border-slate-300" />
                    <div className="grid grid-cols-3">
                        <div className="grid grid-rows-3 p-4">
                            <div className="font-semibold mt-1">Mã đề tài<span className="text-red-700 font-semibold">(*)</span></div>
                            <div className="font-semibold mt-1">Tên đề tài<span className="text-red-700 font-semibold">(*)</span></div>
                            <div className="font-semibold mt-1">Tên tiếng anh<span className="text-red-700 font-semibold">(*)</span></div>
                        </div>
                        <div className="col-span-2 py-4 px-2">
                            <div className="grid grid-rows-3">
                                <div className="mt-1">
                                    <input className="w-full  border border-slate-400 rounded-sm" type="text" />
                                </div>
                                <div className="mt-1">
                                    <input className="w-full  border border-slate-400 rounded-sm" type="text" />
                                </div>
                                <div className="mt-1">
                                    <input className="w-full  border border-slate-400 rounded-sm" type="text" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 mt-2">
                        <button className=" mx-10 py-2 bg-gray-500 text-white rounded " onClick={() => setAddThesis(false)}>Đóng</button>
                        <button className=" mx-10 py-2 bg-green-600 text-white rounded " onClick={() => { setAddThesis(false); notify('Thêm khóa luận thành công!'); }}>Lưu lại</button>
                    </div>
                </form>
            </Modal >
            <Modal isVisible={editThesis}>
                <form action="">
                    <h1 className="font-bold text-xl px-2 pb-2">Thêm đề tài</h1>
                    <hr className=" border border-slate-300" />
                    <div className="grid grid-cols-3">
                        <div className="grid grid-rows-3 p-4">
                            <div className="font-semibold mt-1">Mã đề tài<span className="text-red-700 font-semibold">(*)</span></div>
                            <div className="font-semibold mt-1">Tên đề tài<span className="text-red-700 font-semibold">(*)</span></div>
                            <div className="font-semibold mt-1">Tên tiếng anh<span className="text-red-700 font-semibold">(*)</span></div>
                        </div>
                        <div className="col-span-2 py-4 px-2">
                            <div className="grid grid-rows-3">
                                <div className="mt-1">
                                    <input className="w-full  border border-slate-400 rounded-sm" type="text" />
                                </div>
                                <div className="mt-1">
                                    <input className="w-full  border border-slate-400 rounded-sm" type="text" />
                                </div>
                                <div className="mt-1">
                                    <input className="w-full  border border-slate-400 rounded-sm" type="text" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 mt-2">
                        <button className=" mx-10 py-2 bg-gray-500 text-white rounded " onClick={() => setEditThesis(false)}>Đóng</button>
                        <button className=" mx-10 py-2 bg-green-600 text-white rounded " onClick={() => { setEditThesis(false); notify('Đã cập nhật thông tin đề tài!'); }}>Lưu lại</button>
                    </div>
                </form>
            </Modal >
            <Modal isVisible={removeThesis}>
                <BsExclamationOctagonFill className="text-4xl text-yellow-400 m-auto animate-bounce " />
                <form action="">
                    <h1 className="font-semibold text-lg text-center">Bạn có chắc chắn muốn xóa khóa luận này?</h1> 
                    <div className="grid grid-cols-2 mt-2">
                        <button className=" mx-10 py-2 bg-gray-500 text-white rounded " onClick={() => setRemoveThesis(false)}>Đóng</button>
                        <button className=" mx-10 py-2 bg-green-600 text-white rounded " onClick={() => { setRemoveThesis(false); notify('Đã xóa đề tài!'); }}>Lưu lại</button>
                    </div>
                </form>
            </Modal>
        </div>
    );
}

export default ProcessingTopicPage;