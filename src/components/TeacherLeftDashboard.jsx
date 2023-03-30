import { Link } from "react-router-dom";
import logo from "../assets/image/logo.png";
import { FaUsers } from "react-icons/fa";
import { ImBook } from "react-icons/im";
import { HiOutlineDocumentCheck } from "react-icons/hi2";
const TeacherLeftDashboard = () => {
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
            </ul>
        </div>
    </div>
    );
}
 
export default TeacherLeftDashboard;