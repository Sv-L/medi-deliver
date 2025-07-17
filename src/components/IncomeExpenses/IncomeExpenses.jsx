import { useDispatch, useSelector } from 'react-redux';
import { useEffect} from 'react';
import { fetchAllTransactions } from '../../api/transactions/transactionsApi';
import { getTransaction } from '../../redux/transactions/transactionsSelectors';
import Table from '../Table';

const IncomeExpenses = () => {

  const transactions = useSelector(getTransaction)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllTransactions({}));
  }, [dispatch, fetchAllTransactions]);
  
const tableSchemas = [
    { 'Type': 'type' },
    { 'Adresse': 'name' },
    { 'Amount': 'amount' },
  ];

  const strikeThrough = (row, index) => {
    const shouldStrikeThrough = row.type === "Error" && index === 2
    return shouldStrikeThrough ? { textDecoration: 'line-through' } : {};               
};

  return transactions ? 
    <Table
      caption={'Income/Expenses'}
      tableSchemas={tableSchemas}
      data={transactions}
      columnsTitel={false}
      styles = {strikeThrough}
    />
   :<p>Here are no Income/Expenses.</p>
};
export default IncomeExpenses;
