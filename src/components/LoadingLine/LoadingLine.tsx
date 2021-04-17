import React from 'react';
import styles from './LoadingLine.scss';

interface Props {
  height?: number | string;
  width?: number | string;
}

const LoadingLine: React.FC<Props> = ({height = '1.6rem', width = '100%'}) => {
  return <div className={styles.LoadingLine} style={{width, height}} />;
};

export default LoadingLine;
