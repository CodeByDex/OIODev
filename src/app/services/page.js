//This page returns a listing of all portfolios and displays the summary 'card'
import data from "./data.js";
import DevCards from "./components/DevCards";


export default function Services() {
  const devCards = data.map((item) => {
    return <DevCards {...item} key={item.id} />;
  });
  return (
    <main className="flex-col">
      <h1 className="font-primary text-brand-textHeader text-2xl m-w-full pb-5">
        Services Page
      </h1>
      <div className="services--devCardContainer">{devCards}</div>
    </main>
  );
}
