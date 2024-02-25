import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between item-center max-w-7xl mx-auto p-3">
        <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
          <span className="text-slate-500">Get</span>
          <span className="text-slate-700">Room</span>
        </h1>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-600" />
        </form>
        <ul className="flex gap-8">
          <Link to="/">
            <li className="hidden sm:inline text text-slate-700 hover:underline">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text text-slate-700 hover:underline">
              About
            </li>
          </Link>
          <Link to="/Signin">
            <li className="hidden sm:inline text text-slate-700 hover:underline">
              Signin
            </li>
          </Link>
          <Link to="/SignUp">
            <li className="text text-slate-700 hover:underline">SignUp</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}