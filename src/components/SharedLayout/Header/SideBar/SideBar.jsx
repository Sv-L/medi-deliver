import Dashboard from '../../../../assets/images/dashboard.svg?react';
import Orders from '../../../../assets/images/shopping-cart.svg?react';
import Products from '../../../../assets/images/flask.svg?react';
import Suppliers from '../../../../assets/images/pharmacy.svg?react';
import Customers from '../../../../assets/images/users.svg?react';
import { SideBarStyled } from './SideBarStyled';
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <SideBarStyled>
      <li>
        <NavLink to="/dashboard">
          <Dashboard/>
        </NavLink>
      </li>
      <li>
        <NavLink to="/orders">
          <Orders/>
        </NavLink>
      </li>
      <li>
        <NavLink to="/products">
          <Products/>
        </NavLink>
      </li>
      <li>
        <NavLink to="/suppliers">
          <Suppliers/>
        </NavLink>
      </li>
      <li>
        <NavLink to="/customers">
          <Customers/>
        </NavLink>
      </li>
    </SideBarStyled>
  );
};

export default SideBar;
