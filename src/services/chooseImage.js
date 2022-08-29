import placeholder from "../images/enplaceholder.png";

const chooseImage = (characters) => {
  if (characters.image === "") {
    return (
      <img src={placeholder} alt={characters.name} title={characters.name} />
    );
  } else {
    return (
      <img
        src={characters.image}
        alt={characters.name}
        title={characters.name}
      />
    );
  }
};

//aquí no se pone punto en los parámetros

export default chooseImage;
