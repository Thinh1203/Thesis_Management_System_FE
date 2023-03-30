import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Pagination from "../components/Pagination";
import { AiOutlineSearch } from "react-icons/ai";
import { BiDetail } from "react-icons/bi";
const TopicPage = () => {
    const topic = [
        {
            "id": 1,
            "name": "Hệ thống quản lý thi trắc nghiệm tiếng anh",
            "englishName": "Hệ thống quản lý thi trắc nghiệm tiếng anh",
            "code": "CNTT2023-DT01",
            "author": "Quách Huy Thịnh",
            "startDate": "01/02/2023",
            "endDate": "27/04/2023",
        },
        {
            "id": 2,
            "name": "Hệ thống quản lý thi trắc nghiệm tiếng anh",
            "englishName": "Hệ thống quản lý thi trắc nghiệm tiếng anh",
            "code": "CNTT2023-DT01",
            "author": "Quách Huy Thịnh",
            "startDate": "01/02/2023",
            "endDate": "27/04/2023",
        },
        {
            "id": 3,
            "name": "Hệ thống quản lý thi trắc nghiệm tiếng anh",
            "englishName": "Hệ thống quản lý thi trắc nghiệm tiếng anh",
            "code": "CNTT2023-DT01",
            "author": "Quách Huy Thịnh",
            "startDate": "01/02/2023",
            "endDate": "27/04/2023",
        },
        {
            "id": 4,
            "name": "Hệ thống quản lý thi trắc nghiệm tiếng anh",
            "englishName": "Hệ thống quản lý thi trắc nghiệm tiếng anh",
            "code": "CNTT2023-DT01",
            "author": "Quách Huy Thịnh",
            "startDate": "01/02/2023",
            "endDate": "27/04/2023",
        },
        {
            "id": 5,
            "name": "Hệ thống quản lý thi trắc nghiệm tiếng anh",
            "englishName": "Hệ thống quản lý thi trắc nghiệm tiếng anh",
            "code": "CNTT2023-DT01",
            "author": "Quách Huy Thịnh",
            "startDate": "01/02/2023",
            "endDate": "27/04/2023",
        },
        {
            "id": 6,
            "name": "Hệ thống quản lý thi trắc nghiệm tiếng anh",
            "englishName": "Hệ thống quản lý thi trắc nghiệm tiếng anh",
            "code": "CNTT2023-DT01",
            "author": "Quách Huy Thịnh",
            "startDate": "01/02/2023",
            "endDate": "27/04/2023",
        },
        {
            "id": 7,
            "name": "Hệ thống quản lý thi trắc nghiệm tiếng anh",
            "englishName": "Hệ thống quản lý thi trắc nghiệm tiếng anh",
            "code": "CNTT2023-DT01",
            "author": "Quách Huy Thịnh",
            "startDate": "01/02/2023",
            "endDate": "27/04/2023",
        },
        {
            "id": 8,
            "name": "Hệ thống quản lý thi trắc nghiệm tiếng anh",
            "englishName": "Hệ thống quản lý thi trắc nghiệm tiếng anh",
            "code": "CNTT2023-DT01",
            "author": "Quách Huy Thịnh",
            "startDate": "01/02/2023",
            "endDate": "27/04/2023",
        },
        {
            "id": 9,
            "name": "Hệ thống quản lý thi trắc nghiệm tiếng anh",
            "englishName": "Hệ thống quản lý thi trắc nghiệm tiếng anh",
            "code": "CNTT2023-DT01",
            "author": "Quách Huy Thịnh",
            "startDate": "01/02/2023",
            "endDate": "27/04/2023",
        },
        {
            "id": 10,
            "name": "Hệ thống quản lý thi trắc nghiệm tiếng anh",
            "englishName": "Hệ thống quản lý thi trắc nghiệm tiếng anh",
            "code": "CNTT2023-DT01",
            "author": "Quách Huy Thịnh",
            "startDate": "01/02/2023",
            "endDate": "27/04/2023",
        },
        {
            "id": 11,
            "name": "Hệ thống quản lý thi trắc nghiệm tiếng anh",
            "englishName": "Hệ thống quản lý thi trắc nghiệm tiếng anh",
            "code": "CNTT2023-DT01",
            "author": "Quách Huy Thịnh",
            "startDate": "01/02/2023",
            "endDate": "27/04/2023",
        },
        {
            "id": 12,
            "name": "Hệ thống quản lý thi trắc nghiệm tiếng anh",
            "englishName": "Hệ thống quản lý thi trắc nghiệm tiếng anh",
            "code": "CNTT2023-DT01",
            "author": "Quách Huy Thịnh",
            "startDate": "01/02/2023",
            "endDate": "27/04/2023",
        },
    ];
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(8);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = topic.slice(indexOfFirstItem, indexOfLastItem);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return (
        <div>
            <Header />
            <div className="flex justify-center mt-10 w-full">
                <form action="" className="flex">
                    <input className="w-96 border-2 border-slate-400" type="text" placeholder="Tìm kiếm..." />
                    <button className="p-2 bg-blue-500 text-white text-2xl">
                        <AiOutlineSearch />
                    </button>
                </form>
            </div>

                <div className="grid grid-cols-8 mt-10 mx-20 text-center font-semibold border-2 border-slate-500">
                    <div>STT</div>
                    <div className="col-span-2">Tên đề tài</div>
                    <div className="col-span-2">Tên tiếng anh</div>
                    <div>Mã đề tài</div>
                    <div>Sinh viên thực hiện</div>
                    <div>Chi tiết</div>
                </div>

                <div className="pb-2 grid grid-cols-8 text-center font-normal border-l-2 border-r-2 border-b-2 border-slate-500 mx-20 ">
                    {currentItems.map((e, index) => (
                        <React.Fragment key={e.id}>
                            <div>{index + 1}</div>
                            <div className="col-span-2">{e.name}</div>
                            <div className="col-span-2">{e.englishName}</div>
                            <div>{e.code}</div>
                            <div>{e.author}</div>
                            {/* <div>{e.startDate}</div>
                            <div>{e.endDate}</div> */}
                            <div className="flex justify-center text-2xl text-blue-800"><Link to="/topicDetail"><BiDetail /></Link></div>
                        </React.Fragment>
                    ))}

                    <div className="col-span-8 mt-3">
                        <Pagination
                            itemsPerPage={itemsPerPage}
                            totalItems={topic.length}
                            paginate={paginate}
                        />
                    </div>
                </div>
        </div>

    );
}

export default TopicPage;