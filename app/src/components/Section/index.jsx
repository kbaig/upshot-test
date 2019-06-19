import React from 'react';

import './Section.scss';

const Section = ({ children, ...rest }) => (
  <section className='Section' {...rest}>
    {children}
  </section>
);

export default Section;
