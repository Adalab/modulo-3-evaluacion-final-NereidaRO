import "../styles/layout/FilterBySpecies.scss";
function FilterBySpecies(props) {
  const handleChange = (ev) => {
    props.handleFilterBySpecies(ev.target.value);
  };

  return (
    <div className="fbs__wrapper">
      <label className="fbs__label" htmlFor="species">
        Search by species:
      </label>
      <input
        className="fbs__input"
        type="text"
        name="species"
        id="species"
        value={props.speciesFilter}
        onChange={handleChange}
      ></input>
    </div>
  );
}

export default FilterBySpecies;
