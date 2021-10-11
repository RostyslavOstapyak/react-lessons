import React from 'react';

const CartTitle = ({ userName, count }) => (
  <div className="cart-title">{`${userName}, you added ${count} items`}</div>
);

export default CartTitle;
