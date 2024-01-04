import SummarySection from "./summarySection";
import Footer from "@/components/footer/page";
import Header from "@/components/header/page";
import Courses from "@/db/courses.json";
import { Course } from "@/types/courses";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const SkillDetail = ({ params }: { params: { id: string } }) => {
  const couresId: string = params.id;
  console.log(couresId);

  const course = Courses.filter((course) => course.id == couresId)[0];

  return (
    <>
      <div className="bg-gray-100">
        <Header />

        <div className="flex flex-col w-full">
          <div className="flex w-full h-40 bg-blue-900"></div>
          <div className="flex flex-col w-full justify-center items-center py-10 md:px-40 px-20 border-b shadow-md">
            <div className="flex flex-col md:max-w-7xl w-full">
              <h1 className="text-3xl font-bold">{course.title}</h1>
              <Link href="#"><button className="flex px-5 py-2 w-max rounded-full bg-orange-700 mt-2 text-gray-100 text-xl group">
                Start Learning Path
                <ArrowRightIcon className="w-7 ml-2 -translate-x-2 group-hover:translate-x-0 transition-all duration-500"/>
              </button>
              </Link>
            </div>
          </div>
        </div>
        <SummarySection Course={course} />
        <Footer />
      </div>
    </>
  );
};

export default SkillDetail;

export async function generateStaticParams() {
  return Courses.map((course) => ({
    id: course.id,
  }));
}
