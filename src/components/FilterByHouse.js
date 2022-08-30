import PropTypes from 'prop-types';

const FilterByHouse = (props) => {

const handleFilterHouse = (ev) => {
    ev.preventDefault();
    props.handleFilterByHouse(ev.target.value);
}

    return (<>
    <form className="formHouse">
        <label
        className="labelHouse"
        htmlFor="houses">Selecciona la casa: </label>
    <select
        className="selectHome"
        name={props.filterHouse}
        id={props.filterHouse}
        onChange={handleFilterHouse}
        value={props.filterHouse}>
        <option value="Gryffindor" selected>Gryffindor</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Ravenclaw">Ravenclaw</option>
        <option value="Slytherin">Slytherin</option>
        <option value="none">none</option>
    </select></form>
    
    </>)
}

FilterByHouse.defaultProps = {
    filterHouse: ""
  };
  
  FilterByHouse.propTypes = {
    filterHouse: PropTypes.string.isRequired,
  }

export default FilterByHouse;