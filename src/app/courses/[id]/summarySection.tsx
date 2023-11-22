export default function SummarySection() {
  return (
    <div className="flex flex-col w-full justify-center items-center p-10">
      <div className="flex max-w-7xl w-full justify-center items-center p-10">
        <div className="flex">
          <div className="grid grid-cols-2 w-full gap-10">
            <div className="flex flex-col">
              <iframe
                className="max-w-xl w-full h-74"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/E4rJMDmuces?si=JqMVE0ogu8c-L7Kj"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <h1 className="text-xl text-gray-600 font-semibold font-mono mt-5">
                COURSE SYLLABUS:
              </h1>
              <ul className="list-decimal ml-10">
                <li>C and Embedded C language programming</li>
                <li>
                  Architecture of microcontroller like Intel MCS-51 or 8051, ARM
                  7TDMI core & Cortex M3, Microchip PIC16/PIC18 and their
                  assembly language programming
                </li>
                <li>PCB design and PCB fabrication process </li>
                <li>Operating System fundamentals </li>
                <li>
                  Details of RTOS internals, multi-tasking, task management,
                  task scheduling, task communication and synchronization{" "}
                </li>
                <li>Linux device driver development </li>
                <li>
                  Protocol based micro-controller programming. Protocols like
                  RS-232, SPI, CAN, USB, Ethernet, Zigbee, Bluetooth, I2C,
                  MODBUS etc.{" "}
                </li>
                <li>Python Language programming </li>
              </ul>
            </div>
            <div className="flex flex-col gap-y-5 pl-40 w-max">
              <h1 className="font-bold text-2xl">Summary</h1>
              <h1 className="text-lg text-gray-600 font-semibold font-mono mt-5">
                Course Code :
              </h1>
              <h1 className="text-lg text-gray-600 font-semibold font-mono">
                Course Name :
              </h1>
              <h1 className="text-lg text-gray-600 font-semibold font-mono">
                Coordinating Unit :
              </h1>
              <h1 className="text-lg text-gray-600 font-semibold font-mono">
                Term :
              </h1>
              <h1 className="text-lg text-gray-600 font-semibold font-mono">
                Level :
              </h1>
              <h1 className="text-lg text-gray-600 font-semibold font-mono">
                Location/s :
              </h1>
              <h1 className="text-lg text-gray-600 font-semibold font-mono">
                Units :
              </h1>
              <h1 className="text-lg text-gray-600 font-semibold font-mono">
                Qualification :
              </h1>
              <h1 className="text-lg text-gray-600 font-semibold font-mono">
                Assumed Knowledge :
              </h1>
              <h1 className="text-lg text-gray-600 font-semibold font-mono">
                Course Description :
              </h1>
              <h1 className="text-lg text-gray-600 font-semibold font-mono">
                Course Staff :
              </h1>
              <h1 className="text-lg text-gray-600 font-semibold font-mono">
                Course Timetable :
              </h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col"></div>
      </div>
    </div>
  );
}
