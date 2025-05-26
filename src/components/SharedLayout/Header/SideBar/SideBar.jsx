import Dashboard from '../../../../assets/images/dashboard.svg';
import Orders from '../../../../assets/images/shopping-cart.svg';
import Products from '../../../../assets/images/flask.svg';
import Suppliers from '../../../../assets/images/pharmacy.svg';
import Customers from '../../../../assets/images/users.svg';
import { SideBarStyled } from './SideBarStyled';
import { NavLink } from 'react-router';

const SideBar = () => {
  return (
    <SideBarStyled>
      <li>
        <NavLink to="/dashboard">
          <img src={Dashboard} alt="Dashboard" />
        </NavLink>
      </li>
      <li>
        <NavLink to="/orders">
          <img src={Orders} alt="Orders" />
        </NavLink>
      </li>
      <li>
        <NavLink to="/products">
          <img src={Products} alt="Products" />
        </NavLink>
      </li>
      <li>
        <NavLink to="/suppliers">
          <img src={Suppliers} alt="Suppliers" />
        </NavLink>
      </li>
      <li>
        <NavLink to="/customers">
          <img src={Customers} alt="Customers" />
        </NavLink>
      </li>
    </SideBarStyled>
  );
};

export default SideBar;
