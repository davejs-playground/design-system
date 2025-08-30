import { styled } from '@linaria/react';

type Size = 'small' | 'normal' | 'large';

type Props = {
  size?: Size;
};

const sizes = new Map<Size, string>([
  ['small', '0.8rem'],
  ['normal', '1rem'],
  ['large', '1.2rem'],
]);

const Prose = styled.div<Props>`
  font-size: ${({ size = 'normal' }) => sizes.get(size) ?? ''};

  ul {
    padding-inline-start: 3ch;
  }

  li::marker {
    content: '> ';
    color: var(--color-primary);
    font-weight: 900;
    margin: 0;
    padding: 0;
  }
`;

export default Prose;
