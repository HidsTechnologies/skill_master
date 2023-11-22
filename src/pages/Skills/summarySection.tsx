import Link from "next/link";

export default function SummarySection(){
    return( 
        <div className="flex flex-col w-full justify-center items-center p-10">
            <div className="flex flex-col max-w-7xl w-full justify-center items-center p-10">
                <div className="flex">
                    <div className="grid grid-cols-2 w-full gap-10">
                        <div className="flex flex-col">
                            <iframe className="max-w-xl w-full h-74" width="560" height="315" src="https://www.youtube.com/embed/E4rJMDmuces?si=JqMVE0ogu8c-L7Kj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <h1 className="text-xl text-gray-600 font-semibold font-mono mt-5">COURSE SYLLABUS:</h1>
                            <ul className="list-decimal ml-10">
                                <li>C and Embedded C language programming</li>
                                <li>Architecture of microcontroller like Intel MCS-51 or 8051, ARM 7TDMI core & Cortex M3, Microchip PIC16/PIC18 and their assembly language programming</li>
                                <li>PCB design and PCB fabrication process </li>
                                <li>Operating System fundamentals </li>
                                <li>Details of RTOS internals, multi-tasking, task management, task scheduling, task communication and synchronization </li>
                                <li>Linux device driver development </li>
                                <li>Protocol based micro-controller programming. Protocols like RS-232, SPI, CAN, USB, Ethernet, Zigbee, Bluetooth, I2C, MODBUS etc. </li>
                                <li>Python Language programming </li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-y-2 pl-40 w-max">
                            <h1 className="font-bold text-2xl">Summary</h1>
                            <h1 className="text-lg text-gray-600 font-mono mt-5">Course Code :</h1>
                            <h1 className="text-lg text-gray-600 font-mono">Course Name :</h1>
                            <h1 className="text-lg text-gray-600 font-mono">Coordinating Unit :</h1>
                            <h1 className="text-lg text-gray-600 font-mono">Term :</h1>
                            <h1 className="text-lg text-gray-600 font-mono">Level :</h1>
                            <h1 className="text-lg text-gray-600 font-mono">Location/s :</h1>
                            <h1 className="text-lg text-gray-600 font-mono">Units :</h1>
                            <h1 className="text-lg text-gray-600 font-mono">Qualification :</h1>
                            <h1 className="text-lg text-gray-600 font-mono">Assumed Knowledge :</h1>
                            <h1 className="text-lg text-gray-600 font-mono">Course Description :</h1>
                            <h1 className="text-lg text-gray-600 font-mono">Course Staff :</h1>
                            <h1 className="text-lg text-gray-600 font-mono">Course Timetable :</h1>
                        </div>
                    </div>
                </div>
                <div className="flex w-full mt-20">
                    <div className="flex w-full mt-20 justify-between">
                        <div>
                            <div className="flex flex-col p-2 border-2">
                                <Link href='#'>Batch Schedule</Link>
                                <Link href='#'>Learning Outcomes</Link>
                                <Link href='#'>Assessment</Link>
                                <Link href='#'>Certification</Link>
                                <Link href='#'>Trainer Profile</Link>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-8">
                            <div className="flex flex-col max-w-5xl w-full">
                                <h1 className="text-3xl font-bold">Batch Schedule</h1>
                                <p className="mt-2"></p>
                            </div>
                            <div className="flex flex-col max-w-5xl w-full">
                                <h1 className="text-3xl font-bold">Learning Outcomes</h1>
                                <p className="mt-2">Participants will be equipped with a comprehensive skill set in embedded systems and related technologies. They will have the ability to program microcontrollers in various languages, design and fabricate PCBs, understand operating systems and RTOS internals, develop Linux device drivers, and program microcontrollers based on different protocols. Additionally, participants will gain proficiency in Python programming. These skills are essential for individuals pursuing careers in embedded systems development, IoT, and related fields. </p>
                            </div>
                            <div className="flex flex-col max-w-5xl w-full">
                                <h1 className="text-3xl font-bold">Assessment</h1>
                                <p className="mt-2">The institution's policy on Assessment for Coursework Programs is based on the following four principles: </p>
                                <ul className="list-disc ml-10">
                                    <li>Assessment must encourage and reinforce learning.</li>
                                    <li>Assessment must enable robust and fair judgements about student performance.</li>
                                    <li>Assessment practices must be fair and equitable to students and give them the opportunity to demonstrate what they have learned.</li>
                                    <li>Assessment must maintain academic standards.</li>
                                </ul>
                            </div>
                            <div className="flex flex-col max-w-5xl w-full">
                                <h1 className="text-3xl font-bold">Certification</h1>
                                <p className="mt-2">Upon finishing our theoretical and practical sessions, both freshers and corporate trainees receive comprehensive support. SkillMaster's globally accredited certification enhances your resume, opening doors to top job positions in leading global MNCs. This certification is granted upon the successful completion of our training and practical projects.</p>
                            </div>
                            <div className="flex flex-col max-w-5xl w-full">
                                <h1 className="text-3xl font-bold">Trainer Profile</h1>
                                <p className="mt-2">Our trainers simplify complex concepts, ensuring effective learning. Students have the freedom to explore subjects, with teachings grounded in real-time examples. We offer project assistance, interview preparation, and one-on-one coaching with the flexibility to ask questions anytime.</p>
                                <ul className="list-disc ml-10">
                                    <li>Certified Professionals with more than 8+ Years of Experience</li>
                                    <li>Trained more than 500+ students in a year </li>
                                    <li>Strong Theoretical & Practical Knowledge in their domains</li>
                                    <li>Expert level Subject Knowledge and fully up-to-date on real-world industry applications</li>
                                    <li>Blended academic and industrial exposure</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}