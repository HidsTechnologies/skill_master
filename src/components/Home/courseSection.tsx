import { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

import Courses from '@/db/courses.json'

export default function CourseSection() {
    const display=Courses.slice(0,4);
    const [course, setCourse] = useState(0);

    useEffect(() => {
        const interval = setTimeout(() => {
            setCourse((prev) => (prev + 1) % 9);
        }, 5000);
        return () => clearInterval(interval);
    }, [course]);

    return (
        <main>
            <div className="flex flex-col py-12 justify-center items-center">
                <h1 className="text-3xl font-extrabold text-teal-600 font-serif">Skill Master is a training platform for professionals.</h1>
                <h1 className=" flex text-xl mx-10 justify-center items-center">Learn new Industrial skills and upskill in your career with Skill Master courses, that provide you with the best education.</h1>
                <div className="flex flex-col justify-center w-full items-center mt-10">
                    <div className="flex w-full justify-center">
                        <div className="grid xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 gap-5 max-w-7xl h-full transition-all duration-500 gap-y-10">
                            {display.map((skill, i) => {
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
                    <Link href="/courses"><button className="flex rounded-md px-5 py-2 bg-blue-600 hover:bg-blue-500 mt-10 font-semibold text-white">Explore full catalog</button></Link>
                </div>
            </div>
        </main>
    );
}