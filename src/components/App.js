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

  //APLICACIÓN DE FILTROS

  const filteredCharacters = characters.filter((oneCharacter) => {
    return houseFilter === "all" ? true : oneCharacter.house === houseFilter;
  });

  //RETURN Y RUTAS

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <form>
                <Filters
                  characters={characters}
                  houseFilter={houseFilter}
                  handleFilterByHouse={handleFilterByHouse}
                />
              </form>
              <CharacterList characters={filteredCharacters} />
            </>
          }
        />
        <Route
          path="/detail/:id"
          element={<CharacterDetail characters={characters} />}
        />
      </Routes>
    </div>
  );
}

export default App;
