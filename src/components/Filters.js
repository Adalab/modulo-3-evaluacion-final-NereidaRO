import FilterByName from "./FilterByName.js";
import FilterByHouse from "./FilterByHouse.js";

function Filters(props) {
  console.log(props);
  return (
    <>
      <FilterByName characters={props.characters} />
      <FilterByHouse
        characters={props.characters}
        houseFilter={props.houseFilter}
        handleFilterByHouse={props.handleFilterByHouse}
      />
    </>
  );
}

export default Filters;
