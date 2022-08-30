import "../styles/layout/CharacterList.scss";
import CharacterItem from "./CharacterItem";

function CharacterList(props) {
  //html a renderizar
  const drawList = () => {
    if (props.characters.length === 0) {
      return <p className="list__text">Without coincidences!</p>;
    } else {
      return props.characters.map((item) => {
        console.log(item.id);
        return <CharacterItem key={item.id} characters={item} />;
      });
    }
  };
  //la lista
  return <ul className="list__list">{drawList()}</ul>;
}

export default CharacterList;
