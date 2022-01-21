import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import ProductForm from '../../components/Products/ProductForm';
import { createProduct } from '../../services/products';
import './AddEdit.css';
import { getUser, getUserById } from '../../services/users';

export default function AddProduct() {
  const [title, setTitle] = useState([]);
  const [description, setDescription] = useState([]);
  const [price, setPrice] = useState(0);
  const [categories, setCategories] = useState([]);
  const [condition, setCondition] = useState([]);
  const [alert, setAlert] = useState([]);
  const [file, setFile] = useState(null);
  const [userId, setUserId] = useState({});
  const history = useHistory();

  const onChange = ({ target }) => {
    switch (target.name) {
      case 'title':
        return setTitle(target.value);
      case 'description':
        return setDescription(target.value);
      case 'price':
        return setPrice(target.value);
      case 'categories':
        return setCategories(target.value);
      case 'condition':
        return setCondition(target.value);
      case 'file':
        return setFile(target.files[0]);
      default:
        return false;
    }
  };

  const user = getUser();

  useEffect(() => {
    const fetchUser = async () => {
      const resp = await getUserById(user.user.id);
      setUserId(resp);
    };
    fetchUser();
  }, [user.user.id]);

  const user_id = userId.id;

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await createProduct({
        user_id,
        file,
        title,
        description,
        price,
        categories,
        condition,
      });
      history.push(`/products/${resp[0].id}`);
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
        {...categories}
        {...condition}
        onSubmit={onSubmit}
        onChange={onChange}
      />
    </div>
  );
}
