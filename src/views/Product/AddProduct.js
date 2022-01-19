import React from 'react';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import ProductForm from '../../components/Products/ProductForm';
import { createProduct } from '../../services/products';

export default function AddProduct() {
  const [title, setTitle] = useState([]);
  const [description, setDescription] = useState([]);
  const [price, setPrice] = useState([]);
  const [image, setImage] = useState([]);
  const [categories, setCategories] = useState([]);
  const [condition, setCondition] = useState([]);
  const [alert, setAlert] = useState([]);
  const history = useHistory();

  // const onChange = ({ target }) => {
  //   switch (target.title) {
  //     case 'title':
  //       return setTitle(target.value);
  //     case 'description':
  //       return setDescription(target.value);
  //     case 'price':
  //       return setPrice(target.value);
  //     case 'image':
  //       return setImage(target.value);
  //     case 'categories':
  //       return setCategories(target.value);
  //     case 'condition':
  //       return setCondition(target.value);
  //     default:
  //       return false;
  //   }
  // };

  const updateProductState = (key, value) => {
    title[key] = value;
    setTitle({ ...title });

    description[key] = value;
    setDescription({ ...description });

    price[key] = value;
    setPrice({ ...price });

    image[key] = value;
    setImage({ ...image });

    categories[key] = value;
    setCategories({ ...categories });

    condition[key] = value;
    setCondition({ ...condition });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const resp = createProduct({ title, description, price, image, categories, condition });
      history.push(`/procucts/${resp[0].id}`);
    } catch (error) {
      setAlert(error.message);
    }
  };

  return (
    <div>
      <Link to="/">Products</Link>
      <h1>Add Product page</h1>
      <p>{alert}</p>
      <ProductForm
        {...title}
        {...description}
        {...price}
        {...image}
        {...categories}
        {...condition}
        onSubmit={onSubmit}
        updateProductState={updateProductState}
      />
    </div>
  );
}
