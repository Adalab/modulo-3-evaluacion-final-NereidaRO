import CharacterItem from "./CharacterItem";

function CharacterList(props) {
  //html a renderizar
  /*const theList = props.characters.map((item, index) => {
    return <CharacterItem key={index} characters={item} />;
  });*/
  //si no hay coincidencias
  const drawList = () => {
    if (props.characters.length === 0) {
      return <p>Without coincidences!</p>;
    } else {
      return props.characters.map((item) => {
        return <CharacterItem key={item.id} characters={item} />;
      });
    }
  };
  //la lista
  return (
    <>
      <h1>Harry Potter</h1>
      <ul>{drawList()}</ul>
    </>
  );
}

export default CharacterList;
