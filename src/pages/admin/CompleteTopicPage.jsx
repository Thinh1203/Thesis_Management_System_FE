import DropDown from "../../components/DropDown";
import TeacherLeftDashboard from "../../components/TeacherLeftDashboard";
import { listThesesComplete, searchThesesComplete } from "../../api/adminApi/thesis.js";
import Paginate from "../../components/Paginate";
import React, { useState, useEffect } from "react";
import FileDownload from "js-file-download";
import { download, fileName } from "../../api/studentApi";
import { FaDownload } from "react-icons/fa";
import urlEmptyBox from "../../assets/image/empty_box.png"
const CompleteTopicPage = () => {
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");
    const [totalPagesQuery, setTotalPagesQuery] = useState(1);
    const [pageQuery, setPageQuery] = useState(1);
    const [searchData, setSearchData] = useState(true);
    const [results, setResults] = useState([]);
    useEffect(() => {
        const getAll = async () => {
            const res = await listThesesComplete(page);
            setData(res.data);
            setTotalPages(res);
            console.log(res.data);
        }
        getAll();
    }, [page]);
    const downloadFile = async (id) => {
        const file = await download(id);
        const nameFile = await fileName(id);
        FileDownload(file.data, nameFile);
    };
    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages.lastPage) {
            setPage(newPage);
        }
    };
    const handleInputChange = (event) => {
        (event.target.value.length > 0) ? setQuery(event.target.value) : setQuery("");
    };
    useEffect(() => {
        const fetchData = async () => {
            if (query) {
                const response = await searchThesesComplete(query, pageQuery);
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
                            <span className="flex"><p className="ml-4 mr-2 font-medium text-md">Trang chủ &#62;</p>  <p className="text-md text-blue-800 font-semibold">Đã hoàn thành</p></span>
                        </div>
                        <div className="rounded-xl h-full shadow-lg shadow-slate-400 py-4 mx-4">
                            <div >
                                <input 
                                className="w-1/3 border-2 p-1 mx-4 mt-2 rounded-lg outline-none border-slate-400" 
                                type="text" 
                                value={query}
                                onChange={handleInputChange}
                                placeholder="Mã đề tài, tên đề tài ..." />
                            </div>
                            <div className="grid grid-cols-3">
                                <div className="ml-4 mt-2">
                                    <h3 className="text-blue-700 text-lg font-semibold">Danh sách khóa luận đã hoàn thành</h3>
                                </div>
                            </div>
                            <div className="table-auto w-full border-t-2 border-b-2 grid grid-cols-12 border-y-slate-300 rounded-sm mt-2  text-center font-semibold">
                                <div className="border-r-2 border-slate-300 py-1">Mã đề tài</div>
                                <div className="border-r-2 col-span-3 border-slate-300 py-1">Tên đề tài</div>
                                <div className="col-span-3 border-r-2 border-slate-300 py-1">Tên tiếng Anh</div>
                                <div className="py-1 col-span-2 border-r-2 border-slate-300">Sinh viên thực hiện</div>

                                <div className="py-1 border-r-2 border-slate-300">File báo cáo</div>
                                <div className="py-1 border-r-2 border-slate-300">Niên khóa</div>
                                <div className="py-1 border-r-2 border-slate-300">Học kỳ</div>
                            </div>

                            <div className="table-auto w-full border-b-2 grid grid-cols-12 border-y-slate-300 rounded-sm  font-normal">
                                {
                                    (!query) && data?.map(e => (
                                        <React.Fragment key={e.id}>
                                            <div className="border-r-2 ml-2 border-slate-300 py-1">{e.topic.code}</div>
                                            <div className="border-r-2 ml-2 col-span-3 border-slate-300 py-1">{e.topic.VietnameseName}</div>
                                            <div className="col-span-3 ml-2 border-r-2 border-slate-300 py-1">{e.topic.EnglishName}</div>
                                            <div className="py-1 ml-2 col-span-2 border-r-2 text-center border-slate-300">{e.student.fullName}</div>

                                            <div className="py-1 ml-2 border-r-2 border-slate-300 text-center">
                                                <button onClick={() => downloadFile(e.id)} className="flex">
                                                    <div className="mr-1 mt-1 text-blue-700"><FaDownload /></div>
                                                    <div className="text-blue-700">Tải xuống</div>
                                                </button>
                                            </div>
                                            <div className="py-1 ml-2 border-r-2 border-slate-300">{e.shoolYear.year} </div>
                                            <div className="py-1 ml-2 border-r-2 border-slate-300 text-center">{e.shoolYear.semester}</div>
                                        </React.Fragment>
                                    ))
                                }
                                 {
                                    (query && searchData) && (results?.map(e => (
                                        <React.Fragment key={e.id}>
                                            <div className="border-r-2 ml-2 border-slate-300 py-1">{e.topic.code}</div>
                                            <div className="border-r-2 ml-2 col-span-3 border-slate-300 py-1">{e.topic.VietnameseName}</div>
                                            <div className="col-span-3 ml-2 border-r-2 border-slate-300 py-1">{e.topic.EnglishName}</div>
                                            <div className="py-1 ml-2 col-span-2 border-r-2 text-center border-slate-300">{e.student.fullName}</div>

                                            <div className="py-1 ml-2 border-r-2 border-slate-300 text-center">
                                                <button onClick={() => downloadFile(e.id)} className="flex">
                                                    <div className="mr-1 mt-1 text-blue-700"><FaDownload /></div>
                                                    <div className="text-blue-700">Tải xuống</div>
                                                </button>
                                            </div>
                                            <div className="py-1 ml-2 border-r-2 border-slate-300">{e.shoolYear.year} </div>
                                            <div className="py-1 ml-2 border-r-2 border-slate-300 text-center">{e.shoolYear.semester}</div>
                                        </React.Fragment>
                                    )))
                                }
                            </div>
                          
                            {(query && !searchData) &&
                                (<div className="flex flex-col items-center table-auto w-ful border-b-2 border-b-slate-300 rounded-sm text-center">
                                    <h1 className="text-red-500 text-2xl font-semibold py-2">Không có kết quả phù hợp!</h1>
                                    <img className="w-1/6 h-1/6" src={urlEmptyBox} alt="Empty box" />
                                </div>)}
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
        </div>
    );
}

export default CompleteTopicPage;