const api = () => {
  return fetch("http://hp-api.herokuapp.com/api/characters/house/gryffindor")
  .then(response => response.json())
  .then(data => {
    // limpiar los datos
    const dataClean = data.map(user => {
      return {
        image: user.image,
        name: user.name,
        species: user.species
      }
    });
    return dataClean;
  })
}

export default api;