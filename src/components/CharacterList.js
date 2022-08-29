import '../styles/App.scss';
import CharacterCard from './CharacterCard';
import PropTypes from 'prop-types';

const CharacterList = (props) => {
        return props.dataApi
        .filter((element) => {
          if (props.filterName !== ''){
              return element.name.toLowerCase().includes(props.filterName.toLowerCase())
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
            return (<CharacterCard element={element} key={index} />)
        })
      }

      CharacterList.defaultProps = {
        dataApi: [],
        filterName: "",
        filterHouse: ""
      };
      
      CharacterList.propTypes = {
        dataApi: PropTypes.array.isRequired,
        filterName: PropTypes.string.isRequired,
        filterHouse: PropTypes.string.isRequired
      } 

export default CharacterList;