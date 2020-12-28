import React from 'react';
import { Flex, Box, Link } from 'rebass';
import { Input } from '@rebass/forms';

import { ReactComponent as AppSvg } from '../../assets/svg/apps.svg';

export const Navbar = () => {
  return (
    <Flex
      px={2}
      color='black'
      bg='white'
      alignItems='center'
      sx={{
        height: '60px'
      }}>
        <AppSvg />
        <Box mx='auto'><Input placeholder='Search' /></Box>
        <Link variant='nav' href='#!'>
          Profile
        </Link>
    </Flex>
  );
};