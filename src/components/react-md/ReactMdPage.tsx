import React from 'react';

import { Configuration } from 'react-md';
import { BaseMap } from '../BaseMap';

import { Navbar } from './Navbar';
import './ReactMdPage.scss';

export const ReactMdPage = () => {
  return (
    <Configuration>
      <Navbar />
      <BaseMap />
    </Configuration>
  );
};
