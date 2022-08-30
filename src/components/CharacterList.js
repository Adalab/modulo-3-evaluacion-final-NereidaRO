import CharacterItem from "./CharacterItem";

function CharacterList(props) {
  //html a renderizar
  const drawList = () => {
    if (props.characters.length === 0) {
      return <p>Without coincidences!</p>;
    } else {
      return props.characters.map((item) => {
        console.log(item.id);
        return <CharacterItem key={item.id} characters={item} />;
      });
    }
  };
  //la lista
  return (
    <>
      <h1 className="list__title">Harry Potter</h1>
      <ul className="list__list">{drawList()}</ul>
    </>
  );
}

export default CharacterList;
