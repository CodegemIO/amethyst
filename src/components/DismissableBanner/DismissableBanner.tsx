import React, {useState} from 'react';
import {classNames} from '../../utilities';
import InjectedSVG from '../InjectedSVG';
import styles from './DismissableBanner.scss';

interface Props {
  type?: 'info' | 'error';
  closeIconSrc?: string;
}

const DismissableBanner: React.FC<Props> = ({
  children,
  type = 'error',
  closeIconSrc = '/assets/icons/cancel.svg',
}) => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) {
    return null;
  }

  return (
    <div
      className={classNames({
        [styles.DismissableBanner]: true,
        [styles.Info]: type === 'info',
        [styles.Error]: type === 'error',
      })}
    >
      <div className={styles.Content}>{children}</div>
      <div
        className={styles.Close}
        role="button"
        onClick={() => setDismissed(true)}
      >
        <InjectedSVG src={closeIconSrc} width="1.5rem" height="1.5rem" />
      </div>
    </div>
  );
};

export default DismissableBanner;
