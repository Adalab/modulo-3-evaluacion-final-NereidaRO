import placeholder from "../images/enplaceholder.png";

function CharacterItem(props) {
  console.log(props);
  //placeholder img

  const chooseImage = () => {
    if (props.characters.image === "") {
      return (
        <img
          src={placeholder}
          alt={props.characters.name}
          title={props.characters.name}
        />
      );
    } else {
      return (
        <img
          src={props.characters.image}
          alt={props.characters.name}
          title={props.characters.name}
        />
      );
    }
  };

  return (
    <li>
      {chooseImage()}
      <p>{props.characters.name}</p>
      <p>{props.characters.species}</p>
    </li>
  );
}

//acuérdate de la parte variable de Link, uuid?

CharacterItem.defaultProps = {
  image: "../images/enplaceholder.png",
  name: "No Name",
  species: "No Species",
};

export default CharacterItem;
