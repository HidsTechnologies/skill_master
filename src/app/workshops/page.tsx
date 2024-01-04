import Header from "@/components/header/page";
import Link from "next/link";
import Courses from '@/db/courses.json';
import Footer from "@/components/footer/page";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

export default function workshop() {
    return (
        <div>
            <Header />
            <div className="flex flex-col w-full h-96 bg-gray-700 text-white justify-center items-center gap-y-5 px-5 text-center">
                <h1 className="text-5xl font-bold">Workshops</h1>
                <h1 className="text-xl max-w-3xl text-center">Yes we conduct workshops! We provide students with opportunity to learn from industrial experts and get hands-on experience in subject matter.</h1>
            </div>
            <div className="flex flex-col justify-center w-full items-center my-10">
                <h1 className="text-4xl mb-10 font-semibold">Upcoming Events</h1>
                <div className="flex w-full justify-center">
                    <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-5 max-w-7xl h-full transition-all duration-500">
                        {Courses.map((skill, i) => {
                            return (
                                <div key={i} className="flex flex-col max-w-sm w-full border-2 bg-gray-100 p-5 flex-shrink-0 rounded-md">
                                    <img src={skill.image} className="h-full max-h-48 min-h-48 w-full rounded-md" />
                                    <div className="flex flex-col h-full align-bottom mt-10">
                                        <h1 className="text-xl font-semibold mb-3">{skill.title}</h1>
                                        <p className="line-clamp-4 text-gray-500">{skill.description}</p>
                                        <Link href={skill.link} className="w-max rounded-md underline text-blue-700 font-semibold mt-5 flex group">Show More</Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center w-full items-center my-10">
                <h1 className="text-4xl mb-10 font-semibold">Past Events</h1>
                <div className="flex w-full justify-center">
                    <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-5 max-w-7xl h-full transition-all duration-500">
                        {Courses.map((skill, i) => {
                            return (
                                <div key={i} className="flex flex-col max-w-sm w-full border-2 bg-gray-100 p-5 flex-shrink-0 rounded-md">
                                    <img src={skill.image} className="h-full max-h-48 min-h-48 w-full rounded-md" />
                                    <div className="flex flex-col h-full align-bottom mt-10">
                                        <h1 className="text-xl font-semibold mb-3">{skill.title}</h1>
                                        <p className="line-clamp-4 text-gray-500">{skill.description}</p>
                                        <Link href={skill.link} className="w-max rounded-md underline text-blue-700 font-semibold mt-5 flex group">Show More</Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}