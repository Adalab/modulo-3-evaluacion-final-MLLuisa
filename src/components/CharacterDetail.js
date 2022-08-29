import { Link } from 'react-router-dom';
import defaultPhoto from '../images/esplaceholder.png';

const CharacterDetail = (props, index) => {
    return (<>
    <Link to='/'>Volver atras</Link>
    <li key={index} 
    className='characterList'>
    <img 
          src={props.element.image || defaultPhoto}
          alt={`foto de ${props.element.name}`}
          title={`foto de ${props.element.name}`}
          className="charactersPhoto"></img>
    <p>Name: {props.element.name}</p>
    <span>Species: {props.element.species}</span>
    <p>House: {props.element.house}</p>
    <p>Status: {props.element.status}</p>
    <p>Gender: {props.element.gender}</p>
    </li>
    </>)
}

export default CharacterDetail;