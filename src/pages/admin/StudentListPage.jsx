import React, { useEffect, useState } from "react";
import DropDown from "../../components/DropDown";
import Modal from "../../components/Modal";
import TeacherLeftDashboard from "../../components/TeacherLeftDashboard";
import { getListStudent, updateStatus, addStudent, uploadFile, deleteAccount, getOne, updateStudentInformation, search } from "../../api/adminApi/studentPage";
import { IoMdAddCircleOutline, IoMdRemoveCircleOutline } from "react-icons/io";
import { BiExport, BiEdit } from "react-icons/bi";
import { BsFillTrashFill, BsExclamationOctagonFill } from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaLockOpen, FaLock } from "react-icons/fa";
import { checkEmail, checkPhoneNumber } from "../../utils/validation";
import Paginate from "../../components/Paginate";
const StudentListPage = () => {
    const [accountListModal, setAccountListModal] = useState(false);
    const [accountModal, setAccountModal] = useState(false);
    const [editProfileModal, setEditProfileModal] = useState(false);
    const [removeAccountModal, setRemoveAccountModal] = useState(false);
    const [lockModal, setLockModal] = useState(false);
    const [user, setUser] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [data, setData] = useState({});
    const [removeUserId, setRemoveUserId] = useState(0);
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [totalPagesQuery, setTotalPagesQuery] = useState(1);
    const [pageQuery, setPageQuery] = useState(1);
    const [searchData, setSearchData] = useState(true);
    const [newUser, setNewUser] = useState({
        account: "", email: "", fullName: "", numberPhone: "", address: "", gender: "Nam"
    });
    const [updateData, setUpdateData] = useState({
        email: "", fullName: "", numberPhone: "", address: "", gender: ""
    });
    const [selectedFile, setSelectedFile] = useState(null);
    const [idUser, setIdUser] = useState();
    const [detailUser, setDetailUser] = useState({});

    useEffect(() => {
        const getAll = async () => {
            const res = await getListStudent(page);
            setUser(res.data);
            setTotalPages(res);
        }
       
        getAll();
    }, [page]);

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
        const fetchData = async () => {
            const detailUsers = await getOne(idUser);
            setDetailUser(detailUsers);
            setUpdateData({
                email: detailUsers?.email,
                fullName: detailUsers?.fullName,
                numberPhone: detailUsers?.numberPhone,
                address: detailUsers?.address,
                gender: detailUsers?.gender,
            });
        };
        fetchData();
    }, [idUser]);

    const updateStudent = async () => {
        const res = await updateStudentInformation(idUser, updateData);
        if (res.statusCode === 200) {
            toast.success("Cập nhật thành công");
            setEditProfileModal(false);
            const newUserList = await getListStudent(page);
            setUser(newUserList.data);
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
    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages.lastPage) {
            setPage(newPage);
        }
    };
    const updateAccountStatus = async (accountId, data) => {
        const res = await updateStatus(accountId, data);
        if (res.status === 200) {
            if (!data) {
                toast.success("Tài khoản đã bị khóa!");
            } else {
                toast.success("Tài khoản đã được mở!");
            }
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
            const updatedList = await getListStudent(page);
            setUser(updatedList.data);
        } else {
            toast.error("Có lỗi xảy ra!");
        }
    };
    const handleInputChange = (event) => {
        (event.target.value.length > 0) ? setQuery(event.target.value) : setQuery("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newUser.account) return toast.error("Tài khoản không được để trống!");
        if (!checkEmail(newUser.email) || !newUser.email) return toast.error("Email không hợp lệ");
        if (!newUser.fullName) return toast.error("Tên không được để trống!");
        if (!newUser.address) return toast.error("Địa chỉ không được để trống!");
        if (!checkPhoneNumber(newUser.numberPhone) || !newUser.numberPhone) return toast.error("Số điện thoại không hợp lệ!");
        const fetchApi = async () => {
            const res = await addStudent(newUser);
            if (res.data.statusCode !== 200)
                return toast.error(res.data.message);
            toast.success("Thêm sinh viên thành công!");
            setAccountModal(false);
            const newRes = await getListStudent(page);
            setUser(newRes.data);
            setTotalPages(newRes);

        }
        fetchApi();
    };
    const handleFileInput = (event) => {
        setSelectedFile(event.target.files[0]);
    }
    const postFile = async (e) => {
        e.preventDefault();
        const fetchApi = async () => {
            const res = await uploadFile(selectedFile);
            if (res.data.statusCode !== 200) {
                setAccountListModal(false);
                return toast.error(res.data.message);
            }
            const newRes = await getListStudent(page);
            setUser(newRes.data);
            toast.success("Đã thêm danh sách sinh viên !");
            setAccountListModal(false);
        }
        fetchApi();
    }
   
    const deleteUser = async (accountId) => {
        const res = await deleteAccount(accountId);
        if (res.statusCode === 200) {
            if (query) {
                let removeQuery = await search(query, pageQuery);
                if (removeQuery.statusCode === 200) {
                    setResults(removeQuery.data);
                    setTotalPagesQuery(removeQuery);
                    setRemoveAccountModal(false)
                    return setSearchData(true);
                } else {
                    console.log(page);
                    removeQuery = await search(query, pageQuery - 1);
                    setResults(removeQuery.data);
                    setTotalPagesQuery(removeQuery)
                    setRemoveAccountModal(false)
                    return setSearchData(false);
                }
            }
            let newUserList = await getListStudent(page);
            if (newUserList.statusCode === 400) {
                setPage(page - 1);
                newUserList = await getListStudent(page);
                setUser(newUserList.data);
                setTotalPages(newUserList);
                toast.success("Đã xóa tài khoản!");
                return setRemoveAccountModal(false); 
            }
            setUser(newUserList.data);
            setTotalPages(newUserList);
            toast.success("Đã xóa tài khoản!");
            setRemoveAccountModal(false); 
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
                            <h4 className="mx-4 font-bold text-gray-700 text-lg">Quản lý sinh viên</h4>
                            <span className="flex"><p className="ml-4 mr-2 font-medium text-md">Trang chủ &#62;</p>  <p className="text-md text-blue-800 font-semibold">Danh sách sinh viên</p></span>
                        </div>
                        <div className="rounded-xl h-full shadow-lg shadow-slate-400 py-4 mx-4">
                            <div className="">
                                <input className="w-1/3 border-2 p-1 mx-4 rounded-lg outline-none border-slate-400"
                                    type="text"
                                    placeholder="Tài khoản, tên, địa chỉ ..."
                                    value={query}
                                    onChange={handleInputChange} />
                            </div>
                            <div className="grid grid-cols-3">
                                <div className="ml-4 mt-2">
                                    <h3 className="text-blue-700 text-lg font-semibold">Danh sách sinh viên</h3>
                                </div>
                                <div className="ml-4 mt-2 col-span-2 flex justify-end">
                                    <button onClick={() => setAccountListModal(true)} className="mx-4 p-2 rounded-sm bg-green-700 hover:bg-green-500 text-white flex">
                                        <BiExport className="mr-1 mt-1 text-lg" />
                                        <p>Import File</p>
                                    </button>

                                    <button onClick={() => setAccountModal(true)} className="px-2 mr-4 rounded-sm bg-green-700 hover:bg-green-500 text-white flex">
                                        <IoMdAddCircleOutline className="mr-1 mt-3 text-lg" />
                                        <p className="mt-2">Thêm sinh viên</p>
                                    </button>

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
                            <div className="table-auto w-full border-t-2 border-b-2 grid grid-cols-9 border-y-slate-300 rounded-sm mt-2  text-center font-semibold">
                                <div className="border-r-2 border-slate-300 py-1">Tài khoản</div>
                                <div className="border-r-2 col-span-2 border-slate-300 py-1">Email</div>
                                <div className="col-span-2 border-r-2 border-slate-300 py-1">Họ và tên</div>
                                <div className="border-r-2 border-slate-300 py-1">Địa chỉ</div>
                                <div className="border-r-2 border-slate-300 py-1">Giới tính</div>
                                <div className="border-r-2 border-slate-300 py-1">Số điện thoại</div>
                                <div className="py-1">Hành động</div>
                            </div>
                            {(query && searchData) && (
                                results.map((e) => (
                                    <div key={e.id} className=" table-auto w-ful grid grid-cols-9 border-b-2 border-b-slate-300 rounded-sm text-center">
                                        <div className="border-r-2 border-slate-300 py-1">{e.account}</div>
                                        <div className="border-r-2 col-span-2 border-slate-300 py-1 ">{e.email}</div>
                                        <div className="col-span-2 border-r-2 border-slate-300 py-1">{e.fullName}</div>
                                        <div className="border-r-2 border-slate-300 py-1">{e.address}</div>
                                        <div className="border-r-2 border-slate-300 py-1">{e.gender}</div>
                                        <div className="border-r-2 border-slate-300 py-1">{e.numberPhone}</div>

                                        <div className="py-1">
                                            <button onClick={() => { setIdUser(e.id); setEditProfileModal(true); }} className="text-white bg-blue-700 rounded-sm hover:bg-blue-500 p-1 mr-1"><BiEdit /></button>
                                            <button onClick={() => { setRemoveUserId(e.id); setRemoveAccountModal(true); }} className="text-white bg-red-700 rounded-sm hover:bg-red-500  p-1 mr-1"><BsFillTrashFill /></button>
                                            {!e.status ?
                                                (
                                                    <button onClick={() => { setData({ id: e.id, status: !e.status }); setLockModal(true); }} className="bg-red-700 p-1 hover:bg-red-500  text-white rounded-sm"><FaLock /></button>
                                                )
                                                :
                                                (
                                                    <button onClick={() => { setData({ id: e.id, status: !e.status }); setLockModal(true); }} className="bg-green-700 p-1 hover:bg-green-500  text-white rounded-sm"><FaLockOpen /></button>
                                                )}
                                        </div>
                                    </div>))
                            )
                            }
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
                            {(query && !searchData) && (<div className=" table-auto w-ful grid grid-cols-11 border-b-2 border-b-slate-300 rounded-sm text-center"><h1 className="text-red-700 text-2xl font-semibold col-span-11 py-2">Không tìm thấy!</h1></div>)}
                            {
                                (!query) && (user?.map((e) => (
                                    <div key={e.id} className="table-auto w-ful grid grid-cols-9 border-b-2 border-b-slate-300 rounded-sm text-center">
                                        <div className="border-r-2 border-slate-300 py-1">{e.account}</div>
                                        <div className="border-r-2 col-span-2 border-slate-300 py-1">{e.email}</div>
                                        <div className="col-span-2 border-r-2 border-slate-300 py-1">{e.fullName}</div>
                                        <div className="border-r-2 border-slate-300 py-1">{e.address}</div>
                                        <div className="border-r-2 border-slate-300 py-1">{e.gender}</div>
                                        <div className="border-r-2 border-slate-300 py-1">{e.numberPhone}</div>

                                        <div className="py-1">
                                            <button onClick={() => { setIdUser(e.id); setEditProfileModal(true); }} className="text-white bg-blue-700 rounded-sm hover:bg-blue-500 p-1 mr-1"><BiEdit /></button>
                                            <button onClick={() => { setRemoveUserId(e.id); setRemoveAccountModal(true); }} className="text-white bg-red-700 rounded-sm hover:bg-red-500  p-1 mr-1"><BsFillTrashFill /></button>
                                            {!e.status ?
                                                (
                                                    <button onClick={() => { setData({ id: e.id, status: !e.status }); setLockModal(true); }} className="bg-red-700 p-1 hover:bg-red-500  text-white rounded-sm"><FaLock /></button>
                                                )
                                                :
                                                (
                                                    <button onClick={() => { setData({ id: e.id, status: !e.status }); setLockModal(true); }} className="bg-green-700 p-1 hover:bg-green-500  text-white rounded-sm"><FaLockOpen /></button>
                                                )}
                                        </div>
                                    </div>)))
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
            <Modal isVisible={accountListModal}>
                <form onSubmit={postFile}>
                    <h1 className="font-bold text-xl px-2 pb-2">Import danh sách sinh viên</h1>
                    <hr className=" border border-slate-300" />
                    <div className="mx-4 mt-2 py-2 bg-yellow-200">
                        <h4 className="ml-2 text-lg font-semibold">Chú ý!</h4>
                        <p className="mx-5 text-sm">- Dữ liệu không được để trống</p>
                        <p className="mx-5 text-sm">- Mã sinh viên, email và số điện thọai không được trùng nhau</p>
                    </div>
                    <div className="mx-4 mt-2 flex">
                        <h5 className="text-sm font-bold mt-1 mr-1">Chọn tập tin (.csv)</h5>
                        <p className="text-red-700 font-semibold"> (*)</p>
                    </div>
                    <div className="mx-5 mt-1 border-2 border-slate-300 rounded-sm">
                        <input className="p-2" type="file" onChange={handleFileInput} />
                    </div>
                    <div className="grid grid-cols-2 mt-2">
                        <button type="button" className=" mx-10 py-2 bg-gray-500 text-white rounded " onClick={() => setAccountListModal(false)}>Đóng</button>
                        <button type="submit" className=" mx-10 py-2 bg-green-600 text-white rounded ">Lưu lại</button>
                    </div>
                </form>
            </Modal >
            <Modal isVisible={accountModal}>
                <form action="">
                    <h1 className="font-bold text-2xl px-2 pb-2">Thêm sinh viên</h1>
                    <div className="grid grid-cols-3 p-4">
                        <div className="px-2 grid grid-rows-6">
                            <div className="font-semibold mt-1">Tài khoản<span className="text-red-700 font-semibold">(*)</span></div>
                            <div className="font-semibold mt-1">Email<span className="text-red-700 font-semibold">(*)</span></div>
                            <div className="font-semibold mt-1">Họ và tên<span className="text-red-700 font-semibold">(*)</span></div>
                            <div className="font-semibold mt-1">Địa chỉ<span className="text-red-700 font-semibold">(*)</span></div>
                            <div className="font-semibold mt-1">Số điện thoại<span className="text-red-700 font-semibold">(*)</span></div>
                            <div className="font-semibold mt-1">Giới tính<span className="text-red-700 font-semibold">(*)</span></div>

                            {/* <div className="font-semibold mt-1">Chức vụ<span className="text-red-700 font-semibold">(*)</span></div> */}
                        </div>
                        <div className="col-span-2 grid grid-rows-6">
                            <div className="mt-1">
                                <input
                                    className="w-full  border border-slate-400 rounded-sm"
                                    type="text"
                                    onChange={(e) => setNewUser(({ ...newUser, account: e.target.value }))} />
                            </div>
                            <div className="mt-1">
                                <input
                                    className="w-full border border-slate-400 rounded-sm"
                                    type="email"
                                    onChange={(e) => setNewUser(({ ...newUser, email: e.target.value }))} />
                            </div>
                            <div className="mt-1">
                                <input
                                    className="w-full border border-slate-400 rounded-sm"
                                    type="text"
                                    onChange={(e) => setNewUser(({ ...newUser, fullName: e.target.value }))} />
                            </div>
                            <div className="mt-1">
                                <input
                                    className="w-full border border-slate-400 rounded-sm"
                                    type="text"
                                    onChange={(e) => setNewUser(({ ...newUser, address: e.target.value }))} />
                            </div>
                            <div className="mt-1">
                                <input
                                    className="w-full  border border-slate-400 rounded-sm"
                                    type="text"
                                    onChange={(e) => setNewUser(({ ...newUser, numberPhone: e.target.value }))} />
                            </div>
                            <div className="mt-1">
                                <select onChange={(e) => setNewUser(({ ...newUser, gender: e.target.value }))} className="border border-black rounded-sm">
                                    <option value="Nam">Nam</option>
                                    <option value="Nữ">Nữ</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 mt-2">
                        <button className=" mx-10 py-2 bg-gray-500 text-white rounded " onClick={() => setAccountModal(false)}>Đóng</button>
                        <button className=" mx-10 py-2 bg-green-600 text-white rounded " onClick={(e) => { handleSubmit(e); }}>Lưu lại</button>
                    </div>
                </form>
            </Modal>
            <Modal isVisible={lockModal}>
                <BsExclamationOctagonFill className="text-4xl text-yellow-400 m-auto animate-bounce " />

                {
                    data.status ? (
                        <div>
                            <h1 className="font-semibold text-lg text-center">Bạn có chắc chắn muốn khóa tài khoản này?</h1>
                            <p>Sau khi khóa người dùng <b>không</b> thể đăng nhập hệ thống!</p>
                            <div className="grid grid-cols-2 mt-2">
                                <button className=" mx-10 py-2 bg-gray-500 text-white rounded " onClick={() => { setData({}); setLockModal(false); }}>Đóng</button>
                                <button className=" mx-10 py-2 bg-green-600 text-white rounded " onClick={() => { updateAccountStatus(data.id, data.status); setLockModal(false); }}>Lưu lại</button>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <h1 className="font-semibold text-lg text-center">Mở khóa tài khoản này?</h1>
                            <p>Sau khi mở kháo người dùng có thể đăng nhập vào hệ thống!</p>
                            <div className="grid grid-cols-2 mt-2">
                                <button className=" mx-10 py-2 bg-gray-500 text-white rounded " onClick={() => { setData({}); setLockModal(false); }}>Đóng</button>
                                <button className=" mx-10 py-2 bg-green-600 text-white rounded " onClick={() => { updateAccountStatus(data.id, data.status); setLockModal(false); }}>Lưu lại</button>
                            </div>
                        </div>
                    )
                }

            </Modal>
            <Modal isVisible={removeAccountModal}>
                <BsExclamationOctagonFill className="text-4xl text-yellow-400 m-auto animate-bounce " />
                <h1 className="font-semibold text-lg text-center">Bạn có chắc chắn muốn xóa tài khoản này?</h1>
                <p>Khi xóa tài khoản người dùng sẽ <b>Không</b> thể đăng nhập hệ thống!</p>
                <div className="grid grid-cols-2 mt-2">
                    <button className=" mx-10 py-2 bg-gray-500 text-white rounded " onClick={() => setRemoveAccountModal(false)}>Đóng</button>
                    <button className=" mx-10 py-2 bg-green-600 text-white rounded " onClick={() => { deleteUser(removeUserId);}}>Lưu lại</button>
                </div>
            </Modal>
            <Modal isVisible={editProfileModal}>

                <h1 className="font-bold text-2xl px-2 pb-2">Thêm sinh viên</h1>
                <div className="grid grid-cols-3 p-4">
                    <div className="px-2 grid grid-rows-5">
                        <div className="font-semibold mt-1">Email<span className="text-red-700 font-semibold">(*)</span></div>
                        <div className="font-semibold mt-1">Họ và tên<span className="text-red-700 font-semibold">(*)</span></div>
                        <div className="font-semibold mt-1">Địa chỉ<span className="text-red-700 font-semibold">(*)</span></div>
                        <div className="font-semibold mt-1">Số điện thoại<span className="text-red-700 font-semibold">(*)</span></div>
                        <div className="font-semibold mt-1">Giới tính<span className="text-red-700 font-semibold">(*)</span></div>
                    </div>
                    <div className="col-span-2 grid grid-rows-5">

                        <div className="mt-1">
                            <input
                                className="w-full border border-slate-400 rounded-sm"
                                type="email"
                                defaultValue={detailUser.email}
                                onChange={(e) => setUpdateData(({ ...updateData, email: e.target.value }))} />
                        </div>
                        <div className="mt-1">
                            <input
                                className="w-full border border-slate-400 rounded-sm"
                                type="text"
                                defaultValue={detailUser.fullName}
                                onChange={(e) => setUpdateData(({ ...updateData, fullName: e.target.value }))} />
                        </div>
                        <div className="mt-1">
                            <input
                                className="w-full border border-slate-400 rounded-sm"
                                type="text"
                                defaultValue={detailUser.address}
                                onChange={(e) => setUpdateData(({ ...updateData, address: e.target.value }))} />
                        </div>
                        <div className="mt-1">
                            <input
                                className="w-full  border border-slate-400 rounded-sm"
                                type="text"
                                defaultValue={detailUser.numberPhone}
                                onChange={(e) => setUpdateData(({ ...updateData, numberPhone: e.target.value }))} />
                        </div>
                        <div className="mt-1">
                            <select onChange={(e) => setUpdateData(({ ...updateData, gender: e.target.value }))} className="border border-black rounded-sm">
                                <option value="Nam">Nam</option>
                                <option value="Nữ">Nữ</option>
                            </select>
                        </div>


                    </div>
                </div>
                <div className="grid grid-cols-2 mt-2">
                    <button className=" mx-10 py-2 bg-gray-500 text-white rounded " onClick={() => { { setDetailUser({}); setUpdateData({ email: "", fullName: "", numberPhone: "", address: "", gender: "" }); setIdUser(0); setEditProfileModal(false); } }}>Đóng</button>
                    <button className=" mx-10 py-2 bg-green-600 text-white rounded " onClick={() => updateStudent()}>Lưu lại</button>
                </div>

            </Modal>
        </div>
    );
}

export default StudentListPage;