"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";



const Navbar = () => {
  // Define menu item
  const menuItems = [
    { name: "Home", href: "/", isActive: true },
    { name: "About", href: "/about", isActive: false },
    { name: "Skills", href: "/skills", isActive: false },
    { name: "Services", href: "/services", isActive: false },
    { name: "Portfolio", href: "/portfolio", isActive: false },
    { name: "Contact", href: "/contact", isActive: false },
  ];
  // Get current path
  const pathname = usePathname();

  // State for mobile menu toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div>
      <nav className="bg-gray-300 fixed items-center justify-between px-[250px] sm:px-[30px] w-full  z-20 top-0 start-0 border-b dark:border-gray-600">
        <div className="max-w-screen-2xl w-full mx-auto flex items-center justify-between p-4">
          <Link
            href="http://localhost:3000"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="flex flex-row self-center text-2xl font-ubuntubold whitespace-nowrap dark:text-gray-900">
              Mab <span className="flex ml-2 text-red-400">Sothea</span>
            </span>
          </Link>
          {/* Toggle menu */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          {/* Navigation Menu */}
          <div
            className={`flex w-full items-center justify-between space-x-7 ${
              isMobileMenuOpen ? "block" : "hidden"
            } w-full md:flex md:w-auto md:order-1`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col mt-4 font-ubunturegular rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 items-center">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`${
                      pathname === item.href
                        ? "text-black dark:text-blue-500 font-ubuntubol"
                        : "text-gray-90 font-ubunturegular md:p-0 hover:underline hover:underline-offset-8"
                    } hover:duration-150 hover:underline-offset-4`}
                    aria-current={pathname === item.href ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
