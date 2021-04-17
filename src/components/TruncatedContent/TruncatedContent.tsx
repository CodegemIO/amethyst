import React, {useState} from 'react';
import {classNames} from '../../utilities';
import Button from '../Button';
import InjectedSVG from '../InjectedSVG';
import styles from './TruncatedContent.scss';

interface Props {
  truncateAt?: string;
  chevronIconSrc?: string;
}

const TruncatedContent: React.FC<Props> = ({
  children,
  truncateAt = '20rem',
  chevronIconSrc = '/assets/icons/chevron-down.svg',
}) => {
  const [truncated, setTruncated] = useState(true);

  return (
    <div className={styles.TruncatedContent}>
      <div
        className={classNames({
          [styles.Content]: true,
          [styles.Truncated]: truncated,
        })}
        style={{maxHeight: truncated ? truncateAt : undefined}}
      >
        {children}
      </div>
      <Button onClick={() => setTruncated((prev) => !prev)} plain>
        <div className={styles.ShowMoreWrapper}>
          <span className={styles.ShowMoreText}>
            Show {truncated ? 'more' : 'less'}
          </span>
          <div
            className={classNames({
              [styles.Icon]: true,
              [styles.Open]: !truncated,
            })}
          >
            <InjectedSVG src={chevronIconSrc} />
          </div>
        </div>
      </Button>
    </div>
  );
};

export default TruncatedContent;
