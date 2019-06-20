import React from 'react';

import './Menu.scss';

const data = [
  {
    id: 1,
    content: 'Footwear',
    path: '/footwear'
  },
  {
    id: 2,
    content: 'Water Fountains',
    path: '/water-fountains'
  },
  {
    id: 3,
    content: 'Garage Door Openers',
    path: '/garage-door-openers'
  },
  {
    id: 4,
    content: 'Smart Home Tech',
    path: '/smart-home-tech'
  },
  {
    id: 5,
    content: 'Beverages',
    path: '/beverages'
  },
  {
    id: 6,
    content: 'Education',
    path: '/education'
  }
];

const Menu = ({ ...rest }) => (
  <ul className='Menu' {...rest}>
    {data.map(({ id, content, path }) => (
      <li key={id} className='Menu__ListItem'>
        <a href={path} className='Menu__ListItemLink'>
          {content}
        </a>
      </li>
    ))}
  </ul>
);

export default Menu;
