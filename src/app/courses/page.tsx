import Header from "@/components/header/page"
import Link from "next/link";
import Courses from '@/db/courses.json';
import Footer from "@/components/footer/page";

const popular = Courses.slice(0, 4);

export default function Catalog() {
    return (
        <div>
            <Header />
            <div className="py-20 flex flex-col px-20 w-full min-h-screen">
                <div className="flex w-full">
                    <div className="flex flex-col w-max h-screen sticky top-52 px-20">
                        <h1 className="text-2xl font-bold">Subjects</h1>
                        {Courses.map((course, i) => {
                            return (
                                <h1 key={i} className="text-xl ml-2">{course.title}</h1>
                            );
                        })}
                    </div>
                    <div className="flex flex-col w-full">
                        <div className="flex w-full items-center justify-center mt-10">
                            <div className="flex w-min shadow-md border-2 rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-6 mx-2">
                                    <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd">
                                    </path>
                                </svg>
                                <div className="px-2 flex">
                                    <input type="text" placeholder="Search..." className="py-3 outline-none" value="" />
                                    <div className="w-4 mt-3">
                                        <button className="rounded-full"></button>
                                    </div>
                                </div>
                                <div className="py-2  text-xl text-gray-400 ">|</div>
                                <div className="z-10">
                                    <div className="w-40">
                                        <div className="relative mt-1" data-headlessui-state="">
                                            <button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-green-300 sm:text-sm" id="headlessui-listbox-button-:r1:" type="button" aria-haspopup="listbox" aria-expanded="false" data-headlessui-state="">
                                                <span className="block truncate">all</span>
                                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-5 w-5 text-gray-400"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd">
                                                    </path>
                                                    </svg>
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col my-10">
                            <h1 className="text-2xl font-bold mb-10">Our most popular courses</h1>
                            <div className="grid xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 gap-5 max-w-7xl h-full transition-all duration-500 gap-y-10">
                                {popular.map((skill, i) => {
                                    return (
                                        <div key={i} className="flex flex-col w-full px-10 py-10 gap-x-5 rounded-2xl border-2 bg-gray-100">
                                            <img src={skill.image} className="h-32 w-40" />
                                            <div className="flex flex-col h-full justify-end">
                                                <h1 className="text-2xl font-bold mb-3">{skill.title}</h1>
                                                <p className="line-clamp-2">{skill.description}</p>
                                                <Link href={skill.link} className="w-full underline text-right text-gray-600">show more</Link>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="flex w-full rounded-md h-[35rem] mb-10 relative" style={{ background: `url('/banner.jpg')`, backgroundRepeat: 'no-repeat', backgroundPosition: "center", backgroundSize: "cover" }}>
                            <div className="absolute flex w-2/4 rounded-md h-full bg-black opacity-80"></div>
                            <div className="absolute p-8 w-2/4">
                                <h1 className=" text-white text-3xl font-bold">Explore our special offers, because we understand your needs!</h1>
                                <button className="absolute text-white border-2 rounded-md flex w-max py-3 px-10 mt-10">View offers</button>

                            </div>
                        </div>
                        <h1 className="text-2xl font-bold mb-10">All courses</h1>
                        <div className="grid xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 gap-5 max-w-7xl h-full transition-all duration-500 gap-y-10">
                            {Courses.map((skill, i) => {
                                return (
                                    <div key={i} className="flex flex-col w-full px-10 py-10 gap-x-5 rounded-2xl border-2 bg-gray-100">
                                        <img src={skill.image} className="h-32 w-40" />
                                        <div className="flex flex-col h-full justify-end">
                                            <h1 className="text-2xl font-bold mb-3">{skill.title}</h1>
                                            <p className="line-clamp-2">{skill.description}</p>
                                            <Link href={skill.link} className="w-full underline text-right text-gray-600">show more</Link>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}