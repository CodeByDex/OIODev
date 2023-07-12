import Mission from "@/components/Mission";
import AboutUs from "@/components/AboutUs";
import Process from "@/components/Process";
import Benefits from "@/components/Benefits";

// Home Landing Page
export default function Home() {
  return (
    <main className="flex flex-col max-w-6xl mx-auto">
      <Mission />
      <div>
        <AboutUs />
        <div className="w-full mx-none p-0">
          <Benefits />
        </div>

        <Process />
      </div>
    </main>
  );
}
