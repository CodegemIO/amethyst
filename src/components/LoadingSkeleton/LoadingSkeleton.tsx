import React from 'react';
import {classNames} from '../../utilities';
import styles from './LoadingSkeleton.scss';

interface Props {
  lines?: number;
}

const LoadingSkeleton: React.FC<Props> = ({lines = 4}) => {
  return (
    <div className={styles.Wrapper}>
      <div
        className={classNames({
          [styles.SkeletonItem]: true,
          [styles.Title]: true,
        })}
      />
      {new Array(lines).fill('').map((_, i) => (
        <div
          key={i}
          className={classNames({
            [styles.SkeletonItem]: true,
            [styles.Line]: true,
          })}
        />
      ))}
    </div>
  );
};

export default LoadingSkeleton;
