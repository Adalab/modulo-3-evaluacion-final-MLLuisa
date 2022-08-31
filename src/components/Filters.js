import FilterByHouse from './FilterByHouse';
import FilterByName from './FilterByName';
import FilterByGender from './FilterByGender';

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
    <FilterByGender 
    handleFilterByGender={props.handleFilterByGender}
    filterGender={props.filterGender}/>
    </>)
}

export default Filters;