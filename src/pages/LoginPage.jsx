import { useNavigate } from "react-router-dom";
import { login } from "../api/login";
import Header from "../components/Header";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
const LoginPage = () => {
    const [account, setAccount] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault(); 
        if (account.length < 1 || password.length < 1) 
            return  toast.error("Tài khoản hoặc mật khẩu không được trống!");
        const newUser = {
            account: account,
            password: password,
        };
        const fetchApi = async () => {
            const res = await login(newUser, navigate);
            if (res.response.status !== 200)
                toast.error(res.response.data.message);
        }
        fetchApi();
    };

    return (
        <div>
            <Header />
            <div className="relative flex flex-col justify-center mt-10 overflow-hidden">
                <div className="w-full p-6 m-auto border-2 border-slate-400 rounded-md shadow-xl max-w-sm ">
                    <h1 className="text-3xl text-center text-blue-800">
                        ĐĂNG NHẬP
                    </h1>
                    <form className="mt-6" >
                        <div className="mb-2">
                            <label htmlFor="account" className="text-gray-800">
                                Tài khoản
                            </label>
                            <input
                                type="text"
                                id="account"
                                className="outline outline-1 outline-slate-400  block w-full px-4 py-2 mt-2 bg-slate-200 border rounded-md"
                                onChange={(e) => setAccount(e.target.value)}
                            />
                        </div>
                        <div className="mb-2 relative">
                            <label htmlFor="password" className=" text-gray-800">
                                Mật khẩu
                            </label>
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                className=" outline outline-1 outline-slate-400 block w-full px-4 py-2 mt-2 bg-slate-200 border rounded-md"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                           {password.length > 0 && (
                             <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-2 bottom-3">{showPassword ? <AiFillEyeInvisible /> : <AiFillEye /> }</button>)}
                        </div>
                        <div className="mt-6 flex justify-center">
                            <button onClick={(e) => handleLogin(e)} className="w-48 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gradient-to-r from-blue-500 via-blue-800 to-blue-500 rounded-md">
                                Đăng nhập
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={2000}
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
    );
}

export default LoginPage;