import PropTypes from "prop-types";

function Filters({ onChangeFilter }) {
  const handleChange = (event) => {
    onChangeFilter(event.target.value);
  };
  return (
    <form action="">
      <label htmlFor="country">Busca:</label>
      <input
        type="text"
        id="country"
        placeholder="Ej: España"
        onChange={handleChange}
      />
    </form>
  );
}

export default Filters;

Filters.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
};
