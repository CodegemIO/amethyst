import React, {useMemo} from 'react';
import LoadingSpinner from '../LoadingSpinner';
import {Theme} from '../../theme';
import {classNames} from '../../utilities';
import styles from './Button.scss';

interface Props {
  children: React.ReactNode;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  color?: 'primary' | 'accent' | 'default' | 'error';
  size?: 'sm' | 'md' | 'lg';
  fontWeight?: 'thin' | 'normal' | 'semibold' | 'bold';
  style?: React.CSSProperties;
  disabled?: boolean;
  className?: string;
  plain?: boolean;
  block?: boolean;
  outline?: boolean;
  loading?: boolean;
  href?: string;
}

const Button: React.FC<Props> = ({
  children,
  type,
  onClick,
  color = 'default',
  className = '',
  size = 'md',
  fontWeight = 'normal',
  style = {},
  disabled = false,
  plain = false,
  block = false,
  loading = false,
  outline = false,
  href,
}) => {
  const isLink = Boolean(href);

  const names = useMemo(() => {
    return classNames({
      [className]: true,
      [styles.Button]: true,
      [styles.ColorPrimary]: color === 'primary',
      [styles.ColorAccent]: color === 'accent',
      [styles.ColorError]: color === 'error',
      [styles.SizeSm]: size === 'sm',
      [styles.SizeLg]: size === 'lg',
      [styles.Plain]: plain,
      [styles.Block]: block,
      [styles.Outline]: outline,
      [styles.FontWeightThin]: fontWeight === 'thin',
      [styles.FontWeightSemiBold]: fontWeight === 'semibold',
      [styles.FontWeightBold]: fontWeight === 'bold',
    });
  }, [className, color, size, plain, block, outline, fontWeight]);

  if (isLink) {
    return (
      <a href={href || '#'} className={names} style={style}>
        {loading ? (
          <LoadingSpinner
            color={
              ['primary', 'error'].includes(color)
                ? 'white'
                : Theme.primaryColor
            }
          />
        ) : (
          children
        )}
      </a>
    );
  }

  return (
    <button
      className={names}
      type={type}
      onClick={(event) => {
        if (!loading && onClick) {
          onClick(event);
        }
      }}
      style={style}
      disabled={disabled}
    >
      {loading ? (
        <LoadingSpinner
          color={
            ['primary', 'error'].includes(color) ? 'white' : Theme.primaryColor
          }
        />
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
