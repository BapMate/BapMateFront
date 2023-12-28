import React from 'react';
import CommonButton from '../components/common/button';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { useGetIdToken } from '../apis/get/useGetIdToken';
import { usePostIdToken } from '../apis/post/usePostIdToken';
import { usePostSignup } from '../apis/post/usePostSignup';

const KakaoLogin = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const [code, setCode] = useState(searchParams.get('code'));
  const [idToken, setIdToken] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const [refreshToken, setRefreshToken] = useState('');

  const fetchData = useGetIdToken(code);
  const fetchSignUpData = usePostSignup(idToken);
  const fetchAccessData = usePostIdToken(idToken);

  //code받기
  useEffect(() => {
    setCode(searchParams.get('code'));
  }, [searchParams]);

  //idToken저장
  useEffect(() => {
    if (fetchData.idToken !== null) {
      setIdToken(fetchData.idToken.data.idToken);
      localStorage.setItem('idToken', idToken);
    }
  }, [fetchData]);

  //로그인 요청
  useEffect(() => {
    if (idToken !== '') {
      fetchAccessData.accessToken();
    }
  }, [idToken]);

  //로그인 처리
  useEffect(() => {
    if (fetchAccessData.isSuccess) {
      const isRegistered = fetchAccessData.data.data.isRegistered;

      console.log(fetchAccessData.data.data.accessToken);
      console.log(fetchAccessData.data.data.refreshToken);
      if (isRegistered) {
        //회원가입된 사용자
        localStorage.setItem(
          'accessToken',
          fetchAccessData.data.data.accessToken,
        );
        localStorage.setItem(
          'refreshToken',
          fetchAccessData.data.data.refreshToken,
        );
        navigate('/home');
      } else {
        //회원가입 안된 사용자
        fetchSignUpData.signup();
      }
    }
  }, [fetchAccessData.isSuccess]);

  //회원가입 처리
  useEffect(() => {
    if (fetchSignUpData.isSuccess) {
      //idToken으로 회원가입 성공
      console.log(fetchSignUpData.data.data.accessToken);
      console.log(fetchSignUpData.data.data.refreshToken);
      localStorage.setItem(
        'accessToken',
        fetchSignUpData.data.data.accessToken,
      );
      localStorage.setItem(
        'refreshToken',
        fetchSignUpData.data.data.refreshToken,
      );
      alert('회원가입이 필요해요!');
      navigate('/signup');
    }
  }, [fetchSignUpData.isSuccess]);

  // useEffect(() => {
  //   console.log(accessToken);
  //   console.log(refreshToken);
  //   if (accessToken !== '') {
  //     //로컬스토리지 저장
  //     localStorage.setItem('accessToken', accessToken);
  //     localStorage.setItem('refreshToken', refreshToken);
  //   } else {
  //     console.log('accessToke,refreshToken저장 실패');
  //   }
  // }, [accessToken, refreshToken]);

  return <div>Loading...</div>;
};

export default KakaoLogin;
