import placeholder from "../images/enplaceholder.png";
import chooseImage from "../services/chooseImage";

function CharacterItem(props) {
  console.log(props);

  //placeholder img => función importada de servicio porque se repite

  return (
    <li>
      {chooseImage(props.characters)}
      <p>{props.characters.name}</p>
      <p>{props.characters.species}</p>
    </li>
  );
}

//acuérdate de la parte variable de Link, uuid?

CharacterItem.defaultProps = {
  image: { placeholder },
  name: "No Name",
  species: "No Species",
};

export default CharacterItem;
