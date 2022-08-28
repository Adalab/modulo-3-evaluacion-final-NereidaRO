//Estilos (solo 1)
import "../styles/App.scss";
//Librerías, datos y LS
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import ls from "../services/localStorage";
import getFromApi from "../services/api.js";
//Componentes
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import CharacterDetail from "./CharacterDetail";

function App() {
  //VARIABLES DE ESTADO
  const [characters, setCharacters] = useState([]);
  const [houseFilter, setHouseFilter] = useState("Gryffindor");
  //no coge el valor que le pasa el filtro :(

  //FUNCIONES AUXILIARES

  useEffect(() => {
    getFromApi().then((dataFromApi) => {
      console.log(dataFromApi);
      setCharacters(dataFromApi);
    });
  }, []);

  //RELACIONADAS CON LIFTING

  const handleFilterByHouse = (value) => {
    setHouseFilter(value);
  };

  //RETURN Y RUTAS

  //función para filtrar y pasárselo a CharacterList

  //RETURN Y RUTAS

  return (
    <div className="App">
      <form>
        <Filters
          characters={characters}
          houseFilter={houseFilter}
          handleFilterByHouse={handleFilterByHouse}
        />
      </form>
      <CharacterList characters={characters} />
    </div>
  );
}

export default App;
