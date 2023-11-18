import styled from 'styled-components';
import React from 'react';

interface ButtonProps {
  size?: 'l' | 'm' | 's';
  onClick: () => void;
  color: 'key' | 'sub' | 'gray' | 'kakao';
  textColor: 'key' | 'sub' | 'gray' | 'kakao' | 'black' | 'white';
  isFull?: boolean;
  text: string;
}

const CommonButton = ({
  size = 'l',
  onClick,
  color,
  textColor,
  isFull = true,
  text,
}: ButtonProps) => {
  return (
    <div>
      {isFull && (
        <FullButWrapper
          buttonColor={color}
          textColor={textColor}
          onClick={onClick}
        >
          {text}
        </FullButWrapper>
      )}
      {!isFull && <TransparentButWrapper>{text}</TransparentButWrapper>}
    </div>
  );
};

const FullButWrapper = styled.button<{
  buttonColor: string;
  textColor: string;
}>`
  width: 21.875rem;
  height: 3rem;
  border-radius: 2.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: Pretendard;
  font-size: 1.125rem;
  font-weight: 700;

  color: ${(props) => props.theme.colors[props.textColor]};
  background-color: ${(props) => props.theme.colors[props.buttonColor]};
  border: none;

  cursor: pointer;
`;
const TransparentButWrapper = styled.div``;

export default CommonButton;
