import placeholder from "../images/enplaceholder.png";
import "../styles/core/global.scss";

const chooseImage = (characters) => {
  if (characters.image === "") {
    return (
      <img
        className="image"
        src={placeholder}
        alt={characters.name}
        title={characters.name}
      />
    );
  } else {
    return (
      <img
        className="image"
        src={characters.image}
        alt={characters.name}
        title={characters.name}
      />
    );
  }
};

//aquí no se pone punto en los parámetros

export default chooseImage;
