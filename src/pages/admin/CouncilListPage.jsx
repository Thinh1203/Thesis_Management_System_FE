import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DropDown from "../../components/DropDown";
import Modal from "../../components/Modal";
import TeacherLeftDashboard from "../../components/TeacherLeftDashboard";
import { IoMdAddCircleOutline, IoMdRemoveCircleOutline } from "react-icons/io";
import { FaLockOpen, FaLock } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";
import { BsFillTrashFill, BsExclamationOctagonFill } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
const CouncilListPage = () => {
    const [lock, setLock] = useState(false);
    const [remove, setRemove] = useState(false);
    const [lockModal, setLockModal] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [rowCount, setRowCount] = useState(1);

    const [status, setStatus] = useState();

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
    const navigate = useNavigate();
    const CouncilDetail = () => navigate("/admin/council/detail");

    const addRow = () => {
        setRowCount(rowCount + 1);
    };

    const removeRow = () => {
        setRowCount(rowCount - 1);
    };


    const renderRows = () => {
        const rows = [];
        for (let i = 0; i < rowCount; i++) {
            rows.push(
                <tr key={i} className="border-b-2 py-2">
                    <td className="border-r-2 px-2 py-2">
                        <input
                            className="w-full rounded-sm shadow-sm shadow-slate-500 focus:bg-blue-200"
                            type="text"
                        />
                    </td>
                    <td className="px-2 py-2">
                        <input
                            className="w-full rounded-sm shadow-sm shadow-slate-500 focus:bg-blue-200"
                            type="text"
                            value=""
                        />
                    </td>
                </tr>
            );
        }
        return rows;
    };
    const council = [
        {
            "id": 1,
            "code": "HD001",
            "year": "2022-2023",
            "courses": 1,
            "status": true,
            "timeStart": "7:30",
            "timeEnd": "11:30",
            "startDate":"24/03/2023"
        },
        {
            "id": 2,
            "code": "HD002",
            "year": "2022-2023",
            "courses": 2,
            "status": true,
            "timeStart": "7:30",
            "timeEnd": "11:30",
            "startDate":"24/03/2023"
        },
        {
            "id": 3,
            "code": "HD003",
            "year": "2023-2024",
            "courses": 1,
            "status": false,
            "timeStart": "7:30",
            "timeEnd": "11:30",
            "startDate":"24/03/2023"
        }
    ];
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
                            <h4 className="mx-4 font-bold text-gray-700 text-lg">Hội đồng</h4>
                            <span className="flex"><p className="ml-4 mr-2 font-medium text-md">Trang chủ &#62;</p>  <p className="text-md text-blue-800 font-semibold">Danh sách hội đồng</p></span>
                        </div>
                        <div className="rounded-xl h-full shadow-lg shadow-slate-400 py-4 mx-4">
                            <div className="ml-4">
                                <input className="border-2 border-slate-400 p-1 w-1/3 rounded-md outline-none" type="text" placeholder="Mã hội đồng" />

                                <select className="border-2 border-slate-400 rounded-sm py-1 px-2 ml-5" name="" id="" value="">
                                    <option value="">Mặc định</option>
                                    <option value="true">Đang mở</option>
                                    <option value="false">Đang khóa</option>
                                </select>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="ml-4">
                                    <h3 className="text-blue-700 text-lg font-semibold">Danh sách hội đồng</h3>
                                </div>
                                <div className="flex justify-end mr-4">
                                    <button className="p-2 flex bg-green-700 hover:bg-green-500 text-white rounded-sm" onClick={() => setShowModal(true)}><IoMdAddCircleOutline className="mr-1 mt-1 text-lg" />Tạo hội đồng</button>
                                    <Modal isVisible={showModal}>
                                        <div className="p-2 text-left w-96">
                                            <h3 className="text-xl font-semibold text-red-700">Tạo hội đồng</h3>
                                            <form action="#">
                                                <div className="p-2">
                                                    <label htmlFor="" className="text-sm font-semibold">Mã hội đồng</label>
                                                    <input type="text" className="w-full border-2 border-slate-300 rounded-sm mt-2" />
                                                </div>

                                                <div className="p-2">
                                                    <label htmlFor="" className="text-sm font-semibold">Giờ bắt đầu</label>
                                                    <input type="time" className="w-full border-2 border-slate-300 rounded-sm mt-2" />
                                                </div>

                                                <div className="p-2">
                                                    <label htmlFor="" className="text-sm font-semibold">Giờ kết thúc </label>
                                                    <input type="time" className="w-full border-2 border-slate-300 rounded-sm mt-2" />
                                                </div>

                                                <div className="p-2">
                                                    <label htmlFor="" className="text-sm font-semibold">Ngày diễn ra </label>
                                                    <input type="date" className="w-full border-2 border-slate-300 rounded-sm mt-2" />
                                                </div>

                                                <div className="p-2 ">
                                                    <label htmlFor="" className="text-sm font-semibold">Thành viên hội đồng </label>
                                                    <div className="border-2 border-slate-300 mt-2">
                                                        <table className="w-full ">
                                                            <thead>
                                                                <tr className="border-b-2">
                                                                    <th className="text-md font-semibold px-4 py-2">Chức vụ</th>
                                                                    <th className="text-md font-semibold py-2">Giảng viên</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {renderRows()}
                                                            </tbody>
                                                            <tfoot >
                                                                <tr>
                                                                    <th className="py-2 ">
                                                                        <button onClick={addRow} className="flex ml-2 text-blue-500 font-medium text-sm"><IoMdAddCircleOutline className="mt-1 mr-1" />Thêm thành viên</button>
                                                                    </th>
                                                                    <th className="py-2 ">
                                                                        <button onClick={removeRow} className="flex ml-auto mr-2 text-red-500 font-medium text-sm"><IoMdRemoveCircleOutline className="mt-1 mr-1" />Xoá</button>
                                                                    </th>
                                                                </tr>
                                                            </tfoot>
                                                        </table>
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-2 mt-2">
                                                    <button className=" mx-2 py-2 bg-gray-500 text-white rounded " onClick={() => setShowModal(false)}>Đóng</button>
                                                    <button className=" mx-2 py-2 bg-green-600 text-white rounded " onClick={() => { setShowModal(false); setRowCount(1); notify('Đã thêm hội đồng!') }}>Lưu lại</button>
                                                </div>
                                            </form>
                                        </div>
                                    </Modal>
                                    <ToastContainer
                                        position="top-right"
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
                            <div className="mt-4">
                                <table className="w-5/6 m-auto">
                                    <thead >
                                        <tr >
                                            <th className="border-2 border-slate-400 font-semibold">
                                                Mã hội đồng
                                            </th>
                                            <th className="border-y-2 border-r-2 border-slate-400 font-semibold">
                                                Thời gian bắt đầu
                                            </th>
                                            <th className="border-y-2 border-r-2 border-slate-400 font-semibold">
                                                Thời gian kết thúc
                                            </th>
                                            <th className="border-y-2 border-r-2 border-slate-400 font-semibold">
                                                Ngày diễn ra
                                            </th>
                                            <th className="border-2 border-slate-400 font-semibold">
                                                Niên khóa
                                            </th>
                                            <th className="border-2 border-slate-400 font-semibold">
                                                Học kỳ
                                            </th>
                                            <th className="border-y-2 border-r-2 border-slate-400 font-semibold">
                                                Hành động
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            council.map(e => (
                                                <tr className="text-center" key={e.id}>
                                                    <td className="border-2 border-slate-400 py-2" >{e.code}</td>
                                                    <td className="border-2 border-slate-400 py-2" >{e.timeStart}</td>
                                                    <td className="border-2 border-slate-400 py-2" >{e.timeEnd}</td>
                                                    <td className="border-2 border-slate-400 py-2" >{e.startDate}</td>
                                                    <td className="border-2 border-slate-400  py-2">{e.year}</td>
                                                    <td className="border-2 border-slate-400  py-2">{e.courses}</td>
                                                    <td className=" border-r-2 border-b-2  border-slate-400  py-2 flex justify-center">
                                                        <div>
                                                            {!lock ?
                                                                (
                                                                    <div>
                                                                        <button onClick={() => { setLockModal(true) }} className="bg-red-700 hover:bg-red-500 p-2 mr-2 text-white rounded-sm"><FaLock /></button>
                                                                        <Modal isVisible={lockModal}>
                                                                            <BsExclamationOctagonFill className="text-4xl text-yellow-400 m-auto animate-bounce " />
                                                                            <form action="">
                                                                                <h1 className="font-semibold text-lg">Bạn có chắc chắn muốn mở hội đồng này?</h1>
                                                                                <p>Khi hội đồng được mở giảng viên có thể chấm điểm cho khóa luận!</p>
                                                                                <div className="grid grid-cols-2 mt-2">
                                                                                    <button className=" mx-10 py-2 bg-gray-500 text-white rounded " onClick={() => setLockModal(false)}>Đóng</button>
                                                                                    <button className=" mx-10 py-2 bg-green-600 text-white rounded " onClick={() => { setLock(true); setLockModal(false); notify('Đã mở khóa hội đồng!'); }}>Lưu lại</button>
                                                                                </div>
                                                                            </form>
                                                                        </Modal>
                                                                    </div>
                                                                )
                                                                :
                                                                (
                                                                    <div>
                                                                        <button onClick={() => setLockModal(true)} className="bg-green-700 hover:bg-green-500 p-2 mr-2 text-white rounded-sm"><FaLockOpen /></button>
                                                                        <Modal isVisible={lockModal}>
                                                                            <BsExclamationOctagonFill className="text-4xl text-yellow-400 m-auto animate-bounce " />
                                                                            <form action="">
                                                                                <h1 className="font-semibold text-lg">Bạn có chắc chắn muốn khóa hội đồng này?</h1>
                                                                                <p>Khi hội đồng sau khi khóa giảng viên <b>không</b> thể chấm điểm cho khóa luận!</p>
                                                                                <div className="grid grid-cols-2 mt-2">
                                                                                    <button className=" mx-10 py-2 bg-gray-500 text-white rounded " onClick={() => setLockModal(false)}>Đóng</button>
                                                                                    <button className=" mx-10 py-2 bg-green-600 text-white rounded " onClick={() => { setLock(false); setLockModal(false); notify('Đã khóa hội đồng!'); }}>Lưu lại</button>
                                                                                </div>
                                                                            </form>
                                                                        </Modal>
                                                                    </div>
                                                                )}
                                                        </div>
                                                        <div>
                                                            <button className="bg-green-700 hover:bg-green-500 mr-2 p-2 text-white rounded-sm"><BiEdit /></button>

                                                        </div>
                                                        <div>
                                                            <button onClick={() => CouncilDetail()} className="bg-sky-700 hover:bg-sky-500 mr-2 p-2 text-white rounded-sm"><AiOutlineEye /></button>
                                                        </div>
                                                        <div>
                                                            <button onClick={() => setRemove(true)} className="bg-red-700 hover:bg-red-500 p-2 mr-2 text-white rounded-sm"><BsFillTrashFill /></button>
                                                            <Modal isVisible={remove}>
                                                                <BsExclamationOctagonFill className="text-4xl text-yellow-400 m-auto animate-bounce " />
                                                                <form action="">
                                                                    <h1 className="font-semibold text-lg">Bạn có chắc chắn muốn xóa hội đồng này?</h1>
                                                                    <p>Khi hội đồng sau khi xoá các thông tin liên quan đến hội đồng đều mất!</p>
                                                                    <div className="grid grid-cols-2 mt-2">
                                                                        <button className=" mx-10 py-2 bg-gray-500 text-white rounded " onClick={() => setRemove(false)}>Đóng</button>
                                                                        <button className=" mx-10 py-2 bg-green-600 text-white rounded " onClick={() => { setRemove(false);  notify('Đã xóa hội đồng!'); }}>Lưu lại</button>
                                                                    </div>
                                                                </form>
                                                            </Modal>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))
                                        }
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

export default CouncilListPage;