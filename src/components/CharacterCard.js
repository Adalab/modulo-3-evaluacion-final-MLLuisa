import defaultPhoto from '../images/esplaceholder.png';

const CharacterCard = (props, index) => {
    return (<li key={index} 
        className='characterList'>
        <img 
              src={props.element.image || defaultPhoto}
              alt={`foto de ${props.element.name}`}
              title={`foto de ${props.element.name}`}
              className="charactersPhoto"></img>
        <p>{props.element.name}</p>
        <span>{props.element.species}</span>
        <p>{props.element.house}</p>
        </li>)
}

export default CharacterCard;