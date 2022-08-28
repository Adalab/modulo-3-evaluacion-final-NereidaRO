import "../images/doggypottermiriam.png";

function CharacterDetail(props) {
  //transformar true/false en vivo/muerto

  const isAlive = (status) => {
    if (status === true) {
      return <p>Estatus: vivo/a</p>;
    } else if (status === false) {
      return <p>Estatus: muerto/a</p>;
    }
  };

  //species a castellano

  //gender a castellano

  return (
    <section>
      <img
        src={props.characters.image}
        alt={props.characters.name}
        title={props.characters.name}
      />
      <article>
        <p>Nombre: {props.characters.name}</p>
        {isAlive()}
        <p>Especie: {props.characters.species}</p>
        <p>Género: {props.characters.gender}</p>
        <p>Casa: {props.characters.house}</p>
      </article>
    </section>
  );
}

CharacterDetail.defaultProps = {
  image: "../images/doggypottermiriam.png",
  name: "Doggy Potter",
  species: "dog",
};

export default CharacterDetail;
