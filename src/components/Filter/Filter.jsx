import { useDispatch, useSelector } from 'react-redux';
import FilterIcon from '../../assets/images/filter.svg?react';
import { FilterStyled } from './FilterStyled';
import { update } from '../../redux/filter/filterSlice';
import { getFilter } from '../../redux/filter/filterSelector';
import { useLocation } from 'react-router';
import { useEffect } from 'react';


const Filter = ({ placeholder, onClick }) => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const location = useLocation();

   useEffect(() => {     
        return () => {
          dispatch(update(''));
    };
   }, [location, dispatch]);
  
  const onChangeFilter = e => {
    const filter = e.currentTarget.value.trim();
    dispatch(update(filter));
  };


  return (
    <FilterStyled>
      <input placeholder={placeholder} onChange={onChangeFilter} value={filter}/>
      <button onClick={onClick}>
        <FilterIcon />
        Filter
      </button>
    </FilterStyled>
  );
};

export default Filter;
