import '../styles/App.scss';
import api from '../services/api';
import defaultPhoto from '../images/default-photo.png';
import '../styles/App.scss';
import { useState, useEffect } from 'react';
import Filters from './Filters';

function App() {

const [dataApi, setDataApi] = useState([]);
const [filterName, setFilterName] = useState("");
const [filterHouse, setFilterHouse] = useState("Gryffindor");

useEffect(() => {
  api().then((dataFromApi) => {
    setDataApi(dataFromApi)
    console.log(dataFromApi);
  });
}, []);

const handleFilterByName = (value) => {
  setFilterName(value);
};

const handleFilterByHouse = (value) => {
  setFilterHouse(value);
}

const renderGryffindorList = () => {
  if(dataApi.image === '') {
    dataApi.image = defaultPhoto;
  }
  return dataApi
  .filter((element) => {
    if (filterName !== ''){
        return (element.name.toLowerCase().includes(filterName.toLocaleLowerCase()));
    } return true;
    
})
  .filter((element) => {
    if(filterHouse === 'Gryffindor') {
      return filterHouse.includes(element.house);
    } else {
      return filterHouse.includes(element.house);
    }
  })
  .map((element, index) => {
      return (
      <li key={index} 
      className='characterList'>
      <img 
            src={element.image}
            alt={`foto de ${element.name}`}
            title={`foto de ${element.name}`}
            className="charactersPhoto"></img>
      <p>{element.name}</p>
      <span>{element.species}</span>
      <p>{element.house}</p>
    </li>)
  })
}

  return (
    <div className="App">
      <h1>Harry Potter</h1>
      <div className='divSearch'>
        <Filters
        handleFilterByName={handleFilterByName} 
        filterName={filterName}
        handleFilterByHouse={handleFilterByHouse}
        filterHouse={filterHouse}
        />
      </div>
      <div className='characterWrapper'>
        <ul>{renderGryffindorList()}</ul>
      </div>
      
    </div>
  );
}

export default App;
