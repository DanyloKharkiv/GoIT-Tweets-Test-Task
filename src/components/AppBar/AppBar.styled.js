import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { colors } from 'components/CommonStyles/Variables';

const Bar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: ${colors.text};
  padding: 2px 10px;
  transition: color 250ms ease-out;
  &:hover,
  :focus {
    color: ${colors.btnActive};
  }
  &.active {
    color: ${colors.btnActive};
  }
`;

export { Bar, HeaderWrapper, StyledLink };
