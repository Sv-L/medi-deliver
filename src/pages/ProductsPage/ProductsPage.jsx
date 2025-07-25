import { useState } from "react";
import Filter from "../../components/Filter"
import { useDispatch, useSelector } from "react-redux";
import { getFilter } from "../../redux/filter/filterSelector";
import { getProductsCount } from "../../redux/products/productSelectors";
import { fetchAllProducts } from '../../api/products/productsApi.js'
import PaginationButtons from "../../components/PaginationButtons/PaginationButtons.jsx";
import ProductsData from "../../components/ProductsData";
import Button from "../../components/Button/Button.jsx";
import Add from '../../assets/images/add.svg?react';


const ProductsPage = () => {

    const [activeBtn, setActiveBtn] = useState(1);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
    const count = useSelector(getProductsCount);
  const buttonCount = Math.ceil(count / 5);

    const handelClick = () => {
        dispatch(
          fetchAllProducts({
            page: 1,
            limit: 5,
            name: filter,
          })
        );
        setActiveBtn(1);
  };

   const onClickAddtBtn = () => {
    console.log('onClickAddtBtn');
  };
    
    return (
      <>
        <>
        <Filter placeholder={'Product  Name'} onClick={handelClick} />      
        <Button
          className="add-product"
          onClick={onClickAddtBtn}
          children={<Add />}
          label="Add a new product"
        />
        </>
            <ProductsData/>
            <PaginationButtons activeBtn={activeBtn} setActiveBtn={setActiveBtn} buttonCount={buttonCount} fetch={fetchAllProducts} />
            </>
    )
}

export default ProductsPage