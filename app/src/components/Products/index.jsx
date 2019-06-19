import React from 'react';

import './Products.scss';

import Product from '../Product';

const data = [
  {
    name: 'Title with Two Very Very Long Lines',

    description:
      'And a very long description to boot. Why bother describing something with so many words?',
    id: 1
  },
  {
    name: 'One Short Title',
    description:
      'And a very long description to boot. Why bother describing something with so many words?',
    id: 2
  },
  {
    name: 'One Short Title',
    description: 'With a short description',
    id: 3
  },
  {
    name: 'Title with Two Very Very Long Lines',
    description: 'With a short description',
    id: 4
  },
  {
    name: 'Title with Two Very Very Long Lines',
    description:
      'And a very long description to boot. Why bother describing something with so many words?',
    id: 5
  },
  {
    name: 'Title with Two Very Very Long Lines',
    description:
      'And a very long description to boot. Why bother describing something with so many words?',
    id: 6
  }
];

const Products = () => (
  <div className='Products'>
    {data.map(({ name, description, id }) => (
      <Product key={id} name={name} description={description} id={id} />
    ))}
  </div>
);

export default Products;
