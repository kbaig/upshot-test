import React from 'react';

import './Nav.scss';
import logo from '../../assets/logo.svg';

const data = [
  {
    content: 'Home',
    path: '/home'
  },
  {
    content: 'About',
    path: '/about'
  },
  {
    content: 'Products',
    path: '/products'
  },
  {
    content: 'Help',
    path: '/help'
  }
];

const Nav = ({ ...rest }) => (
  <nav className='Nav' {...rest}>
    <a className='Nav__Logo' href='/'>
      <img src={logo} alt='home' className='Nav__LogoImage' />
    </a>
    <ul className='Nav__List'>
      {data.map(({ content, path }, i) => (
        <li key={i} className='Nav__ListItem'>
          <a href={path} className='Nav__ListItemLink'>
            {content}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;
