import { Assessment, Course, Summary } from "@/types/courses";
import Link from "next/link";
import Courses from '@/db/courses.json'
import { ArrowRightIcon } from "@heroicons/react/20/solid";

export default function SummarySection(props: any) {
  const { Course } = props;
  // console.log(Course);
  return (
    <div className="flex flex-col w-full justify-center items-center p-10">
      <div className="flex flex-col max-w-7xl w-full p-10">
        <div className="flex mb-10">
          <div className="grid lg:grid-cols-2 grid-cols-1 w-full xl:gap-60  gap-10">
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
              <h1 className="text-2xl font-bold mt-5">
                Syallabus:
              </h1>
              <ul className="list-decimal ml-10">
                {Course.syllabus?.map((item: string, i: any) => {
                  // console.log(item);
                  return (
                    <li key={i}>{item}</li>
                  );
                })}
              </ul>
            </div>
            <div className="flex flex-col gap-y-5 w-max">
              <h1 className="font-bold text-2xl mb-5">Summary</h1>
              {Course.summary?.map((item: Summary, i: any) => {
                return (
                  <div className="flex" key={i}>
                    <h1 className="text-lg text-gray-600 font-semibold font-mono">{item.title}: </h1><h1>{item.value}</h1>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <h1 className="text-2xl font-bold">Learning Objective</h1>
          <h1 className="ml-5">{Course.learningObjective}</h1>
          <div className="flex flex-col justify-center w-full items-center my-10">
            {/* <h1 className="text-4xl mb-10 font-semibold">Upcoming Events</h1> */}
            <div className="flex w-full justify-center">
              <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-5 max-w-7xl h-full transition-all duration-500">
                {Courses.map((skill, i) => {
                  return (
                    <div key={i} className="flex flex-col max-w-sm w-full border-2 bg-gray-100 p-5 flex-shrink-0 rounded-md">
                      <img src={skill.image} className="h-full max-h-48 min-h-48 w-full rounded-md" />
                      <div className="flex flex-col h-full align-bottom mt-10">
                        <h1 className="text-2xl font-bold mb-3">{skill.title}</h1>
                        <p className="line-clamp-2">{skill.description}</p>
                        <Link href={skill.link} className=" px-3 py-2 bg-blue-600 w-max rounded-md text-white font-semibold mt-5 flex group">Start Course <ArrowRightIcon className="w-6 ml-2 -translate-x-2 group-hover:translate-x-0 transition-all duration-500" /></Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <h1 className="text-2xl font-bold">Assessment</h1>
          <h1 className="ml-5">{Course.assessment.title}</h1>
          <ul className="list-decimal ml-10">
            {Course.assessment.points.map((item: string, i: any) => {
              return (
                <li key={i}>{item}</li>
              );
            })}
          </ul>
          <h1 className="text-2xl font-bold">Certification</h1>
          <h1 className="ml-5">{Course.certification}</h1>
          <h1 className="text-2xl font-bold">Trainer Profile</h1>
          <h1 className="ml-5">{Course.trainerProfile.title}</h1>
          <ul className="list-decimal ml-10">
            {Course.trainerProfile.points.map((item: string, i: any) => {
              return (
                <li key={i}>{item}</li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
