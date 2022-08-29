function FilterByName(props) {
  const handleOnChange = (ev) => {
    return props.handleFilterByName(ev.target.value);
  };
  return (
    <>
      <label htmlFor="name">Search by name: </label>
      <input
        type="text"
        name="name"
        id="name"
        value={props.textFilter}
        onChange={handleOnChange}
      />
    </>
  );
}

export default FilterByName;
