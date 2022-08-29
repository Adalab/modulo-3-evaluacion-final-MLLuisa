// import defaultPhoto from '../images/esplaceholder.png';
import '../styles/App.scss';
import CharacterCard from './CharacterCard';

const CharacterList = (props) => {

        // if(props.dataApi.image === "") {
        //   return {defaultPhoto};
        // }
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

export default CharacterList;