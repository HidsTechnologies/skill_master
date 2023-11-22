/* eslint-disable react/no-unescaped-entities */
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  StarIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import { useEffect, useState } from "react";

const reviews = [
  {
    review:
      "Just wanted to say thank you! I landed a job two days ago. They'll have me pair-programming with a senior level coder.",
    image: "https://www.filepicker.io/api/file/RL7wlWlR7SUzKoIVPOxO",
    username: "Marius Costache",
    profession: "Web Developer",
    stars: 4,
  },
  {
    review:
      "Just wanted to say thank you! I landed a job two days ago. They'll have me pair-programming with a senior level coder.",
    image: "https://www.filepicker.io/api/file/RL7wlWlR7SUzKoIVPOxO",
    username: "Marius Costache",
    profession: "",
    stars: 4,
  },
  {
    review:
      "Just wanted to say thank you! I landed a job two days ago. They'll have me pair-programming with a senior level coder.",
    image: "https://www.filepicker.io/api/file/RL7wlWlR7SUzKoIVPOxO",
    username: "Marius Costache",
    profession: "",
    stars: 4,
  },
  {
    review:
      "Just wanted to say thank you! I landed a job two days ago. They'll have me pair-programming with a senior level coder.",
    image: "https://www.filepicker.io/api/file/RL7wlWlR7SUzKoIVPOxO",
    username: "Marius Costache",
    profession: "",
    stars: 4,
  },
  {
    review:
      "Just wanted to say thank you! I landed a job two days ago. They'll have me pair-programming with a senior level coder.",
    image: "https://www.filepicker.io/api/file/RL7wlWlR7SUzKoIVPOxO",
    username: "Marius Costache",
    profession: "",
    stars: 4,
  },
  {
    review:
      "Just wanted to say thank you! I landed a job two days ago. They'll have me pair-programming with a senior level coder.",
    image: "https://www.filepicker.io/api/file/RL7wlWlR7SUzKoIVPOxO",
    username: "Marius Costache",
    profession: "",
    stars: 4,
  },
];

export default function ReviewSection() {
  const [review, setReview] = useState(0);

  useEffect(() => {
    const interval = setTimeout(() => {
      setReview((prev) => (prev + 1) % reviews.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [review]);

  return (
    <div className="flex flex-col w-full py-10 justify-center items-center mb-10">
      <div>
        <h1 className="flex text-3xl items-center justify-center font-bold text-[#6F4E37] font-serif">
          Over 130,000 students in 150 countries ♥ our courses.
        </h1>
        <h1 className="flex text-3xl items-center justify-center font-bold text-[#6F4E37] font-serif">
          Our students get jobs and start companies.
        </h1>
      </div>
      <div className="group max-w-4xl w-full h-60 border-2 mt-5 rounded-md shadow-md">
        <div className="w-full h-full p-10 relative">
          {reviews.map((currreview, i) => {
            return (
              <div
                className={`${
                  review == i ? `visible` : `invisible`
                } absolute w-full h-full top-6`}
                key={i}
              >
                <p className="text-xl font-serif pr-20">
                  "{currreview.review} "
                </p>
                <div className="absolute bottom-10 flex justify-between w-full pr-20">
                  <div className="flex">
                    <Image
                      alt="review"
                      src="https://www.filepicker.io/api/file/RL7wlWlR7SUzKoIVPOxO"
                      className="rounded-full h-min mt-5"
                      width={35}
                      height={35}
                    />
                    <div className="flex flex-col">
                      <p className="text-lg font-serif font-bold mt-4 ml-2">
                        {currreview.username}
                      </p>
                      <p className="text-lg font-serif ml-2">
                        {currreview.profession}
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <StarIcon className="w-6 text-yellow-400" />
                    <StarIcon className="w-6 text-yellow-400" />
                    <StarIcon className="w-6 text-yellow-400" />
                    <StarIcon className="w-6 " />
                    <StarIcon className="w-6" />
                  </div>
                </div>
              </div>
            );
          })}
          <button
            className="absolute left-0 mt-16 py-5 px-2 group-hover:bg-gray-500 text-white rounded-r-md transition-all duration-500"
            onClick={() =>
              setReview((prev) => (reviews.length + prev + 1) % reviews.length)
            }
          >
            <ChevronLeftIcon className="w-6" />
          </button>
          <button
            className="absolute right-0 mt-16 py-5 px-2 group-hover:bg-gray-500 text-white rounded-l-md ml-[77.3rem] transition-all duration-500"
            onClick={() => setReview((prev) => (prev + 1) % reviews.length)}
          >
            <ChevronRightIcon className="w-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
