import React from 'react';
import CommonButton from '../components/common/button';
import { ReactComponent as Logo } from '../assets/bapMateLogo.svg';

const Landing = () => {
  const moveToKakaoLogin = () => {
    window.location.href =
      'https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=a0494a600b8fdb5783112c6329077f60&redirect_uri=http://localhost:3000/kakao/redirect';
  };

  return (
    <div>
      <Logo />
      <CommonButton
        onClick={moveToKakaoLogin}
        color="kakao"
        textColor="black"
        text="카카오로그인"
      />
    </div>
  );
};

export default Landing;
