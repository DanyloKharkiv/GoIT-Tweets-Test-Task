import { colors } from 'components/CommonStyles/Variables';
import styled from 'styled-components';

const LoadMoreStyled = styled.button`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: ${colors.btnText};

  width: 196px;
  height: 50px;
  margin: 0 auto;

  background: ${colors.btnBgrnd};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;

  transition: background 250ms ease-out;

  &:hover {
    background: ${colors.btnActive};
  }
`;

export { LoadMoreStyled };
