import React from 'react';
import {classNames} from '../../utilities';
import Area from './Area';
import Label from './Label';
import styles from './TextField.scss';

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  error?: string | null;
}

const TextField: React.FC<Props> & {
  Label: typeof Label;
  Area: typeof Area;
} = ({error, ...props}) => {
  const hasError = Boolean(error);

  return (
    <>
      <input
        className={classNames({
          [styles.TextField]: true,
          [styles.Error]: Boolean(error),
        })}
        type="text"
        {...props}
      />
      {hasError && <span className={styles.ErrorMessage}>{error}</span>}
    </>
  );
};

TextField.Label = Label;
TextField.Area = Area;

export default TextField;
