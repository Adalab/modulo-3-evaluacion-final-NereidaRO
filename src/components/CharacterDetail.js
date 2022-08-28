import placeholder from "../images/enplaceholder.png";

function CharacterDetail(props) {
  //transformar true/false en vivo/muerto

  const isAlive = (status) => {
    if (status === true) {
      return <p>Estatus: vivo/a</p>;
    } else if (status === false) {
      return <p>Estatus: muerto/a</p>;
    }
  };

  //species a castellano?

  //gender a castellano?

  //placeholder de la imagen

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
    <section>
      {chooseImage()}
      <article>
        <p>Name: {props.characters.name}</p>
        {isAlive()}
        <p>Species: {props.characters.species}</p>
        <p>Gender: {props.characters.gender}</p>
        <p>House: {props.characters.house}</p>
      </article>
    </section>
  );
}

CharacterDetail.defaultProps = {
  image: "../images/enplaceholder.png",
  name: "No Name",
  species: "No Species",
};

export default CharacterDetail;
