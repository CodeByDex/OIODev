import Mission from "@/components/Mission";
import AboutUs from "@/components/AboutUs";
import Process from "@/components/Process";
import Benefits from "@/components/Benefits";
import GirlDesktopGraphic from "@/components/GirlDesktopGraphic";

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
    <main className="flex flex-col max-w-6xl mx-auto">
      <Mission />

      <div>
        <AboutUs />
      </div>
      <div>
        <Benefits />
        <GirlDesktopGraphic />
      </div>
      <div>
        <Process />
      </div>
    </main>
  );
}
