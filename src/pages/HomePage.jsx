import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Pagination from "../components/Pagination";
const HomePage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(8);
    const list = [
        "Thông báo kế hoạch giảng dạy và đăng ký học phần HK3, 2023-2024",
        "Thông báo kế hoạch giảng dạy và đăng ký học phần HK2, 2023-2024",
        "Thông báo kế hoạch giảng dạy và đăng ký học phần HK1, 2023-2024",
        "Thông báo kế hoạch giảng dạy và đăng ký học phần HK3, 2022-2023",
        "Thông báo kế hoạch giảng dạy và đăng ký học phần HK2, 2022-2023",
        "Thông báo kế hoạch giảng dạy và đăng ký học phần HK1, 2022-2023",
        "Thông báo kế hoạch giảng dạy và đăng ký học phần HK3, 2021-2022",
        "Thông báo kế hoạch giảng dạy và đăng ký học phần HK2, 2021-2022",
        "Thông báo kế hoạch giảng dạy và đăng ký học phần HK1, 2021-2022",
        "Thông báo kế hoạch giảng dạy và đăng ký học phần HK3, 2020-2021",

    ];
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = list.slice(indexOfFirstItem, indexOfLastItem);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return (
        <div>
            <Header />
            <div className="border-2 border-slate-400 rounded-sm w-1/2  mt-5 ml-auto mr-auto ">
                <div className="w-1/2 h-12 shadow-xl p-3 shadow-slate-500/50 m-auto text-center">
                    <h1 className="text-lg text-red-500 font-semibold">THÔNG BÁO MỚI NHẤT</h1>
                </div>
                <div className="mb-3 mt-3">
                    <ul>
                        {
                            currentItems.map((e, index) => (
                               <Link to="/newsDetail"><li key={index} className="py-1 text-center">{e}</li></Link>
                            )
                            )
                        }

                    </ul>
                </div>
                <div className="mb-3">
                    <Pagination
                        itemsPerPage={itemsPerPage}
                        totalItems={list.length}
                        paginate={paginate}
                    />
                </div>
            </div>
        </div>
    );
}

export default HomePage;