import React from 'react';
import styled from 'styled-components';

interface UnivInfoData {
  univEmail: string;
  setUnivEmail: (value: string) => void;
  name: string;
  setName: (value: string) => void;
  univName: string;
  setUnivName: (value: string) => void;
}

const UnivInfo = ({
  univEmail,
  setUnivEmail,
  univName,
  setUnivName,
  name,
  setName,
}: UnivInfoData) => {
  return (
    <Wrapper>
      <h1>회원정보 입력</h1>

      <SubTitle>학교 이메일 인증</SubTitle>

      <InputBox
        placeholder="밥메대학교"
        onChange={(e) => {
          setUnivName(e.currentTarget.value);
        }}
      />
      <InputBox
        placeholder="babmate@university.ac.kr"
        onChange={(e) => {
          setUnivEmail(e.target.value);
        }}
      />
      <SubTitle>이름</SubTitle>
      <InputBox
        placeholder="이름을 입력해주세요"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  gap: 30px;
  padding-left: 1rem;
`;

const GenderBut = styled.button`
  width: 170px;
  height: 48px;
  padding: 17px 20px;
  justify-content: space-between;
  align-items: center;
  border-radius: 40px;
  border: 1px solid var(--gray, #989292);

  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;

  margin-left: 10px;
`;

const SubTitle = styled.div`
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  margin-left: 10px;
`;

const InputBox = styled.input`
  border-radius: 40px;
  border: 1px solid var(--light-gray, #eceaea);
  width: 300px;
  height: 30px;
  padding: 17px 24px;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 16px;

  color: var(--gray, #989292);
  font-family: Pretendard;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
`;

export default UnivInfo;
