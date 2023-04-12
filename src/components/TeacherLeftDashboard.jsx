import { Link } from "react-router-dom";
import logo from "../assets/image/logo.png";
import { MdAccountCircle, MdTopic, MdOutlineArrowDropDownCircle } from "react-icons/md";
import { ImBook } from "react-icons/im";
import { HiOutlineDocumentCheck, HiDocumentText, HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { AiFillDashboard, AiOutlineSchedule } from "react-icons/ai";
import { FaUserAlt, FaUserGraduate, FaUsers } from "react-icons/fa";
import { RiFileUserFill } from "react-icons/ri";
import { React, useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { BsFileEarmarkCheck, BsFileEarmark, BsListTask } from "react-icons/bs";
import 'react-dropdown/style.css';
import jwt_decode from 'jwt-decode';
const TeacherLeftDashboard = () => {
    const [DropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropdown = () => setDropdownOpen(!DropdownOpen);

    const currentUserToken = localStorage.getItem("token");
    const decodedToken = jwt_decode(currentUserToken);
    const { role } = decodedToken;
    return (
        <div className="w-1/4 h-screen bg-blue-700">
            <div className="h-24 grid grid-cols-3">
                <div>
                    <img className="w-24 h-24 py-2 ml-2" src={logo} alt="logo.png" />
                </div>
                <div className="col-span-2 grid grid-rows-2">
                    <div className="text-white text-base py-3 px-6 font-bold">ĐẠI HỌC CẦN THƠ</div>
                    <div className="text-white text-xs text-center px-2 font-semibold">TRƯỜNG CÔNG NGHỆ THÔNG TIN & TRUYỀN THÔNG</div>
                </div>
            </div>
            <div className="h-1 w-full bg-slate-400"></div>
            <div className="w-full">
                <ul>
                    {
                        (role !== "GV") && (
                            <>
                                <li className=" text-white font-semibold text-xl hover:bg-blue-900">
                                    <Link to="/admin/home" className="flex mx-5 py-2 ">
                                        <div className="mt-1 mx-2 font-semibold text-4xl"><AiFillDashboard /> </div>
                                        <div className="mt-2 mx-2 font-semibold text-xl">Dashboard</div>
                                    </Link>
                                </li>
                                <li className=" text-white font-semibold text-xl hover:bg-blue-900">
                                    <Link to="/admin/list/council" className="flex mx-5 py-2 ">
                                        <div className="mt-1 mx-2 font-semibold text-3xl"><FaUsers /> </div>
                                        <div className="mt-2 mx-2 font-semibold text-xl">Danh sách hội đồng</div>
                                    </Link>
                                </li>
                                <li className=" text-white font-semibold text-xl hover:bg-blue-900">
                                    <Link to="/admin/list/teacher" className="flex mx-5 py-2 ">
                                        <div className="mt-1 mx-2 font-semibold text-3xl"><FaUserAlt /> </div>
                                        <div className="mt-2 mx-2 font-semibold text-xl">Danh sách giảng viên</div>
                                    </Link>
                                </li>
                                <li className=" text-white font-semibold text-xl hover:bg-blue-900">
                                    <Link to="/admin/list/student" className="flex mx-5 py-2">
                                        <div className="mt-2 mx-2 font-semibold text-3xl"><FaUserGraduate /></div>
                                        <div className="mt-2 mx-2 font-semibold text-xl">Danh sách sinh viên</div>
                                    </Link>
                                </li>
                                <li className=" text-white font-semibold text-xl hover:bg-blue-900">
                                    <Link to="/admin/list/gradeI" className="flex mx-5 py-2">
                                        <div className="mt-2 mx-2 font-semibold text-3xl"><HiDocumentText /></div>
                                        <div className="mt-2 mx-2 font-semibold text-xl">Danh sách sinh viên xin điểm i</div>
                                    </Link>
                                </li>
                                <li className=" text-white font-semibold text-xl  hover:cursor-pointer">
                                    <div className="flex px-5 py-2 hover:bg-blue-900" >
                                        <div className="mt-2 mx-2 font-semibold text-3xl"><MdTopic /></div>
                                        <div className="mt-2 mx-2 font-semibold text-xl">Quản lý khóa luận</div>
                                        <div className="mt-2 mx-2 " onClick={toggleDropdown}><IoIosArrowDropdown className={`text-3xl ${DropdownOpen && "rotate-180"}`} /></div>
                                    </div>
                                    {DropdownOpen && (
                                        <ul className="bg-blue-700 text-white">
                                            <li className="py-2 hover:bg-blue-900 pl-10 ">
                                                <Link to="/admin/list/topic" className="flex">
                                                    <div className=" font-semibold text-3xl"><BsListTask /></div>
                                                    <div className="mx-2 font-semibold text-xl">Danh sách đề tài</div>
                                                </Link>
                                            </li>

                                            <li className="py-2 hover:bg-blue-900 pl-10">
                                                <Link to="/admin/list/topic/processing" className="flex">
                                                    <div className=" font-semibold text-3xl"><HiOutlineClipboardDocumentList /></div>
                                                    <div className="mx-2 font-semibold text-xl">Danh sách khoá luận</div>
                                                </Link>
                                            </li>
                                            <li className="py-2 hover:bg-blue-900 pl-10">
                                                <Link to="/admin/list/topic/complete" className="flex">
                                                    <div className=" font-semibold text-3xl"><BsFileEarmarkCheck /></div>
                                                    <div className="mx-2 font-semibold text-xl">Đã hoàn thành</div>
                                                </Link>
                                            </li>

                                        </ul>
                                    )
                                    }
                                </li>
                                <li className=" text-white font-semibold text-xl hover:bg-blue-900">
                                    <Link to="/admin/year" className="flex mx-5 py-2">
                                        <div className="mt-2 mx-2 font-semibold text-3xl"><AiOutlineSchedule /></div>
                                        <div className="mt-2 mx-2 font-semibold text-xl">Niên khóa</div>
                                    </Link>
                                </li></>
                        )
                    }
                    {
                        (role === "GV") && (
                            <>
                                <li className="py-2 text-white font-semibold text-xl hover:bg-blue-900">
                                    <Link to="/teacher" className="flex mx-5 py-2 ">
                                        <div className="mt-1 mx-2 font-semibold text-4xl"><FaUsers /> </div>
                                        <div className="mt-2 mx-2 font-semibold text-xl">Hội đồng</div>
                                    </Link>
                                </li>
                                <li className="py-2 text-white font-semibold text-xl hover:bg-blue-900">
                                    <Link to="/teacher/tutorialTopic" className="flex mx-5 py-2">
                                        <div className="mt-2 mx-2 font-semibold text-3xl"><ImBook /></div>
                                        <div className="mt-2 mx-2 font-semibold text-xl">Đề tài hướng dẫn</div>
                                    </Link>
                                </li>
                                <li className="py-2 text-white font-semibold text-xl hover:bg-blue-900">
                                    <Link to="/teacher/completeTopic" className="flex mx-5 py-2">
                                        <div className="mt-2 mx-2 font-semibold text-3xl"><HiOutlineDocumentCheck /></div>
                                        <div className="mt-2 mx-2 font-semibold text-xl">Đề tài hoàn thành</div>
                                    </Link>
                                </li>
                            </>
                        )
                    }
                </ul>
            </div>
        </div>
    );
}

export default TeacherLeftDashboard;
