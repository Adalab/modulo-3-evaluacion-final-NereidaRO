import FilterByName from "./FilterByName.js";
import FilterByHouse from "./FilterByHouse.js";

function Filters(props) {
  console.log(props);
  return (
    <form>
      <FilterByName characters={props.characters} />
      <FilterByHouse characters={props.characters} />
    </form>
  );
}

export default Filters;
