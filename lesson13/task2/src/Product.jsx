import React from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
  const { productId } = useParams();
  return <div className="product">{productId}</div>; // how should i figure this out?
};

export default Product;
