
import React, { PropsWithChildren } from 'react';

import {
  Toolbar as OnsenToolbarComponent,
  ToolbarButton,
  SearchInput,
  Segment,
  Icon,
  Button
} from 'react-onsenui';

import styles from './Toolbar.module.css';

const StyledToolbarButton = (props: PropsWithChildren<{}>) => {
  return (
    <ToolbarButton className={styles.ToolbarButton}>{props.children}</ToolbarButton>
  );
};

export const Toolbar = () => {
  return (
    <OnsenToolbarComponent modifier='cover-content' className={styles.Toolbar}>
      <div className="left">
        <StyledToolbarButton>
          <Icon icon="md-apps" />
        </StyledToolbarButton>

        <Segment>
          <button>Explorer</button>
          <button>Reports</button>
        </Segment>
      </div>
      <div className={`center ${styles.SearchContainer}`}>
        <SearchInput className={styles.SearchInput}/>
      </div>
      <div className="right">
        <StyledToolbarButton>
          <Icon icon="md-account" />
        </StyledToolbarButton>
      </div>
    </OnsenToolbarComponent>
  );
};