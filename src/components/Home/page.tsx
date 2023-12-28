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

export default function Home(){
    return(
        <main className='overflow-hidden'>
            <Header/>
            <HeroSection/>
            <CourseSection/>
            <div className="flex w-full justify-center items-center py-10 mt-10 bg-yellow-400">
                <div className="flex max-w-5xl w-full lg:justify-between lg:flex-row flex-col justify-center items-center">
                    <div className='mt-16 max-w-xl w-full'>
                        <h1 className='text-3xl font-bold'>Not sure where to start?</h1>
                        <h1 className='text-xl'>Explore our curated list of courses listed by skill domains. Enroll in the course of your choice and start learning.</h1>
                        <Link href="/courses"><button className='flex rounded-md px-5 py-2 bg-blue-600 hover:bg-blue-500 mt-5 font-semibold text-white'>Explore</button></Link>
                    </div>
                    <Image src="/explore.svg" alt="explore" width={200} height={200}/>
                </div>
            </div>
            <FeatureSection/>
            <div className='w-full flex h-72 justify-center item-center text-white bg-cover relative' style={{background:`url('/started.png')`}}>
                <div className='absolute w-full h-full bg-black opacity-50'></div>
                <div className='absolute flex flex-col w-full h-full justify-center items-center'>
                    <h1 className=' lg:text-4xl md:text-2xl text-lg font-bold'>
                        Start learning with a team of first principles thinkers!
                    </h1>
                    <h1 className='flex lg:text-2xl md:text-lg text-sm font-bold max-w-xl text-center mt-2'>Early-stage building is all about being pragmatic and being pragmatic requires first principles approach to solve problems.</h1>
                    <Link href="/skills"><button className='flex rounded-md px-5 py-2 bg-blue-600 hover:bg-blue-500 mt-5'>Enhance Skill <ArrowRightIcon className='w-6'/></button></Link>
                </div>
            </div>
            <Additional/>
            <div className='w-full flex justify-center items-center py-20 mt-10 bg-[#3e4143]'>
                <div className='flex max-w-7xl w-full flex-col justify-center items-center'>
                    <h1 className='text-4xl font-bold text-white'>Our Alumni are everywhere</h1>
                    <h1 className='text-xl text-white mt-2'>We have placed over 50 million students. Our top hiring partners are</h1>
                    <div className='flex lg:flex-row flex-col lg:justify-between justify-center items-center mt-10 w-full'>
                        <Image src="/Microsoft_logo.svg" alt="microsoft" height={100} width={100}/>
                        <Image src="/Google__G__logo.svg" alt="microsoft" height={100} width={100}/>
                        <Image src="/Hudson_River_Trading_Logo.svg" alt="microsoft" height={100} width={200}/>
                        <Image src="/Morgan_Stanley_Logo_1.svg" alt="microsoft" height={100} width={200}/>
                        <Image src="/Tata_Consultancy_Services_Logo.svg" alt="microsoft" height={100} width={200}/>
                        <Image src="/Cognizant_logo_2022.svg" alt="microsoft" height={100} width={200}/>
                    </div>
                </div>
            </div>
            <ReviewSection/>
            <Footer/>
        </main>
    );
}