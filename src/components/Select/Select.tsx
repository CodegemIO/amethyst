import React from 'react';
import InjectedSVG from '../InjectedSVG';
import styles from './Select.scss';

interface SelectOption {
  title: string;
  value: string;
}

interface Props
  extends React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  options: SelectOption[];
  prefixIcon?: React.ReactNode;
  caretIconSrc?: string;
}

const Select: React.FC<Props> = ({
  options,
  prefixIcon,
  caretIconSrc = '/assets/icons/chevron-down.svg',
  ...props
}) => {
  return (
    <div className={styles.Select}>
      {prefixIcon && <div className={styles.PrefixIcon}>{prefixIcon}</div>}
      <select style={{paddingLeft: prefixIcon ? '4rem' : undefined}} {...props}>
        {options.map(({title, value}) => (
          <option key={value} value={value}>
            {title}
          </option>
        ))}
      </select>
      <div className={styles.CaretIcon}>
        <InjectedSVG src={caretIconSrc} width="2rem" height="2rem" />
      </div>
    </div>
  );
};

export default Select;
