import React, {useState} from 'react';
import {CSSTransition} from 'react-transition-group';
import {classNames} from '../../utilities';
import styles from './Popover.scss';
import popoverTransition from './PopoverTransition.scss';

interface Props {
  popoverContent: React.ReactNode;
  style?: React.CSSProperties;
  contentStyle?: React.CSSProperties;
  arrowHorizontalOffset?: number;
  popoverLevel?: number;
  hideTail?: boolean;
  closeOnContentClicked?: boolean;
  unmountOnClose?: boolean;
}

const Popover: React.FC<Props> = ({
  children,
  popoverContent,
  style,
  contentStyle,
  arrowHorizontalOffset = 0,
  popoverLevel = 0,
  hideTail = false,
  closeOnContentClicked = false,
  unmountOnClose = false,
}) => {
  const [open, setOpen] = useState(false);

  const beforeLeft = 9 + arrowHorizontalOffset;
  const afterLeft = beforeLeft + 1;

  return (
    <>
      <div className={styles.Popover} style={style}>
        <div role="button" onClick={() => setOpen(true)}>
          {children}
        </div>
        <CSSTransition
          key="popover-content-key"
          in={open}
          classNames={popoverTransition}
          timeout={150}
          unmountOnExit={unmountOnClose}
          addEndListener={() => {}}
        >
          <div
            className={classNames({
              [styles.Content]: true,
              [styles.Open]: open,
              [styles.Level1]: popoverLevel === 1,
            })}
            onClick={closeOnContentClicked ? () => setOpen(false) : undefined}
            style={contentStyle}
          >
            {!hideTail && (
              <div
                className={styles.ContentBefore}
                style={{left: `${beforeLeft}px`}}
              />
            )}
            {popoverContent}
            {!hideTail && (
              <div
                className={styles.ContentAfter}
                style={{left: `${afterLeft}px`}}
              />
            )}
          </div>
        </CSSTransition>
      </div>
      {open && (
        <div
          className={classNames({
            [styles.Backdrop]: true,
            [styles.Level1]: popoverLevel === 1,
          })}
          onClick={(event) => {
            event.stopPropagation();
            setOpen(false);
          }}
        />
      )}
    </>
  );
};

export default Popover;
