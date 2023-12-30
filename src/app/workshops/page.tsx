import Header from "@/components/header/page";
import Link from "next/link";
import Courses from '@/db/courses.json';
import Footer from "@/components/footer/page";

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
                    <div className="grid xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 gap-5 max-w-7xl h-full transition-all duration-500 gap-y-10">
                        {Courses.map((skill, i) => {
                            return (
                                <div key={i} className="flex flex-col w-full h-96 min-w-52 px-10 py-10 rounded-2xl border-2 bg-gray-100" style={{background:`url(${skill.image})`,backgroundSize:"100% 50%",backgroundRepeat:"no-repeat"}}>
                                    {/* <img src={skill.image} className="h-32 w-40" /> */}
                                    <div className="flex flex-col h-full mt-36">
                                        <h1 className="text-2xl font-bold mb-3">{skill.title}</h1>
                                        <p className="line-clamp-2">{skill.description}</p>
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
            <Footer/>
        </div>
    );
}