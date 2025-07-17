import { useDispatch, useSelector } from "react-redux";
import Table from "../Table"
import { getOrders } from "../../redux/orders/orderSelectors";
import { useEffect } from "react";
import { fetchAllorders } from "../../api/orders/ordersApi";

const AllOrders = () => {
    const orders = useSelector(getOrders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllorders({}));
  }, [dispatch, fetchAllorders]);

    const tableSchemas = [
    { 'User Info': ['name', { img: 'photo' }] },
    { 'Address': 'address' },
    { 'Products': 'products' },
    { 'Order date': 'order_date' },
    { 'Price': 'price' },
    {'Status':'status'},
  ];
    
    return (
        <Table
        caption={'All Orders'}
        tableSchemas={tableSchemas}
            data={orders}
        />
    )
}
export default AllOrders