import Header from "@/components/header/page";

export default function workshop(){
    return(
        <div>
            <Header/>
            <div className="flex flex-col w-full h-96 bg-gray-700 text-white justify-center items-center gap-y-5">
                <h1 className="text-5xl font-bold">Workshops</h1>
                <h1 className="text-xl max-w-3xl text-center">Yes we conduct workshops! We provide students with opportunity to learn from industrial experts and get hands-on experience in subject matter.</h1>
            </div>
            
        </div>
    );
}