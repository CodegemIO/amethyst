import React from 'react';
import styles from './Label.scss';

interface Props
  extends React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {
  required?: boolean;
}

const Label: React.FC<Props> = ({children, required, ...labelProps}) => {
  return (
    <label className={styles.Label} {...labelProps}>
      {children}
      {required && <span>*</span>}
    </label>
  );
};

export default Label;
