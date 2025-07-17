import { useDispatch, useSelector } from 'react-redux';
import { getCuctomers} from '../../redux/customers/customersSelectors';
import { useEffect } from 'react';
import { fetchAllcustomers } from '../../api/customers/customersApi';
import Table from '../Table';

const CustomersData = () => {
  const customers = useSelector(getCuctomers);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchAllcustomers({}));
  }, [dispatch, fetchAllcustomers]);

  const tableSchemas = [
    { 'User Info': ['name', { img: 'image' }] },
    { 'Email': 'email' },
    { 'Address': 'address' },
    { 'Phone': 'phone' },
    { 'Register date': 'register_date' },
  ];

  return customers ? (

      <Table caption={'Customers Data'}
        tableSchemas={tableSchemas}
        data={customers}
    />
  ):<p>Here are no customers.</p>;
};

export default CustomersData;
