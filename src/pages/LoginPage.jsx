import Header from "../components/Header";
import { AiOutlineUser } from "react-icons/ai";

const LoginPage = () => {
    return (
        <div>
            <Header />
            <div className="relative flex flex-col justify-center mt-10 overflow-hidden">
                <div className="w-full p-6 m-auto border-2 border-slate-400 rounded-md shadow-xl max-w-sm ">
                    <h1 className="text-3xl text-center text-blue-800">
                        ĐĂNG NHẬP
                    </h1>
                    <form className="mt-6">
                        <div className="mb-2">
                            <label htmlFor="account" className="text-gray-800">
                                Tài khoản
                            </label>
                            <input
                                type="text" id="account"
                                className="outline outline-1 outline-slate-400  block w-full px-4 py-2 mt-2 bg-slate-200 border rounded-md"
                            />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="password" className=" text-gray-800">
                                Mật khẩu
                            </label>
                            <input
                                type="password" id="password"
                                className="outline outline-1 outline-slate-400 block w-full px-4 py-2 mt-2 bg-slate-200 border rounded-md"
                            />
                        </div>
                        <div className="mt-6 flex justify-center">
                            <button className="w-48 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gradient-to-r from-blue-500 via-blue-800 to-blue-500 rounded-md">
                                Đăng nhập
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;