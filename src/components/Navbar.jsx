import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="bg-base-300">
      <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start">
          <Link to="/" className="btn btn-secondary hidden lg:flex">
            MyMarket
          </Link>
          <button type="button" className="btn btn-secondary lg:hidden">
            MyMarket
            <div className="dropdown">
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
               <li>Links</li>
              </ul>
            </div>
          </button>
        </div>
        <div className="navbar-center hidden lg:flex">
          <Link to="/" className="btn btn">
            MyMarket
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
