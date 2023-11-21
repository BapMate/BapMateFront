import React from 'react';
import styled from 'styled-components';
import CommonButton from '../components/common/button';
import BackHeader from '../components/common/backHeader';

const Signup = () => {
  const moveToNext = () => {
    alert('다음!');
  };

  return (
    <Wrapper>
      <BackHeader text="" />

      <CommonButton
        onClick={moveToNext}
        color="key"
        textColor="white"
        text="다음으로"
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Signup;
