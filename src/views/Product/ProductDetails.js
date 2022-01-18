import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../services/products';

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProductById(id);
      setProduct(data);
    };
    // getProductById(id).then(({ data }) => setProduct(data));
    fetchData();
  }, [id]);

  return (
    <div className="product-detail">
      <h1>{product.title}</h1>
      <img src={product.image} />
      <h3>{product.price}</h3>
      <h3>{product.condition}</h3>
      <p>{product.description}</p>
    </div>
  );
}
