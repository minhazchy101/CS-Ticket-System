import React from 'react';

const Navbar = () => {
    const navItems = <>
    <li><a>Home</a></li>
    <li><a>FAQ</a></li>
    <li><a>Changelog</a></li>
    <li><a>Blog</a></li>
    <li><a>Download</a></li>
    <li><a>Contact</a></li>
    <li><button class="btn btn-primary">Large</button></li>
    </>
    return (
        <div className='px-6 md:px-16 lg:px-24 xl:px-32 border-b border-gray-300  bg-base-100 shadow-sm'>
        <div class="navbar">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabindex="-1"
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {navItems}
      </ul>
    </div>
    <h1 class="text-2xl font-bold">CS — Ticket System</h1>
  </div>
  {/* <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
     {navItems}
    </ul>
  </div> */}
  <div class="navbar-end hidden lg:flex">
     <ul class="menu menu-horizontal px-1 items-center">
     {navItems}
    </ul>
  </div>
</div>    
        </div>
       
    );
};

export default Navbar;