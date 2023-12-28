import React, { FC } from 'react';
import { styled } from 'styled-components';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import back from '../assets/Back.svg';

interface TopBarProps {
  submit?: () => void;
}

const TopBar: FC<TopBarProps> = ({ submit }) => {
  const navigate = useNavigate();
  const { meetUpId } = useParams();
  const { pathname } = useLocation();

  const goBack = () => {
    if (pathname === '/signup/favor/1') {
      navigate('/home');
    } else {
      navigate(-1);
    }
  };

  console.log(meetUpId);
  console.log(pathname);

  let titleText = '';

  if (pathname === '/postdetail') titleText = '모임 상세';
  else if (pathname === '/meetup') titleText = '새 모임 등록';
  else if (pathname === '/signup/favor') titleText = '';

  return (
    <TopBarWrapper>
      {pathname === '/postdetail' && (
        <img onClick={goBack} src={back} alt="Go Back" />
      )}
      {pathname === '/mypage/editprofile' && (
        <img onClick={goBack} src={back} alt="Go Back" />
      )}
      {pathname === '/signup/favor/1' && (
        <img onClick={goBack} src={back} alt="Go Back" />
      )}
      {pathname === '/signup/favor/2' && (
        <img
          onClick={() => navigate('/signup/favor/1')}
          src={back}
          alt="Go Back"
        />
      )}
      {pathname === `/meetup/${meetUpId}` && (
        <img onClick={goBack} src={back} alt="Go Back" />
      )}
      {pathname === '/meetup' && (
        <UploadWrapper>
          <TextNegative onClick={goBack}>취소</TextNegative>
          {submit && <TextPositive onClick={submit}>저장</TextPositive>}
        </UploadWrapper>
      )}
      <Title>{titleText}</Title>
    </TopBarWrapper>
  );
};

export default TopBar;

const TopBarWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 70px;
  justify-content: center;
  align-items: center;
  // border-bottom: 1px solid var(--light-gray, #eceaea);
  background: var(--white, #fbfbfb);
  margin-left: 10px;
  margin-right: 30px;
  img {
    position: absolute;
    left: 15px;
    top: 40px;
  }
`;

const Title = styled.div`
  z-index: 20;
  color: var(--black, #292525);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;

  display: flex;
  align-items: center;
`;

const TextNegative = styled.div`
  color: var(--gray, #989292);
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
`;

const TextPositive = styled.div`
  color: var(--key, #fd505b);
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
`;

const UploadWrapper = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 70px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--light-gray, #eceaea);
  background: var(--white, #fbfbfb);
  padding-left: 30px;
  padding-right: 30px;
  z-index: 10;
`;
