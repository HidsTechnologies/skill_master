import Image from "next/image";
import Link from "next/link";

export default function Additional() {
  return (
    <div className="flex w-full justify-center items-center py-20 mt-10">
      <div className="flex max-w-7xl w-full lg:justify-between lg:flex-row flex-col justify-center">
        <div>
          <h1 className="text-3xl font-bold">Experts to Help You Cross</h1>
          <h1 className="text-3xl font-bold">Every Hurdle</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
            architecto voluptates iure rem nostrum ab pariatur expedita
            consequuntur quidem natus, error culpa vitae modi nulla tempora
            molestiae doloribus hic eaque?
          </p>
          <Link href="/about#experts"><button className="text-white font-bold rounded-md shadow-sm py-2 px-5 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 mt-5 hover:bg-gradient-to-l transition-all duration-500">Meet the Experts</button></Link>
        </div>
        <Image
          src="/additional-removebg-preview.png"
          alt="additional"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
