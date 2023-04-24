import { useLocation } from 'react-router-dom';
import { Bar, HeaderWrapper, StyledLink } from './AppBar.styled';

export const AppBar = () => {
  const location = useLocation();

  return (
    <Bar>
      <HeaderWrapper>
        <nav>
          {location.pathname === '/' && (
            <StyledLink to={'/tweets'}>Tweets</StyledLink>
          )}
          {location.pathname === '/tweets' && (
            <StyledLink to={'/'}>Back</StyledLink>
          )}
        </nav>
      </HeaderWrapper>
    </Bar>
  );
};
