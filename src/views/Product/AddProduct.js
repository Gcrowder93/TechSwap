import React from 'react';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import ProductForm from '../../components/Products/ProductForm';
import { createProduct } from '../../services/products';

export default function AddProduct() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [catagories, setCatagories] = useState('');
  const [condition, setCondition] = useState('');
  const [alert, setAlert] = useState('');
  const history = useHistory();

  const onChange = ({ target }) => {
    switch (target.title) {
      case 'title':
        return setTitle(target.value);
      case 'description':
        return setDescription(target.value);
      case 'price':
        return setPrice(target.price);
      case 'image':
        return setImage(target.image);
      case 'catagories':
        return setCatagories(target.catagories);
      case 'condition':
        return setCondition(target.condition);
      default:
        return false;
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const resp = createProduct({ title, description, price, image, catagories, condition });
      history.push(`/procucts/${resp[0].id}`);
    } catch (error) {
      setAlert(error.message);
    }
  };

  return (
    <div>
      <Link></Link>
      <h1>Add Product page</h1>
      <p>{alert}</p>
      <ProductForm
        title={title}
        description={description}
        price={price}
        image={image}
        catagories={catagories}
        condition={condition}
        onChange={onChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}
