import React from 'react';
import { Helmet as ReactHelmet } from 'react-helmet';

import data from '../../data/head';

const Helmet = ({ ...rest }) => (
  <ReactHelmet {...rest}>
    <html lang='en' prefix='og: http://ogp.me/ns#' />
    <title>{data.title}</title>
    <meta name="description" content={data.description} />
    <link rel='shortcut icon' href={data.favicon} />
  </ReactHelmet>
);

export default Helmet;
