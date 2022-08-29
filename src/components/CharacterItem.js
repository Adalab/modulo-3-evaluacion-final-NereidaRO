import placeholder from "../images/enplaceholder.png";
import chooseImage from "../services/chooseImage";
import { NavLink } from "react-router-dom";

function CharacterItem(props) {
  console.log(props);

  //placeholder img => función importada de servicio porque se repite

  return (
    <li>
      <NavLink to={`/detail/${props.characters.id}`}>
        {chooseImage(props.characters)}
        <p>{props.characters.name}</p>
        <p>{props.characters.species}</p>
      </NavLink>
    </li>
  );
}

//acuérdate de la parte variable de Link

CharacterItem.defaultProps = {
  image: { placeholder },
  name: "No Name",
  species: "No Species",
};

export default CharacterItem;
