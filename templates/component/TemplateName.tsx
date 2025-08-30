import { styled } from '@linaria/react';

const StyledTemplateName = styled.div`
  /* styles */
`;

export type Props = {
  // props
};

const TemplateName = (props: Props) => {
  return (
    <StyledTemplateName {...props}>
      Here is you new TemplateName component!
    </StyledTemplateName>
  );
};

export default TemplateName;
