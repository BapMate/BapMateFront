import React from 'react';
import CommonButton from '../components/common/button';
import { ReactComponent as Logo } from '../assets/bapMateLogo.svg';
import styled from 'styled-components';

const Landing = () => {
  const moveToKakaoLogin = () => {
    window.location.href =
      'https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=a0494a600b8fdb5783112c6329077f60&redirect_uri=http://bap-mate-front.vercel.app/kakao/redirect';
  };

  return (
    <Wrapper>
      <Logo />
      <CommonButton
        onClick={moveToKakaoLogin}
        color="kakao"
        textColor="black"
        text="카카오로그인"
      />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 10rem;
  padding-bottom: 5rem;
`;

export default Landing;
