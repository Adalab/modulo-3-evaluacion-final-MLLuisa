
const api = () => {
  return fetch("https://cors-anywhere.herokuapp.com/http://api/characters")
  .then(response => response.json())
  .then(data => {
    // limpiar los datos
    const dataClean = data.map((user,index) => {
      return {
        id: index,
        image: user.image,
        name: user.name || 'https://via.placeholder.com/150',
        species: user.species,
        status: user.alive === true ? 'alive - ♥' : 'dead - ☠',
        gender: user.gender,
        house: user.house || "none"
      }
    });
    return dataClean;
  })
}

export default api;