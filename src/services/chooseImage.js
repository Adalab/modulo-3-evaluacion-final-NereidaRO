import placeholder from "../images/enplaceholder.png";

const chooseImage = (props, characters) => {
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

export default chooseImage;
