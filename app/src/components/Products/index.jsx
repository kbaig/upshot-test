import React from 'react';

import './Products.scss';
import bike from '../../assets/bike.jpg';
import shoe from '../../assets/shoe.jpg';
import watch from '../../assets/watch.jpg';

import Product from '../Product';

const data = [
  {
    title: 'Title with Two Very Very Long Lines',

    description:
      'And a very long description to boot. Why bother describing something with so many words?',
    id: 1,
    image: {
      src: shoe,
      alt: ''
    }
  },
  {
    title: 'One Short Title',
    description:
      'And a very long description to boot. Why bother describing something with so many words?',
    id: 2,
    image: {
      src: watch,
      alt: ''
    }
  },
  {
    title: 'One Short Title',
    description: 'With a short description',
    id: 3,
    image: { src: shoe, alt: '' }
  },
  {
    title: 'Title with Two Very Very Long Lines',
    description: 'With a short description',
    id: 4,
    image: { src: bike, alt: '' }
  },
  {
    title: 'Title with Two Very Very Long Lines',
    description:
      'And a very long description to boot. Why bother describing something with so many words?',
    id: 5,
    image: { src: shoe, alt: '' }
  },
  {
    title: 'Title with Two Very Very Long Lines',
    description:
      'And a very long description to boot. Why bother describing something with so many words?',
    id: 6,
    image: {
      src: watch,
      alt: ''
    }
  }
];

const Products = () => (
  <div className='Products'>
    {data.map(product => (
      <Product key={product.id} {...product} />
    ))}
  </div>
);

export default Products;
