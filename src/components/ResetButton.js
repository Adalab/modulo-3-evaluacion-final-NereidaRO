function ResetButton(props) {
  const handleReset = (ev) => {
    ev.preventDefault();
    props.setHouseFilter("Gryffindor");
    props.setTextFilter("");
  };
  return (
    <button className="reset__button" onClick={handleReset}>
      Reset
    </button>
  );
}

/*la idea es poner las VE de los filtros en su estado inicial, así que te las tiene que pasar App
Así, con los filtros "a cero" la lista volverá a su inicio sin tocar nada más*/
export default ResetButton;
