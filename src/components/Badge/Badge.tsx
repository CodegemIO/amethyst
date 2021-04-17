import React, {useMemo} from 'react';
import {classNames} from '../../utilities';
import styles from './Badge.scss';

interface Props {
  backgroundType?: 'primary' | 'accent' | 'light' | 'dark' | 'transparent';
}

const Badge: React.FC<Props> = ({children, backgroundType = 'primary'}) => {
  const names = useMemo(
    () =>
      classNames({
        [styles.Badge]: true,
        [styles.BackgroundPrimary]: backgroundType === 'primary',
        [styles.BackgroundAccent]: backgroundType === 'accent',
        [styles.BackgroundLight]: backgroundType === 'light',
        [styles.BackgroundDark]: backgroundType === 'dark',
        [styles.BackgroundTransparent]: backgroundType === 'transparent',
      }),
    [backgroundType],
  );

  return <div className={names}>{children}</div>;
};

export default Badge;
