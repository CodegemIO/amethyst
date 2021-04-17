import React, {useEffect, useRef} from 'react';
import {CSSTransition} from 'react-transition-group';
import InjectedSVG from '../InjectedSVG';
import styles from './Snackbar.scss';
import snackbarTransition from './SnackbarTransition.scss';

interface Props {
  open: boolean;
  onClose(): void;
  message: React.ReactNode;
  closeIconSrc?: string;
}

const noop = () => {
  /** noop */
};

const Snackbar: React.FC<Props> = ({
  open,
  message,
  onClose,
  closeIconSrc = '/assets/icons/cancel.svg',
}) => {
  const timeoutRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (open) {
      timeoutRef.current = window.setTimeout(onClose, 5000);
    }
  }, [open, onClose]);

  const handleOnClose = () => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
    onClose();
  };

  return (
    <CSSTransition
      key="snackbar-key"
      in={open}
      classNames={snackbarTransition}
      timeout={250}
      unmountOnExit
      addEndListener={noop}
    >
      <div className={styles.Snackbar}>
        <div className={styles.Content}>
          <span>{message}</span>
          <div className={styles.Close} role="button" onClick={handleOnClose}>
            <InjectedSVG src={closeIconSrc} width="1.5rem" height="1.5rem" />
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Snackbar;
