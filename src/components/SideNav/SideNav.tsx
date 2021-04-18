import React from 'react';
// import {CSSTransition} from 'react-transition-group';
import {classNames} from '../../utilities';
import styles from './SideNav.scss';
// import sideNavTransition from './SideNavTransition.scss';

interface Props {
  open: boolean;
}

const SideNav: React.FC<Props> = ({children, open}) => (
  // <CSSTransition
  //   key="side-nav-key"
  //   in={open}
  //   classNames={sideNavTransition}
  //   timeout={250}
  //   unmountOnExit={unmountOnClose}
  //   addEndListener={() => {}}
  // >
  <nav
    key="side-nav"
    className={classNames({
      [styles.SideNav]: true,
      [styles.Open]: open,
    })}
  >
    <div className={styles.Content}>{children}</div>
  </nav>
  // </CSSTransition>
);

export default SideNav;
