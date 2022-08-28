import FilterByName from './FilterByName';

const Filters = (props) => {
    return (<FilterByName handleFilterByName={props.handleFilterByName} filterName={props.filterName}/>)
}

export default Filters;