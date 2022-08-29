import { uuid } from "./uuid.js";

const getFromApi = () => {
  return fetch("http://hp-api.herokuapp.com/api/characters")
    .then((response) => response.json())
    .then((data) => {
      const dataClean = data.map((character) => {
        return {
          id: uuid(),
          name: character.name,
          species: character.species,
          gender: character.gender,
          house: character.house,
          status: character.alive,
          image: character.image,
        };
      });
      return dataClean;
    });
};

export default getFromApi;
