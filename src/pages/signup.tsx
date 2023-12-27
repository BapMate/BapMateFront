import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import CommonButton from '../components/common/button';
import BackHeader from '../components/common/backHeader';
import UnivInfo from '../components/signup/UnivInfo';
import CertModal from '../components/signup/CertModal';
import { usePostUnivCert } from '../apis/post/usePostUnivCert';

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [univName, setUnivName] = useState('');
  const [univEmail, setUnivEmail] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  //custom-hook
  const fetchData = usePostUnivCert();

  const moveToNext = () => {
    setIsModalOpen(true);
    fetchData.univCert({ univEmail: univEmail, univName: univName });
    console.log(fetchData);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    navigate('favor');
  };

  return (
    <Wrapper>
      <BackHeader text="" />
      <UnivInfo
        univEmail={univEmail}
        setUnivEmail={setUnivEmail}
        name={name}
        setName={setName}
        univName={univName}
        setUnivName={setUnivName}
      />
      <CommonButton
        onClick={moveToNext}
        color="key"
        textColor="white"
        text="다음으로"
      />
      {isModalOpen && (
        <CertModal isOpen={isModalOpen} onClose={closeModal}></CertModal>
      )}
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
