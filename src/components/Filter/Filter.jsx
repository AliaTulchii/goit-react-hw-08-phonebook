import React from 'react';
import css from './Filter.module.css'
import { useDispatch } from 'react-redux';
import { searchByName } from 'features/filter/filterSlice';
// import contactsSelectors from 'features/contact/contacts-selectors';

const Filter = () => {
    const dispatch = useDispatch()
    // const value = useSelector(contactsSelectors.getFilter);
    
    const filterChangeHandler = (e) => {
    dispatch(searchByName(e.currentTarget.value))
  }
    
   


    return (
        <input
            type='text'
            name='filter'
            onChange={filterChangeHandler}
            placeholder='Enter name for search'
            className={css.Filter__input}
        />
        
    )
}

export default Filter;

// Filter.propTypes = {
//     filterRef: PropTypes.string.isRequired,
//     onChange: PropTypes.func.isRequired,
//   };