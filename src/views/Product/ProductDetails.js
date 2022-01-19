import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetailCard from '../../components/Products/ProductDetailCard';
import { getProductById } from '../../services/products';

export default function ProductDetails() {
  // const { id } = useParams();
  const params = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProductById(params.id);
      setProduct(data);
      setLoading(false);
    };
    // getProductById(id).then(({ data }) => setProduct(data));
    fetchData();
  }, [params.id]);
  if (loading) {
    return <h1>loading</h1>;
  }

  return (
    <div className="product-detail">
      <div key={product.id}>
        <ProductDetailCard product={product} />
      </div>
    </div>
  );
}

{
  /* <h1>{product.title}</h1>
<img src={product.image} />
<h3>{product.price}</h3>
<h3>{product.condition}</h3>
<p>{product.description}</p> */
}
