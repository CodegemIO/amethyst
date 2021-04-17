import React, {useCallback, useEffect} from 'react';
import {CSSTransition} from 'react-transition-group';
import {classNames} from '../../utilities';
import InjectedSVG from '../InjectedSVG';
import styles from './SideDrawer.scss';
import sideDrawerTransition from './SideDrawerTransition.scss';
import backdropTransition from './BackdropTransition.scss';

interface Props {
  open: boolean;
  onClose(): void;
  unmountOnClose?: boolean;
  closeIconSrc?: string;
}

const SideDrawer: React.FC<Props> = ({
  children,
  open,
  onClose,
  unmountOnClose = true,
  closeIconSrc = '/assets/icons/cancel.svg',
}) => {
  const lockBackgroundScroll = useCallback(() => {
    document.documentElement.style.overflow = 'hidden';
  }, []);

  const unlockBackgroundScroll = useCallback(() => {
    document.documentElement.style.overflow = 'auto';
  }, []);

  // Always unlock when the component unmounts.
  useEffect(() => unlockBackgroundScroll, [unlockBackgroundScroll]);

  useEffect(() => {
    if (open) {
      lockBackgroundScroll();
    } else {
      unlockBackgroundScroll();
    }
  }, [open, lockBackgroundScroll, unlockBackgroundScroll]);

  return (
    <>
      <CSSTransition
        key="side-drawer-key"
        in={open}
        classNames={sideDrawerTransition}
        timeout={250}
        unmountOnExit={unmountOnClose}
        addEndListener={() => {}}
      >
        <div
          key="side-drawer"
          className={classNames({
            [styles.SideDrawer]: true,
            [styles.Open]: open || unmountOnClose,
          })}
        >
          <div className={styles.Content}>{children}</div>
          <button className={styles.Close} onClick={onClose}>
            <InjectedSVG src={closeIconSrc} width="2rem" height="2rem" />
          </button>
        </div>
      </CSSTransition>
      <CSSTransition
        key="side-drawer-backdrop-key"
        in={open}
        classNames={backdropTransition}
        timeout={300}
        unmountOnExit
        addEndListener={() => {}}
      >
        <div
          key="side-drawer-backdrop"
          className={styles.Backdrop}
          onClick={onClose}
        />
      </CSSTransition>
    </>
  );
};

export default SideDrawer;
