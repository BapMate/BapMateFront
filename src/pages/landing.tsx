import * as React from 'react';
import CommonButton from '../components/common/button';

const Landing = () => {
  const moveToKakaoLogin = () => {
    console.log('kakao로떠나자');
  };
  return (
    <div>
      <h2>This is Landing</h2>
      <CommonButton
        onClick={moveToKakaoLogin}
        color="kakao"
        text="카카오로그인"
      />
    </div>
  );
};

export default Landing;
