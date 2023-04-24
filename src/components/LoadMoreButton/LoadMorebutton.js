import { LoadMoreStyled } from './LoadMorebutton.styled';

export const LoadMoreButton = ({ onClick }) => {
  return (
    <LoadMoreStyled type="button" onClick={onClick}>
      Load more
    </LoadMoreStyled>
  );
};
