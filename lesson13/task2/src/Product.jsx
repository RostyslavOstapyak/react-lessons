import React from 'react';

const Product = ({ match }) => (
  <div className="product">{`Product is a ${match.params.productId}`}</div>
);

export default Product;
