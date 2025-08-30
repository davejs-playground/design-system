import { styled } from '@linaria/react';
import { AnchorHTMLAttributes } from 'react';
import ExternalIcon from '../../assets/external-icon.svg';
const StyledLink = styled.a<{ size?: 'small' }>`
  display: flex;
  align-items: center;
  gap: 0.5ch;
  font-weight: 600;
  font-style: normal;
  font-size: ${(props) => (props.size === 'small' ? '0.8em' : '1em')};
`;

const Hidden = styled.span`
  position: absolute;
  top: -100%;
`;

export type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  size?: 'small';
  external?: boolean;
};

const Link = ({ children, external, ...rest }: Props) => {
  const externalAttributes = external
    ? { target: '_blank', rel: 'noopener noreferer' }
    : {};

  return (
    <StyledLink {...rest} {...externalAttributes}>
      {children}
      {external && (
        <>
          <ExternalIcon /> <Hidden>(open in new tab)</Hidden>
        </>
      )}
    </StyledLink>
  );
};

export default Link;
