// import logo from '../../assets/pngwing.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faFacebook, faXTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div className="bg-gray-800 w-full h-min items-center justify-center flex flex-col text-white">
            <div className="grid xl:grid-cols-4 2xl:grid-cols-4 grid-cols-1 px-20 py-20">
                <div className="flex flex-col w-80 px-10">
                    <h1 className="text-2xl font-bold">Skill Master</h1>
                    <p className="text-[#635f76] mt-2">Learn new Industrial skills and upskill in your career with Skill Master courses, that provide you with the best education.</p>
                    <div className="grid grid-cols-4 gap-8 py-5 mt-2">
                        <a href="https://www.youtube.com" className="youtube"><FontAwesomeIcon icon={faYoutube} size="2x" /></a>
                        <a href="https://www.facebook.com" className="facebook"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
                        <a href="http://www.instagram.com" className="instagram "><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
                        <a href="https://wwww.twitter.com" className="twitter"><FontAwesomeIcon icon={faXTwitter} size="2x" /></a>
                    </div>
                </div>
                <div className="flex flex-col mt-10 px-10 text-gray-300">
                    <a href='#' className="flex w-max py-2">Skill Programmes</a>
                    <a href="#" className="flex w-max py-2">Workshops</a>
                    <a href="#" className="flex w-max py-2">About Us</a>
                    <a href="#" className="flex w-max py-2">Contact Us</a>
                </div>
                <div className="flex flex-col mt-10 px-10 text-gray-300">
                    <h1 className="text-2xl mb-2">Contact Us</h1>
                    <p className="inline-flex text-lg my-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                        +49 6421 28-20
                    </p>
                    <p className="inline-flex text-lg my-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                    </p>
                    <p className="inline-flex text-lg my-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                        </svg>
                    </p>
                </div>
                <div className='flex flex-col mt-20 items-center'>
                    <button className='bg-[#aa71d0] w-max px-6 py-2 text-lg border-2 border-[#aa71d0] hover:bg-white hover:text-[#aa71d0] transform duration-500 rounded-sm'>Get Started</button>
                </div>
            </div>
        </div>
    );
}
export default Footer;