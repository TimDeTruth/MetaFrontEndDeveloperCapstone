"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white p-4">
      <div className="text-black container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/Logo.svg" alt="Little Lemon" width={120} height={120} />
          <span className="ml-2 text-xl font-bold">Little Lemon</span>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="hover:text-yellow-500">
            Home
          </Link>
          <Link href="#about" className="hover:text-yellow-500">
            About
          </Link>
          <Link href="#menu" className="hover:text-yellow-500">
            Menu
          </Link>
          <Link href="/booking" className="hover:text-yellow-500">
            Reservations
          </Link>
          <Link href="#order" className="hover:text-yellow-500">
            Order Online
          </Link>
          <Link href="#login" className="hover:text-yellow-500">
            Login
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
            title="Logins"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden text-black">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block hover:text-yellow-500">
              Home
            </Link>
            <Link href="/about" className="block hover:text-yellow-500">
              About
            </Link>
            <Link href="/menu" className="block hover:text-yellow-500">
              Menu
            </Link>
            <Link href="/reservations" className="block hover:text-yellow-500">
              Reservations
            </Link>
            <Link href="/order" className="block hover:text-yellow-500">
              Order Online
            </Link>
            <Link href="/login" className="block hover:text-yellow-500">
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

// // components/Navigation.tsx
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const Navigation: React.FC = () => {
//   return (
//     <nav className="flex items-center justify-between p-10 bg-white shadow-md">
//       {/* Logo */}
//       <div className="flex items-center">
//         {/* <Image src="/Logo.svg" alt="Little Lemon Logo" className="h-8 w-5" /> */}
//         <img src="/Logo.svg" alt="Little Lemon Logo" className="h-8 w-auto" />

//         <span className=" sm:text-sm md:text-lg lg:text-3xl   mx-5   font-bold text-gray-800">
//           Little Lemon
//         </span>
//       </div>

//       {/* Nav Links */}
//       <div className="hidden md:flex space-x-8">
//         <Link href="/about">
//           <p className=" text-black hover:text-gray-600">About</p>
//         </Link>
//         <Link href="/menu">
//           <p className=" text-black hover:text-gray-600">Menu</p>
//         </Link>
//         <Link href="/reservations">
//           <p className=" text-black hover:text-gray-600">Reservations</p>
//         </Link>
//         <Link href="/order">
//           <p className=" text-black hover:text-gray-600">Order Online</p>
//         </Link>
//         <Link href="/login">
//           <p className=" text-black hover:text-gray-600">Login</p>
//         </Link>
//       </div>

//       {/* Hamburger Menu for Small Screens */}
//       <div className="md:hidden">
//         <button className="text-gray-600">
//           {/* You can replace this with an actual hamburger icon */}
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             className="w-6 h-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M4 6h16M4 12h16m-7 6h7"
//             />
//           </svg>
//         </button>
//       </div>

//       {/* Menu */}
//       {/* Nav Links */}
//       {/* <div className="flex sm:text-sm space-x-4">
//         <Link href="/about">
//           <p className=" text-black hover:text-gray-600">About</p>
//         </Link>
//         <Link href="/menu">
//           <p className=" text-black hover:text-gray-600">Menu</p>
//         </Link>
//         <Link href="/reservations">
//           <p className=" text-black hover:text-gray-600">Reservations</p>
//         </Link>
//         <Link href="/order">
//           <p className=" text-black hover:text-gray-600">Order Online</p>
//         </Link>
//         <Link href="/login">
//           <p className=" text-black hover:text-gray-600">Login</p>
//         </Link>
//       </div> */}
//     </nav>
//   );
// };

// export default Navigation;
