import Mission from "@/components/Mission";
import AboutUs from "@/components/AboutUs"

export default function Home() {
  return (
    <main className="flex">
        <h1 className="font-primary text-brand-textHeader text-2xl mb-8 items-center mx-auto max-w-6xl">
          <Mission/>
          <AboutUs/>
        </h1>
    </main>
  );
}
