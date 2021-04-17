import React from 'react';
import styles from './Quote.scss';

interface Props {
  cite?: string;
}

const Quote: React.FC<Props> = ({children, cite}) => (
  <blockquote className={styles.Quote}>
    <p>{children}</p>
    {cite && <cite className={styles.Cite}>– &emsp;{cite}</cite>}
  </blockquote>
);

export default Quote;
