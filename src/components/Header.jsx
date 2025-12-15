// import React, { useState } from "react";
// import Logo from "../assets/img/logo.png";
// import { CiSearch, CiShoppingCart } from "react-icons/ci";
// import Lo from "../assets/img/lo.png";
// import { HiOutlineMenuAlt3 } from "react-icons/hi";
// import { IoClose } from "react-icons/io5";

// const Header = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <header className="w-full border-b border-gray-200">
//       <div className="container1">
//         <div className="flex items-center justify-between py-4">
        
//           <a href="/">
//             <img src={Logo} alt="logo" className="w-[140px]" />
//           </a>

          
//           <ul className="hidden md:flex items-center gap-7 font-normal text-base text-[#3d3d3d]">
//             <li className="hover:font-bold">
//               <a href="/">Home</a>
//             </li>
//             <li className="hover:font-bold">
//               <a href="#">Shop</a>
//             </li>
//             <li className="hover:font-bold">
//               <a href="#">Plant Care</a>
//             </li>
//             <li className="hover:font-bold">
//               <a href="#">Blogs</a>
//             </li>
//           </ul>

          
//           <div className="hidden md:flex items-center gap-5 cursor-pointer">
//             <CiSearch className="text-2xl" />
//             <CiShoppingCart className="text-2xl" />

//             <button className="w-[100px] h-[35px] rounded-md bg-[#46a358] flex items-center justify-center gap-1 font-medium text-base text-white cursor-pointer">
//               <img src={Lo} alt="icon" />
//               Login
//             </button>
//           </div>

          
//           <button className="md:hidden text-3xl" onClick={() => setOpen(true)}>
//             <HiOutlineMenuAlt3 />
//           </button>
//         </div>
//       </div>

      
//       <div
//         className={`fixed top-0 right-0 w-[70%] h-full bg-white shadow-lg z-50 transform transition-transform duration-300
//           ${open ? "translate-x-0" : "translate-x-full"}`}
//       >
       
//         <div className="flex items-center justify-between p-4 border-b">
//           <img src={Logo} alt="logo" className="w-[120px]" />
//           <button className="text-3xl" onClick={() => setOpen(false)}>
//             <IoClose />
//           </button>
//         </div>

        
//         <ul className="flex flex-col gap-6 text-lg font-medium mt-6 px-6 text-[#3d3d3d]">
//           <li onClick={() => setOpen(false)}>
//             <a href="/">Home</a>
//           </li>
//           <li onClick={() => setOpen(false)}>
//             <a href="#">Shop</a>
//           </li>
//           <li onClick={() => setOpen(false)}>
//             <a href="#">Plant Care</a>
//           </li>
//           <li onClick={() => setOpen(false)}>
//             <a href="#">Blogs</a>
//           </li>
//         </ul>

        
//         <div className="flex flex-col gap-4 px-6 mt-8">
//           <div className="flex items-center gap-4 text-2xl">
//             <CiSearch />
//             <CiShoppingCart />
//           </div>

//           <button className="w-full h-[40px] rounded-md bg-[#46a358] flex items-center justify-center gap-2 font-medium text-white">
//             <img src={Lo} alt="icon" className="w-4" />
//             Login
//           </button>
//         </div>
//       </div>

      
//       {open && (
//         <div
//           onClick={() => setOpen(false)}
//           className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-40"
//         ></div>
//       )}
//     </header>
//   );
// };

// export default Header;

import React, { useState, useContext } from "react";
import Logo from "../assets/img/logo.png";
import { CiSearch, CiShoppingCart, CiHeart } from "react-icons/ci";
import Lo from "../assets/img/lo.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
const Header = () => {
  const [open, setOpen] = useState(false);
  const { cartItems, wishlistItems } = useContext(ShopContext);

  return (
    <header className="w-full border-b border-gray-200">
      <div className="container1">
        <div className="flex items-center justify-between py-4">
          <a href="/">
            <img src={Logo} alt="logo" className="w-[140px]" />
          </a>

          <ul className="hidden md:flex items-center gap-7 font-normal text-base text-[#3d3d3d]">
            <li className="hover:font-bold">
              <a href="/">Home</a>
            </li>
            <li className="hover:font-bold">
              <a href="#">Shop</a>
            </li>
            <li className="hover:font-bold">
              <a href="#">Plant Care</a>
            </li>
            <li className="hover:font-bold">
              <a href="#">Blogs</a>
            </li>
          </ul>

          {/* DESKTOP ICONS */}
          <div className="hidden md:flex items-center gap-5 cursor-pointer">
            <CiSearch className="text-2xl" />

            <Link to="/wishlist" className="relative">
              <CiHeart className="text-2xl" />
              {wishlistItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#46a358] text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                  {wishlistItems.length}
                </span>
              )}
            </Link>

            <Link to="/cart" className="relative">
              <CiShoppingCart className="text-2xl" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#46a358] text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                  {cartItems.length}
                </span>
              )}
            </Link>

            <button className="w-[100px] h-[35px] rounded-md bg-[#46a358] flex items-center justify-center gap-1 font-medium text-base text-white cursor-pointer">
              <img src={Lo} alt="icon" />
              Login
            </button>
          </div>

          <button className="md:hidden text-3xl" onClick={() => setOpen(true)}>
            <HiOutlineMenuAlt3 />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 w-[70%] h-full bg-white shadow-lg z-50 transform transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <img src={Logo} alt="logo" className="w-[120px]" />
          <button className="text-3xl" onClick={() => setOpen(false)}>
            <IoClose />
          </button>
        </div>

        <ul className="flex flex-col gap-6 text-lg font-medium mt-6 px-6 text-[#3d3d3d]">
          <li onClick={() => setOpen(false)}>
            <a href="/">Home</a>
          </li>
          <li onClick={() => setOpen(false)}>
            <a href="#">Shop</a>
          </li>
          <li onClick={() => setOpen(false)}>
            <a href="#">Plant Care</a>
          </li>
          <li onClick={() => setOpen(false)}>
            <a href="#">Blogs</a>
          </li>
        </ul>

        <div className="flex flex-col gap-4 px-6 mt-8">
          <div className="flex items-center gap-4 text-2xl">
            <CiSearch />

            <a href="/wishlist" className="relative">
              <CiHeart />
              {wishlistItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#46a358] text-white text-[10px] w-3 h-3 flex items-center justify-center rounded-full">
                  {wishlistItems.length}
                </span>
              )}
            </a>

            <a href="/cart" className="relative">
              <CiShoppingCart />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#46a358] text-white text-[10px] w-3 h-3 flex items-center justify-center rounded-full">
                  {cartItems.length}
                </span>
              )}
            </a>
          </div>

          <button className="w-full h-[40px] rounded-md bg-[#46a358] flex items-center justify-center gap-2 font-medium text-white">
            <img src={Lo} alt="icon" className="w-4" />
            Login
          </button>
        </div>
      </div>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-40"
        ></div>
      )}
    </header>
  );
};

export default Header;
