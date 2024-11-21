import PropTypes from "prop-types";

function Country({ countryData }) {
  return (
    <>
      <div>{countryData.flag}</div>
      <h3>{countryData.name.official}</h3>
      <p>{countryData.capital}</p>
      <p>{countryData.continents}</p>
    </>
  );
}

export default Country;

Country.propTypes = {
  countryData: PropTypes.array.isRequired,
};
