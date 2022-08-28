const FilterByName = (props) => {

const handleFilterByName = (ev) => {
    props.handleFilterByName(ev.target.value.toLowerCase());
}

    return (<form>
        <label>Filtrar por nombre: </label>
        <input type='text' 
        onChange={handleFilterByName}
        value={props.filterName}
        />
      </form>)
}

export default FilterByName;