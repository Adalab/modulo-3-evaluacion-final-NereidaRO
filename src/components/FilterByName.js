import "../styles/layout/FilterByName.scss";
function FilterByName(props) {
  const handleOnChange = (ev) => {
    return props.handleFilterByName(ev.target.value);
  };

  const handleOnKeyPress = (ev) => {
    if (ev.charCode === 13) {
      ev.preventDefault();
    }
  };

  //keyUp 13 = tecla enter

  return (
    <>
      <label className="fbn__label" htmlFor="name">
        Search by name:{" "}
      </label>
      <input
        className="fbn__input"
        type="text"
        name="name"
        id="name"
        value={props.textFilter}
        onChange={handleOnChange}
        onKeyPress={handleOnKeyPress}
      />
    </>
  );
}

export default FilterByName;
