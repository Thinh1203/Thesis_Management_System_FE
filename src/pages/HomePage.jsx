import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Paginate from "../components/Paginate";
import { getAll } from "../api/adminApi/council";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [data, setData] = useState([]);
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
    const navigate = useNavigate();

    const detail = async (id) => {
        navigate("/newsDetail", {state: id});
    }

    return (
        <div>
            <Header />
            <div className="border-2 border-slate-400 rounded-sm w-1/2  mt-5 ml-auto mr-auto ">
                <div className="w-1/2 h-12 shadow-xl rounded-md p-3 mt-2 shadow-slate-500 m-auto text-center border-2 border-slate-300">
                    <h1 className="text-lg text-red-500 font-semibold ">THÔNG BÁO MỚI NHẤT</h1>
                </div>
                <div className="mb-3 mt-3">
                    <ul>
                        {
                            data && data?.map((e) => (
                                <li key={e.id} onClick={() => detail(e.id)} className="py-2 text-center hover:font-semibold hover:text-red-500 hover:cursor-pointer"> Thông báo mở hội đồng <span className="font-semibold text-cyan-600">{e.code}</span> bảo vệ luận văn</li>
                             )
                            )
                        }

                    </ul>
                </div>
                <div className="flex justify-center align-middle my-4">
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
    );
}

export default HomePage;