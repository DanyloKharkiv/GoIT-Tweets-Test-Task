import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from 'redux/users/operations';
import { selectUsers, selectUsersIsLoading } from 'redux/users/selectors';
import { UsersListStyled } from './UsersList.styled';
import { UserCard } from 'components/UserCard/UserCard';
import { LoadMoreButton } from 'components/LoadMoreButton/LoadMorebutton';

export const UsersList = () => {
  const [visibleCardsQty, setVisibleCardsQty] = useState(3);
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const isLoading = useSelector(selectUsersIsLoading);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleLoadMoreBtn = () => {
    setVisibleCardsQty(prevValue => prevValue + 3);
  };

  return (
    <>
      <UsersListStyled>
        {users?.slice(0, visibleCardsQty).map(user => (
          <li key={user.id}>
            <UserCard user={user} />
          </li>
        ))}
      </UsersListStyled>
      {!isLoading && users?.length !== visibleCardsQty && (
        <LoadMoreButton onClick={handleLoadMoreBtn} />
      )}
    </>
  );
};
