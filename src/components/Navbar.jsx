import React from "react";

const Navbar = () => {

  const navItems = (
    <>
      <li><a>Home</a></li>
      <li><a>FAQ</a></li>
      <li><a>Changelog</a></li>
      <li><a>Blog</a></li>
      <li><a>Download</a></li>
      <li><a>Contact</a></li>
      <li>
        <button className="btn bg-gradient-to-r from-[#422AD5] to-[#6D5DF6] hover:from-[#3a24b8] hover:to-[#5b4be6] text-white font-semibold border-none">
          + New Ticket
        </button>
      </li>
    </>
  );

  return (
    <div className="px-6 md:px-16 lg:px-24 border-b border-gray-300 bg-base-100 shadow-sm">
      <div className="navbar">

        <div className="navbar-start">
          <div className="dropdown mx-3">

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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              {navItems}
            </ul>

          </div>

          <h1 className="text-lg md:text-2xl md:font-bold">CS - Ticket System</h1>
        </div>

        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 items-center">
            {navItems}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Navbar;