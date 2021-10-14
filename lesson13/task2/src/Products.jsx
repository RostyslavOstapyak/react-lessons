import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Product from './Product.jsx';

const Products = () => (
  <div className="page__content">
    <h1>Products</h1>
    <ul className="navigation">
      <li className="navigation__item">
        <Link to="/products/ball">Ball</Link>
      </li>
      <li className="navigation__item">
        <Link to="/products/book">Book</Link>
      </li>
    </ul>
    <Switch>
      <Route exact path="/products">
        <span>Select a product please</span>
      </Route>
      <Route path="/products/:productId">
        <Product />
      </Route>
    </Switch>
  </div>
);

export default Products;
