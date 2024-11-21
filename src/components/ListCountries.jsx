import Country from "./Country";
import PropTypes from "prop-types";

function ListCountries({ countries }) {
  const countriesItem = countries.map((countryItem) => {
    return (
      <Country countryData={countryItem} key={countryItem.name.official} />
    );
  });
  return (
    <section>
      <div>{countriesItem}</div>
    </section>
  );
}

export default ListCountries;

ListCountries.propTypes = {
  countries: PropTypes.array.isRequired,
};
