import React from 'react';
import CommonButton from '../components/common/button';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { useGetIdToken } from '../apis/get/useGetIdToken';
import { usePostIdToken } from '../apis/post/usePostIdToken';

const KakaoLogin = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const [code, setCode] = useState(searchParams.get('code'));
  const [idToken, setIdToken] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const [refreshToken, setRefreshToken] = useState('');

  const fetchData = useGetIdToken(code);
  const fetchAccessData = usePostIdToken(idToken);

  // useEffect를 사용하여 쿼리 매개변수를 업데이트
  useEffect(() => {
    setCode(searchParams.get('code'));
    console.log(code);
  }, [searchParams]);

  useEffect(() => {
    if (fetchData.idToken !== null) {
      setIdToken(fetchData.idToken.data.idToken);
      localStorage.setItem('idToken', idToken);
    }
  }, [fetchData]);

  useEffect(() => {
    if (idToken !== '') {
      fetchAccessData.accessToken();
    }
  }, [idToken]);

  useEffect(() => {
    if (fetchAccessData.isSuccess) {
      const isRegistered = fetchAccessData.data.data.isRegistered;
      if (isRegistered) {
        //회원가입된 사용자
        setAccessToken(fetchAccessData.data.data.accessToken);
        setRefreshToken(fetchAccessData.data.data.refreshToken);
      } else {
        //회원가입 안된 사용자
        alert('회원가입이 필요해요!');
        navigate('/signup');
      }
    }
  }, [fetchAccessData.isSuccess]);

  useEffect(() => {
    if (accessToken !== '' && refreshToken !== '') {
      //로컬스토리지 저장
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      alert('로그인 성공!');
      navigate('/main');
    }
  }, [accessToken, refreshToken]);

  return <div>Loading...</div>;
};

export default KakaoLogin;
