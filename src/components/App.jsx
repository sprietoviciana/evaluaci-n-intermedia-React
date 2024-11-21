import "../scss/App.scss";
import ListCountries from "./ListCountries";
import CountriesData from "../services/data.json";
import Filters from "./Filters";

function App() {
  console.log(CountriesData);
  return (
    <>
      <header>
        <h1>Country Info App</h1>
      </header>
      <section>
        <Filters />
      </section>
      <main>
        <ListCountries countries={CountriesData}/>
      </main>
    </>
  );
}

export default App;
