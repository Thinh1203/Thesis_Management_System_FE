import DropDown from "../../components/DropDown";
import TeacherLeftDashboard from "../../components/TeacherLeftDashboard";
import { BiExport, BiEdit } from "react-icons/bi";
import { IoMdAddCircleOutline } from "react-icons/io";
import { BsFillTrashFill, BsExclamationOctagonFill } from "react-icons/bs";
import Modal from "../../components/Modal";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getListThesis, addNewThesis, updateNewTheses, getOneTheses, search } from "../../api/adminApi/thesis";
import { getListTopic } from "../../api/adminApi/topic";
import { getAllStudent } from "../../api/adminApi/studentPage";
import { getAllTeacher } from "../../api/adminApi/teacherPage";
import { getAll, getAllCouncil } from "../../api/adminApi/council";
import { getListSemester } from "../../api/adminApi/schoolYearPage";
import Paginate from "../../components/Paginate";

const ProcessingTopicPage = () => {
    const [editThesis, setEditThesis] = useState(false);
    const [removeThesis, setRemoveThesis] = useState(false);
    const [addThesis, setAddThesis] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [data, setData] = useState([]);
    const [listTopic, setListTopic] = useState([]);
    const [listStudent, setListStudent] = useState([]);
    const [listTeacher, setListTeacher] = useState([]);
    const [listCouncil, setListCouncil] = useState([]);
    const [listSemester, setListSemester] = useState([]);
    const [query, setQuery] = useState("");
    const [totalPagesQuery, setTotalPagesQuery] = useState(1);
    const [pageQuery, setPageQuery] = useState(1);
    const [searchData, setSearchData] = useState(true);
    const [results, setResults] = useState([]);
    const [newThesis, setNewThesis] = useState({
        topicId: "", studentId: "", lecturerId: "", councilId: "", schoolYearId: "", endDate: ""
    });
    const [updateTheses, setUpdateTheses] = useState({
        topicId: "", studentId: "", teacherId: "", councilId: "", shoolYearId: "", endDate: ""
    });
    const [oneTheses, setOneTheses] = useState({});
    const [idTheses, setIdTheses] = useState(0);

    const handleInputChange = (event) => {
        (event.target.value.length > 0) ? setQuery(event.target.value) : setQuery("");
    };
    useEffect(() => {
        const fetchData = async () => {
            if (query) {
                const response = await search(query, pageQuery);
                if (response.statusCode === 200) {
                    setResults(response.data);
                    setTotalPagesQuery(response);
                    setSearchData(true);

                } else {

                    setSearchData(false);
                }

            } else {
                setResults([]);
                setTotalPagesQuery(1);
            }
        };
        fetchData();
    }, [query, pageQuery]);
    const handlePageChangeQuery = (newPage) => {
        if (newPage >= 1 && newPage <= totalPagesQuery.lastPage) {
            setPageQuery(newPage);
        }
    };
    useEffect(() => {
        const fetchApi = async () => {
            const res = await getOneTheses(idTheses);
            setOneTheses(res.data);
            setUpdateTheses({
                topicId: res.data?.topic.id,
                studentId: res.data?.student.id,
                teacherId: res.data?.teacher.id,
                shoolYearId: res.data?.shoolYear.id,
                endDate: res.data?.endDate
            });
        };
        fetchApi();
    }, [idTheses]);

    useEffect(() => {
        const getAll = async () => {
            const res = await getListThesis(page);
            setData(res.data);
            setTotalPages(res);
        }
        getAll();
    }, [page]);

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages.lastPage) {
            setPage(newPage);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            const res = await getListTopic();
            setListTopic(res);
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const res = await getAllStudent();
            setListStudent(res);

        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const res = await getAllTeacher();
            setListTeacher(res);

        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const res = await getListSemester();
            setListSemester(res);
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const res = await getAllCouncil();;
            setListCouncil(res);

        };
        fetchData();
    }, []);

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

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newThesis.topicId) return toast.error("Vui lòng chọn đề tài!");
        if (!newThesis.studentId) return toast.error("Vui lòng chọn sinh viên!");
        if (!newThesis.lecturerId) return toast.error("Vui lòng chọn giảng viên hướng dẫn!");
        if (!newThesis.councilId) return toast.error("Vui lòng chọn hội đồng bảo vệ!");
        if (!newThesis.endDate) return toast.error("Hạn nộp báo cáo không được trống!");
        if (!newThesis.schoolYearId) return toast.error("Niên khóa không được để trống!");
        const fetchApi = async () => {
            const res = await addNewThesis(newThesis);
            if (res.data.statusCode !== 200)
                return toast.error(res.data.message);
            toast.success("Đã thêm đề tài vào hội đồng!");
            setAddThesis(false);
            const newRes = await getListThesis(page);
            setData(newRes.data);
            setTotalPages(newRes);

        }
        fetchApi();
    };
    const handleUpdateSubmit = async () => {
        const res = await updateNewTheses(updateTheses, idTheses);

        if (res.statusCode === 200) {
            toast.success("Cập nhật thành công");
            setEditThesis(false);
            const newTheses = await getListThesis(page);
            setData(newTheses.data);
            if (query) {
                const response = await search(query, pageQuery);
                if (response.statusCode === 200) {
                    setResults(response.data);
                    setTotalPagesQuery(response);
                    setSearchData(true);
                } else {
                    setSearchData(false);
                }

            }

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
                            <h4 className="mx-4 font-bold text-gray-700 text-lg">Khóa luận</h4>
                            <span className="flex"><p className="ml-4 mr-2 font-medium text-md">Trang chủ &#62;</p>  <p className="text-md text-blue-800 font-semibold">Danh sách khóa luận</p></span>
                        </div>
                        <div className="rounded-xl h-full shadow-lg shadow-slate-400 py-4 mx-4">
                            <div >
                                <input
                                    className="w-1/3 border-2 p-1 mx-4 mt-2 rounded-lg outline-none border-slate-400"
                                    type="text" placeholder="Mã đề tài, tên đề tài, sinh viên thực hiện ..."
                                    value={query}
                                    onChange={handleInputChange} />
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
                            <div className="table-auto w-full border-t-2 border-b-2 grid grid-cols-11 border-y-slate-300 rounded-sm mt-2  text-center font-semibold">
                                <div className="border-r-2 border-slate-300 py-1">Mã đề tài</div>
                                <div className="border-r-2 col-span-2 border-slate-300 py-1">Tên đề tài</div>
                                <div className="col-span-2 border-r-2 border-slate-300 py-1">Tên tiếng Anh</div>
                                <div className="py-1 border-r-2 border-slate-300">Sinh viên thực hiện</div>
                                <div className="py-1 border-r-2 border-slate-300">Giảng viên hướng dẫn</div>
                                <div className="py-1 border-r-2 border-slate-300">Hạn nộp báo cáo</div>
                                <div className="py-1 border-r-2 border-slate-300">Mã hội đồng</div>
                                <div className="py-1 border-r-2 border-slate-300">Niên khóa</div>
                                <div className="py-1 ">Hành động</div>
                            </div>
                            <div className="table-auto w-full border-b-2 grid grid-cols-11 border-y-slate-300 rounded-sm  font-normal">
                                {
                                    (!query) && (data?.map(e => (
                                        <React.Fragment key={e.id}>
                                            <div className="border-r-2 ml-2 border-slate-300 py-1 text-center">{e.topic.code}</div>
                                            <div className="border-r-2 ml-2 col-span-2 border-slate-300 py-1">{e.topic.VietnameseName}</div>
                                            <div className="col-span-2 ml-2 border-r-2 border-slate-300 py-1">{e.topic.EnglishName}</div>
                                            <div className="py-1 ml-2 border-r-2 border-slate-300">{e.student.fullName}</div>
                                            <div className="py-1 ml-2 border-r-2 border-slate-300">{e.teacher.fullName}</div>
                                            <div className="py-1 ml-2 border-r-2 border-slate-300 text-center">{new Date(e.endDate).toLocaleDateString('en-GB')}</div>
                                            <div className="py-1 ml-2 border-r-2 border-slate-300 text-center">{e.council.code}</div>
                                            <div className="py-1 ml-2 border-r-2 border-slate-300 text-center"><p>{e.shoolYear.year}</p><p>Học kỳ - {e.shoolYear.semester}</p></div>
                                            <div className="py-1 text-center">
                                                <button onClick={() => { setIdTheses(e.id); setEditThesis(true); }} className="text-white bg-blue-700 rounded-sm hover:bg-blue-500 p-1 mr-1"><BiEdit /></button>
                                                <button onClick={() => setRemoveThesis(true)} className="text-white bg-red-700 rounded-sm hover:bg-red-500  p-1 mr-1"><BsFillTrashFill /></button>
                                            </div>
                                        </React.Fragment>
                                    )))
                                }
                                {
                                    (query && searchData) && (results?.map(e => (
                                        <React.Fragment key={e.id}>
                                            <div className="border-r-2 ml-2 border-slate-300 py-1 text-center">{e.topic.code}</div>
                                            <div className="border-r-2 ml-2 col-span-2 border-slate-300 py-1">{e.topic.VietnameseName}</div>
                                            <div className="col-span-2 ml-2 border-r-2 border-slate-300 py-1">{e.topic.EnglishName}</div>
                                            <div className="py-1 ml-2 border-r-2 border-slate-300">{e.student.fullName}</div>
                                            <div className="py-1 ml-2 border-r-2 border-slate-300">{e.teacher.fullName}</div>
                                            <div className="py-1 ml-2 border-r-2 border-slate-300 text-center">{new Date(e.endDate).toLocaleDateString('en-GB')}</div>
                                            <div className="py-1 ml-2 border-r-2 border-slate-300 text-center">{e.council.code}</div>
                                            <div className="py-1 ml-2 border-r-2 border-slate-300 text-center"><p>{e.shoolYear.year}</p><p>Học kỳ - {e.shoolYear.semester}</p></div>
                                            <div className="py-1 text-center">
                                                <button onClick={() => { setIdTheses(e.id); setEditThesis(true); }} className="text-white bg-blue-700 rounded-sm hover:bg-blue-500 p-1 mr-1"><BiEdit /></button>
                                                <button onClick={() => setRemoveThesis(true)} className="text-white bg-red-700 rounded-sm hover:bg-red-500  p-1 mr-1"><BsFillTrashFill /></button>
                                            </div>
                                        </React.Fragment>
                                    )))
                                }

                            </div>
                            {(query && !searchData) && (<div className=" table-auto w-ful grid grid-cols-11 border-b-2 border-b-slate-300 rounded-sm text-center"><h1 className="text-red-700 text-2xl font-semibold col-span-11 py-2">Không tìm thấy!</h1></div>)}

                            {
                                (query && searchData) && (
                                    <div className="flex justify-center align-middle mt-4">
                                        <button
                                            type="button"
                                            onClick={() => handlePageChangeQuery(pageQuery - 1)}
                                            disabled={pageQuery === 1}
                                            className="p-2 border-2 border-r-0 border-indigo-600 hover:bg-indigo-600 hover:text-white">
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M17.77 3.77L16 2 6 12l10 10 1.77-1.77L9.54 12z"></path></svg>
                                        </button>
                                        <Paginate
                                            currentPage={pageQuery}
                                            totalPages={totalPagesQuery.lastPage}
                                            onPageChange={handlePageChangeQuery}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => handlePageChangeQuery(pageQuery + 1)}
                                            disabled={pageQuery === totalPagesQuery.lastPage}
                                            className="p-2 border-2 border-indigo-600 hover:bg-indigo-600 hover:text-white">
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M6.23 20.23L8 22l10-10L8 2 6.23 3.77 14.46 12z"></path></svg>
                                        </button>
                                    </div>
                                )
                            }

                            {!query && (<div className="flex justify-center align-middle mt-4">
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
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Modal isVisible={addThesis}>
                <div className="text-left w-100">
                    <h3 className="text-2xl font-semibold text-red-700">Thêm khóa luận</h3>
                    <div className="p-2">
                        <h4 className="text-md font-semibold">Tên đề tài</h4>
                        <select
                            onChange={(e) => setNewThesis({ ...newThesis, topicId: e.target.value })}
                            className="border-2 w-full border-zinc-500 rounded-sm p-1 my-1">
                            {
                                listTopic?.map(e => (
                                    <option key={e.id} value={e.id}>{e.VietnameseName}</option>
                                ))
                            }
                        </select>
                    </div>

                    <div className="p-2">
                        <h4 className="text-md font-semibold">Sinh viên thực hiện</h4>
                        <select
                            onChange={(e) => setNewThesis({ ...newThesis, studentId: e.target.value })}
                            className="border-2 w-full border-zinc-500 rounded-sm p-1 my-1">
                            {
                                listStudent?.map(e => (
                                    <option key={e.id} value={e.id}>{e.fullName}</option>
                                ))
                            }
                        </select>
                    </div>

                    <div className="p-2">
                        <h4 className="text-md font-semibold">Giảng viên hướng dẫn </h4>
                        <select
                            onChange={(e) => setNewThesis({ ...newThesis, lecturerId: e.target.value })}
                            className="border-2 w-full border-zinc-500 rounded-sm p-1 my-1">
                            {
                                listTeacher?.map(e => (
                                    <option key={e.id} value={e.id}>{e.fullName}</option>
                                ))
                            }
                        </select>
                    </div>

                    <div className="p-2">
                        <h4 className="text-md font-semibold">Hạn nộp báo cáo</h4>
                        <input
                            type="date"
                            className="w-full border-2 p-1 border-slate-400 rounded-sm mt-2"
                            onChange={(e) => setNewThesis({ ...newThesis, endDate: e.target.value })}
                        />
                    </div>

                    <div className="p-2">
                        <h4 className="text-md font-semibold">Hội đồng bảo vệ</h4>
                        <select
                            onChange={(e) => setNewThesis({ ...newThesis, councilId: e.target.value })}
                            className="w-full border-2 p-1 border-slate-400 rounded-sm mt-2">
                            {
                                listCouncil?.map(e => (
                                    <option key={e.id} value={e.id}>{e.code}</option>
                                ))
                            }
                        </select>
                    </div>

                    <div className="p-2">
                        <h4 className="text-md font-semibold">Niên khóa</h4>
                        <select
                            onChange={(e) => setNewThesis({ ...newThesis, schoolYearId: e.target.value })}
                            className="w-full border-2 p-1 border-slate-400 rounded-sm mt-2">
                            {
                                listSemester?.map(e => (
                                    <option key={e.id} value={e.id}>{e.year} - Học kỳ: {e.semester}</option>
                                ))
                            }
                        </select>
                    </div>

                    <div className="grid grid-cols-2 mt-2">
                        <button className=" mx-2 py-2 bg-gray-500 text-white rounded " onClick={() => { setNewThesis({ topicId: "", studentId: "", lecturerId: "", councilId: "", endDate: "" }); setAddThesis(false); }}>Đóng</button>
                        <button className=" mx-2 py-2 bg-green-600 text-white rounded " onClick={(e) => { handleSubmit(e) }}>Lưu lại</button>
                    </div>

                </div>
            </Modal >
            <Modal isVisible={editThesis}>
                <div className="text-left w-100">
                    <h3 className="text-2xl font-semibold text-red-700">Thêm khóa luận</h3>
                    <div className="p-2">
                        <h4 className="text-md font-semibold">Tên đề tài</h4>
                        <select
                            onChange={(e) => setUpdateTheses({ ...updateTheses, topicId: e.target.value })}
                            className="border-2 w-full border-zinc-500 rounded-sm p-1 my-1">
                            {
                                listTopic?.map(e => (
                                    <option key={e.id} selected={e.id === oneTheses?.topic?.id} value={e.id}>{e.VietnameseName}</option>
                                ))
                            }
                        </select>
                    </div>

                    <div className="p-2">
                        <h4 className="text-md font-semibold">Sinh viên thực hiện</h4>
                        <select
                            onChange={(e) => setUpdateTheses({ ...updateTheses, studentId: e.target.value })}
                            className="border-2 w-full border-zinc-500 rounded-sm p-1 my-1">
                            {
                                listStudent?.map(e => (
                                    <option key={e.id} selected={e.id === oneTheses?.student.id} value={e.id}>{e.fullName}</option>
                                ))
                            }
                        </select>
                    </div>

                    <div className="p-2">
                        <h4 className="text-md font-semibold">Giảng viên hướng dẫn </h4>
                        <select
                            onChange={(e) => setUpdateTheses({ ...updateTheses, teacherId: e.target.value })}
                            className="border-2 w-full border-zinc-500 rounded-sm p-1 my-1">
                            {
                                listTeacher?.map(e => (
                                    <option key={e.id} selected={e.id === oneTheses?.teacher.id} value={e.id}>{e.fullName}</option>
                                ))
                            }
                        </select>
                    </div>

                    <div className="p-2">
                        <h4 className="text-md font-semibold">Hạn nộp báo cáo</h4>
                        <input
                            type="date"
                            className="w-full border-2 p-1 border-slate-400 rounded-sm mt-2"
                            defaultValue={oneTheses?.endDate?.slice(0, 10)}
                            onChange={(e) => setUpdateTheses({ ...updateTheses, endDate: e.target.value })}
                        />
                    </div>

                    <div className="p-2">
                        <h4 className="text-md font-semibold">Hội đồng bảo vệ</h4>
                        <select
                            onChange={(e) => setUpdateTheses({ ...updateTheses, councilId: e.target.value })}
                            className="w-full border-2 p-1 border-slate-400 rounded-sm mt-2">
                            {
                                listCouncil?.map(e => (
                                    <option key={e.id} selected={e.id === oneTheses?.council.id} value={e.id}>{e.code}</option>
                                ))
                            }
                        </select>

                    </div>

                    <div className="p-2">
                        <h4 className="text-md font-semibold">Niên khóa</h4>
                        <select
                            onChange={(e) => setUpdateTheses({ ...updateTheses, shoolYearId: e.target.value })}
                            className="w-full border-2 p-1 border-slate-400 rounded-sm mt-2">
                            {
                                listSemester?.map(e => (
                                    <option key={e.id} selected={e.id === oneTheses?.shoolYear.id} value={e.id}>{e.year} - Học kỳ: {e.semester}</option>
                                ))
                            }
                        </select>

                    </div>

                    <div className="grid grid-cols-2 mt-2">
                        <button className=" mx-2 py-2 bg-gray-500 text-white rounded " onClick={() => { setEditThesis({ topicId: "", studentId: "", teacherId: "", councilId: "", endDate: "" }); setIdTheses(0); setEditThesis(false); }}>Đóng</button>
                        <button className=" mx-2 py-2 bg-green-600 text-white rounded " onClick={() => { handleUpdateSubmit() }}>Lưu lại</button>
                    </div>

                </div>
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