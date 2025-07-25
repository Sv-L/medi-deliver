import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Table from '../Table/index.js';
import { getProducts } from '../../redux/products/productSelectors.js';
import {
  deleteProduct,
  fetchAllProducts,
  undateProduct,
} from '../../api/products/productsApi.js';
import DeleteIcon from '../../assets/images/delete.svg?react';
import EditIcon from '../../assets/images/edit.svg?react';
import Modal from '../Modal';
import ProductModal from '../ProductModal';


const ProductsData = () => {
  const [showProduct, setShowProduct] = useState(false);
  const products = useSelector(getProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts({}));
  }, [dispatch]);

  const onClickDeletBtn = product => {
    const id = product['_id'];
    dispatch(deleteProduct(id));
  };

  const onClickEditBtn = (product) => {
    setShowProduct(product)
  };

  const cancelClick = () => {
    setShowProduct(false)
  }
 
  const onSubmitHandler = (data) => {
    const changedFields = {'_id': data["_id"]};
    const editedProduct = products.find(product=>data['_id'] === product['_id'])
  
    for (const key in data) {
      if (data[key] !== editedProduct[key]) {
        changedFields[key] = data[key];
      }
    }

    if ( Object.keys(changedFields).length > 1) {
     dispatch(undateProduct({ ...changedFields}));
    }

  };

  const tableSchemas = [
    { 'Product Info': 'name' },
    { Category: 'category' },
    { Stock: 'stock' },
    { Suppliers: 'suppliers' },
    { Price: 'price' },
    {
      Action: [
        { button: { name: 'edit', icon: <EditIcon/>, onClick: onClickEditBtn } },
        {
          button: {
            name: 'delete',
            icon: <DeleteIcon/>,
            onClick: onClickDeletBtn,
          },
        },
      ],
    },
  ];

  return (
    <>
      {products ? (
        <Table
          caption={'All products'}
          tableSchemas={tableSchemas}
          data={products}
        />
      ) : (
        <p>Here are no products.</p>
      )}
      {showProduct && (
        <Modal closeModal={onClickEditBtn} className={'product'}>
          <ProductModal caption='Edit data' product={showProduct} cancelClick={cancelClick} onSubmit={onSubmitHandler} btnLabel='Save'/>
        </Modal>
      )}
    </>
  );
};

export default ProductsData;
