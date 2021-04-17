import React from 'react';

interface Props {
  space: 'extra-loose' | 'loose' | 'normal' | 'tight' | 'extra-tight';
}

const Spacer: React.FC<Props> = ({space}) => (
  <div style={{height: `var(--spacing-${space})`}} />
);

export default Spacer;
