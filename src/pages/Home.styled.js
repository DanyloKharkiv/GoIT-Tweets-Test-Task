import styled from 'styled-components';
import { colors } from 'components/CommonStyles/Variables';

const HomeView = styled.section`
  padding: 100px 0;
`;

const HomeTitle = styled.h1`
  font-size: 30px;
  font-weight: 900;
  text-align: center;
  color: ${colors.userImageBgrnd};
`;

export { HomeView, HomeTitle };
