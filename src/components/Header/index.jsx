import React from 'react';

import './Header.scss';
import data from '../../data/hero';

import Nav from '../Nav';

const Header = ({ ...rest }) => (
  <header className='Header' {...rest}>
    <Nav />
    <h1 className='Header__Hero'>{data.hero}</h1>
  </header>
);

export default Header;
