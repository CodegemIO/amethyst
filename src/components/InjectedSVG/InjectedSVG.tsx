import React, {useState, useEffect} from 'react';
import {validateSVG} from './validateSVG';
import styles from './InjectedSVG.scss';

interface Props {
  src: string;
  width?: number | string;
  height?: number | string;
  color?: string;
  wrapperStyle?: React.CSSProperties;
  useCache?: boolean;
}

const CACHE_KEY = 'amethyst-injected-svg-cache';

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
  useCache = false,
}) => {
  const [svgData, setSvgData] = useState<string | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(src);

      if (!response) {
        return '';
      }

      const svgText = await response.text();
      setSvgData(svgText);
      return svgText;
    };

    if (!useCache) {
      fetchData();
      return;
    }

    const cacheData = window.localStorage.getItem(CACHE_KEY);
    const cache = JSON.parse(cacheData || '{}');

    const fetchAndCacheData = async () => {
      const svgText = await fetchData();
      cache[src] = svgText;
      window.localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
    };

    if (cache[src]) {
      setSvgData(cache[src]);
    } else {
      fetchAndCacheData();
    }
  }, [src, useCache]);

  if (!svgData) {
    return null;
  }

  if (!validateSVG(svgData)) {
    return null;
  }

  return (
    <div
      className={styles.InjectedSVG}
      dangerouslySetInnerHTML={{__html: svgData}}
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
