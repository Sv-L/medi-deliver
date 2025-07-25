import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { FormStyled } from './ProductModalStyled';
import Button from '../Button';

const schema = yup.object().shape({
  name: yup.string().required(),
  category: yup.string().required(),
  suppliers: yup.string().required(),
  stock: yup.string().required(),
  price: yup.string().required(),
});

const ProductModal = ({ caption, product, btnLabel,onSubmit, cancelClick }) => {
  
  const
    {
    register,
    handleSubmit,
    formState: { errors },
    watch
    }
      = useForm({
    resolver: yupResolver(schema),
        defaultValues: {
      _id:product ? product['_id'] : '',
      name: product ? product.name : '',
      category: product ? product.category : '',
      suppliers: product ? product.suppliers : '',
      stock: product ? product.stock : '',
      price: product ? product.price : '',
        },
  });
  const dispatch = useDispatch();
  // const watchedValues = watch();
  // console.log('watchedValues', watchedValues)




  return (
    <>
      <h3>{caption}</h3>
      <FormStyled onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('_id')}
          type="_id"
          hidden
        />
        <input
          {...register('name')}
          placeholder="Product Info"
          type="name"
          required
        />

        <input
          {...register('category')}
          placeholder="Category"
          type="category"
          required
        />

        <input
          {...register('suppliers')}
          placeholder="Suppliers"
          type="suppliers"
          required
        />
        <input
          {...register('stock')}
          placeholder="Stock"
          type="stock"
          required
        />
        <input
          {...register('price')}
          placeholder="Price"
          type="price"
          required
        />
        <div>
          <Button type="submit" label={btnLabel} className="submit" />
          <Button label="Cancel" onClick={cancelClick} className="cancel" />
        </div>
      </FormStyled>
    </>
  );
};

export default ProductModal;
