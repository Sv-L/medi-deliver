import { transactions } from './transactions';

const IncomeExpenses = () => {
  return (
    <table>
      <caption>Income/Expenses</caption>
      <thead>
        <tr>
          <td>Today</td></tr>
      </thead>
      <tbody>
        {transactions.map(function (transaction) {
          const error = transaction.storno;
          const isIncome = Number(transaction.sum) > 0;
          const transactionType = error
            ? 'Error'
            : isIncome
            ? 'Income'
            : 'Expense';

          const sum = isIncome ? `+${transaction.sum}` : `${transaction.sum}`;

          return (
            <tr
              key={transaction.id}
            >
              <td>{transactionType}</td>
              <td>{transaction.address}</td>
              <td style={{ textDecoration: error ? 'line-through' : 'none' }}>{sum}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default IncomeExpenses;
