import DropDown from "../../components/DropDown";
import TeacherLeftDashboard from "../../components/TeacherLeftDashboard";
import { BiExport, BiEdit } from "react-icons/bi";
import { IoMdAddCircleOutline } from "react-icons/io";
import { BsFillTrashFill, BsExclamationOctagonFill } from "react-icons/bs";
import Modal from "../../components/Modal";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAllTopic, addNewTopic, uploadFile, getOneTopic, modifyTopic, deleteOne, search } from "../../api/adminApi/topic";
import Paginate from "../../components/Paginate";
const TopicListPage = () => {
    const [editTopic, setEditTopic] = useState(false);
    const [removeTopic, setRemoveTopic] = useState(false);
    const [addTopicFile, setAddTopicFile] = useState(false);
    const [addTopic, setAddTopic] = useState(false);
    const [topicList, setTopicList] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [newTopic, setNewTopic] = useState({
        code: "", VietnameseName: "", EnglishName: ""
    });
    const [selectedFile, setSelectedFile] = useState(null);
    const [idEditTopic, setIdEditTopic] = useState(0);
    const [detailTopic, setDetailTopic] = useState([]);
    const [dataUpdate, setDataUpdate] = useState({
        code: "", VietnameseName: "", EnglishName: ""
    });
    const [idRemoveTopic, setIdRemoveTopic] = useState(0);
    const [totalPagesQuery, setTotalPagesQuery] = useState(1);  // paginate page when query
    const [pageQuery, setPageQuery] = useState(1);              // setPage query 
    const [searchData, setSearchData] = useState(true);         // if search
    const [results, setResults] = useState([]);                 // return data search
    const [query, setQuery] = useState("");                     // keyword query
    // get all topic //
    useEffect(() => {
        const getAll = async () => {
            const res = await getAllTopic(page);
            setTopicList(res.data);
            setTotalPages(res);
        }
        getAll();
    }, [page]);

    // paginate //
    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages.lastPage) {
            setPage(newPage);
        }
    };

    // get one topic to update //
    useEffect(() => {
        const fetchData = async () => {
            const res = await getOneTopic(idEditTopic);
            setDetailTopic(res);
            setDataUpdate({
                code: res.code,
                VietnameseName: res.VietnameseName,
                EnglishName: res.EnglishName
            });
        };
        fetchData();
    }, [idEditTopic]);

    // change data to update //
    const updateTopic = async () => {
        const res = await modifyTopic(idEditTopic, dataUpdate);

        if (res.statusCode === 200) {
            toast.success("Cập nhật thành công");
            setEditTopic(false);
            const data = await getAllTopic(page);
            setTopicList(data.data);
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

    // post File topics //
    const postFile = async (e) => {
        e.preventDefault();
        const fetchApi = async () => {
            const res = await uploadFile(selectedFile);

            if (res.data.statusCode !== 200) {
                return toast.error(res.data.message);
            }
            toast.success("Đã thêm danh sách đề tài!");
            setAddTopicFile(false);
            const newTopicList = await getAllTopic(page);
            setTopicList(newTopicList.data);
            setTotalPages(newTopicList);
        }
        fetchApi();
    }

    // set file topic to send //
    const handleFileInput = (event) => {
        setSelectedFile(event.target.files[0]);
    }

    // create a topic //
    const handlePost = (e) => {
        e.preventDefault();
        if (!newTopic.code) {
            return toast.error("Mã đề tài không được để trống!");
        }
        if (!newTopic.VietnameseName) {
            return toast.error("Vui lòng điền tên đề tài!");
        }

        if (!newTopic.EnglishName) {
            return toast.error("Vui lòng điền tên đề tài!!");
        }
        const fetchApi = async () => {
            const res = await addNewTopic(newTopic);
            if (res.statusCode !== 200) {
                return toast.error(res.data.message);
            }
            toast.success("Đã thêm đề tài thành công!");
            const newTopicList = await getAllTopic(page);
            setTopicList(newTopicList.data);
            setTotalPages(newTopicList);
            setAddTopic(false);
        }
        fetchApi();
    }

    // delete topic //
    const deleteTopic = async () => {
        const res = await deleteOne(idRemoveTopic);
        if (res.statusCode === 200) {
            if (query) {
                const removeQuery = await search(query);
                console.log(removeQuery);
                console.log(pageQuery);
            (removeQuery === 200) ?  setResults(removeQuery) : setSearchData(!searchData);
            }
            let newTopicList = await getAllTopic(page);
            if (newTopicList.statusCode === 400) {
                const newData = await getAllTopic(page - 1);
                setPageQuery(page - 1);
                setResults(newData.data);
                setTotalPagesQuery(newData);
                toast.success("Đã xóa đề tài!")
                return setRemoveTopic(false)
            }
            toast.success("Đã xóa tài khoản!");
            setTopicList(newTopicList.data);
            setTotalPages(newTopicList);
            setRemoveTopic(false);
        } else {
            toast.error("Có lỗi xảy ra!");
        }
    };

    // Search keyword //
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

    // paginate page query //
    const handlePageChangeQuery = (newPage) => {
        if (newPage >= 1 && newPage <= totalPagesQuery.lastPage) {
            setPageQuery(newPage);
        }
    };

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
                                <input
                                    className="w-1/3 border-2 p-1 mx-4 mt-2 rounded-lg outline-none border-slate-400"
                                    type="text" placeholder="Mã đề tài, tên đề tài ..."
                                    value={query}
                                    onChange={handleInputChange} />
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
                            <div className="table-auto w-full border-t-2 border-b-2 grid grid-cols-8 border-y-slate-300 rounded-sm mt-2  text-center font-semibold">
                                <div className="border-r-2 border-slate-300 py-1">Mã đề tài</div>
                                <div className="border-r-2 col-span-3 border-slate-300 py-1">Tên tiếng Việt</div>
                                <div className="col-span-3 border-r-2 border-slate-300 py-1">Tên tiếng Anh</div>
                                <div className="py-1">Hành động</div>
                            </div>
                            <div className="table-auto w-full border-b-2 grid grid-cols-8 border-y-slate-300 rounded-sm  text-center font-normal">
                                {(query && searchData) && (
                                    results.map((e) => (
                                        <React.Fragment key={e.id}>
                                            <div className="border-r-2 border-slate-300 py-1">{e.code}</div>
                                            <div className="border-r-2 col-span-3 border-slate-300 py-1">{e.VietnameseName}</div>
                                            <div className="col-span-3 border-r-2 border-slate-300 py-1">{e.EnglishName}</div>
                                            <div className="py-1">
                                                <button onClick={() => { setIdEditTopic(e.id); setEditTopic(true); }} className="text-white bg-blue-700 rounded-sm hover:bg-blue-500 p-1 mr-1"><BiEdit /></button>
                                                <button onClick={() => { setIdRemoveTopic(e.id); setRemoveTopic(true); }} className="text-white bg-red-700 rounded-sm hover:bg-red-500  p-1 mr-1"><BsFillTrashFill /></button>

                                            </div>
                                        </React.Fragment>
                                    ))
                                )
                                }
                                {
                                    (!query) && topicList?.map(e => (
                                        <React.Fragment key={e.id}>
                                            <div className="border-r-2 border-slate-300 py-1">{e.code}</div>
                                            <div className="border-r-2 col-span-3 border-slate-300 py-1">{e.VietnameseName}</div>
                                            <div className="col-span-3 border-r-2 border-slate-300 py-1">{e.EnglishName}</div>
                                            <div className="py-1">
                                                <button onClick={() => { setIdEditTopic(e.id); setEditTopic(true); }} className="text-white bg-blue-700 rounded-sm hover:bg-blue-500 p-1 mr-1"><BiEdit /></button>
                                                <button onClick={() => { setIdRemoveTopic(e.id); setRemoveTopic(true); }} className="text-white bg-red-700 rounded-sm hover:bg-red-500  p-1 mr-1"><BsFillTrashFill /></button>

                                            </div>
                                        </React.Fragment>
                                    ))
                                }
                            </div>
                            {(query && !searchData) && (<div className=" table-auto w-ful grid grid-cols-11 border-b-2 border-b-slate-300 rounded-sm text-center"><h1 className="text-red-700 text-2xl font-semibold col-span-11 py-2">Không tìm thấy!</h1></div>)}
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
                        </div>

                    </div>
                </div>
            </div>
            <Modal isVisible={addTopicFile}>
                <form onSubmit={postFile}>
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
                        <input className="p-2" type="file" onChange={handleFileInput} />
                    </div>
                    <div className="grid grid-cols-2 mt-2">
                        <button type="button" className=" mx-10 py-2 bg-gray-500 text-white rounded " onClick={() => setAddTopicFile(false)}>Đóng</button>
                        <button type="submit" className=" mx-10 py-2 bg-green-600 text-white rounded ">Lưu lại</button>
                    </div>
                </form>
            </Modal >
            <Modal isVisible={addTopic}>
                <h1 className="font-bold text-xl px-2 pb-2">Thêm đề tài</h1>
                <hr className=" border border-slate-300" />
                <div className="grid grid-cols-3">
                    <div className="grid grid-rows-3 p-4">
                        <div className="font-semibold mt-1 p-1">Mã đề tài<span className="text-red-700 font-semibold">(*)</span></div>
                        <div className="font-semibold mt-1 p-1">Tên đề tài<span className="text-red-700 font-semibold">(*)</span></div>
                        <div className="font-semibold mt-1 p-1">Tên tiếng anh<span className="text-red-700 font-semibold">(*)</span></div>
                    </div>
                    <div className="col-span-2 py-4 px-2">
                        <div className="grid grid-rows-3">
                            <div className="mt-1">
                                <input
                                    className="w-full p-1 border border-slate-400 rounded-sm"
                                    type="text"
                                    onChange={(e) => setNewTopic({ ...newTopic, code: e.target.value })} />
                            </div>
                            <div className="mt-1">
                                <input
                                    className="w-full p-1 border border-slate-400 rounded-sm"
                                    type="text"
                                    onChange={(e) => setNewTopic({ ...newTopic, VietnameseName: e.target.value })} />
                            </div>
                            <div className="mt-1">
                                <input
                                    className="w-full p-1 border border-slate-400 rounded-sm"
                                    type="text"
                                    onChange={(e) => setNewTopic({ ...newTopic, EnglishName: e.target.value })} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 mt-2">
                    <button className=" mx-10 py-2 bg-gray-500 text-white rounded " onClick={() => { setNewTopic({ code: "", VietnameseName: "", EnglishName: "" }); setAddTopic(false); }}>Đóng</button>
                    <button className=" mx-10 py-2 bg-green-600 text-white rounded " onClick={(e) => { handlePost(e); }}>Lưu lại</button>
                </div>
            </Modal >
            <Modal isVisible={editTopic}>

                <h1 className="font-bold text-xl px-2 pb-2">Sửa thông tin đề tài</h1>
                <hr className=" border border-slate-300" />
                <div className="grid grid-cols-3">
                    <div className="grid grid-rows-3 p-4">
                        <div className="font-semibold mt-1 p-1">Mã đề tài<span className="text-red-700 font-semibold">(*)</span></div>
                        <div className="font-semibold mt-1 p-1">Tên đề tài<span className="text-red-700 font-semibold">(*)</span></div>
                        <div className="font-semibold mt-1 p-1">Tên tiếng anh<span className="text-red-700 font-semibold">(*)</span></div>
                    </div>
                    <div className="col-span-2 py-4 px-2">
                        <div className="grid grid-rows-3">
                            <div className="mt-1">
                                <input
                                    className="w-full p-1  border border-slate-400 rounded-sm"
                                    type="text"
                                    defaultValue={detailTopic.code}
                                    onChange={(e) => setDataUpdate({ ...dataUpdate, code: e.target.value })} />
                            </div>
                            <div className="mt-1">
                                <input
                                    className="w-full p-1 border border-slate-400 rounded-sm"
                                    type="text"
                                    defaultValue={detailTopic.VietnameseName}
                                    onChange={(e) => setDataUpdate({ ...dataUpdate, VietnameseName: e.target.value })} />
                            </div>
                            <div className="mt-1">
                                <input
                                    className="w-full p-1 border border-slate-400 rounded-sm"
                                    type="text" defaultValue={detailTopic.EnglishName}
                                    onChange={(e) => setDataUpdate({ ...dataUpdate, EnglishName: e.target.value })} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 mt-2">
                    <button className=" mx-10 py-2 bg-gray-500 text-white rounded " onClick={() => { setDataUpdate({ code: "", VietnameseName: "", EnglishName: "" }); setIdEditTopic(0); setEditTopic(false); }}>Đóng</button>
                    <button className=" mx-10 py-2 bg-green-600 text-white rounded " onClick={() => { updateTopic() }}>Lưu lại</button>
                </div>

            </Modal >
            <Modal isVisible={removeTopic}>
                <BsExclamationOctagonFill className="text-4xl text-yellow-400 m-auto animate-bounce " />
                <h1 className="font-semibold text-lg text-center">Bạn có chắc chắn muốn xóa đề tài?</h1>
                <p className="text-center">Thông tin đề tài sẽ bị xóa!</p>
                <div className="grid grid-cols-2 mt-2">
                    <button className=" mx-10 py-2 bg-gray-500 text-white rounded " onClick={() => { setIdRemoveTopic(0); setRemoveTopic(false); }}>Đóng</button>
                    <button className=" mx-10 py-2 bg-green-600 text-white rounded " onClick={() => { deleteTopic(); setRemoveTopic(false); }}>Lưu lại</button>
                </div>
            </Modal>
        </div >
    );
}

export default TopicListPage;