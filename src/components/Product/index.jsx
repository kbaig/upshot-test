import React from 'react';

import './Product.scss';

const Product = ({ title, description, id, image: { src, alt }, ...rest }) => (
  <li className='Product' {...rest}>
    <img src={src} alt={alt} className='Product__Image' />
    <h2 className='Product__Title'>{title}</h2>
    <div className='Product__Description'>{description}</div>
    <a className='Product__CTA' href={`/products/${id}`}>
      BUY NOW
    </a>
  </li>
);

export default Product;
