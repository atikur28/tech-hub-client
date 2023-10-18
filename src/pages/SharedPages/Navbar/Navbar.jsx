import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().then().catch();
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-600 underline" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addproduct"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-600 underline" : ""
          }
        >
          Add Product
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-600 underline" : ""
          }
        >
          About Us
        </NavLink>
      </li>
      {
        user && 
        <>
        <li>
        <NavLink
          to="/addedcarts"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-600 underline" : ""
          }
        >
          My Carts
        </NavLink>
      </li>
        </>
      }
    </>
  );

  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className="normal-case font-medium md:font-bold text-sm md:text-2xl">TechElectroHub</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex justify-center gap-4 text-lg font-semibold px-1">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex justify-center items-center gap-2">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                {
                  user ? <img src={user.photoURL} /> : <img src="https://i.ibb.co/whSBfc4/user.png" />
                }
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                {
                  user ? <p className="justify-between">{user.displayName}</p> : <p className="hidden"></p>
                }
              </li>
            </ul>
          </div>
          {user ? (
            <button
              onClick={handleLogOut}
              className="bg-slate-700 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded"
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="bg-slate-700 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
