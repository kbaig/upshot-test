import React from 'react';

import './Product.scss';

const Product = ({ title, description, id }) => (
  <div className='Product'>
    <div>{title}</div>
    <div>{description}</div>
    <div>link to {`/products/${id}`}</div>
  </div>
);

export default Product;
