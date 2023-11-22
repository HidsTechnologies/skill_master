import Image from "next/image";

export default function FeatureSection() {
  return (
    <div className="flex flex-col w-full p-10 justify-center items-center">
      <h1 className="text-4xl font-bold italic text-[#38220f]">
        Upskill at the pace of change and grow from there
      </h1>
      <p className="text-xl italic flex max-w-xl w-full text-center">
        People love our courses because we explain things simply, clearly, with
        great detail. See for yourself - we offer over 200 free lessons!
      </p>
      <div className="flex justify-center">
        <div className="grid xl:grid-cols-4 lg:grid-cols-2 gap-5 grid-cols-1 justify-center items-center">
          <div className="flex flex-col border-2 justify-center items-center p-10 max-w-xs mt-40">
            <div className="rounded-full bg-orange-500 p-5 w-15">
              <Image src="/learning.png" alt="learning" className="w-12" />
            </div>
            <h1 className="text-2xl font-bold">Programmes</h1>
            <p className="text-center mt-5">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur
            </p>
            <button className="mt-10 text-xl font-bold underline">More</button>
          </div>
          <div className="flex flex-col border-2 justify-center items-center p-10 max-w-xs">
            <div className="rounded-full bg-orange-500 p-5 w-15">
              <Image alt="award" src="/award.png" className="w-12" />
            </div>
            <h1 className="text-2xl font-bold">Results</h1>
            <p className="text-center mt-5">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur
            </p>
            <button className="mt-10 text-xl font-bold underline">More</button>
          </div>
          <div className="flex flex-col border-2 justify-center items-center p-10 max-w-xs mt-40">
            <div className="rounded-full bg-orange-500 p-5 w-15">
              <Image alt="award" src="/coach.png" className="w-12" />
            </div>
            <h1 className="text-2xl font-bold">Coaching</h1>
            <p className="text-center mt-5">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur
            </p>
            <button className="mt-10 text-xl font-bold underline">More</button>
          </div>
          <div className="flex flex-col border-2 justify-center items-center p-10 max-w-xs">
            <div className="rounded-full bg-orange-500 p-5 w-15">
              <Image alt="award" src="/calendar.png" className="w-12" />
            </div>
            <h1 className="text-2xl font-bold">Events</h1>
            <p className="text-center mt-5">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur
            </p>
            <button className="mt-10 text-xl font-bold underline">More</button>
          </div>
        </div>
      </div>
    </div>
  );
}
