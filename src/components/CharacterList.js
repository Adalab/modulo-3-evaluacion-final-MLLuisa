import defaultPhoto from '../images/esplaceholder.png';
import '../styles/App.scss';

const CharacterList = (props) => {

        if(props.dataApi.image === "") {
          return {defaultPhoto};
        }
        return props.dataApi
        .filter((element) => {
          if (props.filterName !== ''){
              return (element.name.toLowerCase().includes(props.filterName.toLocaleLowerCase()));
          } return true;
          
      })
        .filter((element) => {
          if(props.filterHouse === 'Gryffindor') {
            return props.filterHouse.includes(element.house);
          } else {
            return props.filterHouse.includes(element.house);
          }
        })
        .map((element, index) => {
            return (
            <li key={index} 
            className='characterList'>
            <img 
                  src={element.image || defaultPhoto}
                  alt={`foto de ${element.name}`}
                  title={`foto de ${element.name}`}
                  className="charactersPhoto"></img>
            <p>{element.name}</p>
            <span>{element.species}</span>
            <p>{element.house}</p>
          </li>)
        })
      }

export default CharacterList;