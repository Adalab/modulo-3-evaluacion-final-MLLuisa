const FilterByHouse = (props) => {

const handleFilterHouse = (ev) => {
    ev.preventDefault();
    props.handleFilterByHouse(ev.target.value);
}

    return (<>
    <label
        className="labelHouse"
        htmlFor="houses">Filtrar por casa: </label>
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
    </select>
    </>)
}

export default FilterByHouse;