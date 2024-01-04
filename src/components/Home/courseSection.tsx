import { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import {ArrowRightIcon} from "@heroicons/react/20/solid";

import Courses from '@/db/courses.json'

export default function CourseSection() {
    const display = Courses.slice(0, 4);
    const [course, setCourse] = useState(0);

    useEffect(() => {
        const interval = setTimeout(() => {
            setCourse((prev) => (prev + 1) % 9);
        }, 5000);
        return () => clearInterval(interval);
    }, [course]);

    return (
        <main>
            <div className="flex flex-col py-12 justify-center items-center px-10 ">
                <h1 className="text-3xl font-extrabold text-teal-600 font-serif text-center">SkillMaster is a training platform for professionals.</h1>
                <h1 className=" flex text-xl mx-10 justify-center items-center text-center">Learn new Industrial skills and upskill in your career with Skill Master courses, that provide you with the best education.</h1>
                <div className="flex flex-col justify-center w-full items-center my-10">
                    {/* <h1 className="text-4xl mb-10 font-semibold">Upcoming Events</h1> */}
                    <div className="flex w-full justify-center">
                        <div className="grid xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 gap-5 max-w-7xl h-full transition-all duration-500">
                            {display.map((skill, i) => {
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
        </main>
    );
}