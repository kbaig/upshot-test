import React from 'react';

import './App.scss';

import Helmet from '../Helmet';
import Header from '../Header';
// import Section from '../Section';
// import Menu from '../Menu';
// import Products from '../Products';

const App = () => (
  <>
    <Helmet />
    <div className='App'>
      <Header />
      {/* <Section>
        <Menu />
        <Products />
      </Section> */}
    </div>
  </>
);

export default App;
