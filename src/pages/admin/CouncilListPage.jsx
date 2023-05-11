import { useEffect, useState } from "react";
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
import { getAllSemester, getAllTeacher, addCouncil, getAll, statusCouncil, getOneUpdate, updateCouncil, deleteOne } from "../../api/adminApi/council";
import Paginate from "../../components/Paginate";
const CouncilListPage = () => {
    const [remove, setRemove] = useState(false);
    const [lockModal, setLockModal] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [newCouncil, setNewCouncil] = useState({
        code: "",
        timeStart: "",
        timeEnd: "",
        startDate: "",
        shoolYearId: 0,
        user: [
            {
                position: "Chủ tịch",
                userId: 0
            },
            {
                position: "Thư ký",
                userId: 0
            },
            {
                position: "Phản biện",
                userId: 0
            },
        ]
    });
    const [editCouncil, setEditCouncil] = useState(false);
    const [user, setUser] = useState([]);
    const [semester, setSemester] = useState([]);
    const [councilList, setCouncilList] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [updateStatus, setUpdateStatus] = useState({});
    // const [totalPagesQuery, setTotalPagesQuery] = useState(1);
    // const [pageQuery, setPageQuery] = useState(1);
    const [idEditCouncil, setIdEditCouncil] = useState(0);
    const [editOne, setEditOne] = useState([]);
    const [updateData, setUpdateData] = useState({
        code: "", timeStart: "", timeEnd: "", startDate: ""
    });
    const [idRemoveCouncil, setIdRemoveCouncil] = useState(0);
    // const [idDetailCouncil, setIdDetailCouncil] = useState(0);

    const navigate = useNavigate();


    useEffect(() => {
        const fetchData = async () => {
            const res = await getAllTeacher();
            setUser(res.data);
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const res = await getAllSemester();
            setSemester(res.data);
        };
        fetchData();
    }, []);


    useEffect(() => {
        const fetchData = async () => {
            const res = await getAll(page);
            setCouncilList(res.data);
            setTotalPages(res);
        };
        fetchData();
    }, [page, councilList]);
    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages.lastPage) {
            setPage(newPage);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            const res = await getOneUpdate(idEditCouncil);
            setEditOne(res);
            setUpdateData({
                code: editOne.code,
                timeStart: editOne.timeStart,
                timeEnd: editOne.timeEnd,
                startDate: editOne.startDate
            });
        };
        fetchData();
    }, [idEditCouncil]);

    //update information council
    const updateInfCouncil = async () => {
        const res = await updateCouncil(idEditCouncil, updateData);
        if (res.statusCode === 200) {
            toast.success("Cập nhật thành công");
            setEditCouncil(false);
            const newCouncil = await getAll(page);
            setUser(newCouncil.data);
            setTotalPages(newCouncil);
            // if (query) {
            //     const response = await search(query, pageQuery);
            //     if (response.statusCode === 200) {
            //         setResults(response.data);
            //         setTotalPagesQuery(response);
            //         setSearchData(true);
            //     } else {
            //         setSearchData(false);
            //     }

            // }

        } else {
            toast.error("Có lỗi xảy ra!");
        }
    }

    // update councils status
    const updateCouncilStatus = async (accountId, data) => {
        const res = await statusCouncil(accountId, data);
        if (res.statusCode === 200) {
            if (!data) {
                toast.success("Đã khóa hội đồng!");
            } else {
                toast.success("Đã mở hội đồng!");
            }
            // if (query) {
            //     const response = await search(query, pageQuery);
            //     if (response.statusCode === 200) {
            //         setResults(response.data);
            //         setTotalPagesQuery(response);
            //         setSearchData(true);
            //     } else {
            //         setSearchData(false);
            //     }

            // }
            const updatedList = await getAll(page);
            setUser(updatedList.data);
        } else {
            toast.error("Có lỗi xảy ra!");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newCouncil.code) return toast.error("Vui lòng nhập địa điểm hội đồng!");
        if (!newCouncil.timeStart) return toast.error("Vui lòng nhập thời gian bắt đầu!");
        if (!newCouncil.timeEnd) return toast.error("Vui lòng nhập thời gian kết thúc!");
        if (!newCouncil.shoolYearId) return toast.error("Vui lòng chọn niên khóa!");
        if (newCouncil.user[0].userId === 0) return toast.error("Vui lòng thêm Chủ tịch hội đồng!");
        if (newCouncil.user[1].userId === 0) return toast.error("Vui lòng thêm Giảng viên phản biện");
        if (newCouncil.user[2].userId === 0) return toast.error("Vui lòng thêm Thư ký hội đồng!");
        const fetchApi = async () => {

            const res = await addCouncil(newCouncil);
            if (res.statusCode !== 200) {
                return toast.error(res.data.message);
            }
            toast.success("Thêm hội đồng thành công!");
            setShowModal(false);
            const resetData = await getAll(page);
            setCouncilList(resetData.data);
            setTotalPages(resetData);
        }
        fetchApi();
    };
    const reSetData = () => {
        setNewCouncil({
            code: "",
            timeStart: "",
            timeEnd: "",
            startDate: "",
            shoolYearId: 0,
            user: [
                {
                    position: "Chủ tịch",
                    userId: 0
                },
                {
                    position: "Thư ký",
                    userId: 0
                },
                {
                    position: "Phản biện",
                    userId: 0
                },
            ]
        });
        setShowModal(false);
    }

    const deleteOneCouncil = async () => {
        const res = await deleteOne(idRemoveCouncil);
        if (res.statusCode !== 200) {
            return toast.error("có lỗi xảy ra!");
        }

        let newCouncil = await getAll(page);
        if (newCouncil.statusCode === 400) {
            newCouncil = await getAll(page - 1);
            setPage(page - 1);
            setCouncilList(newCouncil.data);
            setTotalPages(newCouncil);
            toast.success("Xoá thành công!");
            return;
        }
        setCouncilList(newCouncil.data);
        setTotalPages(newCouncil);
        toast.success("Xoá thành công!");

    }





    return (
        <div>
            <div className="flex">
                <TeacherLeftDashboard />
                <div className="w-screen h-screen bg-slate-200">
                    <div className=" flex justify-end mx-10 my-5">
                        <DropDown />
                    </div>
                    <div className="mt-20 text">
                        <div className="border-2 rounded-xl mx-5 my-5 shadow-lg shadow-slate-400 py-4">
                            <h4 className="mx-4 font-bold text-gray-700 text-lg">Hội đồng</h4>
                            <span className="flex"><p className="ml-4 mr-2 font-medium text-md">Trang chủ &#62;</p>  <p className="text-md text-blue-800 font-semibold">Danh sách hội đồng</p></span>
                        </div>
                        <div className="rounded-xl h-full shadow-lg shadow-slate-400 py-4 mx-4">
                            <div className="grid grid-cols-2">
                                <div className="ml-4">
                                    <h3 className="text-blue-700 text-lg font-semibold">Danh sách hội đồng</h3>
                                </div>
                                <div className="flex justify-end mr-4">
                                    <button className="p-2 flex bg-green-700 hover:bg-green-500 text-white rounded-sm" onClick={() => setShowModal(true)}><IoMdAddCircleOutline className="mr-1 mt-1 text-lg" />Tạo hội đồng</button>

                                </div>
                            </div>
                            <div className="mt-4">
                                <table className="w-5/6 m-auto">
                                    <thead >
                                        <tr >
                                            <th className="border-2 border-slate-400 font-semibold">
                                                Mã hội đồng
                                            </th>
                                            <th className="border-2 border-slate-400 font-semibold">
                                                Địa điểm
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
                                            councilList?.map(e => (
                                                <tr className="text-center" key={e.id}>
                                                    <td className="border-2 border-slate-400 py-2" >HD{e.id}</td>
                                                    <td className="border-2 border-slate-400 py-2" >{e.code}</td>
                                                    <td className="border-2 border-slate-400 py-2" >{e.timeStart.slice(0, -3)}</td>
                                                    <td className="border-2 border-slate-400 py-2" >{e.timeEnd.slice(0, -3)}</td>
                                                    <td className="border-2 border-slate-400 py-2" >{new Date(e.startDate).toLocaleDateString('en-GB')}</td>
                                                    <td className="border-2 border-slate-400  py-2">{e.shoolYear.year}</td>
                                                    <td className="border-2 border-slate-400  py-2">{e.shoolYear.semester}</td>
                                                    <td className=" border-r-2 border-b-2  border-slate-400  py-2 flex justify-center">
                                                        <div>
                                                            {!e.status ?
                                                                (
                                                                    <div>
                                                                        <button onClick={() => { setUpdateStatus({ id: e.id, status: !e.status }); setLockModal(true) }} className="bg-red-700 hover:bg-red-500 p-2 mr-2 text-white rounded-sm"><FaLock /></button>
                                                                    </div>
                                                                )
                                                                :
                                                                (
                                                                    <div>
                                                                        <button onClick={() => { setUpdateStatus({ id: e.id, status: !e.status }); setLockModal(true) }} className="bg-green-700 hover:bg-green-500 p-2 mr-2 text-white rounded-sm"><FaLockOpen /></button>
                                                                        <Modal isVisible={lockModal}>
                                                                            <BsExclamationOctagonFill className="text-4xl text-yellow-400 m-auto animate-bounce " />

                                                                            <h1 className="font-semibold text-lg">Bạn có chắc chắn muốn khóa hội đồng này?</h1>
                                                                            <p>Khi hội đồng sau khi khóa giảng viên <b>không</b> thể chấm điểm cho khóa luận!</p>
                                                                            <div className="grid grid-cols-2 mt-2">
                                                                                <button className=" mx-10 py-2 bg-gray-500 text-white rounded " onClick={() => { setUpdateStatus({}); setLockModal(false); }}>Đóng</button>
                                                                                <button className=" mx-10 py-2 bg-green-600 text-white rounded " onClick={() => { updateCouncilStatus(updateStatus.id, updateStatus.status); setLockModal(false); }}>Lưu lại</button>
                                                                            </div>

                                                                        </Modal>
                                                                    </div>
                                                                )}
                                                        </div>
                                                        <div>
                                                            <button
                                                                className="bg-green-700 hover:bg-green-500 mr-2 p-2 text-white rounded-sm"
                                                                onClick={() => { setIdEditCouncil(e.id); setEditCouncil(true); }}><BiEdit />
                                                            </button>
                                                        </div>
                                                        <div>
                                                            <button onClick={() => navigate("/admin/council/detail", { state: e.id })} className="bg-sky-700 hover:bg-sky-500 mr-2 p-2 text-white rounded-sm"><AiOutlineEye /></button>
                                                        </div>
                                                        <div>
                                                            <button onClick={() => { setIdRemoveCouncil(e.id); setRemove(true); }} className="bg-red-700 hover:bg-red-500 p-2 mr-2 text-white rounded-sm"><BsFillTrashFill /></button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))
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
            <Modal isVisible={remove}>
                <BsExclamationOctagonFill className="text-4xl text-yellow-400 m-auto animate-bounce " />
                <form action="">
                    <h1 className="font-semibold text-lg">Bạn có chắc chắn muốn xóa hội đồng này?</h1>
                    <p>Khi hội đồng sau khi xoá các thông tin liên quan đến hội đồng đều mất!</p>
                    <div className="grid grid-cols-2 mt-2">
                        <button className=" mx-10 py-2 bg-gray-500 text-white rounded " onClick={() => { setIdRemoveCouncil(0); setRemove(false); }}>Đóng</button>
                        <button className=" mx-10 py-2 bg-green-600 text-white rounded " onClick={() => { deleteOneCouncil(); setRemove(false); }}>Lưu lại</button>
                    </div>
                </form>
            </Modal>
            <Modal isVisible={lockModal}>
                <BsExclamationOctagonFill className="text-4xl text-yellow-400 m-auto animate-bounce " />
                <h1 className="font-semibold text-lg">Bạn có chắc chắn muốn mở hội đồng này?</h1>
                <p>Khi hội đồng được mở giảng viên có thể chấm điểm cho khóa luận!</p>
                <div className="grid grid-cols-2 mt-2">
                    <button className=" mx-10 py-2 bg-gray-500 text-white rounded " onClick={() => { setUpdateStatus({}); setLockModal(false) }}>Đóng</button>
                    <button className=" mx-10 py-2 bg-green-600 text-white rounded " onClick={() => { updateCouncilStatus(updateStatus.id, updateStatus.status); setLockModal(false); }}>Lưu lại</button>
                </div>
            </Modal>
            <Modal isVisible={showModal}>
                <div className="text-left w-100">
                    <h3 className="text-2xl font-semibold text-red-700">Tạo hội đồng</h3>
                    <div className="p-2">
                        <h4 className="text-md font-semibold">Địa điểm diễn ra</h4>
                        <input
                            type="text"
                            className="w-full border-2 p-2 border-slate-400 rounded-sm mt-2"
                            onChange={(e) => setNewCouncil({ ...newCouncil, code: e.target.value })} />
                    </div>

                    <div className="p-2">
                        <h4 className="text-md font-semibold">Giờ bắt đầu</h4>
                        <input
                            type="time"
                            className="w-full border-2 p-2 border-slate-400 rounded-sm mt-2"
                            onChange={(e) => setNewCouncil({ ...newCouncil, timeStart: e.target.value })} />
                    </div>

                    <div className="p-2">
                        <h4 className="text-md font-semibold">Giờ kết thúc </h4>
                        <input
                            type="time"
                            className="w-full border-2 p-2 border-slate-400 rounded-sm mt-2"
                            onChange={(e) => setNewCouncil({ ...newCouncil, timeEnd: e.target.value })} />
                    </div>

                    <div className="p-2">
                        <h4 className="text-md font-semibold">Ngày diễn ra </h4>
                        <input
                            type="date"
                            className="w-full border-2 p-2 border-slate-400 rounded-sm mt-2"
                            onChange={(e) => setNewCouncil({ ...newCouncil, startDate: e.target.value })} />
                    </div>

                    <div className="p-2">
                        <h4 className="text-md font-semibold">Niên khóa </h4>
                        <select onChange={(e) => setNewCouncil({ ...newCouncil, shoolYearId: e.target.value })} className="border-2 w-full border-zinc-500 rounded-sm p-1 my-1">
                            {
                                semester?.map(e => (
                                    <option key={e.id} value={e.id}>{e.year} - Học kỳ: {e.semester} </option>
                                ))
                            }
                        </select>
                    </div>

                    <div className="p-2 ">
                        <h4 className="text-md font-semibold">Thành viên hội đồng </h4>

                        <div className="border-2 border-slate-400 mt-2">
                            <div className="w-full grid grid-cols-3 ">
                                <div className="p-2">
                                    <input
                                        type="text"
                                        defaultValue={newCouncil.user[0].position}
                                        className="border-2 w-full border-zinc-500  rounded-sm p-1 my-1" />
                                    <input
                                        type="text"
                                        defaultValue={newCouncil.user[1].position}
                                        className="border-2 w-full border-zinc-500  rounded-sm p-1 my-1" />
                                    <input
                                        type="text"
                                        defaultValue={newCouncil.user[2].position}
                                        className="border-2 w-full border-zinc-500  rounded-sm p-1 my-1" />
                                </div>
                                <div className="p-2 col-span-2 w-full">
                                    <select onChange={(e) => setNewCouncil({ ...newCouncil, user: newCouncil.user.map((element, index) => (index === 0) ? { position: "Chủ tịch", userId: e.target.value } : element) })} className="border-2 w-full border-zinc-500 rounded-sm p-1 my-1">
                                        {
                                            user.map(e => (
                                                <option key={e.id} value={e.id}>{e.fullName}</option>
                                            ))
                                        }
                                    </select>
                                    <select onChange={(e) => setNewCouncil({ ...newCouncil, user: newCouncil.user.map((element, index) => (index === 1) ? { position: "Thư ký", userId: e.target.value } : element) })} className="border-2 w-full border-zinc-500 rounded-sm p-1 my-1">
                                        {
                                            user.map(e => (
                                                <option key={e.id} value={e.id}>{e.fullName}</option>
                                            ))
                                        }
                                    </select>
                                    <select onChange={(e) => setNewCouncil({ ...newCouncil, user: newCouncil.user.map((element, index) => (index === 2) ? { position: "Phản biện", userId: e.target.value } : element) })} className="border-2 w-full border-zinc-500 rounded-sm p-1 my-1">
                                        {
                                            user.map(e => (
                                                <option key={e.id} value={e.id}>{e.fullName}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 mt-2">
                        <button className=" mx-2 py-2 bg-gray-500 text-white rounded " onClick={() => reSetData()}>Đóng</button>
                        <button className=" mx-2 py-2 bg-green-600 text-white rounded " onClick={(e) => { handleSubmit(e);  }}>Lưu lại</button>
                    </div>

                </div>
            </Modal>
            <Modal isVisible={editCouncil}>
                <div className="text-left w-100">
                    <h3 className="text-2xl font-semibold text-red-700">Sửa thông tin hội đồng</h3>

                    <div className="p-2">
                        <h4 className="text-md font-semibold">Địa điểm diễn ra</h4>
                        <input
                            type="text"
                            className="w-full border-2 p-2 border-slate-400 rounded-sm mt-2"
                            defaultValue={editOne.code}
                            onChange={(e) => setUpdateData({ ...updateData, code: e.target.value })}
                        />
                    </div>

                    <div className="p-2">
                        <h4 className="text-md font-semibold">Giờ bắt đầu</h4>
                        <input
                            type="time"
                            className="w-full border-2 p-2 border-slate-400 rounded-sm mt-2"
                            defaultValue={editOne.timeStart}
                            onChange={(e) => setUpdateData({ ...updateData, timeStart: e.target.value })}
                        />
                    </div>

                    <div className="p-2">
                        <h4 className="text-md font-semibold">Giờ kết thúc </h4>
                        <input
                            type="time"
                            className="w-full border-2 p-2 border-slate-400 rounded-sm mt-2"
                            defaultValue={editOne?.timeEnd}
                            onChange={(e) => setUpdateData({ ...updateData, timeEnd: e.target.value })}
                        />
                    </div>

                    <div className="p-2">
                        <h4 className="text-md font-semibold">Ngày diễn ra </h4>
                        <input
                            type="date"
                            className="w-full border-2 p-2 border-slate-400 rounded-sm mt-2"
                            defaultValue={editOne?.startDate}
                            onChange={(e) => setUpdateData({ ...updateData, startDate: e.target.value })}
                        />
                    </div>
                    <div className="grid grid-cols-2 mt-2">
                        <button className=" mx-2 py-2 bg-gray-500 text-white rounded " onClick={() => { setEditOne([]); setIdEditCouncil(0); setEditCouncil(false); }}>Đóng</button>
                        <button className=" mx-2 py-2 bg-green-600 text-white rounded " onClick={() => { updateInfCouncil() }}   >Lưu lại</button>
                    </div>

                </div>
            </Modal>
        </div>
    );
}

export default CouncilListPage;