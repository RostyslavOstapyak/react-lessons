import React from 'react';
import ProductsList from './ProductsList.jsx';
import CartTitle from './CartTitle.jsx';

class ShoppingCart extends React.Component {
  state = {
    cartItems: [
      {
        id: '1',
        name: 'Iphone 11',
        price: 999,
      },
      {
        id: '2',
        name: 'Ipad Pro',
        price: 799,
      },
    ],
  };

  render() {
    const count = this.state.cartItems.length;
    return (
      <div className="column">
        <CartTitle userName={this.props.userName} count={count} />
        <ProductsList cartItems={this.state.cartItems} />
      </div>
    );
  }
}

export default ShoppingCart;
