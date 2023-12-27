import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Back } from '../../assets/Back.svg';

interface HeaderProps {
  text?: string;
}

const BackHeader = ({ text = '' }: HeaderProps) => {
  return (
    <Wrapper>
      <Back />
      <Text>{text}</Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 70px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  padding-left: 1rem;
`;

const Text = styled.div`
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 700;
`;

export default BackHeader;
