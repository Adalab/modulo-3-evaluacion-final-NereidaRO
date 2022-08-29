import placeholder from "../images/enplaceholder.png";
import chooseImage from "../services/chooseImage";

function CharacterDetail(props) {
  console.log(props.characters);
  //transformar true/false en vivo/muerto

  const isAlive = (status) => {
    if (status === true) {
      return <p>Estatus: vivo/a</p>;
    } else if (status === false) {
      return <p>Estatus: muerto/a</p>;
    }
  };

  //placeholder de la imagen => función en servicios

  return (
    <section>
      {chooseImage(props.characters)}
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
  image: { placeholder },
  name: "No Name",
  species: "No Species",
};

export default CharacterDetail;
