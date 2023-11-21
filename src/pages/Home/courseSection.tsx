import { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

const skillProgrammes = [{ title: "Embedded System Design", image: "/embedded.jpeg" }, { title: "EV Technology", image: "/ev.webp" }, { title: "Full Stack", image: "/fullstack.avif" }, { title: "IIoT", image: "/iiot.jpg" }, { title: "Industrial Automation", image: "/automation.jpg" }, { title: "Machine Learning", image: "/ml.jpg" }, { title: "PLC SCADA", image: "/plcscada.jpg" }, { title: "Python", image: "/python.png" }, { title: "Remote Engineering and Robotics", image: "/robotics.jpg" }];

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
                    <div className="flex max-w-5xl w-full h-[32rem] relative">
                        <div className="absolute w-full h-full transition-all duration-500">
                            {skillProgrammes.map((skill, i) => {
                                return (
                                    <div className={`${course == i ? `visible` : `hidden`} relative w-full h-full bg-no-repeat bg-contain bg-center`} style={{ background: `url(${skill.image})` }} key={i}>
                                        <div className="absolute -z-1 top-0 w-full h-full bg-black opacity-50"></div>
                                        <button className="absolute mt-52 text-white py-5 px-2 hover:bg-gray-700 rounded-r-md transition-all duration-300" onClick={() => setCourse((prev) => (9 + prev - 1) % 9)}>
                                            <ChevronLeftIcon className="w-6" />
                                        </button>
                                        <button className="absolute mt-52 text-white py-5 px-2 hover:bg-gray-700 rounded-l-md ml-[61.5rem] transition-all duration-300" onClick={() => setCourse((prev) => (prev + 1) % 9)}>
                                            <ChevronRightIcon className="w-6" />
                                        </button>
                                        <h1 className="absolute mt-48 ml-20 text-3xl font-bold text-white">
                                            {skill.title}
                                        </h1>
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