import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function HeroSection() {
    return (
        <main>
            <div className="relative w-full h-[85vh]">
                <div className="absolute h-[85vh] w-full overflow-hidden">
                    <video src="/bgvideo2.mp4" autoPlay={true} loop muted className="z-10 w-auto min-w-full min-h-full max-w-none"/>
                </div>
                <div className="bg-black opacity-60 w-full h-[85vh] absolute"></div>
                <div className="absolute flex flex-col w-max mt-80">
                    <div className="flex w-max md:ml-40 ml-16 text-white">
                        <h1 className=" lg:text-6xl md:text-4xl text-2xl font-bold text-gray-200">Up skill with <span className="text-[#967259]">Skill Master</span></h1>
                    </div>
                    <Link href="/skills"><button className="flex w-max rounded-md bg-blue-700 mt-5 px-5 py-2 md:ml-40 ml-32 hover:bg-blue-600 text-white">Enhance Skill <ArrowRightIcon className="w-6"/></button></Link>
                </div>
            </div>
        </main>
    );
}