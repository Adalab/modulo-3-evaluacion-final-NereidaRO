import "../styles/layout/CharacterDetail.scss";
import placeholder from "../images/enplaceholder.png";
import chooseImage from "../services/chooseImage";
import { NavLink } from "react-router-dom";

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
    <div className="detail__wrapper">
      <NavLink className="detail__link" to="/">
        Back
      </NavLink>
      <section className="detail__section">
        {chooseImage(props.characterFound)}
        <article className="detail__article">
          <p className="detail__text">Name: {props.characterFound.name}</p>
          {isAlive()}
          <p className="detail__text">
            Species: {props.characterFound.species}
          </p>
          <p className="detail__text">Gender: {props.characterFound.gender}</p>
          <p className="detail__text">House: {props.characterFound.house}</p>
        </article>
      </section>
    </div>
  );
}

CharacterDetail.defaultProps = {
  image: { placeholder },
  name: "No Name",
  species: "No Species",
};

export default CharacterDetail;
