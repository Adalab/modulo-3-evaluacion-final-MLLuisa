import '../styles/App.scss';
import api from '../services/api';
import defaultPhoto from '../images/default-photo.png'
import { useState, useEffect } from 'react';

function App() {

const [dataApi, setDataApi] = useState([]);

useEffect(() => {
  api().then((dataFromApi) => {
    setDataApi(dataFromApi)
  });
}, []);



const renderGryffindorList = () => {
  if(dataApi.image === '') {
    dataApi.image = defaultPhoto;
  }
  return dataApi.map((element, index) => {
    return (<li key={index} >
      <img 
            src={element.image}
            alt={`foto de ${element.name}`}
            title={`foto de ${element.name}`}></img>
      <p>{element.name}</p>
      <span>{element.species}</span>
    </li>)
  })
}

  return (
    <div className="App">
      <h1>Harry Potter</h1>
      <ul>{renderGryffindorList()}</ul>
    </div>
  );
}

export default App;
