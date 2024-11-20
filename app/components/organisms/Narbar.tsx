'use client'
import { Menu } from "@/data/data";
import React, { useState } from "react";
import Link from "next/link";
import { MdMenu } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import ResponsiveNavbar from "./ResponsiveNavbar";

const Narbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <nav>
        <div className="container flex items-center justify-between py-8">
          {/* Logo section */}
          <div className="flex items-center gap-2 font-bold uppercase mr-4">
            <p>Icon</p>
            <p>Mab</p>
            <p className="text-primary">Sothea</p>
          </div>
          {/* Menu section */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-gray-600">
              {Menu.map((item, _index) => {
                return (
                  <li key={item.id}>
                    <Link
                      href={item.link}
                      className="inline-block py-1 px-3 hover:text-primary font-ubuntubold"
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* Icons section */}
          <div className="flex gap-x-3">
            <button>
              <CiSearch />
            </button>
            <button>
              <FaShoppingCart />
            </button>
            <button className="px-3 py-2 text-primary bg-red-500">Login</button>
          </div>
          {/* Mobile hamburger section */}
          <div className="md:hidden" onClick={() => setOpen(!open)}>
            <MdMenu className="text-4xl" />
          </div>
        </div>
      </nav>
      <ResponsiveNavbar open={open} />
    </>
  );
};

export default Narbar;
