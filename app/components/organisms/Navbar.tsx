// "use client";
// import Link from "next/link";
// import React, { useState } from "react";
// import { usePathname } from "next/navigation";



// const Navbar = () => {
//   // Define menu item
//   const menuItems = [
//     { name: "Home", href: "/", isActive: true },
//     { name: "About", href: "/about", isActive: false },
//     { name: "Skills", href: "/skills", isActive: false },
//     { name: "Services", href: "/services", isActive: false },
//     { name: "Portfolio", href: "/portfolio", isActive: false },
//     { name: "Contact", href: "/contact", isActive: false },
//   ];
//   // Get current path
//   const pathname = usePathname();

//   // State for mobile menu toggle
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   // Toggle mobile menu
//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };
//   return (
//     <div>
//       <nav className="bg-gray-300 fixed items-center justify-between px-[250px] sm:px-[30px] w-full  z-20 top-0 start-0 border-b dark:border-gray-600">
//         <div className="max-w-screen-2xl w-full mx-auto flex items-center justify-between p-4">
//           <Link
//             href="http://localhost:3000"
//             className="flex items-center space-x-3 rtl:space-x-reverse"
//           >
//             <span className="flex flex-row self-center text-2xl font-ubuntubold whitespace-nowrap dark:text-gray-900">
//               Mab <span className="flex ml-2 text-red-400">Sothea</span>
//             </span>
//           </Link>
//           {/* Toggle menu */}
//           <div className="flex md:hidden">
//             <button
//               onClick={toggleMobileMenu}
//               type="button"
//               className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//               aria-controls="navbar-sticky"
//               aria-expanded={isMobileMenuOpen}
//             >
//               <span className="sr-only">Open main menu</span>
//               <svg
//                 className="w-5 h-5"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 17 14"
//               >
//                 <path
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M1 1h15M1 7h15M1 13h15"
//                 />
//               </svg>
//             </button>
//           </div>
//           {/* Navigation Menu */}
//           <div
//             className={`flex w-full items-center justify-between space-x-7 ${
//               isMobileMenuOpen ? "block" : "hidden"
//             } w-full md:flex md:w-auto md:order-1`}
//             id="navbar-sticky"
//           >
//             <ul className="flex flex-col mt-4 font-ubunturegular rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 items-center">
//               {menuItems.map((item) => (
//                 <li key={item.name}>
//                   <Link
//                     href={item.href}
//                     className={`${
//                       pathname === item.href
//                         ? "text-black dark:text-blue-500 font-ubuntubol"
//                         : "text-gray-90 font-ubunturegular md:p-0 hover:underline hover:underline-offset-8"
//                     } hover:duration-150 hover:underline-offset-4`}
//                     aria-current={pathname === item.href ? "page" : undefined}
//                   >
//                     {item.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;


"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`fixed w-full z-20 -top-1 left-0 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-gray-900">
                Mab <span className="text-red-400">Sothea</span>
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`${
                    pathname === item.href
                      ? "text-black font-bold"
                      : "text-gray-700 hover:text-black"
                  } px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 hover:bg-gray-100`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`${
                pathname === item.href
                  ? "bg-gray-100 text-black"
                  : "text-gray-700 hover:bg-gray-100 hover:text-black"
              } block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

