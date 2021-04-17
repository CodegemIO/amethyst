import React from 'react';
import styles from './Anchor.scss';

interface Props {
  id: string;
  offset: number;
}

const Anchor: React.FC<Props> = ({id, offset}) => {
  return (
    <div
      id={id}
      className={styles.Anchor}
      style={{
        paddingTop: `${offset}rem`,
        marginTop: `-${offset}rem`,
      }}
    />
  );
};

export default Anchor;
