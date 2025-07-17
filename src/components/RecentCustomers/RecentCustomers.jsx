import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCuctomers } from '../../redux/customers/customersSelectors';
import { fetchAllcustomers } from '../../api/customers/customersApi';
import Table from '../Table';
import SwitchButton from './SwitchButton/SwitchButton';


const RecentCustomers = () => {
  const [toggled, setToggled] = useState(false);
  const customers = useSelector(getCuctomers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllcustomers({}));
    if (toggled) {
      dispatch(fetchAllcustomers({ page: 2 }));
    }
  }, [toggled, dispatch, fetchAllcustomers]);

  const tableSchemas = [
    { 'User Info': ['name', { img: 'image' }] },
    { 'Email': 'email' },
    { 'Spent': 'spent' },,
  ];

  return customers ? (
    <>
      <Table
        caption={'Recent Customers'}
        tableSchemas={tableSchemas}
        data={customers}
      />
      <SwitchButton toggled={toggled} setToggled={setToggled} />
    </>
  ) : (
    <p>Here are no customers.</p>
  );
};

export default RecentCustomers;
