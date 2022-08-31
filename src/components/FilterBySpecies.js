function FilterBySpecies(props) {
  const handleChange = (ev) => {
    props.handleFilterBySpecies(ev.target.value);
  };

  return (
    <>
      <label htmlFor="species">Search by species:</label>
      <input
        type="text"
        name="species"
        id="species"
        value={props.speciesFilter}
        onChange={handleChange}
      ></input>
    </>
  );
}

export default FilterBySpecies;
