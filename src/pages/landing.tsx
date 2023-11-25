import React from 'react';
import CommonButton from '../components/common/button';
import { ReactComponent as Logo } from '../assets/bapMateLogo.svg';
import styled from 'styled-components';

const Landing = () => {
  const moveToKakaoLogin = () => {
    window.location.href =
      'https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=a0494a600b8fdb5783112c6329077f60&redirect_uri=http://localhost:3000/kakao/redirect';
  };

  return (
    <Wrapper>
      <InnerWrapper>
        <Logo />
        <CommonButton
          onClick={moveToKakaoLogin}
          color="kakao"
          textColor="black"
          text="카카오로그인"
        />
      </InnerWrapper>
    </Wrapper>
  );
};

const InnerWrapper = styled.div`
  width: 100%;
  height: 60%;

  padding-top: 15rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Landing;
