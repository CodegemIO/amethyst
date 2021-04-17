import React, {useEffect} from 'react';
import {CSSTransition} from 'react-transition-group';
import Button from '../Button';
import InjectedSVG from '../InjectedSVG';
import {useScreenWidth} from '../../responsive/hooks';
import {classNames} from '../../utilities';
import styles from './Modal.scss';
import backdropTransition from './BackdropTransition.scss';
import modalTransition from './ModalTransition.scss';

interface ModalAction {
  title: React.ReactNode;
  color: 'primary' | 'default' | 'error';
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  onClick?(): void;
  disabled?: boolean;
  loading?: boolean;
  style?: React.CSSProperties;
}

interface Props {
  open: boolean;
  onClose(): void;
  title?: string;
  titleTrailer?: React.ReactNode;
  actions?: ModalAction[];
  noContentPadding?: boolean;
  forceWidth?: string | number;
  containerStyle?: React.CSSProperties;
  wide?: boolean;
  unmountOnClose?: boolean;
  breakAt?: number;
  closeIconSrc?: string;
}

const noop = () => {
  /** noop */
};

const Modal: React.FC<Props> = ({
  children,
  open,
  onClose,
  title = '',
  titleTrailer = null,
  actions,
  noContentPadding = false,
  forceWidth,
  containerStyle = {},
  wide = false,
  unmountOnClose = true,
  breakAt,
  closeIconSrc = '/assets/icons/cancel.svg',
}) => {
  const width = useScreenWidth();

  useEffect(() => {
    if (breakAt) {
      document.documentElement.style.setProperty(
        '--modal-break-at',
        `${breakAt}px`,
      );
    }
  }, [breakAt]);

  return (
    <>
      <CSSTransition
        key="modal-key"
        in={open}
        classNames={modalTransition}
        timeout={250}
        unmountOnExit={unmountOnClose}
        addEndListener={noop}
      >
        <div
          key="amethyst-modal"
          className={classNames({
            [styles.Modal]: true,
            [styles.Open]: open || unmountOnClose,
            [styles.Broken]: Boolean(breakAt && width < breakAt),
          })}
        >
          <div
            className={classNames({
              [styles.Content]: true,
              [styles.Wide]: wide,
            })}
            style={
              forceWidth
                ? {width: forceWidth, minWidth: forceWidth, ...containerStyle}
                : containerStyle
            }
          >
            <div className={styles.Title}>
              <h1>{title}</h1>
              {titleTrailer}
              <button onClick={onClose}>
                <InjectedSVG src={closeIconSrc} width="2rem" height="2rem" />
              </button>
            </div>
            <div
              className={classNames({
                [styles.Children]: true,
                [styles.NoPadding]: noContentPadding,
              })}
            >
              {children}
            </div>
            {actions && (
              <div className={styles.Actions}>
                {actions.map(
                  (
                    {
                      title: actionTitle,
                      color,
                      onClick,
                      type = 'button',
                      disabled = false,
                      loading = false,
                      style = {},
                    },
                    i,
                  ) => (
                    <Button
                      key={`${actionTitle}-${i}`}
                      color={color}
                      type={type}
                      onClick={onClick}
                      disabled={disabled}
                      loading={loading}
                      style={style}
                    >
                      {actionTitle}
                    </Button>
                  ),
                )}
              </div>
            )}
          </div>
        </div>
      </CSSTransition>
      <CSSTransition
        key="modal-backdrop-key"
        in={open}
        classNames={backdropTransition}
        timeout={300}
        unmountOnExit
        addEndListener={noop}
      >
        <div
          key="modal-backdrop"
          className={styles.Backdrop}
          onClick={(event) => {
            event.stopPropagation();
            onClose();
          }}
        />
      </CSSTransition>
    </>
  );
};

export default Modal;
