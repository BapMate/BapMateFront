import styled from 'styled-components';
import React from 'react';

interface ButtonProps {
  size?: 'l' | 'm' | 's';
  onClick: () => void;
  color: 'key' | 'sub' | 'gray' | 'kakao';
  isFull?: boolean;
  text: string;
}

const CommonButton = ({
  size = 'l',
  onClick,
  color,
  isFull = true,
  text,
}: ButtonProps) => {
  return (
    <div>
      {isFull && <FullButWrapper buttonColor={color}>{text}</FullButWrapper>}
      {!isFull && (
        <TransparentButWrapper buttonColor={color}>
          {text}
        </TransparentButWrapper>
      )}
    </div>
  );
};

const FullButWrapper = styled.div<{ buttonColor: string }>`
  width: 21.875rem;
  height: 3rem;
  border-radius: 2.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: Pretendard;
  font-size: 1.125rem;
  font-weight: 700;

  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors[props.buttonColor]};
`;
const TransparentButWrapper = styled.div<{ buttonColor: string }>`
  width: 21.875rem;
  height: 3rem;
  border-radius: 2.5rem;

  font-family: Pretendard;
  font-size: 1.125rem;
  font-weight: 700;

  color: ${(props) => props.theme.colors[props.buttonColor]};
  border: 1px solid ${(props) => props.theme.colors[props.buttonColor]};
`;

export default CommonButton;
