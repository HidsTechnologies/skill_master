"use client"

import Header from "@/components/header/page"
import Link from "next/link";
import Courses from '@/db/courses.json';
import Footer from "@/components/footer/page";
import { ArrowRightIcon, MagnifyingGlassIcon, XCircleIcon } from "@heroicons/react/20/solid";
import DropDown from "./Dropdown";
import { useState } from "react";

const popular = Courses.slice(0, 4);
const categories=Courses.map((item)=>{return(item.title)});

export default function Catalog() {
    const [category, setCategory] = useState("all");
    const [searchText, setSearchText] = useState("");


    const MobileSearchBar = ({ setSearchText, searchText, category, setCategory }) => (
        <div className=" sm:hidden flex flex-col items-center mt-10">
            <div className="flex w-min shadow-md border-2 rounded-md mb-2">
                <div className="px-2 flex">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="py-3 outline-none"
                        value={searchText}
                        onChange={(event) => setSearchText(event.target.value)}
                    />
                    <div className="w-8 mt-3">
                        {searchText !== "" ? (
                            <button className="rounded-full" onClick={() => setSearchText("")}>
                                <XCircleIcon className="w-6 " />
                            </button>
                        ) : (
                            <button className="rounded-full"></button>
                        )}
                    </div>
                </div>
            </div>

            <div className="w-min shadow-md border-2 rounded-md mb-2 z-10">
                <DropDown list={categories} selected={category} setSelected={setCategory} />
            </div>
        </div>
    );

    const SearchBar = ({ setSearchText, searchText, category, setCategory }) => {
        return (
            <div className=" hidden sm:flex  w-full px-5 justify-center items-center mt-10">
                <div className="flex  w-min shadow-md border-2 rounded-md ">
                    <MagnifyingGlassIcon className="w-6 mx-2" />
                    <div className="px-2 flex">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="py-3 outline-none"
                            value={searchText}
                            onChange={(event) => setSearchText(event.target.value)}
                        ></input>
                        <div className="w-4 mt-3">
                            {searchText != "" ? (
                                <button className="rounded-full" onClick={() => setSearchText("")}>
                                    <XCircleIcon className="w-6" />
                                </button>
                            ) : (
                                <button className="rounded-full"></button>
                            )}
                        </div>
                    </div>
                    <div className="py-2  text-xl text-gray-400 ">|</div>
                    <div className="z-10">
                        <DropDown list={categories} selected={category} setSelected={setCategory} />
                    </div>
                </div>
            </div>
        );
    };


    return (
        <div>
            <Header />
            <div className="py-20 flex flex-col px-5 w-full min-h-screen">
                <div className="flex w-full justify-center">
                    <div className="flex flex-col w-full justify-center max-w-7xl">
                        <MobileSearchBar
                            setSearchText={setSearchText}
                            category={category}
                            setCategory={setCategory}
                            searchText={searchText}
                        />
                        <SearchBar
                            setSearchText={setSearchText}
                            category={category}
                            setCategory={setCategory}
                            searchText={searchText}
                        />
                        <div className="flex flex-col my-10">
                            <h1 className="text-2xl font-bold mb-10">Our most popular courses</h1>
                            <div className="flex flex-col justify-center w-full items-center">
                                <div className="flex w-full justify-center">
                                    <div className="grid xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 gap-5 max-w-7xl h-full transition-all duration-500">
                                        {popular.map((skill, i) => {
                                            return (
                                                <div key={i} className="flex flex-col max-w-sm w-full border-2 bg-gray-100 p-5 flex-shrink-0 rounded-md">
                                                    <img src={skill.image} className="h-full max-h-48 min-h-48 w-full rounded-md" />
                                                    <div className="flex flex-col h-full align-bottom mt-10">
                                                        <h1 className="text-2xl font-bold mb-3">{skill.title}</h1>
                                                        <p className="line-clamp-2">{skill.description}</p>
                                                        <Link href={skill.link} className=" px-3 py-2 bg-blue-600 w-max rounded-md text-white font-semibold mt-5 flex group">Start Course <ArrowRightIcon className="w-6 ml-2 -translate-x-2 group-hover:translate-x-0 transition-all duration-500" /></Link>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full rounded-md md:h-72 h-72 mb-10 relative" style={{ background: `url('/banner.jpg')`, backgroundRepeat: 'no-repeat', backgroundPosition: "center", backgroundSize: "cover" }}>
                            <div className="absolute flex md:w-2/4 w-1/2 rounded-md h-full bg-black opacity-80"></div>
                            <div className="absolute md:p-8 p-5 md:w-2/4 w-1/2">
                                <h1 className=" text-white md:text-3xl text-md font-bold">Explore our special offers, because we understand your needs!</h1>
                                <button className="absolute text-white border-2 rounded-md flex w-max md:py-3 md:px-10 mt-10 py-1 px-2">View offers</button>
                            </div>
                        </div>
                        <h1 className="text-2xl font-bold mb-10">All courses</h1>
                        <div className="flex flex-col justify-center w-full items-center">
                            <div className="flex w-full justify-center">
                                <div className="grid xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 gap-5 max-w-7xl h-full transition-all duration-500">
                                    {Courses.map((skill, i) => {
                                        return (
                                            <div key={i} className="flex flex-col max-w-sm w-full border-2 bg-gray-100 p-5 flex-shrink-0 rounded-md">
                                                <img src={skill.image} className="h-full max-h-48 min-h-48 w-full rounded-md" />
                                                <div className="flex flex-col h-full align-bottom mt-10">
                                                    <h1 className="text-2xl font-bold mb-3">{skill.title}</h1>
                                                    <p className="line-clamp-2">{skill.description}</p>
                                                    <Link href={skill.link} className=" px-3 py-2 bg-blue-600 w-max rounded-md text-white font-semibold mt-5 flex group">Start Course <ArrowRightIcon className="w-6 ml-2 -translate-x-2 group-hover:translate-x-0 transition-all duration-500" /></Link>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}