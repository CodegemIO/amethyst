import React, {useState} from 'react';
import {classNames} from '../../utilities';
import InjectedSVG from '../InjectedSVG';
import styles from './ExpandableContent.scss';

interface Props {
  title: string;
  openByDefault?: boolean;
  continuous?: boolean;
  chevronIconSrc?: string;
}

const ExpandableContent: React.FC<Props> = ({
  children,
  title,
  openByDefault = false,
  continuous = false,
  chevronIconSrc = '/assets/icons/chevron-down.svg',
}) => {
  const [open, setOpen] = useState(openByDefault);

  return (
    <div className={styles.ExpandableContent}>
      <div
        className={classNames({
          [styles.TitleWrapper]: true,
          [styles.HideBottomBorder]: continuous && open,
        })}
        role="button"
        onClick={() => setOpen((prevOpen) => !prevOpen)}
      >
        <h2>{title}</h2>
        <div
          className={classNames({
            [styles.Icon]: true,
            [styles.Open]: open,
          })}
        >
          <InjectedSVG src={chevronIconSrc} color="grey" />
        </div>
      </div>
      <div
        className={classNames({
          [styles.Content]: true,
          [styles.Open]: open,
        })}
      >
        {children}
      </div>
    </div>
  );
};

export default ExpandableContent;
