import MoneyImg from '../../assets/images/money.svg';
import CustomersImg from '../../assets/images/ci_users.svg';
import { StatisticsStyled } from './StatisticsStyled';

const Statistics = () => {
  return (
    <StatisticsStyled>
      <li>
        <a>
          <div>
            <img src={MoneyImg} alt="products" />
            <p>All products</p>
          </div>
          <p>111</p>
        </a>
      </li>
      <li>
        <a>
          <div>
            <img src={MoneyImg} alt="suppliers" />
            <p>All suppliers</p>
          </div>
          <p>222</p>
        </a>
      </li>
      <li>
        <a>
          <div>
            <img src={CustomersImg} alt="customers" />
            <p>All customers</p>
          </div>
          <p>333</p>
        </a>
      </li>
    </StatisticsStyled>
  );
};

export default Statistics;
