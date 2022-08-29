import defaultPhoto from '../images/esplaceholder.png';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CharacterCard = (props, index) => {
    return (<div className='wrapperCard'>
    <Link to={`/CharacterDetail/${props.element.id}`}
            className='linkCard'>
        <li key={index} 
        className='characterList'>
        <img 
              src={props.element.image || defaultPhoto}
              alt={`Click here to see more info of ${props.element.name}`}
              title={`More info here of ${props.element.name}`}
              className="charactersPhoto"></img>
        <p>{props.element.name}</p>
        <span>{props.element.species}</span>
        <p>{props.element.house}</p>
        </li>
        </Link>
        </div>)
}

CharacterCard.defaultProps = {
    element: {}
  };

CharacterCard.propTypes = {
    element: PropTypes.object.isRequired,
}

export default CharacterCard;