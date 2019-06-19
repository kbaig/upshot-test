import React from 'react';

import './App.scss';

import Nav from '../Nav';
import Header from '../Header';
import Section from '../Section';
import Menu from '../Menu';
import Products from '../Products';

const App = () => (
  <div className='App'>
    <Nav />
    <Header />
    <Section>
      <Menu />
      <Products />
    </Section>
  </div>
);

export default App;
