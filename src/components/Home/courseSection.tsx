import { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

import Courses from '@/db/courses.json'

export default function CourseSection() {
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
                <div className="flex justify-center w-full items-center mt-10">
                    <div className="flex max-w-5xl w-ful">
                        <div className="flex flex-col w-full h-full transition-all duration-500 gap-y-10">
                            {Courses.map((skill, i) => {
                                return (
                                    (i & 1) ?
                                        (<Link href={skill.link}>
                                            <div className="flex w-full px-10 py-10 gap-x-5 hover:scale-110 transition-all duration-500 rounded-2xl border-2 bg-gray-100">
                                                <div className="flex h-full justify-center item-center">
                                                    <p>{skill.description}</p>
                                                </div>
                                                <img src={skill.image} className="h-50 w-80" />
                                            </div>
                                        </Link>)
                                        :
                                        (<Link href={skill.link}>
                                            <div className="flex w-full px-10 py-10 gap-x-5 hover:scale-110 transition-all duration-500 rounded-2xl border-2 bg-gray-100">
                                                <img src={skill.image} className="h-50 w-80" />
                                                <div className="flex h-full justify-center items-center">
                                                    <p>{skill.description}</p>
                                                </div>
                                            </div>
                                        </Link>)
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}