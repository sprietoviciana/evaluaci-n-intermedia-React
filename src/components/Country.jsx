function Country({ countryData }) {
//   console.log(countryData);
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
