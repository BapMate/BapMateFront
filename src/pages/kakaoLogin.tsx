import React from 'react';
import CommonButton from '../components/common/button';
import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { useGetIdToken } from '../apis/get/useGetIdToken';
import { usePostIdToken } from '../apis/post/usePostIdToken';

const KakaoLogin = () => {
  //path에서 query string 받아오기
  const [searchParams, setSearchParams] = useSearchParams();
  //const code = searchParams.get('code');
  const [code, setCode] = useState(searchParams.get('code'));
  const [idToken, setIdToken] = useState('');

  //code 백으로 보내고 idToken 받아오기
  const fetchData = useGetIdToken(code);

  useEffect(() => {
    console.log('dataFetching...');
    if (fetchData.idToken !== null) {
      setIdToken(fetchData.idToken.data.idToken);
    }
  }, [fetchData]);

  useEffect(() => {
    console.log('idToken발견!');
    console.log(idToken);
  }, [idToken]);

  return <div>Loading...</div>;
};

export default KakaoLogin;
