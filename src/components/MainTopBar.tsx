import React from 'react';
import styled from 'styled-components';

import LogoSmall from '../assets/LogoSmall';
import filter from '../assets/filter.svg';

interface MainTopBarProps {
  openModal: () => void;
}

const MainTopBar: React.FC<MainTopBarProps> = ({ openModal }) => {
  return (
    <Wrapper>
      <LogoSmall />
    </Wrapper>
  );
};

export default MainTopBar;

const Wrapper = styled.div`
  display: inline-flex;
  width: 350px;
  height: 56px;
  padding: 0px 20px;
  margin-bottom: 10px;
  align-items: center;
  gap: 273px;
  flex-shrink: 0;
  border-bottom: 1px solid var(--light-gray, #eceaea);
  background: var(--white, #fbfbfb);
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
  gap: 1px;
  color: var(--gray, #989292);
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 152.872%;
  cursor: pointer; // 추가
`;
