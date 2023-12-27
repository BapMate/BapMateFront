import React from 'react';
import styled from 'styled-components';

interface CTABtnProps {
  onClick: (e: React.MouseEvent) => void;
  text: string;
}

const CTABtn: React.FC<CTABtnProps> = ({ onClick, text }) => {
  return (
    <Wrapper onClick={onClick}>
      <Text id="text">{text}</Text>
    </Wrapper>
  );
};

export default CTABtn;

const Wrapper = styled.div`
  position: absolute;
  bottom: 80px;
  display: flex;
  width: 350px;
  height: 52px;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  background: var(--key, #fd505b);
`;

const Text = styled.div`
  color: var(--white, #fbfbfb);
  text-align: center;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.18px;
`;
