import { Link } from "react-router-dom";

import NavLinks from "./NavLink";

function Navbar() {
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
               <NavLinks/>
              </ul>
            </div>
          </button>
        </div>
        <div className="navbar-center hidden lg:flex">
          <Link to="/" className="btn btn">
            <NavLinks/>
          </Link>
        </div>
        <div className="navbar-end">
          <Link to="/" className="btn btn-primary">
            login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
