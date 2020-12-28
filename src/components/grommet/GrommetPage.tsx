import React from 'react';
import { Grommet, Main } from 'grommet';

import { NavBar } from './NavBar';
import { BaseMap } from '../BaseMap'

export const GrommetPage = () => {
  return (
    <Grommet>
      <NavBar />   

      <Main pad="none">
        <BaseMap />
      </Main>

    </Grommet>
  );
};