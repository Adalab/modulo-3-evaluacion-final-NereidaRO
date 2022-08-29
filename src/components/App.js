//Estilos (solo 1)
import "../styles/App.scss";
//Librerías, datos y LS
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import ls from "../services/localStorage";
import getFromApi from "../services/api.js";
import placeholder from "../images/enplaceholder.png";
//Componentes
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import CharacterDetail from "./CharacterDetail";

function App() {
  //VARIABLES DE ESTADO
  const [characters, setCharacters] = useState([]);
  const [houseFilter, setHouseFilter] = useState("Gryffindor");
  const [textFilter, setTextFilter] = useState("");

  //FUNCIONES AUXILIARES

  useEffect(() => {
    getFromApi().then((dataFromApi) => {
      console.log(dataFromApi);
      setCharacters(dataFromApi);
    });
  }, []);

  //obtener el id del usuario clicleado
  /* const { pathname } = useLocation();
    console.log(pathname);
    const dataPath = matchPath("/user/:userId", pathname);
  
    const userId = dataPath !== null ? dataPath.params.userId : null;
    const userFound = dataUsers.find(user => { return user.id === userId });*/

  //RELACIONADAS CON LIFTING

  const handleFilterByHouse = (value) => {
    setHouseFilter(value);
  };

  const handleFilterByName = (value) => {
    setTextFilter(value);
  };

  //APLICACIÓN DE FILTROS

  const filteredCharacters = characters
    .filter((oneCharacter) => {
      return houseFilter === "All" ? true : oneCharacter.house === houseFilter;
    })
    .filter((oneCharacter) => {
      if (textFilter.length === 0) {
        return true;
      } else {
        return oneCharacter.name
          .toLowerCase()
          .includes(textFilter.toLowerCase());
      }
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
                  textFilter={textFilter}
                  handleFilterByName={handleFilterByName}
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
