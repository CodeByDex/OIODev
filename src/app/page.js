import Mission from "@/components/Mission";
import AboutUs from "@/components/AboutUs"

export default function Home() {
  return (
    <main className="flex">
        <h1 className="font-primary text-brand-textHeader text-2xl m-w-full">
          <Mission/>
          <AboutUs/>
        </h1>
    </main>
  );
}
