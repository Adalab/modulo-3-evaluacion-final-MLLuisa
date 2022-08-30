import { Link } from 'react-router-dom';
import defaultPhoto from '../images/esplaceholder.png';
import PropTypes from 'prop-types';

const CharacterDetail = (props, index) => {
    return (<>
    <Link to='/' className='linkHome'>Volver atras</Link>
    <div className='wrapperDetail'> 
    
    <li key={index} className='liDetail'>
    <img 
          src={props.element.image || defaultPhoto}
          alt={`foto de ${props.element.name}`}
          title={`foto de ${props.element.name}`}
          className="charactersPhotoDetail"></img>
    <p>Name: {props.element.name}</p>
    <span>Species: {props.element.species}</span>
    <p>House: {props.element.house}</p>
    <p>Status:  {props.element.status}</p>
    <p>Gender: {props.element.gender}</p>
    </li>
    </div>
   
    </>)
}

CharacterDetail.defaultProps = {
    element: {}
  };

CharacterDetail.propTypes = {
    element: PropTypes.object.isRequired,
}

export default CharacterDetail;