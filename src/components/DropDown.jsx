import { Link, useNavigate } from "react-router-dom";
import jwt_decode from 'jwt-decode';
import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";

const DropDown = () => {
  const handleButtonClick = () => {
    const dropdown = document.getElementById('dropdown');
    dropdown.classList.toggle('hidden');
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {

    dispatch(logout());
    localStorage.removeItem("token");
    navigate("/");
  }

  const currentUserToken = localStorage.getItem("token");
  const decodedToken = jwt_decode(currentUserToken);
  const { account, role, id } = decodedToken;

  return (
    <div className="absolute">
      <button className="text-white bg-blue-600 hover:bg-blue-800 font-medium rounded-sm text-sm px-10 py-2.5 text-center inline-flex items-center" type="button" onClick={handleButtonClick}>
        {account}
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div className="hidden bg-white text-base z-50 list-none divide-y divide-gray-100 shadow" id="dropdown">
        <ul aria-labelledby="dropdown">
          {(role === "SV") && (<li className="hover:bg-blue-800 hover:text-white text-sm text-gray-700 block px-4 py-2 font-medium">
            <Link to="/student/DiemI">Xin điểm i</Link>
          </li>)}
          {!(role === "SV") && (<li className="hover:bg-blue-800 hover:text-white text-sm text-gray-700 block px-4 py-2 font-medium">
            <Link to="/myProfile">Thông tin cá nhân</Link>
          </li>)}
          <li className="text-sm hover:bg-blue-800 hover:text-white text-gray-700 block px-4 py-2 font-medium">
            {(role === "SV") ?
              (<Link to="/Student/ChangePassword">Đổi mật khẩu</Link>)
              : (<button onClick={() => navigate("/changePassword", {state:id})}>Đổi mật khẩu</button>)
            }

          </li>
          <li className="text-sm hover:bg-blue-800 hover:text-white text-gray-700 block px-4 py-2 font-medium">
            <button onClick={handleLogout}>Đăng xuất</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DropDown;
