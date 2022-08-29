const FilterByName = (props) => {

const handleFilterByName = (ev) => {
    props.handleFilterByName(ev.target.value.toLowerCase());
}

    return (<form>
        <label className="labelName">Filtrar por nombre: </label>
        <input type='text'
        className="inputName"
        placeholder="Ex. Hermione Granger" 
        onChange={handleFilterByName}
        value={props.filterName}
        />
      </form>)
}

export default FilterByName;