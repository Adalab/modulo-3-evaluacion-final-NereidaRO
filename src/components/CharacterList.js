import CharacterItem from "./CharacterItem";

function CharacterList(props) {
  console.log(props);
  const drawList = props.characters.map((item, index) => {
    return <CharacterItem key={index} characters={item} />;
  });
  return (
    <>
      <h1>Harry Potter</h1>
      <ul>{drawList}</ul>
    </>
  );
}

export default CharacterList;
