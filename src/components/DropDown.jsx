import { Link } from "react-router-dom";
const DropDown = () => {
  const handleButtonClick = () => {
    const dropdown = document.getElementById('dropdown');
    dropdown.classList.toggle('hidden');
  };

  return (
    <div className="absolute">
      <button className="text-white bg-blue-600 hover:bg-blue-800 font-medium rounded-sm text-sm px-10 py-2.5 text-center inline-flex items-center" type="button" onClick={handleButtonClick}>
        Admin
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div className="hidden bg-white text-base z-50 list-none divide-y divide-gray-100 shadow" id="dropdown">
        <ul  aria-labelledby="dropdown">
          <li className="hover:bg-blue-800 hover:text-white text-sm text-gray-700 block px-4 py-2 font-medium">
            <Link to="/myProfile">Thông tin cá nhân</Link> 
          </li>
          <li className="text-sm hover:bg-blue-800 hover:text-white text-gray-700 block px-4 py-2 font-medium">
            <Link to="/changePassword">Đổi mật khẩu</Link> 
          </li>
          <li className="text-sm hover:bg-blue-800 hover:text-white text-gray-700 block px-4 py-2 font-medium">
            <Link to="/logout">Đăng xuất</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DropDown;
