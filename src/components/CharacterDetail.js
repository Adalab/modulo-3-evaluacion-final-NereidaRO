import placeholder from "../images/enplaceholder.png";
import chooseImage from "../services/chooseImage";

function CharacterDetail(props) {
  console.log(props.characterFound);
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
      {chooseImage(props.characterFound)}
      <article>
        <p>Name: {props.characterFound.name}</p>
        {isAlive()}
        <p>Species: {props.characterFound.species}</p>
        <p>Gender: {props.characterFound.gender}</p>
        <p>House: {props.characterFound.house}</p>
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
