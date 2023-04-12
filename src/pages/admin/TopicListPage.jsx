import DropDown from "../../components/DropDown";
import TeacherLeftDashboard from "../../components/TeacherLeftDashboard";
import { BiExport, BiEdit } from "react-icons/bi";
import { IoMdAddCircleOutline } from "react-icons/io";
import { BsFillTrashFill, BsExclamationOctagonFill } from "react-icons/bs";
import Modal from "../../components/Modal";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const TopicListPage = () => {
    const [editTopic, setEditTopic] = useState(false);
    const [removeTopic, setRemoveTopic] = useState(false);
    const [addTopicFile, setAddTopicFile] = useState(false);
    const [addTopic, setAddTopic] = useState(false);
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
                            <h4 className="mx-4 font-bold text-gray-700 text-lg">Đề tài</h4>
                            <span className="flex"><p className="ml-4 mr-2 font-medium text-md">Trang chủ &#62;</p>  <p className="text-md text-blue-800 font-semibold">Danh sách đề tài</p></span>
                        </div>
                        <div className="rounded-xl h-full shadow-lg shadow-slate-400 py-4 mx-4">
                            <div >
                                <input className="w-1/3 border-2 p-1 mx-4 mt-2 rounded-lg outline-none border-slate-400" type="text" placeholder="Mã đề tài, tên đề tài ..." />
                            </div>
                            <div className="grid grid-cols-3">
                                <div className="ml-4 mt-2">
                                    <h3 className="text-blue-700 text-lg font-semibold">Danh sách đề tài</h3>
                                </div>

                                <div className="ml-4 mt-2 col-span-2 flex justify-end">
                                    <button onClick={() => setAddTopicFile(true)} className="mr-3 p-2 rounded-sm bg-green-700 hover:bg-green-500 text-white flex">
                                        <BiExport className="mr-1 mt-1 text-lg" />
                                        <p>Import File</p>
                                    </button>


                                    <button onClick={() => setAddTopic(true)} className="px-2 mr-4 rounded-sm bg-green-700 hover:bg-green-500 text-white flex">
                                        <IoMdAddCircleOutline className="mr-1 mt-3 text-lg" />
                                        <p className="mt-2">Thêm đề tài</p>
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
                            <div class="table-auto w-full border-t-2 border-b-2 grid grid-cols-6 border-y-slate-300 rounded-sm mt-2  text-center font-semibold">
                                <div className="border-r-2 border-slate-300 py-1">Mã đề tài</div>
                                <div className="border-r-2 col-span-2 border-slate-300 py-1">Tên đề tài</div>
                                <div className="col-span-2 border-r-2 border-slate-300 py-1">Tên tiếng Anh</div>
                                <div className="py-1">Hành động</div>
                            </div>
                            <div class="table-auto w-full border-b-2 grid grid-cols-6 border-y-slate-300 rounded-sm  text-center font-normal">
                                <div className="border-r-2 border-slate-300 py-1">DT001</div>
                                <div className="border-r-2 col-span-2 border-slate-300 py-1">Hệ thống quản lý thi trắc nghiệm</div>
                                <div className="col-span-2 border-r-2 border-slate-300 py-1">Hệ thống quản lý thi trắc nghiệm</div>
                                <div className="py-1">
                                    <button onClick={() => setEditTopic(true)} className="text-white bg-blue-700 rounded-sm hover:bg-blue-500 p-1 mr-1"><BiEdit /></button>
                                    <button onClick={() => setRemoveTopic(true)} className="text-white bg-red-700 rounded-sm hover:bg-red-500  p-1 mr-1"><BsFillTrashFill /></button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal isVisible={addTopicFile}>
                <form action="">
                    <h1 className="font-bold text-xl px-2 pb-2">Import danh sách đề tài</h1>
                    <hr className=" border border-slate-300" />
                    <div className="mx-4 mt-2 py-2 bg-yellow-200">
                        <h4 className="ml-2 text-lg font-semibold">Chú ý!</h4>
                        <p className="mx-5 text-sm">- Dữ liệu không được để trống</p>
                        <p className="mx-5 text-sm">- Mã đề tài không được trùng nhau</p>
                    </div>
                    <div className="mx-4 mt-2 flex">
                        <h5 className="text-sm font-bold mt-1 mr-1">Chọn tập tin (.csv)</h5>
                        <p className="text-red-700 font-semibold"> (*)</p>
                    </div>
                    <div className="mx-5 mt-1 border-2 border-slate-300 rounded-sm">
                        <input className="p-2" type="file" />
                    </div>
                    <div className="grid grid-cols-2 mt-2">
                        <button className=" mx-10 py-2 bg-gray-500 text-white rounded " onClick={() => setAddTopicFile(false)}>Đóng</button>
                        <button className=" mx-10 py-2 bg-green-600 text-white rounded " onClick={() => { setAddTopicFile(false); notify('Đã thêm danh sách đề tài!'); }}>Lưu lại</button>
                    </div>
                </form>
            </Modal >
            <Modal isVisible={addTopic}>
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
                        <button className=" mx-10 py-2 bg-gray-500 text-white rounded " onClick={() => setAddTopic(false)}>Đóng</button>
                        <button className=" mx-10 py-2 bg-green-600 text-white rounded " onClick={() => { setAddTopic(false); notify('Đã thêm đề tài!'); }}>Lưu lại</button>
                    </div>
                </form>
            </Modal >
            <Modal isVisible={editTopic}>
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
                        <button className=" mx-10 py-2 bg-gray-500 text-white rounded " onClick={() => setEditTopic(false)}>Đóng</button>
                        <button className=" mx-10 py-2 bg-green-600 text-white rounded " onClick={() => { setEditTopic(false); notify('Đã cập nhật thông tin đề tài!'); }}>Lưu lại</button>
                    </div>
                </form>
            </Modal >
            <Modal isVisible={removeTopic}>
                <BsExclamationOctagonFill className="text-4xl text-yellow-400 m-auto animate-bounce " />
                <form action="">
                    <h1 className="font-semibold text-lg text-center">Bạn có chắc chắn muốn xóa đề tài?</h1>
                    <p className="text-center">Thông tin đề tài sẽ bị xóa!</p>
                    <div className="grid grid-cols-2 mt-2">
                        <button className=" mx-10 py-2 bg-gray-500 text-white rounded " onClick={() => setRemoveTopic(false)}>Đóng</button>
                        <button className=" mx-10 py-2 bg-green-600 text-white rounded " onClick={() => { setRemoveTopic(false); notify('Đã xóa đề tài!'); }}>Lưu lại</button>
                    </div>
                </form>
            </Modal>
        </div >
    );
}

export default TopicListPage;