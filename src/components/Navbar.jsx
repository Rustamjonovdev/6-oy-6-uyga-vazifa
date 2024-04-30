import { Link } from "react-router-dom";

import NavLinks from "./NavLink";
// dark and light mode link
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { useEffect, useState } from "react";

const themes = {
  winter: "winter",
  dracula: "dracula",
};

function themFromLocalStorage() {
  return localStorage.getItem("theme") || themes.winter;
}

function Navbar() {
  const [currentTheme, setCurrentTheme] = useState(themFromLocalStorage());

  const handleMode = () => {
    const newTheme =
      currentTheme == currentTheme ? themes.dracula : themes.winter;
      setCurrentTheme(newTheme)
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", currentTheme);
    localStorage.setItem("theme", currentTheme);
  }, [currentTheme]);

  console.log(currentTheme);
  return (
    <div className="bg-base-300 py-6 mb-10">
      <div className="navbar align-content">
        <div className="navbar-start">
          <Link to="/" className="btn btn-secondary hidden lg:flex">
            MyMarket
          </Link>
          <button className="btn btn-secondary lg:hidden">
            <div className="dropdown lg:hidden btn-secondary ">
              <div tabIndex={0} role="button" className="m-1">
                MyMarket
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <NavLinks />
              </ul>
            </div>
          </button>
        </div>
        <div className="navbar-center hidden lg:flex">
          <Link to="/" className="btn btn">
            <NavLinks />
          </Link>
        </div>
        <div className="navbar-end flex gap-5 items-center ">
          <label onClick={handleMode} className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" />

            {/* sun icon */}
            <IoSunnyOutline className="swap-on fill-current w-7 h-7" />

            {/* moon icon */}
            <IoMoonOutline className="swap-off fill-current w-7 h-7" />
          </label>
          <Link to="/" className="btn btn-primary">
            login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
