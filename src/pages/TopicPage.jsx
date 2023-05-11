import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Paginate from "../components/Paginate";
import { getAllListTheses, search } from "../api/adminApi/thesis";
import { useNavigate } from "react-router-dom";
import { BiDetail } from "react-icons/bi"
import urlEmptyBox from "../assets/image/empty_box.png";
const TopicPage = () => {
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [totalPagesQuery, setTotalPagesQuery] = useState(1);
    const [pageQuery, setPageQuery] = useState(1);
    const [searchData, setSearchData] = useState(true);
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
                    console.log(response.data);

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
            const res = await getAllListTheses(page);
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
    const navigate = useNavigate();

    const detailTopic = async (id) => {
        navigate("/topicDetail", { state: id });
    }
    return (
        <div>
            <Header />
            <div className="flex justify-center mt-10 w-full">
                <input
                    className="w-4/12 p-2 rounded-sm border-2 border-slate-500"
                    type="text"
                    placeholder="Tìm kiếm tên đề tài, mã đề tài, sinh viên thực hiện ..."
                    value={query}
                    onChange={handleInputChange} />
            </div>
            <div className="rounded-md border border-slate-500 shadow-md shadow-slate-500 mx-5 mt-3 pb-2">
                <div className="grid grid-cols-12 mt-10 mx-20 text-center font-semibold border-2 border-slate-500">
                    <div className="text-lg">Mã đề tài</div>
                    <div className="col-span-4 text-lg">Tên đề tài</div>
                    <div className="col-span-4 text-lg">Tên tiếng anh</div>
                    <div className="text-lg col-span-2">Sinh viên thực hiện</div>
                    <div className="text-lg">Chi tiết</div>
                </div>
                < div className="pb-2 grid grid-cols-12 text-center font-normal border-l-2 border-r-2 border-b-2 border-slate-500 mx-20 ">
                    {
                        !query && data?.map((e) => (
                            <React.Fragment key={e.id}>
                                <div className="my-1">CT550N{e.topic.id}</div>
                                <div className="col-span-4 my-1">{e.topic.VietnameseName}</div>
                                <div className="col-span-4 my-1">{e.topic.EnglishName}</div>
                                <div className="col-span-2 my-1">{e.student.fullName}</div>
                                <div className="flex justify-center text-2xl text-blue-800 my-1"><button onClick={() => detailTopic(e.id)}><BiDetail /></button></div>
                            </React.Fragment>
                        ))}

                    {
                        (query && searchData) && (results?.map(e => (
                            <React.Fragment key={e.id}>
                                <div className="my-1">CT550N{e.topic.id}</div>
                                <div className="col-span-4 my-1">{e.topic.VietnameseName}</div>
                                <div className="col-span-4 my-1">{e.topic.EnglishName}</div>
                                <div className="col-span-2 my-1">{e.student.fullName}</div>
                                <div className="flex justify-center text-2xl text-blue-800 my-1"><button onClick={() => detailTopic(e.id)}><BiDetail /></button></div>
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
        </div >

    );
}

export default TopicPage;