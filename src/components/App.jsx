import "../scss/App.scss";
import ListCountries from "./ListCountries";
import CountriesData from "../services/data.json";
import Filters from "./Filters";

function App() {
  return (
    <>
      <header>
        <h1>Country Info App</h1>
      </header>
      <section>
        <Filters />
      </section>
      <main>
        <ListCountries />
      </main>
    </>
  );
}

export default App;
