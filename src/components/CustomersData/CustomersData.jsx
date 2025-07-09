import { useDispatch, useSelector } from 'react-redux';
import { toLocaleDateString } from '../../helpers/toLocaleDateString';
import { CustomersDataStyled } from './CustomersDataStyled';
import { getCuctomers } from '../../redux/customers/customersSelectors';
import { useEffect } from 'react';
import { fetchAllcustomers } from '../../api/customers/customersApi';

const CustomersData = () => {
  const customers = useSelector(getCuctomers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllcustomers({}));
  }, [dispatch, fetchAllcustomers]);
  
  return customers ?(
    <CustomersDataStyled>
      <table>
      <caption>Customers Data</caption>
      <thead>
        <tr>
          <th>User Info</th>
          <th>Email</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Register date</th>
        </tr>
      </thead>
      <tbody>
        {customers.map(function (customer) {
          const date = toLocaleDateString(customer['register_date']);
          return (
            <tr key={customer['_id']}>
              <td>
                      <div><img src={customer.image} alt="avatar" /> {customer.name}</div>
              </td>
              <td>{customer.email}</td>
              <td>{customer.address}</td>
              <td>{customer.phone}</td>
              <td>{date}</td>
            </tr>
          );
        })}
        </tbody>
        </table>
    </CustomersDataStyled>
  ):<p>122</p>;
};

export default CustomersData;
