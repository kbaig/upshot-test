import React from 'react';

import './Nav.scss';
import data from '../../data/nav';

import logo from '../../assets/logo.svg';

const Nav = ({ ...rest }) => {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <>
      <nav className={`Nav${expanded ? ' Nav--expanded' : ''}`} {...rest}>
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
        <button
          className='Nav__HamburgerButton'
          onClick={() => setExpanded(!expanded)}
          role={expanded ? 'collapse' : 'expand'}
        >
          <div className='Nav__HamburgerIcon' />
        </button>
      </nav>
      <div
        className='Nav__CollapseSidebarOverlay'
        onClick={() => setExpanded(false)}
      />
    </>
  );
};

export default Nav;
