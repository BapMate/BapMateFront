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

  const fetchData = useGetIdToken(code);
  const fetchAccessData = usePostIdToken(idToken);

  useEffect(() => {
    if (fetchData.idToken !== null) {
      setIdToken(fetchData.idToken.data.idToken);
    }
  }, [fetchData]);

  useEffect(() => {
    if (idToken !== '') {
      fetchAccessData.accessToken();
    }
  }, [idToken]);

  useEffect(() => {
    if (fetchAccessData.isSuccess) {
      console.log(fetchAccessData.data);
    }
  }, [fetchAccessData.isSuccess]);

  return <div>Loading...</div>;
};

export default KakaoLogin;
