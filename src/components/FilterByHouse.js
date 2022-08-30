import "../styles/layout/FilterByHouse.scss";
//filtro tipo select

function FilterByHouse(props) {
  const handleChange = (ev) => {
    return props.handleFilterByHouse(ev.target.value);
  };
  return (
    <div className="fbh__wrapper">
      <label className="fbh__label" htmlFor="house">
        Choose a house:
      </label>
      <select
        className="fbh__select"
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
    </div>
  );
}

//para el all hay que hacer el return true este en App y tal

export default FilterByHouse;
