import PropTypes from 'prop-types';
import React from 'react';

import { Title } from './style';

export function Titles({ children }) {
  return <Title>{children}</Title>;
}

Titles.propTypes = {
  children: PropTypes.node.isRequired,
};
