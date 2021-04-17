import React, {useMemo} from 'react';
import {classNames} from '../../utilities';
import styles from './Card.scss';

interface Props {
  elevation?: 'low' | 'medium' | 'high';
  floatOnHover?: boolean;
  style?: React.CSSProperties;
}

const Card: React.FC<Props> = ({
  children,
  elevation = 'medium',
  floatOnHover = false,
  style,
}) => {
  const names = useMemo(
    () =>
      classNames({
        [styles.Card]: true,
        [styles.ElevationLow]: elevation === 'low',
        [styles.ElevationMedium]: elevation === 'medium',
        [styles.ElevationHigh]: elevation === 'high',
        [styles.FloatOnHover]: floatOnHover,
      }),
    [elevation, floatOnHover],
  );

  return (
    <div className={names} style={style}>
      {children}
    </div>
  );
};

export default Card;
