import React from 'react';
import LoadingSpinner from '../LoadingSpinner';
import {classNames} from '../../utilities';
import styles from './PageBlocker.scss';

interface Props {
  open: boolean;
  text?: string;
}

const PageBlocker: React.FC<Props> = ({open, text}) => {
  return (
    <div
      className={classNames({
        [styles.PageBlocker]: true,
        [styles.Open]: open,
      })}
    >
      <LoadingSpinner width="10rem" height="10rem" />
      <span className={styles.Text}>{text}</span>
    </div>
  );
};

export default PageBlocker;
