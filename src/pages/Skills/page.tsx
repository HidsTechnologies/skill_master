import Footer from '@/components/footer/page';
import Header from '@/components/header/page'
import SummarySection from './summarySection';

export default function Skills(){
    return(
        <div className='bg-gray-100'>
            <Header/>
            <div className='flex flex-col w-full'>
                <div className='flex w-full h-40 bg-blue-900'></div>
                <div className='flex flex-col w-full justify-center items-center py-10 px-40 border-b shadow-md'>
                    <div className='flex flex-col max-w-7xl w-full'>
                        <h1 className='text-3xl font-bold'>Embedded System Design</h1>
                        <h1 className='text-xl'>By Prof. Anupam Basu</h1>
                        <button className='flex px-5 py-1 w-max rounded-full bg-orange-700 mt-2 text-gray-100 text-xl'>Go to course</button>
                    </div>
                </div>
            </div>
            <SummarySection/>
            <Footer/>
        </div>
    );
}