import { styled } from '@linaria/react';

const IconContainer = styled.div`
  display: grid;
  grid-template-areas: icon;
  justify-items: center;
  align-items: center;

  & > i {
    grid-area: icon;
    display: block;
  }
`;

const IconOutline = styled.i`
  paint-order: stroke fill;
  -webkit-text-stroke-width: 3px;
  -webkit-text-stroke-color: white;
`;

export type Props = {
  icon: string;
  colored?: boolean;
  outline?: boolean;
};

const Icon = ({ icon, colored, outline }: Props) => {
  return (
    <IconContainer>
      {outline && <IconOutline className={`devicon-${icon}`} />}
      <i className={`devicon-${icon} ${colored && 'colored'}`} />
    </IconContainer>
  );
};

export default Icon;
