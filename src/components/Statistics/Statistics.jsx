import MoneyImg from '../../assets/images/money.svg';
import CustomersImg from '../../assets/images/ci_users.svg';
import { StatisticsStyled } from './StatisticsStyled';
import { useSelector } from 'react-redux';
import { getCustomersCount } from '../../redux/customers/customersSelectors';

const Statistics = () => {

  const customersCount = useSelector(getCustomersCount);
  return (
    <StatisticsStyled>
      <li>
        <a>
          <div>
            <img src={MoneyImg} alt="products" />
            <h3>All products</h3>
          </div>
          <p>111</p>
        </a>
      </li>
      <li>
        <a>
          <div>
            <img src={MoneyImg} alt="suppliers" />
            <h3>All suppliers</h3>
          </div>
          <p>222</p>
        </a>
      </li>
      <li>
        <a>
          <div>
            <img src={CustomersImg} alt="customers" />
            <h3>All customers</h3>
          </div>
          <p>{customersCount}</p>
        </a>
      </li>
    </StatisticsStyled>
  );
};

export default Statistics;
