import FilterByName from "./FilterByName.js";
import FilterByHouse from "./FilterByHouse.js";
import FilterBySpecies from "./FilterBySpecies.js";

function Filters(props) {
  console.log(props);
  return (
    <>
      <FilterByName
        characters={props.characters}
        textFilter={props.textFilter}
        handleFilterByName={props.handleFilterByName}
      />
      <FilterByHouse
        characters={props.characters}
        houseFilter={props.houseFilter}
        handleFilterByHouse={props.handleFilterByHouse}
      />
      <FilterBySpecies
        speciesFilter={props.speciesFilter}
        handleFilterBySpecies={props.handleFilterBySpecies}
      />
    </>
  );
}

export default Filters;
