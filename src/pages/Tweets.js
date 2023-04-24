import { Wrapper } from 'components/CommonStyles/Wrapper';
import { TweetsView } from './Tweets.styled';
import { UsersList } from 'components/UsersList/UsersList';

const Tweets = () => {
  return (
    <TweetsView>
      <Wrapper>
        <UsersList />
      </Wrapper>
    </TweetsView>
  );
};

export default Tweets;
