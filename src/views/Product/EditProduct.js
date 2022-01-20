import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { getProductById, updateProductById, deleteProduct } from '../../services/products';
import EditProductComp from '../../components/Products/EditProductComp';
import { getUserById } from '../../services/users';
import { client } from '../../services/client';

export default function EditProduct() {
  const [product, setProduct] = useState({
    title: '',
    description: '',
    price: '',
    image: '',
    category: '',
    condition: '',
  });
  const history = useHistory();
  const [alert, setAlert] = useState('');
  const { id } = useParams();
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

  const onStateChange = ({ target }) => {
    setProduct((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const resp = await updateProductById(product.id, {
        title: product.title,
        description: product.description,
        image: product.image,
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
        image={product.image}
        category={product.category}
        condition={product.condition}
        setProduct={setProduct}
        onStateChange={onStateChange}
        onSubmit={onSubmit}
      />
    </>
  );
}
