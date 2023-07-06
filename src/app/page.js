import Mission from "@/components/Mission";
import AboutUs from "@/components/AboutUs"
import Process from "@/components/Process"
import Benefits from "@/components/Benefits"
import GirlDesktopGraphic from "@/components/GirlDesktopGraphic";

// Home Landing Page
export default function Home() {
  return (
    <main className="flex flex-col">
        <h1 className="font-primary text-brand-textHeader text-2xl mb-8 items-center mx-auto max-w-6xl"> 
            <Mission/>
        </h1>
        <div>
        <AboutUs/>
        </div>
        <div className="items-center justify-center sm:flex sm:flex-col md:flex md:flex-row px-10 py-9 mx-auto">
            <Benefits/>
            <GirlDesktopGraphic/>
        </div>
       <div>
        <Process/>
       </div>
    </main>
  );
}
