import React from 'react';

import './Menu.scss';
import data from '../../data/menu';

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
