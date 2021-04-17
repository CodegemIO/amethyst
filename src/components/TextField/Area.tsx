import React, {useMemo} from 'react';
import {classNames} from '../../utilities';
import styles from './Area.scss';

interface Props
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  error?: string | null;
  showMinimumLengthCounter?: number;
}

const Area: React.FC<Props> = ({
  error,
  showMinimumLengthCounter,
  value,
  ...props
}) => {
  const hasError = Boolean(error);

  const minimumLengthMarkup = useMemo(() => {
    if (!showMinimumLengthCounter) {
      return null;
    }

    if (showMinimumLengthCounter <= (value as string).length) {
      return null;
    }

    return (
      <div className={styles.MinimumLengthCounter}>
        <span>
          <i>
            {showMinimumLengthCounter - (value as string).length} characters
            left
          </i>
        </span>
      </div>
    );
  }, [showMinimumLengthCounter, value]);

  return (
    <>
      <div className={styles.Wrapper}>
        <textarea
          className={classNames({
            [styles.TextArea]: true,
            [styles.Error]: hasError,
          })}
          value={value}
          {...props}
        />
        {minimumLengthMarkup}
      </div>
      {hasError && <span className={styles.ErrorMessage}>{error}</span>}
    </>
  );
};

export default Area;
