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
  //idToken 백으로 보내고 accessToken받아오기
  const fetchAccessData = usePostIdToken(idToken);
  const getAccessToken = fetchAccessData.accessToken;

  useEffect(() => {
    console.log('dataFetching...');
    if (fetchData.idToken !== null) {
      setIdToken(fetchData.idToken.data.idToken);
    }
  }, [fetchData]);

  useEffect(() => {
    if (idToken !== '') {
      console.log('idToken발견!');
      console.log(idToken);
      fetchAccessData.accessToken();
      console.log(fetchAccessData.data);
    }
  }, [idToken]);

  useEffect(() => {
    console.log('fetchAccessData...');
    //console.log(getAccessToken());
    //fetchAccessData.accessToken(); //accessToken을 받아옴
    //console.log(fetchAccessData.data);
  }, [fetchAccessData]);

  return <div>Loading...</div>;
};

export default KakaoLogin;
