import React from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

import MenuBar from '../components/MenuBar';
import mind from '../assets/icons/mind.svg';
import bowl from '../assets/icons/bowl.svg';
import line from '../assets/icons/line.svg';
import go from '../assets/icons/go.svg';

const MyPage = () => {
  const navigate = useNavigate();

  const goEdit = () => {
    alert('아직 준비중인 페이지 입니다!!');
  };

  const mockData = {
    name: '이한비',
    email: 'beebee@g.hongik.ac.kr',
  };

  return (
    <Wrapper className="MyPage">
      <Profile>
        <Name>
          <span id="name">{mockData.name}</span>
          <span>밥메님</span>
        </Name>
        <p>{mockData.email}</p>
      </Profile>
      <MyRate>
        <span>
          나의 밥<img id="word" src={mind} />
          지수
        </span>
        <Level>
          <img src={bowl} />
          <span>1단계 초보밥메</span>
        </Level>
        <img src={line} />
        <Count>
          <span id="cnt">38</span>
          <span>그릇</span>
          <p id="detail">슈퍼밥메까지 12그릇 남았습니다</p>
        </Count>
        <CntBar>
          <div id="bar"></div>
          <div id="current"></div>
        </CntBar>
      </MyRate>
      <MenuBox>
        <img id="line" src={line} />
        <Menu onClick={goEdit}>
          <span>회원정보 수정</span>
          <img src={go} />
        </Menu>
        <img id="line" src={line} />
        <Menu>
          <span>비밀번호 변경</span>
          <img src={go} />
        </Menu>
        <img id="line" src={line} />
        <Menu>
          <span>나의 취향</span>
          <img src={go} />
        </Menu>
        <img id="line" src={line} />
        <Menu>
          <span>알림 설정</span>
          <img src={go} />
        </Menu>
        <img id="line" src={line} />
        <Menu>
          <span>약관 확인</span>
          <img src={go} />
        </Menu>
        <img id="line" src={line} />
        <Menu>
          <span>앱 정보</span>
          <img src={go} />
        </Menu>
        <img id="line" src={line} />
      </MenuBox>
      <MenuBar />
    </Wrapper>
  );
};

export default MyPage;

const Wrapper = styled.div`
  width: 390px;
  height: 844px;
  background: var(--white, #fbfbfb);
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

const Profile = styled.div`
  margin-top: 100px;
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  padding-left: 15px;
  p {
    margin: 0;
    color: #939399;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    letter-spacing: -0.408px;
  }
`;

const Name = styled.div`
  span {
    color: var(--black, #292525);
    font-family: Pretendard;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 152.872%;
    letter-spacing: -0.48px;
    margin-right: 5px;
  }
  #name {
    font-weight: 700;
  }
`;
const MyRate = styled.div`
  position: relative;
  display: flex;
  width: 290px;
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  border-radius: 20px;
  border: 1px solid var(--light-gray, #eceaea);
  span {
    color: var(--black, #292525);
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 152.872%;
  }
  #word {
    width: 16px;
    height: 15px;
  }
  img {
    width: 290px;
  }
`;

const Level = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  img {
    width: 48px;
    height: 48px;
  }
  span {
    padding-top: 3px;
    color: var(--key, #fd505b);
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: 152.872%;
  }
`;

const Count = styled.div`
  span {
    color: var(--key, #fd505b);
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 800;
    line-height: 152.872%;
  }
  #cnt {
    font-size: 20px;
  }
  #detail {
    margin: 0;
    color: var(--gray, #989292);
    text-overflow: ellipsis;
    font-family: Pretendard;
    font-size: 11px;
    font-style: normal;
    font-weight: 500;
    line-height: 152.872%;
  }
`;

const CntBar = styled.div`
  #bar {
    position: absolute;
    width: 290px;
    height: 4px;
    align-self: stretch;
    border-radius: 4px;
    background: var(--light-gray, #eceaea);
  }
  #current {
    position: absolute;
    width: 235px;
    height: 4px;
    border-radius: 4px;
    background: var(--key, #fd505b);
    z-index: 10;
  }
`;

const MenuBox = styled.div`
  display: flex;
  width: 350px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  #line {
    width: 350px;
  }
`;

const Menu = styled.div`
  padding: 0px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  span {
    color: var(--black, #292525);
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
    letter-spacing: -0.408px;
  }
`;
