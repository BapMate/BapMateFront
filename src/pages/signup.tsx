import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import CommonButton from '../components/common/button';
import BackHeader from '../components/common/backHeader';
import UnivInfo from '../components/signup/UnivInfo';
import CertModal from '../components/signup/CertModal';
import { usePostUnivCert } from '../apis/post/usePostUnivCert';
import { usePostExtraInfo } from '../apis/post/usePostExtraInfo';
import { usePostUnivCertCode } from '../apis/post/usePostUnivCertCode';

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [univName, setUnivName] = useState('');
  const [univEmail, setUnivEmail] = useState('');
  const [univCertCode, setUnivCertCode] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  //custom-hook
  const fetchData = usePostUnivCert();
  const fetchExtraData = usePostExtraInfo();
  const fetchCodeData = usePostUnivCertCode();

  const moveToNext = () => {
    fetchExtraData.extraInfo({ name: name, universityName: univName });
    fetchData.univCert({ univName: univName, univEmail: univEmail });
    console.log(fetchData);
    console.log(fetchExtraData);
  };

  const handleCodeSubmit = () => {
    fetchCodeData.univCertCode({
      univName: univName,
      univEmail: univEmail,
      code: univCertCode,
    });
  };

  useEffect(() => {
    if (fetchData.isSuccess) {
      console.log(fetchData);
      //fetchData성공시
      setIsModalOpen(true);
    }
  }, [fetchData.isSuccess]);

  useEffect(() => {
    if (fetchCodeData.isSuccess) {
      console.log(fetchCodeData);
    }
  }, [fetchCodeData.isSuccess]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    handleCodeSubmit();
    setIsModalOpen(false);
    navigate('favor/1');
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
        <CertModal
          isOpen={isModalOpen}
          onClose={closeModal}
          univCertCode={univCertCode}
          setUnivCertCode={setUnivCertCode}
        ></CertModal>
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

  padding-bottom: 2rem;
`;

export default Signup;
