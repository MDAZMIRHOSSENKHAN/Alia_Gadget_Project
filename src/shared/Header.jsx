import { Link } from "react-router-dom";
import logo from "../assets/logo/primary-logo-removebg-preview.png";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { FaCartPlus } from "react-icons/fa";


const Header = () => {
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/products/all">All Products</Link>
            </li>
            {user ? (
              <>
                <button className="btn inline" onClick={signOut}>Logout</button>
              </>
            ) : (
              <>
                <li>
                  <Link to="/sign-up"> Sign Up</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </>
            )}

            <li>
            <label htmlFor="cart-drawer" className="drawer-button btn btn-primary">
           <FaCartPlus />

          </label>
          </li>
          </ul>
        </div>
        <Link to="/">
          <img style={{ height: "72px" }} src={logo} alt="logo" />
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/products/all">All Products</Link>
          </li>
          {user ? (
            <button className="btn" onClick={signOut}>Logout</button>
          ) : (
            <>
              <li>
                <Link to="/sign-up"> Sign Up</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </>
          )}
          <label htmlFor="cart-drawer" className="drawer-button btn btn-primary">
         <FaCartPlus />

        </label>
        </ul>
      </div>
      {user?.displayName && (
        <div className="navbar-end">
          <h2 className="bg-purple-600 text-md text-white p-2 rounded ">
            Welcome {user?.displayName}
          </h2>
        </div>
      )}

      {user?.photoURL && (
        <div className="avatar">
          <div className="w-24 rounded-full">
            <img src={user?.photoURL} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
