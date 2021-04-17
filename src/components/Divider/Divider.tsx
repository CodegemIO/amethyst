import React from 'react';
import {classNames} from '../../utilities';
import styles from './Divider.scss';

interface Props {
  dense?: boolean;
}

const Divider: React.FC<Props> = ({dense = false}) => {
  return (
    <hr
      className={classNames({
        [styles.Divider]: true,
        [styles.Dense]: dense,
      })}
    />
  );
};

export default Divider;
