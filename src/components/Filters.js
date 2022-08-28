import FilterByHouse from './FilterByHouse';
import FilterByName from './FilterByName';

const Filters = (props) => {
    return (<>
    <FilterByName
    filterName={props.filterName}
    handleFilterByName={props.handleFilterByName}
    />
    <FilterByHouse
    filterHouse={props.filterHouse}
    handleFilterByHouse={props.handleFilterByHouse}
    />
    </>)
}

export default Filters;