import { useState } from 'react';
import { customersRev } from './customers';

import {
  RecentCustomersButtonStyled,
  RecentCustomersStyled,
} from './RecentCustomersStyled';

const RecentCustomers = () => {
  const [toggled, setToggled] = useState(false);
  let slice = toggled ? [5, 10] : [0, 5];
  const customers = customersRev.slice(...slice);

  return (
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
          {customers.map(customer => (
            <tr key={customer.id}>
              <td>
                <img src={customer.img} alt="avatar" /> {customer.name}
              </td>
              <td>{customer.email}</td>
              <td>{customer.spend}</td>
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
  );
};

export default RecentCustomers;
