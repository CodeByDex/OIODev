//This page returns a listing of all portfolios and displays the summary 'card'
import data from "./data.js";
import DevCards from "./components/DevCards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTurnDown } from "@fortawesome/free-solid-svg-icons";

export default function Services() {
  const devCards = data.map((item) => {
    return <DevCards {...item} key={item.id} />;
  });
  return (
    <main className="flex-col">
      <div className="services--header mx-auto max-w-6xl">
        <h1 className="font-primary font-semibold text-brand-textHeader text-5xl max-w-full pb-5 sm:max-w-md sm:text-7xl">
          Explore Our Team of Developers
          <FontAwesomeIcon
            icon={faArrowTurnDown}
            className="h-6 ml-4 text-brand-accent"
          />
        </h1>
        <p className="font-secondary mb-5 sm:max-w-xl">
          Browse our talented team of developers and explore their impressive
          portfolios. We&apos;ve made it simple for you to connect with the
          right developer and kick-start your project. If you&apos;re interested
          in scheduling a free 30-minute consultation, feel free to reach out to
          them on LinkedIn or GitHub. We&apos;re here to help you find the
          perfect developer for your needs!
        </p>
      </div>

      <div className="services--devCardContainer">{devCards}</div>
    </main>
  );
}
