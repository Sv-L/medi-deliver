import { useEffect, useState } from 'react';
import CustomersData from '../../components/CustomersData';
import Filter from '../../components/Filter';
import PaginationButtons from '../../components/PaginationButtons';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../redux/filter/filterSelector';
import { fetchAllcustomers } from '../../api/customers/customersApi';
import { getCustomersCount } from '../../redux/customers/customersSelectors';

const CustomersPage = () => {
  const [activeBtn, setActiveBtn] = useState(1);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
    const count = useSelector(getCustomersCount);
  const buttonCount = Math.ceil(count / 5);

  // const abortController = new AbortController();

  //     useEffect(() => {
  //         return () => {
  //     //   abortController.abort();
  //     };
  //   }, [ dispatch]);

  const handelClick = () => {
    dispatch(
      fetchAllcustomers({
        page: 1,
        limit: 5,
        name: filter,
        //   signal: abortController.signal
      })
    );
    setActiveBtn(1);
  };

  return (
    <>
      <Filter placeholder={'User Name'} onClick={handelClick} />
      <CustomersData />
      <PaginationButtons activeBtn={activeBtn} setActiveBtn={setActiveBtn} buttonCount={buttonCount} fetch={fetchAllcustomers} />
    </>
  );
};

export default CustomersPage;
