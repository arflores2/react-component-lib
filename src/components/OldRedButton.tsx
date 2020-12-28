import { PropsWithChildren } from "react";

import styles from './OldRedButton.module.css';

export const OldRedButton = ({ children }: PropsWithChildren<{}>) => {
  return (
    <button className={styles.OldRedButton}>{children}</button>
  );
};