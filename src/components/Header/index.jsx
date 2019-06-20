import React from 'react';

import './Header.scss';

import Nav from '../Nav';

const Header = () => (
  <header className='Header'>
    <Nav />
    <h1 className='Header__Hero'>THIS IS A HEADLINE.</h1>
  </header>
);

export default Header;
