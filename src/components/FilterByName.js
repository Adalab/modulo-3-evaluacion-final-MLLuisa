import PropTypes from 'prop-types';

const FilterByName = (props) => {

const handleFilterByName = (ev) => {
    props.handleFilterByName(ev.target.value.toLowerCase());
}

    return (<form className="formName">
        <label className="labelName">Buscar por personaje: </label>
        <input type='text'
        className="inputName"
        placeholder="Ex. Hermione Granger" 
        onChange={handleFilterByName}
        value={props.filterName}
        />
      </form>)
}

FilterByName.defaultProps = {
    filterHouse: ""
  };
  
  FilterByName.propTypes = {
    filterHouse: PropTypes.string.isRequired,
  }

export default FilterByName;