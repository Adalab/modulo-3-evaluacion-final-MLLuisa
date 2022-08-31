import '../styles/layout/SelectGender.scss';

const FilterByGender = (props) => {
    const handleFilterByGender = (ev) => {
        props.handleFilterByGender(ev.target.value);
    }

    return (<form>
        <label className='labelGender'>Gender: </label>
        <select type='text'
        className="selectGender"
                onClick={handleFilterByGender}
                value={props.FilterByGender}>
            <option value='all'>all</option>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
        </select>
    </form>)
}

export default FilterByGender;