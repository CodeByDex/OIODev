//This page returns a listing of all portfolios and displays the summary 'card'
import DevCards from "./components/DevCards";

export default function Services() {
  return (
    <main className="flex-col">
      <h1 className="font-primary text-brand-textHeader text-2xl m-w-full">
        Services Page
      </h1>
      <DevCards />
    </main>
  );
}
