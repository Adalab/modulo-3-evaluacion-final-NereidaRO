import "../images/doggypottermiriam.png";

function CharacterItem({ image, name, species }) {
  return (
    <li>
      <img src={image} alt={name} title={name} />
      <p>{name}</p>
      <p>{species}</p>
    </li>
  );
}

CharacterItem.defaultProps = {
  image: "../images/doggypottermiriam.png",
  name: "Doggy Potter",
  species: "dog",
};

export default CharacterItem;
