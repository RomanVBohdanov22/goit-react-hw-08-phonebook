import { useDispatch } from 'react-redux';
import '../filter/Filter.css';
import { addFilter } from 'redux/filterSlice';

const FilterContacts = () => {
  const dispatch = useDispatch();
  //
  return (
    <label htmlFor="search">
      <span className="pseudo">
        Search contact by name <br />
      </span>
      <input
        className="searchInput"
        type="text"
        name="search"
        onChange={event => dispatch(addFilter(event.target.value))}
      />
    </label>
  );
};

export default FilterContacts;
