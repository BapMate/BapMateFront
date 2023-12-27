import React from 'react';
import { styled } from 'styled-components';

interface CTABtnProps {
  onClick: (e: React.MouseEvent) => void;
}

const CTAdelBtn: React.FC<CTABtnProps> = ({ onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <Text id="text">참여 취소하기</Text>
    </Wrapper>
  );
};

export default CTAdelBtn;

const Wrapper = styled.div`
  position: absolute;
  bottom: 80px;
  display: flex;
  width: 350px;
  height: 52px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 40px;
  border: 1px solid var(--key, #fd505b);
`;

const Text = styled.div`
  padding: 0;
  color: var(--white, #fd505b);
  text-align: center;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.18px;
`;
