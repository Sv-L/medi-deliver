import { useEffect, useState } from 'react';
import {
  RecentCustomersButtonStyled,
  RecentCustomersStyled,
} from './RecentCustomersStyled';
import { useDispatch, useSelector } from 'react-redux';
import { getCuctomers } from '../../redux/customers/customersSelectors';
import { fetchAllcustomers } from '../../api/customers/customersApi';

const RecentCustomers = () => {
  const [toggled, setToggled] = useState(false);
  const customers = useSelector(getCuctomers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllcustomers({}));

    if (toggled) {
      dispatch(fetchAllcustomers({page:2}));
    }
  }, [toggled,dispatch, fetchAllcustomers]);
  
  

  return customers ? (
    <>
      <RecentCustomersStyled>
        <caption>Recent Customers</caption>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Spend</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(({ _id, name, image, email, spent }) => (
            <tr key={_id}>
              <td>
                <img src={image} alt="avatar" /> {name}
              </td>
              <td>{email}</td>
              <td>{spent}</td>
            </tr>
          ))}
        </tbody>
      </RecentCustomersStyled>
      <RecentCustomersButtonStyled
        className={toggled ? 'toggled' : ''}
        onClick={() => setToggled(!toggled)}
      >
        <div></div>
      </RecentCustomersButtonStyled>
    </>
  ) : (
    <p>here are no customers.</p>
  );
};

export default RecentCustomers;
