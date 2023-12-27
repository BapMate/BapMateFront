import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import TagButton from '../common/TagButton';

interface CertModalData {
  isOpen: boolean;
  onClose: () => void;
  univCertCode: number;
  setUnivCertCode: (value: number) => void;
}

const CertModal = ({
  isOpen,
  onClose,
  univCertCode,
  setUnivCertCode,
}: CertModalData) => {
  if (!isOpen) return null;

  return (
    <ModalContainer>
      <DialogBox>
        <Header>
          <span id="esc" onClick={onClose}>
            취소
          </span>
          <span id="apply" onClick={onClose}></span>
        </Header>

        <CertWrapper>
          <h2>인증번호 입력</h2>
          <InputBox
            placeholder="인증번호를 입력해주세요"
            onChange={(e) => {
              setUnivCertCode(Number(e.currentTarget.value));
            }}
          />
          <SmallBut onClick={onClose}>확인</SmallBut>
        </CertWrapper>
      </DialogBox>
      <Backdrop onClick={onClose} />
    </ModalContainer>
  );
};

export default CertModal;

const CertWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const ModalContainer = styled.div`
  position: absolute;
  top: 280px;
  z-index: 10;
  width: 390px;
  display: flex;
  flex-direction: column;
`;

const DialogBox = styled.div`
  position: relative;
  width: 390px;
  padding: 50px 20px 0px 20px;
  background-color: white;
  box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  z-index: 10000;
`;

const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.2);
`;

const Header = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 350px;
  height: 22px;
  padding: 9px 20px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  border-bottom: 1px solid var(--light-gray, #eceaea);
  background: var(--white, #fbfbfb);
  #esc {
    color: var(--gray, #989292);
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: 152.872%;
  }
  #apply {
    color: var(--key, #fd505b);
    text-align: right;
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: 152.872%;
  }
`;

const InputBox = styled.input`
  border-radius: 40px;
  border: 1px solid var(--light-gray, #eceaea);
  width: 330px;
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

const SmallBut = styled.button`
  display: flex;
  display: flex;
  width: 100px;
  height: 52px;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  background: var(--key, #fd505b);

  color: var(--white, #fbfbfb);
  text-align: center;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;

  border: none;

  margin-bottom: 20px;
`;
