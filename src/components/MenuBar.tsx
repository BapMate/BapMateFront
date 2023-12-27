import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';

import home from '../assets/home.svg';
import homeClicked from '../assets/homeClicked.svg';
import New from '../assets/new.svg';
import newClicked from '../assets/newClicked.svg';
import join from '../assets/join.svg';
import joinClicked from '../assets/joinClicked.svg';
import myInfo from '../assets/myInfo.svg';
import myInfoClicked from '../assets/myInfoClicked.svg';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface MenuBarProps {}

const MenuBar: React.FC<MenuBarProps> = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [homeSrc, setHomeSrc] = useState<string>(homeClicked);
  const [newSrc, setNewSrc] = useState<string>(New);
  const [joinSrc, setJoinSrc] = useState<string>(join);
  const [myInfoSrc, setMyInfoSrc] = useState<string>(myInfo);
  const [activeTab, setActiveTab] = useState<string>('');

  const goHome = () => {
    navigate('/home');
  };

  const goNew = () => {
    navigate('/meetup');
  };

  const goMeeting = () => {
    navigate('/meetinglist');
  };

  const goMy = () => {
    navigate('/mypage');
  };

  useEffect(() => {
    setHomeSrc(pathname === '/' ? homeClicked : home);
    setNewSrc(pathname === '/uploadpost' ? newClicked : New);
    setJoinSrc(pathname === '/meetinglist' ? joinClicked : join);
    setMyInfoSrc(pathname === '/mypage' ? myInfoClicked : myInfo);
    setActiveTab(pathname);
  }, [pathname]);

  console.log(activeTab);

  return (
    <Wrapper>
      <Btn id="home" onClick={goHome} active={activeTab === '/'}>
        <img src={homeSrc} alt="Home" />
        <span>홈</span>
      </Btn>
      <Btn id="new" onClick={goNew} active={activeTab === '/uploadpost'}>
        <img src={newSrc} alt="New" />
        <span>새 모임</span>
      </Btn>
      <Btn id="join" onClick={goMeeting} active={activeTab === '/meetinglist'}>
        <img src={joinSrc} alt="Join" />
        <span>참여 모임</span>
      </Btn>
      <Btn id="my" onClick={goMy} active={activeTab === '/mypage'}>
        <img src={myInfoSrc} alt="My Info" />
        <span>내 정보</span>
      </Btn>
    </Wrapper>
  );
};

export default MenuBar;

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 90px;
  padding: 0px 20px 0px 20px;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--light-gray, #eceaea);
  background: var(--white, #fbfbfb);
`;

interface BtnProps {
  active: boolean;
}

const Btn = styled.div<BtnProps>`
  display: flex;
  width: 60px;
  height: 56px;
  padding-top: 4px;
  padding-bottom: 34px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  span {
    color: ${({ active }) =>
      active ? 'var(--key, #FD505B)' : 'var(--black, #292525)'};
    text-align: center;
    font-family: Pretendard;
    font-size: 11px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
  }
`;
