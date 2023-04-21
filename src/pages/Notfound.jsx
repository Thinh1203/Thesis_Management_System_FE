import pageError from "../assets/image/404notfound.jpg";
import { useNavigate } from "react-router-dom";

const Notfound = () => {
    const navigate = useNavigate();
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex flex-col items-center">
                <img src={pageError} alt="Page not found - 404 error" />
                <button onClick={() => navigate("/")} className="bg-blue-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded mt-4">
                    Go home
                </button>
            </div>
        </div>
    );
};

export default Notfound;