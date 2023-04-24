import { useDispatch, useSelector } from 'react-redux';
import { followUser, unfollowUser } from 'redux/users/operations';
import { selectFollowing } from 'redux/users/selectors';
import {
  Card,
  CardLogoWrapper,
  Profile,
  ProfileBackgroundWrapper,
  ProfileButton,
  ProfileAvatarThumb,
  ProfileAvatar,
  ProfileInfoList,
  ProfileInfoText,
} from './UserCard.styled';
import GoITLogo from 'images/logo.png';
import ProfileBackgroundImage from 'images/profile-background.png';

export const UserCard = ({ user }) => {
  const dispatch = useDispatch();
  const following = useSelector(selectFollowing);
  const { followers, tweets, avatar, id } = user;
  const isFollowing = following.find(user => user.id === id);

  const onFollowBtnClick = userId => {
    if (!isFollowing) {
      dispatch(followUser(userId));
    } else {
      dispatch(unfollowUser(id));
    }
  };

  const visibleFollowers = isFollowing
    ? isFollowing?.followers.toLocaleString('en-US')
    : followers.toLocaleString('en-US');

  return (
    <Card>
      <CardLogoWrapper>
        <img src={GoITLogo} alt="logo of the company GoIT" />
      </CardLogoWrapper>
      <ProfileBackgroundWrapper>
        <img
          src={ProfileBackgroundImage}
          alt="two chats, ask and answer dialogues"
        />
      </ProfileBackgroundWrapper>
      <Profile>
        <ProfileAvatarThumb>
          <ProfileAvatar src={avatar} alt="user profile avatar" />
        </ProfileAvatarThumb>
        <ProfileInfoList>
          <li>
            <ProfileInfoText>{tweets} tweets</ProfileInfoText>
          </li>
          <li>
            <ProfileInfoText>{visibleFollowers} followers</ProfileInfoText>
          </li>
        </ProfileInfoList>
        <ProfileButton
          type="button"
          className={isFollowing && 'active'}
          onClick={() => onFollowBtnClick(id)}
        >
          {isFollowing ? 'Following' : 'Follow'}
        </ProfileButton>
      </Profile>
    </Card>
  );
};
