//filtro tipo select

function FilterByHouse(props) {
  const handleChange = (ev) => {
    return props.handleFilterByHouse(ev.target.value);
  };
  return (
    <>
      <label htmlFor="house">Choose a house: </label>
      <select
        name="house"
        id="house"
        value={props.houseFilter}
        onChange={handleChange}
      >
        <option value="Gryffindor">Gryffindor</option>
        <option value="Ravenclaw">Ravenclaw</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Slytherin">Slytherin</option>
        <option value="All">All</option>
      </select>
    </>
  );
}

//para el all hay que hacer el return true este en App y tal

export default FilterByHouse;
