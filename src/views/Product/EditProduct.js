import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
  getProductById,
  updateProductById,
  deleteProduct,
  fetchProducts,
} from '../../services/products';
import EditProductComp from '../../components/Products/EditProductComp';
import { getUserById } from '../../services/users';
import { client } from '../../services/client';

export default function EditProduct() {
  const [product, setProduct] = useState({
    title: '',
    description: '',
    price: '',
    file: null,
    category: '',
    condition: '',
  });
  const history = useHistory();
  const [alert, setAlert] = useState('');
  const { id } = useParams();
  const [productToDelete, setProductToDelete] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await getProductById(id);
      const user = await getUserById(client.auth.session().user.id);
      setLoading(false);
      if (user.id !== resp.user_id) {
        history.push(`/products/${resp.id}`);
      } else {
        setProduct(resp);
      }
    };
    fetchData();
  }, [id, history]);

  const handleDelete = async (productId) => {
    const shouldDelete = confirm('Are you sure you want to delete this product');

    if (shouldDelete) {
      await deleteProduct(productId);
      history.push('/');
    }
  };

  const onStateChange = ({ target }) => {
    if (target.name === 'file') {
      setProduct((prevState) => ({ ...prevState, [target.name]: target.files[0] }));
    } else {
      setProduct((prevState) => ({ ...prevState, [target.name]: target.value }));
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const resp = await updateProductById(product.id, {
        title: product.title,
        description: product.description,
        file: product.file,
        category: product.category,
        condition: product.condition,
      });
      history.push(`/products/${resp[0].id}`);
    } catch (e) {
      setAlert(e.message ? e.message : 'Something went wrong:');
    }
  };

  if (loading) return <h1>Finding your Product!</h1>;

  return (
    <>
      <span>Edit Product</span>
      <p>{alert}</p>
      <EditProductComp
        title={product.title}
        description={product.description}
        price={product.price}
        category={product.category}
        condition={product.condition}
        setProduct={setProduct}
        onStateChange={onStateChange}
        onSubmit={onSubmit}
        productToDelete={productToDelete}
        setProductToDelete={setProductToDelete}
        handleDelete={handleDelete}
        id={id}
      />
    </>
  );
}
