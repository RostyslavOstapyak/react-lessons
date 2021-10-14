import React from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
  const { productId } = useParams();
  return <div className="product">{`Product is a ${productId}`}</div>;
};

export default Product;
