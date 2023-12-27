import React, { useState } from 'react';
import styled from 'styled-components';

type TapBarProps = {
  activeTab: 'join' | 'made';
  handleTabClick: (tabId: 'join' | 'made') => void;
};

const TapBar: React.FC<TapBarProps> = ({ activeTab, handleTabClick }) => {
  return (
    <Wrapper>
      <Title
        id="join"
        onClick={() => handleTabClick('join')}
        active={activeTab === 'join'}
      >
        나의 참여 모임
      </Title>
      <Title
        id="made"
        onClick={() => handleTabClick('made')}
        active={activeTab === 'made'}
      >
        내가 만든 모임
      </Title>
      <Indicator activeTab={activeTab} />
    </Wrapper>
  );
};

export default TapBar;

const Wrapper = styled.div`
  display: flex;
  width: 290px;
  padding: 20px 50px;
  justify-content: space-between;
  align-items: flex-start;
  flex-shrink: 0;
  position: relative;
`;

type TitleProps = {
  active: boolean;
};

const Title = styled.div<TitleProps>`
  color: ${({ active }) => (active ? 'var(--black, #292525)' : 'gray')};
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 152.872%;
  padding-bottom: 0%.5;
  cursor: pointer;

  &:hover {
    color: var(--black, #292525);
  }
`;

type IndicatorProps = {
  activeTab: 'join' | 'made';
};

const Indicator = styled.div<IndicatorProps>`
  position: absolute;
  bottom: 0;
  left: ${({ activeTab }) =>
    activeTab === 'made' ? 'calc(50% + 42px)' : 'calc(50% - 158px)'};
  width: 120px;
  height: 2px;
  background: var(--black, #292525);
  transition: left 0.3s ease-in-out;
`;
