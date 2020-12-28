import React from 'react';

import { Page as OnsenPageComponent, SearchInput, Segment } from 'react-onsenui';

import { Toolbar } from './Toolbar';
import { BaseMap } from '../BaseMap';


export const Page = () => {
  return (
    <OnsenPageComponent
      renderToolbar={() => <Toolbar />}
      contentStyle={{ top: '60px' }}>
      <BaseMap />
    </OnsenPageComponent>
  );
};
