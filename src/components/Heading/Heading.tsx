import { css } from '@linaria/core';
import { ReactNode } from 'react';

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

type Props = {
  level: HeadingLevel;
  semanticLevel?: HeadingLevel;
  children: ReactNode;
};

const styles = css`
  margin: 0;
  :is(h1) {
    font-size: 2.5rem;
  }
`;

const Heading = ({ level, children }: Props) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return <Tag className={styles}>{children}</Tag>;
};

export default Heading;
