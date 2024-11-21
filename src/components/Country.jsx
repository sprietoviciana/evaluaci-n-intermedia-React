import PropTypes from "prop-types";

function Country({ countryData }) {
  return (
    <>
      <div>{countryData.flag}</div>
      <h3>{countryData.name.official}</h3>
      <p>{countryData.capital[0]}</p>
      <p>{countryData.continents[0]}</p>
    </>
  );
}

export default Country;

Country.propTypes = {
  countryData: PropTypes.array.isRequired,
};
