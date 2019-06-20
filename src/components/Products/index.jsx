import React from 'react';

import './Products.scss';
import data from '../../data/products';

import Product from '../Product';

const Products = ({ ...rest }) => (
  <div className='Products' {...rest}>
    {data.map(product => (
      <Product key={product.id} {...product} />
    ))}
  </div>
);

export default Products;
