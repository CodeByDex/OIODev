"use client";

//This page returns a listing of all portfolios and displays the summary 'card'
import DevCards from "./components/DevCards";
import DevCardLoading from "./components/DevCardLoading";
import HeaderGraphic from "./components/HeaderGraphic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTurnDown } from "@fortawesome/free-solid-svg-icons";
import { useQuery, gql } from "@apollo/client";

const portfolioQuery = gql`
  {
    portfolios {
      _id
      firstName
      lastName
      title
      bio
      rate
      portfolioUrl
      githubUrl
      linkedinUrl
      calendlyUrl
      imageUrl
      available
    }
  }
`;

export default function Services() {
  const { data, error, loading } = useQuery(portfolioQuery);

  let devCards;

  if (loading) {
    devCards = (
      <>
        <DevCardLoading />
        <DevCardLoading />
        <DevCardLoading />
      </>
    );
  } else if (data == undefined) {
    devCards = (
      <main>
        <p>No Data Found</p>
      </main>
    );
  } else {
    devCards = data.portfolios.map((item) => {
      return <DevCards {...item} key={item.id} />;
    });
  }

  return (
    <main className="flex-col my-10 md:my-12">
      <div className="flex mb-8 items-center mx-auto max-w-6xl">
        <div className="services--header mx-auto px-1 md:px-0">
          <div className="flex sm:hidden">
            <HeaderGraphic />
          </div>
          <div className="flex items-end">
            <h1 className="font-primary font-semibold text-brand-textHeader text-5xl md:text-6xl max-w-full pb-5 sm:max-w-sm sm:pl-5">
              Explore Our Team of Developers
              <FontAwesomeIcon
                icon={faArrowTurnDown}
                className="h-6 ml-4 text-brand-accent animate-bounce"
              />
            </h1>
            <div className="hidden sm:flex lg:hidden">
              <HeaderGraphic />
            </div>
          </div>
          <p className="font-secondary sm:max-w-2xl lg:max-w-lg sm:pl-5">
            Browse our talented team of developers and explore their impressive
            portfolios. We&apos;ve made it simple for you to connect with the
            right developer and kick-start your project. If you&apos;re
            interested in scheduling a free 30-minute consultation, feel free to
            reach out to them on LinkedIn or GitHub. We&apos;re here to help you
            find the perfect developer for your needs!
          </p>
        </div>
        <div className="hidden lg:flex h-fit">
          <HeaderGraphic />
        </div>
      </div>
      <div className="services--devCardContainer">{devCards}</div>
    </main>
  );
}
