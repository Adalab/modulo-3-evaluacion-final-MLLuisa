import '../styles/App.scss';
import api from '../services/api';
import titlePhoto from '../images/Harry-film-logo.png';
import '../styles/App.scss';
import { useState, useEffect } from 'react';
import {Route, Routes, matchPath, useLocation} from 'react-router-dom';
import Filters from './Filters';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';

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

// id found del click
const {pathname} = useLocation();
  const dataPath = matchPath("/CharacterDetail/:userId", pathname)
  const userId = dataPath !== null ? dataPath.params.userId : null;
  const userFound = dataApi.find(user => {
    return user.id === parseInt(userId)
  })

  return (<>
        <div className="App">
        <header>
          <img src={titlePhoto} alt='harry-potter-title'></img>
        </header>
    
      <main>
        <Routes>
          <Route path='/' element={<>
          <div className='divSearch'>
          <Filters
        handleFilterByName={handleFilterByName} 
        filterName={filterName}
        handleFilterByHouse={handleFilterByHouse}
        filterHouse={filterHouse}
        />
      </div>
      <div className='characterWrapper'>
        <ul className='listWrapper'>
        <CharacterList 
        dataApi={dataApi}
        filterName={filterName}
        filterHouse={filterHouse}
        />
        {/* <CharacterCard element={element}/> */}
        </ul>
        </div>
        </>}/>
        <Route path={"/CharacterDetail/:userId"} 
        element={<CharacterDetail 
        element={userFound}/>}
        />
        </Routes>
        
      
      </main>
      
      
    </div>
    </>
  );
}

export default App;
