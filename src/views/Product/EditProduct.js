import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { getProductById, updateProductById } from '../../services/products';
import EditProductComp from '../../components/Products/EditProductComp';

export default function EditProduct() {
  const [input, setInput] = useState({
    title: '',
    description: '',
    price: '',
    image: '',
    category: '',
    condition: '',
  });
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

  useEffect(() => {
    setInput(product);
  }, [product]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await getProductById(id);
      setProduct(resp);
    };
    fetchData();
  }, [id]);

  const onChange = ({ target }) => {
    setInput((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const resp = await updateProductById(product.id, {
        title: input.title,
        description: input.description,
        image: input.image,
        category: input.category,
        condition: input.condition,
      });
      history.push(`/products/${resp[0].id}`);
    } catch (e) {
      setAlert(e.message ? e.message : 'Something went wrong:');
    }
  };

  return (
    <>
      <span>Edit Product</span>
      <p>{alert}</p>
      <EditProductComp
        title={input.title}
        description={input.description}
        price={input.price}
        image={input.image}
        category={input.category}
        condition={input.condition}
        onChange={input.onChange}
        onSubmit={input.onSubmit}
      />
    </>
  );
}
