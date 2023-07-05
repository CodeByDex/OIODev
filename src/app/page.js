import Mission from "@/components/Mission";
import AboutUs from "@/components/AboutUs"
import Process from "@/components/Process"
import Benefits from "@/components/Benefits"

export default function Home() {
  return (
    <main className="flex flex-col">
        <h1 className="font-primary text-brand-textHeader text-2xl mb-8 items-center mx-auto max-w-6xl"> 
            <Mission/>
        </h1>
        <div>
        <AboutUs/>
        </div>
        <div className="flex flex-row">
            <Benefits/>
            <Process/>
        </div>
       
    </main>
  );
}
