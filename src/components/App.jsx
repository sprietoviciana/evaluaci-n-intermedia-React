import "../scss/App.scss";
import ListCountries from "./ListCountries";
import CountriesData from "../services/data.json";
import Filters from "./Filters";
import { useState } from "react";

function App() {
  const [searchValue, setSearchValue] = useState("");

  const changeSearch = (value) => {
    setSearchValue(value);
  };

  const filteredCountry = CountriesData.filter((countryData) => {
    return countryData.name.common.includes(searchValue);
  });

  return (
    <>
      <header>
        <h1>Country Info App</h1>
      </header>
      <section>
        <Filters onChangeFilter={changeSearch} />
      </section>
      <main>
        <ListCountries countries={filteredCountry} />
      </main>
    </>
  );
}

export default App;
