import Mission from "@/components/Mission";
import AboutUs from "@/components/AboutUs";
import Process from "@/components/Process";
import Benefits from "@/components/Benefits";

const pageTitle = "OIO Dev"
const pageDescription = "Unleash your digital potential with OIO Dev. Our developers transform your ideas into remarkable websites and server applications."

export const metadata = {
  title: pageTitle,
  keywords: ["Full Stack", "Javascript", "freelance", "consult", "web development"],
  authors: [{name: "Chelsea Luevano"}, {name: "Christian Smith"}, {name: "Nathan Moon"}, {name: "Ryan Spath"}, {name: "Xander Wyckoff"}, {name: "Zach Mutch"}],
  description: pageDescription,
  openGraph: {
    images: [
      {
        url: "static/preview.png",
        width: 1161,
        height: 419
      }
    ],
    title: pageTitle,
    description: pageDescription,
    url: "http://www.oiodev.com",
    locale: "en_US",
    type: "website"
  }
}

// Home Landing Page
export default function Home() {
  return (
    <main className="flex flex-col max-w-6xl gap-10 mx-auto">
      <Mission />
      <div className="flex flex-col gap-10 mb-36">
        <AboutUs />
        <div className="w-full mx-none p-0">
          <Benefits />
        </div>

        <Process />
      </div>
    </main>
  );
}
