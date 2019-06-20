import React from 'react';

import './Products.scss';
import data from '../../data/products';

import Product from '../Product';

const Products = ({ ...rest }) => (
  <ul className='Products' {...rest}>
    {data.map(product => (
      <Product key={product.id} {...product} />
    ))}
  </ul>
);

export default Products;
