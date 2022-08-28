import "../images/doggypottermiriam.png";

function CharacterItem(props) {
  console.log(props);
  return (
    <li>
      <img
        src={props.characters.image}
        alt={props.characters.name}
        title={props.characters.name}
      />
      <p>{props.characters.name}</p>
      <p>{props.characters.species}</p>
    </li>
  );
}

//acuérdate de la parte variable de Link, uuid?

CharacterItem.defaultProps = {
  image: "../images/doggypottermiriam.png",
  name: "Doggy Potter",
  species: "dog",
};

export default CharacterItem;
