import React from 'react';
import {classNames} from '../../utilities';
import InjectedSVG from '../InjectedSVG';
import styles from './Checkbox.scss';

interface Props {
  label: React.ReactNode;
  labelIdModifier?: string;
  checkboxIconSrc?: string;
  value: boolean;
  onChange(value: boolean): void;
}

const Checkbox: React.FC<Props> = ({
  label,
  labelIdModifier = '1',
  checkboxIconSrc = '/assets/icons/check-small.svg',
  value,
  onChange,
}) => {
  const checkboxId = `amethyst-checkbox-${label}-${labelIdModifier}`;

  return (
    <label className={styles.Checkbox} htmlFor={checkboxId}>
      <span className={styles.CheckboxInputWrapper}>
        <input
          id={checkboxId}
          checked={value}
          onChange={(event) => onChange(event.target.checked)}
          type="checkbox"
        />
        <span
          className={classNames({
            [styles.CheckboxInputBackdrop]: true,
            [styles.Checked]: value,
          })}
        />
        <span
          className={classNames({
            [styles.CheckboxIconWrapper]: true,
            [styles.Checked]: value,
          })}
        >
          <InjectedSVG src={checkboxIconSrc} width="2rem" height="2rem" />
        </span>
      </span>
      <span className={styles.CheckboxLabel}>{label}</span>
    </label>
  );
};

export default Checkbox;
