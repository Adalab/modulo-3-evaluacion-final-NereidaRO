//Estilos (solo 1)
import "../styles/App.scss";
//Librerías, datos y LS
import { Link, Route, Routes } from "react-router-dom";
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

  //FUNCIONES AUXILIARES

  useEffect(() => {
    getFromApi().then((dataFromApi) => {
      console.log(dataFromApi);
      setCharacters(dataFromApi);
    });
  }, []);
  //PROVENIENTES DE LIFTING
  //RETURN
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Filters />
              <CharacterList characters={characters} />
            </>
          }
        />
        <Route path="/detail" element={<CharacterDetail />} />
      </Routes>
    </div>
  );
}

export default App;
