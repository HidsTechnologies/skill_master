import Header from '@/components/header/page';
import Experts from './experts';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/footer/page';

export default function About() {
    return (
        <div>
            <Header />
            <div className='flex h-96 relative' style={{ background: `url('/alumni.webp')`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                <div className='absolute flex w-full bg-black opacity-60 h-full'></div>
                <div className='absolute flex flex-col w-full h-full justify-center items-center'>
                    <h1 className='md:text-9xl text-6xl text-white font-bold font-serif'>About Us</h1>
                </div>
            </div>
            <div className='my-10 flex flex-col justify-center items-center mx-10'>
                <h1 className='sm:text-4xl text-2xl font-semibold'>About <span className='text-[#967259]'>Skill Master</span></h1>
                <h1 className='my-10 text-xl max-w-5xl text-center'>Skill Master Academy is one of the leading Skill development platforms which offers various industrial courses in association with top-notch industries like Ashok Leyland, TVS, Ultratech, Bosch Rexroth, BOSCH and leading Universities like Centurion University, CV Raman Global University. We have trained over 1 Lakhs students in its various programs.</h1>
                <h1 className='text-4xl font-semibold'>Our Motto</h1>
                <div className='bg-blue-500 flex p-10 rounded-2xl justify-center items-center my-10'>
                    <Image src="/quote_top.png" alt="quote-top" height={50} width={100} className='h-10 w-10' />
                    <h1 className='md:text-3xl text-xl text-white font-semibold px-5'>The choices we make today create the future that we are dreaming of</h1>
                    <Image src="/quote_btm.png" alt="quote-top" height={50} width={100} className='h-10 w-10' />
                </div>
            </div>
            <div className='flex flex-col w-full'>
                <div className='flex flex-col justify-center items-center bg-yellow-400 rounded-t-3xl p-20'>
                    <h1 className='text-4xl font-bold mb-10'>Features offered</h1>
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-10'>
                        <div className='flex flex-col max-w-xl justify-center items-center text-center'>
                            <Image src="/tutorial1.png" alt='tutorial1' width={400} height={400} />
                            <h1 className='text-2xl font-semibold'>Assignment Reviews</h1>
                            <p>We don&apos;t just give you assignments, we review your solutions and give you insightful feedbacks on your code to enhance and reinforce your understanding.</p>
                        </div>
                        <div className='flex flex-col max-w-xl justify-center items-center text-center'>
                            <Image src="/tutorial2.png" alt='tutorial1' width={400} height={400} />
                            <h1 className='text-2xl font-semibold'>Mentorship</h1>
                            <h1>Even without being in a physical class, we make it possible for our students to ask questions and get guidance through our seasoned and qualified mentors.</h1>
                        </div>
                        <div className='flex flex-col max-w-xl justify-center items-center text-center'>
                            <Image src="/tutorial3.png" alt='tutorial1' width={400} height={400} />
                            <h1 className='text-2xl font-semibold'>Live Sessions</h1>
                            <h1>Whether at home or on the go, you can still follow your classes and practice with our easy-to-use code editor. It works on both the web and mobile app.</h1>
                        </div>
                        <div className='flex flex-col max-w-xl justify-center items-center text-center'>
                            <Image src="/tutorial4.png" alt='tutorial1' width={400} height={400} />
                            <h1 className='text-2xl font-semibold'>Community Forums</h1>
                            <p>Just because you are learning online doesn&apos;t mean you have to be all alone. With our discussion forum, you can share your opinions with other students and even make friends.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Experts/> */}
            <Footer />
        </div>
    );
}