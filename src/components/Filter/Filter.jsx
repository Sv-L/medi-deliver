import { useDispatch, useSelector } from 'react-redux';
import FilterIcon from '../../assets/images/filter.svg?react'
import { FilterStyled } from './FilterStyled'
import { update } from '../../redux/filter/filterSlice';
import { getFilter } from '../../redux/filter/filterSelector';
import { fetchAllcustomers } from '../../api/customers/customersApi';

const Filter = ({ placeholder }) => {

    const dispatch = useDispatch();
    const filter = useSelector(getFilter)
    console.log('filter', filter )

  const onChangeFilter = e => {
    const filter = e.currentTarget.value.trim();
      dispatch(update(filter));
    };

    const handelClick = () => {
        dispatch(fetchAllcustomers({ page:1, limit:5, name: filter }))
        
    }
    
    return (
        <FilterStyled>
            <input placeholder={placeholder} onChange={onChangeFilter}/>
            <button onClick={handelClick}><FilterIcon/>Filter</button>
        </FilterStyled>
    )
}

export default Filter