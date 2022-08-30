import '../styles/App.scss';
import CharacterCard from './CharacterCard';
import PropTypes from 'prop-types';

const CharacterList = (props) => {

      const dataApiFiltered = props.dataApi
        .filter((element) => {
          if (props.filterName){
              return element.name.toLowerCase().includes(props.filterName.toLowerCase());
          } 
          return true;
      })
        .filter((element) => {
          if(props.filterHouse === 'Gryffindor') {
            return props.filterHouse.includes(element.house);
          } else {
            return props.filterHouse.includes(element.house);
          }
        });

        if(dataApiFiltered.length === 0) {
          return <p className='characterNotFound'>{`No se ha encontrado ningun personaje con la letra "${props.filterName}".`}</p>
        } else {
          return dataApiFiltered.map((element, index) => <CharacterCard element={element} key={index} />
        )
        }
      }

      CharacterList.defaultProps = {
        dataApi: [],
        filterName: "",
        filterHouse: "Gryffindor"
      };
      
      CharacterList.propTypes = {
        dataApi: PropTypes.array.isRequired,
        filterName: PropTypes.string.isRequired,
        filterHouse: PropTypes.string.isRequired
      } 

export default CharacterList;