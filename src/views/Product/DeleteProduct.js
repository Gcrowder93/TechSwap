import React, { useState, useEffect } from 'react';
import EditProductComp from '../../components/Products/EditProductComp';
import { deleteProduct } from '../../services/products';

export default function DeleteProduct() {
  const [productToDelete, setProductToDelete] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await deleteProduct();
      setProductToDelete(resp);
    };
    fetchData();
  }, []);
  return (
    <div>
      <EditProductComp productToDelete={productToDelete} />
    </div>
  );
}
