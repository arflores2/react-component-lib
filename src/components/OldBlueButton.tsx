import { PropsWithChildren } from "react";

import styles from './OldBlueButton.module.css';

export const OldBlueButton = ({ children }: PropsWithChildren<{}>) => {
  return (
    <button className={styles.OldBlueButton}>{children}</button>
  );
};