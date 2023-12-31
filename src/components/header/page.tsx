"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useState } from "react";

const userNavigation = [
  { name: "Profile", href: "#" },
  { name: "Sign out", href: "/logout" },
];

import Courses from "@/db/courses.json";

const classNames = (...classes: any) => classes.filter(Boolean).join(" ");

function Header() {
  const [enabled, setEnabled] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const textColor = isScrolled ? "text-gray-800  " : "text-white";

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [isScrolled]);

  return (
    <>
      <header className="fixed z-50 w-screen">
        <nav
          className={`${isScrolled ? `bg-white  ` : `bg-gray-950 bg-opacity-70 text-white`
            } transform duration-200 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800`}
        >
          <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
            <Link href="/" className="flex items-center">
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                <span className="text-4xl">S</span>kill<span className="text-4xl">M</span>aster
              </span>
            </Link>
            <div className="flex items-center lg:order-2">
              {/* <a
                href="/login"
                className="border-2  dark:text-white  focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                Log in
              </a> */}
              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
                onClick={() => {
                  setEnabled(!enabled);
                }}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              className={`${enabled ? `` : `hidden`
                } justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li
                  className={`group cursor-pointer block py-5 pl-3 pr-4  border-b border-gray-100 hover:bg-gray-500 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 ${textColor} `}
                >
                  <Link href="/courses">Skill Programmes</Link>
                  <div className="relative invisible group-hover:visible z-20">
                    <ul className="flex flex-col absolute top-0 px-2 py-2 font-normal w-max border-2 bg-white text-black rounded-b-lg">
                      {Courses.map((skills, i) => {
                        return (
                          <Link href={skills.link} key={i}>
                            <li className="py-2 px-3 hover:bg-blue-500 hover:text-white rounded-lg">
                              {skills.title}
                            </li>
                          </Link>
                        );
                      })}
                    </ul>
                  </div>
                </li>
                <Link href='/workshops'>
                  <li
                    className={`cursor-pointer block py-5 pl-3 pr-4  border-b border-gray-100 hover:bg-gray-500 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 ${textColor} `}
                  >
                    Workshops
                  </li>
                </Link>
                <Link href="/about">
                  <li
                    className={`cursor-pointer block py-5 pl-3 pr-4  border-b border-gray-100 hover:bg-gray-500 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 ${textColor} `}
                  >
                    About Us
                  </li>
                </Link>
                <Link href='/#contact'>
                  <li
                    className={`cursor-pointer block py-5 pl-3 pr-4  border-b border-gray-100 hover:bg-gray-500 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 ${textColor} `}
                  >
                    Contact Us
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
