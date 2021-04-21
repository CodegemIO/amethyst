import React from 'react';
import Section from './Section';
import {classNames} from '../../utilities';
import styles from './PageContent.scss';

interface Props {
  loose?: boolean;
  centered?: boolean;
}

const PageContent: React.FC<Props> & {
  Section: typeof Section;
} = ({children, loose = false, centered = false}) => {
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
