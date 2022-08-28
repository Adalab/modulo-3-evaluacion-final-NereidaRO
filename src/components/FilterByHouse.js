//filtro tipo select

function FilterByHouse(props) {
  return (
    <>
      <label htmlFor="house">Choose a house: </label>
      <select name="house" id="house" value={props.characters.house}>
        <option value="gryffindor" selected>
          Gryffindor
        </option>
        <option value="ravenclaw">Ravenclaw</option>
        <option value="hufflepuff">Hufflepuff</option>
        <option value="slytherin">Slytherin</option>
        <option value="all">All</option>
      </select>
    </>
  );
}

export default FilterByHouse;
