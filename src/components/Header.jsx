import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { MdTopic } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";

import banner from "../assets/image/banner_cict.jpg"
const Header = () => {
    return (
        <header>
            <div className="h-52 bg-cover relative" style={{ backgroundImage: `url(${banner})` }}>
                <div className="absolute text-2xl my-32 mx-80 font-Poppins text-yellow-50 w-1/2">
                    HỆ THỐNG QUẢN LÝ LUẬN VĂN TỐT NGHIỆP
                </div>
                <div className="relative">
                    <ul className="flex mx-80 h-52">
                        <li className="mx-1">
                            <Link to="/">
                                <button className="my-44 rounded-full bg-slate-100 px-3 text-blue-600 flex">
                                    <AiFillHome className="mt-1 mr-1" />
                                    <p>Trang chủ</p>
                                </button>
                            </Link>
                        </li>
                        <li className="mx-1">
                            <Link to="/topics">
                                <button className="my-44 rounded-full bg-slate-100 px-3 text-blue-600 flex">
                                    <MdTopic className="mt-1 mr-1" />
                                    <p>Danh sách đề tài</p>
                                </button>
                            </Link>
                        </li>
                        <li className="mx-1">
                            <Link to="/login">
                                <button className="my-44 rounded-full bg-slate-100 px-3 text-blue-600 flex">
                                    <FaUserAlt className="mt-1 mr-1" />
                                    <p>Đăng nhập</p>
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;