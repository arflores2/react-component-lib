import React from 'react';

import {
  AppBar,
  AppBarNav,
  AppBarTitle,
  AppBarAction
} from "@react-md/app-bar";
import { AutoComplete, AutoCompleteHandler } from "@react-md/autocomplete";

import {
  MenuSVGIcon,
  SearchSVGIcon,
  AccountCircleSVGIcon
} from "@react-md/material-icons";

export const Navbar = () => {
  return (
    <AppBar>
      <AppBarNav aria-label="Navigation">
        <MenuSVGIcon />
      </AppBarNav>
      <AppBarNav aria-label="Navigation">
        <SearchSVGIcon />
      </AppBarNav>
      <AppBarTitle>
        <AutoComplete
          id="phone-search"
          placeholder="Search"
          data={[]}
          highlight
          theme="none"
          listboxWidth="auto"
          vhMargin={0}
          vwMargin={0}
          clearOnAutoComplete
        />
      </AppBarTitle>
      <AppBarAction first last aria-label="Actions">
        <AccountCircleSVGIcon />
      </AppBarAction>
    </AppBar>
  )
};
