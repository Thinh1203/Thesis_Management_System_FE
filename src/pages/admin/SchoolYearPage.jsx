import React, { useEffect, useState } from "react";
import DropDown from "../../components/DropDown";
import Modal from "../../components/Modal";
import TeacherLeftDashboard from "../../components/TeacherLeftDashboard";
import { IoMdAddCircleOutline } from "react-icons/io";
import { BiEdit } from "react-icons/bi";
import { BsFillTrashFill, BsExclamationOctagonFill } from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Paginate from "../../components/Paginate";
import { getAll, addSchoolYear, deleteOne, getOne, updateOne } from "../../api/adminApi/schoolYearPage";
const SchoolYearPage = () => {
    const [remove, setRemove] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [addModal, setAddModal] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [data, setData] = useState(1);
    const [newSemester, setNewSemester] = useState({ year: "", semester: "", startDate: "", endDate: "" });
    const [idRemoveSemester, setIdRemoveSemester] = useState(0);
    const [idEditSemester, setIdEditSemester] = useState();
    const [detailSemester, setDetailSemester] = useState({});
    const [updateSemester, setUpdateSemester] = useState({ year: "", semester: "", startDate: "", endDate: "" }) 

    useEffect(() => {
        const fetchApi = async () => {
            const res = await getAll(page);
            setData(res.data);
            setTotalPages(res);
        };
        fetchApi();
    }, [page]);
    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages.lastPage) {
            setPage(newPage);
        }
    };

    const handlePost = (e) => {
        e.preventDefault();
        if (!newSemester.year) {
            return toast.error("Niên khóa không được để trống!");
        }
        if (!newSemester.startDate) {
            return toast.error("Ngày bắt đầu là bắt buộc!");
        }

        if (!newSemester.endDate) {
            return toast.error("Ngày kết thúc là bắt buộc!");
        }

        if (!newSemester.semester) {
            return toast.error("Học kỳ là bắt buộc!");
        }
        const fetchApi = async () => {
            const res = await addSchoolYear(newSemester);
            if (res.statusCode !== 200) {
                return toast.error(res.data.message);
            }
            toast.success("Thêm niên khóa thành công!");
            setAddModal(false);
            const newSemesterList = await getAll(page);
            setData(newSemesterList.data);
            setTotalPages(newSemesterList);
        }
        fetchApi();
    }
    const handleDelete = async (id) => {
        const res = await deleteOne(id);
        if (res.statusCode !== 200) {
            return toast.error("có lỗi xảy ra!");
        }
        let newSemesterList = await getAll(page);
        if (newSemesterList.statusCode === 400) {
            newSemesterList = await getAll(page - 1);
            setPage(page - 1);
            setData(newSemesterList.data);
            setTotalPages(newSemesterList);
            toast.success("Xoá thành công!");
            return setRemove(false);
        }
        setData(newSemesterList.data);
        setTotalPages(newSemesterList);
        toast.success("Xoá thành công!");
        setRemove(false);
    }

    useEffect(() => {
        const fetchData = async () => {
            const res = await getOne(idEditSemester);
            setDetailSemester(res.data);
            setUpdateSemester({
                year: detailSemester.year,
                startDate: detailSemester.startDate,
                endDate: detailSemester.endDate,
                semester: detailSemester.semester
            });
        };
        if (idEditSemester) {
            fetchData();
        }
    }, [idEditSemester]);

    const updatePatch = async () => {
        const res = await updateOne(idEditSemester, updateSemester);
        if (res.statusCode === 200) {
            toast.success("Cập nhật thành công");
            setEditModal(false);
            const newUserList = await getAll(page);
            setData(newUserList.data);
        } else {
            toast.error("Có lỗi xảy ra!");
        }
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
                            <div className="grid grid-cols-2">
                                <div className="ml-4">
                                    <h3 className="text-blue-700 text-lg font-semibold">Danh sách niên khóa</h3>
                                </div>

                                <div className="flex justify-end mr-4">
                                    <button className="p-2 flex bg-green-700 hover:bg-green-500 text-white rounded-sm" onClick={() => setAddModal(true)}><IoMdAddCircleOutline className="mr-1 mt-1 text-lg" />Thêm niên khóa</button>
                                    <Modal isVisible={addModal}>
                                        <div className="p-2 text-left w-96">
                                            <h3 className="text-xl font-semibold text-red-700">Thêm niên khóa</h3>
                                            <div className="p-2">
                                                <label htmlFor="" className="text-sm font-semibold">Niên khóa</label>
                                                <input type="text"
                                                    className="w-full border-2 p-2 rounded-md border-slate-400 mt-2"
                                                    onChange={(e) => setNewSemester({ ...newSemester, year: e.target.value })} />
                                            </div>

                                            <div className="p-2">
                                                <label htmlFor="" className="text-sm font-semibold">Ngày bắt đầu</label>
                                                <input type="date"  
                                                    defaultValue={detailSemester.startDate}
                                                    className="w-full border-2 p-2 border-slate-400 rounded-md mt-2"
                                                    onChange={(e) => setNewSemester({ ...newSemester, startDate: e.target.value })} />
                                            </div>

                                            <div className="p-2">
                                                <label htmlFor="" className="text-sm font-semibold">Ngày kết thúc </label>
                                                <input type="date"
                                                    className="w-full border-2 border-slate-400 p-2 rounded-md mt-2"
                                                    onChange={(e) => setNewSemester({ ...newSemester, endDate: e.target.value })} />
                                            </div>

                                            <div className="p-2">
                                                <label htmlFor="" className="text-sm font-semibold">Học kỳ</label>
                                                <select className="border-2 border-slate-400 rounded-sm py-1 px-2 ml-5" onChange={(e) => setNewSemester({ ...newSemester, semester: e.target.value })}>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                </select>
                                            </div>
                                            <div className="grid grid-cols-2 mt-2">
                                                <button className=" mx-2 py-2 bg-gray-500 text-white rounded " onClick={() => { setNewSemester({ year: "", semester: "", startDate: "", endDate: "" }); setAddModal(false); }}>Đóng</button>
                                                <button className=" mx-2 py-2 bg-green-600 text-white rounded " onClick={(e) => { handlePost(e) }}>Lưu lại</button>
                                            </div>
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
                                        {
                                            (data.length > 0) && (
                                                data.map((e) => (
                                                    <tr key={e.id}>
                                                        <td className="border-2 border-slate-300  p-2">
                                                            {e.year}
                                                        </td>
                                                        <td className="border-2 border-slate-300  p-2">
                                                            {e.semester}
                                                        </td>
                                                        <td className="border-2 border-slate-300  p-2">
                                                            {e.startDate}
                                                        </td>
                                                        <td className="border-2 border-slate-300  p-2">
                                                            {e.endDate}
                                                        </td>
                                                        <td className="border-2 border-slate-300 p-2">
                                                            <button onClick={() => { setIdEditSemester(e.id); setEditModal(true); }} className="bg-blue-700 hover:bg-blue-500 p-1 mr-1 text-white rounded-sm"><BiEdit /></button>
                                                            <button onClick={() => { setIdRemoveSemester(e.id); setRemove(true); }} className="bg-red-700 hover:bg-red-500 p-1 text-white rounded-sm"><BsFillTrashFill /></button>
                                                        </td>
                                                    </tr>
                                                ))
                                            )
                                        }
                                    </tbody>

                                </table>
                                <div className="flex justify-center mt-4">
                                    <button
                                        type="button"
                                        onClick={() => handlePageChange(page - 1)}
                                        disabled={page === 1}
                                        className="p-2 border-2 border-r-0 border-indigo-600 hover:bg-indigo-600 hover:text-white">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M17.77 3.77L16 2 6 12l10 10 1.77-1.77L9.54 12z"></path></svg>
                                    </button>
                                    <Paginate
                                        currentPage={page}
                                        totalPages={totalPages.lastPage}
                                        onPageChange={handlePageChange}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => handlePageChange(page + 1)}
                                        disabled={page === totalPages.lastPage}
                                        className="p-2 border-2 border-indigo-600 hover:bg-indigo-600 hover:text-white">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M6.23 20.23L8 22l10-10L8 2 6.23 3.77 14.46 12z"></path></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal isVisible={editModal}>
                <div className="p-2 text-left w-96">
                    <h3 className="text-xl font-semibold text-red-700">Thêm niên khóa</h3>
                    <div className="p-2">
                        <label htmlFor="" className="text-sm font-semibold">Niên khóa</label>
                        <input type="text"
                            className="w-full p-2 border-2 border-slate-400 rounded-md mt-2"
                            defaultValue={detailSemester.year}
                            onChange={(e) => setUpdateSemester({ ...updateSemester, year: e.target.value})} />
                    </div>

                    <div className="p-2">
                        <label htmlFor="" className="text-sm font-semibold">Ngày bắt đầu</label>        
                        <input type="date" 
                        className="w-full border-2 p-2 border-slate-400 rounded-md mt-2"
                        defaultValue={detailSemester.startDate}
                        onChange={(e) => setUpdateSemester({ ...updateSemester, startDate: e.target.value})} />
                        
                    </div>

                    <div className="p-2">
                        <label htmlFor="" className="text-sm font-semibold">Ngày kết thúc </label>
                        <input type="date"
                            className="w-full border-2 p-2 border-slate-400 rounded-md mt-2"
                            defaultValue={detailSemester.endDate}
                            onChange={(e) => setUpdateSemester({ ...updateSemester, endDate: e.target.value})} />
                    </div>

                    <div className="p-2">
                        <label htmlFor="" className="text-sm font-semibold">Học kỳ</label>
                        <select className="border-2 border-slate-400 rounded-sm py-1 px-2 ml-5" onChange={(e) => setUpdateSemester({ ...updateSemester, semester: e.target.value})}>
                            <option value="1" selected={detailSemester.semester === 1}>1</option>
                            <option value="2" selected={detailSemester.semester === 2}>2</option>
                        </select>
                    </div>
                    <div className="grid grid-cols-2 mt-2">
                        <button className=" mx-2 py-2 bg-gray-500 text-white rounded " onClick={() => { setDetailSemester({}); setIdEditSemester(0); setEditModal(false); }}>Đóng</button>
                        <button className=" mx-2 py-2 bg-green-600 text-white rounded " onClick={() => updatePatch()}>Lưu lại</button>
                    </div>

                </div>
            </Modal>
            <Modal isVisible={remove}>
                <BsExclamationOctagonFill className="text-4xl text-yellow-400 m-auto animate-bounce " />

                <h1 className="font-semibold text-lg">Bạn có chắc chắn muốn xóa niên khóa này?</h1>
                <p>Khi xóa các thông tin liên quan đến niên khóa sẽ mất!</p>
                <div className="grid grid-cols-2 mt-2">
                    <button className=" mx-10 py-2 bg-gray-500 text-white rounded " onClick={() => { setIdRemoveSemester(0); setRemove(false); }}>Đóng</button>
                    <button className=" mx-10 py-2 bg-green-600 text-white rounded " onClick={() => { handleDelete(idRemoveSemester); }}>Lưu lại</button>
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
    );
}

export default SchoolYearPage;