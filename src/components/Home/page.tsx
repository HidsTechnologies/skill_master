import Footer from '@/components/footer/page';
import Header from '../../components/header/page';
import CourseSection from './courseSection';
import HeroSection from './heroSection';
import ReviewSection from './reviewSection';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import FeatureSection from './featureSection';
import Additional from './Additional';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
    return (
        <main className='overflow-hidden'>
            <Header />
            <HeroSection />
            <CourseSection />
            <div className="flex w-full justify-center items-center py-10 mt-10 bg-yellow-400 px-5">
                <div className="flex max-w-5xl w-full lg:justify-between lg:flex-row flex-col justify-center items-center text-center">
                    <div className='flex flex-col mt-16 max-w-xl w-full justify-center items-center'>
                        <h1 className='text-3xl font-bold'>Not sure where to start?</h1>
                        <h1 className='text-xl'>Explore our curated list of courses listed by skill domains. Enroll in the course of your choice and start learning.</h1>
                        <Link href="/courses"><button className='flex rounded-md px-5 py-2 bg-blue-600 hover:bg-blue-500 mt-5 font-semibold text-white'>Explore</button></Link>
                    </div>
                    <Image src="/explore.svg" alt="explore" width={200} height={200} />
                </div>
            </div>
            <FeatureSection />
            <div className='w-full flex h-72 justify-center item-center text-white bg-cover relative text-center' style={{ background: `url('/started.png')` }}>
                <div className='absolute w-full h-full bg-black opacity-50'></div>
                <div className='absolute flex flex-col w-full h-full justify-center items-center'>
                    <h1 className=' lg:text-4xl md:text-2xl text-lg font-bold'>
                        Start learning with a team of first principles thinkers!
                    </h1>
                    <h1 className='flex lg:text-2xl md:text-lg text-sm font-bold max-w-xl text-center mt-2'>Early-stage building is all about being pragmatic and being pragmatic requires first principles approach to solve problems.</h1>
                    <Link href="/courses"><button className='flex rounded-md px-5 py-2 bg-blue-600 hover:bg-blue-500 mt-5'>Enhance Skill <ArrowRightIcon className='w-6' /></button></Link>
                </div>
            </div>
            <Additional />
            <div className='w-full flex justify-center items-center py-20 mt-10 bg-[#3e4143] text-center px-5'>
                <div className='flex max-w-7xl w-full flex-col justify-center items-center'>
                    <h1 className='text-4xl font-bold text-white'>Our Alumni are everywhere</h1>
                    <h1 className='text-xl text-white mt-2'>We have placed over 50 million students. Our top hiring partners are</h1>
                    <div className='flex lg:flex-row flex-col lg:justify-between justify-center items-center mt-10 w-full'>
                        <Image src="/Microsoft_logo.svg" alt="microsoft" height={100} width={100} />
                        <Image src="/Google__G__logo.svg" alt="microsoft" height={100} width={100} />
                        <Image src="/Hudson_River_Trading_Logo.svg" alt="microsoft" height={100} width={200} />
                        <Image src="/Morgan_Stanley_Logo_1.svg" alt="microsoft" height={100} width={200} />
                        <Image src="/Tata_Consultancy_Services_Logo.svg" alt="microsoft" height={100} width={200} />
                        <Image src="/Cognizant_logo_2022.svg" alt="microsoft" height={100} width={200} />
                    </div>
                </div>
            </div>
            <ReviewSection />
            <div id='contact' className='flex flex-col w-full justify-center items-center'>
                <div className='flex flex-col p-10 rounded-t-2xl bg-gray-700 items-center justify-center text-white w-full'>
                    <div className='flex md:flex-row flex-col md:justify-between justify-center items-center w-full max-w-7xl'>
                        <div>
                            <h1 className='text-3xl font-bold'>Contact Us</h1>
                            <h1 className='text-xl'>Connect with our experts, we are always there at your service!</h1>
                        </div>
                        <Image src="/contactus.png" alt='contactus' height={500} width={500}/>
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto mt-10">
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label className="leading-7 text-sm">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label className="leading-7 text-sm">
                                        Mobile No.
                                    </label>
                                    <input
                                        type="text"
                                        id="number"
                                        name="number"
                                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label
                                        className="leading-7 text-sm"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label
                                        className="leading-7 text-sm"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                    ></textarea>
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                    Send
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}