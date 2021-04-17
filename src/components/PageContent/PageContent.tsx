import React, {useEffect} from 'react';
import Section from './Section';
import {useScreenHeight} from '../../responsive/hooks';
import {classNames} from '../../utilities';
import styles from './PageContent.scss';

interface Props {
  loose?: boolean;
  centered?: boolean;
}

const PageContent: React.FC<Props> & {
  Section: typeof Section;
} = ({children, loose = false, centered = false}) => {
  const height = useScreenHeight();

  if (typeof window !== 'undefined') {
    const initialVh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${initialVh}px`);
  }

  useEffect(() => {
    document.documentElement.style.setProperty('--vh', `${height * 0.01}px`);
  }, [height]);

  return (
    <div
      className={classNames({
        [styles.PageContent]: true,
        [styles.Loose]: loose,
        [styles.Centered]: centered,
      })}
    >
      {children}
    </div>
  );
};
PageContent.Section = Section;

export default PageContent;
