import '../styles/App.scss';
import api from '../services/api';
import titlePhoto from '../images/Harry-film-logo.png';
import '../styles/App.scss';
import { useState, useEffect } from 'react';
import Filters from './Filters';
import CharacterList from './CharacterList';

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

  return (
    <div className="App">
      <img src={titlePhoto} alt='harry-potter-title'></img>
      <div className='divSearch'>
        <Filters
        handleFilterByName={handleFilterByName} 
        filterName={filterName}
        handleFilterByHouse={handleFilterByHouse}
        filterHouse={filterHouse}
        />
      </div>
      <div className='characterWrapper'>
        <ul className='listWrapper'><CharacterList 
        dataApi={dataApi}
        filterName={filterName}
        filterHouse={filterHouse}/></ul>
      </div>
      
    </div>
  );
}

export default App;
