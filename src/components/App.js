import '../styles/App.scss';
import api from '../services/api';
import defaultPhoto from '../images/default-photo.png';
import '../styles/App.scss';
import { useState, useEffect } from 'react';
import Filters from './Filters';

function App() {

const [dataApi, setDataApi] = useState([]);
const [filterName, setFilterName] = useState("");

useEffect(() => {
  api().then((dataFromApi) => {
    setDataApi(dataFromApi)
  });
}, []);

const handleFilterByName = (value) => {
  setFilterName(value);
}


const renderGryffindorList = () => {
  if(dataApi.image === '') {
    dataApi.image = {defaultPhoto};
  }
  return dataApi
  .filter((element) => {
    if (filterName !== ''){
        return (element.name.toLowerCase().includes(filterName.toLocaleLowerCase()));
    }return true;
    
})
  .map((element, index) => {
    return (<li key={index} 
    className='characterList'>
      <img 
            src={element.image}
            alt={`foto de ${element.name}`}
            title={`foto de ${element.name}`}
            className="charactersPhoto"></img>
      <p>{element.name}</p>
      <span>{element.species}</span>
    </li>)
  })
}

  return (
    <div className="App">
      <h1>Harry Potter</h1>
      <div className='divSearch'>
        <Filters handleFilterByName={handleFilterByName} filterName={filterName}/>
      </div>
      <div className='characterWrapper'>
        <ul>{renderGryffindorList()}</ul>
      </div>
      
    </div>
  );
}

export default App;
