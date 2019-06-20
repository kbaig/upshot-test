import React from 'react';
import { Helmet as ReactHelmet } from 'react-helmet';

import data from '../../data/head.js';

const Helmet = ({ ...rest }) => (
  <ReactHelmet {...rest}>
    <html lang='en' prefix='og: http://ogp.me/ns#' />
    <title>{data.title}</title>
    <link rel='shortcut icon' href={data.favicon} />
  </ReactHelmet>
);

export default Helmet;
