import Footer from '@/components/footer/page';
import Header from '../../components/header/page';
import CourseSection from './courseSection';
import HeroSection from './heroSection';
import ReviewSection from './reviewSection';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import FeatureSection from './featureSection';
import Additional from './Additional';

export default function Home(){
    return(
        <main className='overflow-hidden'>
            <Header/>
            <HeroSection/>
            <CourseSection/>
            <div className='w-full flex h-64 justify-center item-center text-white bg-cover relative' style={{background:`url('/started.png')`}}>
                <div className='absolute w-full h-full bg-black opacity-50'></div>
                <div className='absolute flex flex-col w-full h-full justify-center items-center'>
                    <h1 className=' lg:text-4xl md:text-2xl text-lg font-bold'>
                        Start learning with a team of first principles thinkers!
                    </h1>
                    <h1 className='flex lg:text-2xl md:text-lg text-sm font-bold max-w-xl text-center mt-2'>Early-stage building is all about being pragmatic and being pragmatic requires first principles approach to solve problems.</h1>
                    <button className='flex rounded-md px-5 py-2 bg-blue-600 hover:bg-blue-500 mt-5'>Enhance Skill <ArrowRightIcon className='w-6'/></button>
                </div>
            </div>
            <FeatureSection/>
            <Additional/>
            <ReviewSection/>
            <Footer/>
        </main>
    );
}