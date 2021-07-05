import React, {useRef, useCallback} from 'react';
import styles from './InjectedSVG.scss';

interface Props {
  src: string;
  width?: number | string;
  height?: number | string;
  color?: string;
  wrapperStyle?: React.CSSProperties;
}

/**
 * The text content stored at the src location must be trusted,
 * since it will be blindly injected into the DOM.
 */
const InjectedSVG: React.FC<Props> = ({
  src,
  width = '2rem',
  height = '2rem',
  color,
  wrapperStyle,
}) => {
  const objectRef = useRef<HTMLObjectElement>(null);

  const onSvgLoad = useCallback(() => {
    if (!objectRef.current) {
      return;
    }

    const {contentDocument} = objectRef.current;
    const computedStyle = window.getComputedStyle(objectRef.current);

    if (contentDocument) {
      const collection = contentDocument.getElementsByTagName('svg');

      for (let i = 0; i < collection.length; i++) {
        const svg = collection.item(i);

        if (svg) {
          svg.style.color = computedStyle.color;
        }
      }
    }
  }, []);

  return (
    <object
      ref={objectRef}
      className={styles.InjectedSVG}
      type="image/svg+xml"
      data={src}
      onLoad={onSvgLoad}
      width={width}
      height={height}
      style={{
        ...wrapperStyle,
        width,
        height,
        color,
      }}
    />
  );
};

export default InjectedSVG;
