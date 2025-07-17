import Filter from '../../components/Filter';
import AllOrders from '../../components/AllOrders';
import PaginationButtons from '../../components/PaginationButtons';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../redux/filter/filterSelector';
import { getOrdersCount } from '../../redux/orders/orderSelectors';
import { fetchAllorders } from '../../api/orders/ordersApi';

const OrdersPage = () => {
  const [activeBtn, setActiveBtn] = useState(1);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const count = useSelector(getOrdersCount);
  const buttonCount = Math.ceil(count / 5);

  const handelClick = () => {
    dispatch(
      fetchAllorders({
        page: 1,
        limit: 5,
        name: filter,
      })
    );
    setActiveBtn(1);
  };

  return (
    <>
      <Filter placeholder={'User Name'} onClick={handelClick} />
      <AllOrders />
      <PaginationButtons
        activeBtn={activeBtn}
        setActiveBtn={setActiveBtn}
        buttonCount={buttonCount}
        fetch={fetchAllorders}
      />
    </>
  );
};

export default OrdersPage;
