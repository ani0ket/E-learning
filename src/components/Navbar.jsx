import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { FaUserGraduate } from "react-icons/fa";
import image from "../assets/study-high-resolution-logo-transparent.png";

const Navbar = () => {
  const [searchText, setSearchText] = useState("");

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <nav className="bg-blue-500 p-4 w-full">
      <div className="flex justify-between items-center px-5">
        <a href="/">
          <img src={image} alt="" className="w-10" />
        </a>
        <div className="flex items-center gap-x-4 w-1/4">
          <div className="w-full flex items-center bg-white px-2 rounded-md">
            <input
              type="text"
              id="search-text"
              value={searchText}
              onChange={handleChange}
              className=" w-full px-2 py-1"
            />
            <button
              className="hover:bg-gray-100 py-2 px-2"
              onClick={handleSearch}
            >
              <BsSearch />
            </button>
          </div>
          <a href="/student/dashboard">
            <FaUserGraduate size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
