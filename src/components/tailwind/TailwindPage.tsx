import { Nav } from 'grommet';
import React from 'react';
import { BaseMap } from '../BaseMap';

import { Navbar } from './Navbar';

import './TailwindPage.css';

export const TailwindPage = () => {
  return (
    <div>
      <Navbar /> 
      <BaseMap />
    </div>
  );
};