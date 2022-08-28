function FilterByName(props) {
  return (
    <>
      <label htmlFor="name">Search by name: </label>
      <input type="text" name="name" id="name" value={props.characters.name} />
    </>
  );
}

export default FilterByName;
