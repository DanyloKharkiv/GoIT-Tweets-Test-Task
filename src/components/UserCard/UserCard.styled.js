import { colors } from 'components/CommonStyles/Variables';
import styled from 'styled-components';

const Card = styled.article`
  position: relative;
  width: 380px;
  height: 460px;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

const CardLogoWrapper = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 76px;
  height: 22px;
`;

const ProfileBackgroundWrapper = styled.div`
  padding: 28px 36px 18px 36px;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  &::before {
    content: '';

    width: 380px;
    height: 8px;
    background: ${colors.decorationsBgrnd};
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
`;

const ProfileAvatarThumb = styled.div`
  position: absolute;
  left: 150px;
  top: 178px;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;

  border-radius: 85.9232px;
  background: ${colors.decorationsBgrnd};
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;

  &::before {
    content: '';
    width: 62px;
    height: 62px;
    border-radius: 85.9232px;
    background: ${colors.userImageBgrnd};
  }
`;

const ProfileAvatar = styled.img`
  position: absolute;
  width: 62px;
  height: 62px;
  border-radius: 85.9232px;
`;

const ProfileInfoList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 16px;
  margin-top: 62px;
  margin-bottom: 26px;
`;

const ProfileInfoText = styled.h3`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: ${colors.text};
`;

const ProfileButton = styled.button`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: ${colors.btnText};

  width: 196px;
  height: 50px;

  background: ${colors.btnBgrnd};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;

  &.active {
    background: ${colors.btnActive};
  }
`;

export {
  CardLogoWrapper,
  ProfileBackgroundWrapper,
  Card,
  Profile,
  ProfileAvatarThumb,
  ProfileAvatar,
  ProfileInfoList,
  ProfileButton,
  ProfileInfoText,
};
