import React from 'react';
import { AppBar } from 'react-toolbox/lib/app_bar';

import { ReactComponent as AppsSvg } from '../../assets/svg/apps-24px.svg';
import { ReactComponent as AccountSvg } from '../../assets/svg/account_circle-24px.svg';

export const ReactToolboxPage = () => {
  return (
    <AppBar title={'Pegasus'} leftIcon={<AppsSvg />} rightIcon={<AccountSvg />} />
  );
};