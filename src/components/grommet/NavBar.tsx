import React from 'react';

import { Nav, BoxTypes, Anchor, TextInput } from 'grommet';
import { AppsRounded, User } from 'grommet-icons';


export const NavBar = (props: BoxTypes) => (
  <Nav
    direction='row'
    background='white'
    tag='header'
    align='center'
    justify='between'
    pad={{ vertical: 'small', horizontal: 'medium' }}
    gap='xlarge'
    elevation='medium'
    {...props}>
      <Anchor icon={<AppsRounded />} />
      <TextInput placeholder="Search" />
      <Anchor icon={<User />} />
  </Nav>
);