import React from 'react';
import {classNames} from '../../utilities';
import styles from './Section.scss';

interface Props {
  backgroundType?: 'light' | 'dark' | 'white' | 'transparent';
}

const Section: React.FC<Props> = ({children, backgroundType = 'light'}) => (
  <section
    className={classNames({
      [styles.Section]: true,
      [styles.BackgroundLight]: backgroundType === 'light',
      [styles.BackgroundDark]: backgroundType === 'dark',
      [styles.BackgroundWhite]: backgroundType === 'white',
      [styles.BackgroundTransparent]: backgroundType === 'transparent',
    })}
  >
    <div className={styles.Section}>{children}</div>
  </section>
);

export default Section;
