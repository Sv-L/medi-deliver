import { Link } from 'react-router-dom';
import Dashboard from '../../../../assets/images/dashboard.svg';
import Orders from '../../../../assets/images/shopping-cart.svg';
import Products from '../../../../assets/images/flask.svg';
import Customers from '../../../../assets/images/pharmacy.svg';
import Suppliers from '../../../../assets/images/users.svg';

const SideBar = () => {
  return (
    <ul>
      <li>
        <Link to="/dashboard">
          <img src={Dashboard} alt="Dashboard" />
        </Link>
      </li>
      <li>
        <Link to="/orders">
          <img src={Orders} alt="Orders" />
        </Link>
      </li>
      <li>
        <Link to="/products">
          <img src={Products} alt="Products" />
        </Link>
      </li>
      <li>
        <Link to="/customers">
          <img src={Customers} alt="Customers" />
        </Link>
      </li>
      <li>
        <Link to="/suppliers">
          <img src={Suppliers} alt="Suppliers" />
        </Link>
      </li>
    </ul>
  );
};

export default SideBar;
