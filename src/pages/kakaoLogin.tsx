import React from 'react';
import CommonButton from '../components/common/button';
import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { getIdToken } from '../apis/get/useGetIdToken';
const KakaoLogin = () => {
  //path에서 query string 받아오기
  const [searchParams, setSearchParams] = useSearchParams();
  const code = searchParams.get('code');

  const fetchData = getIdToken(code);
  console.log(fetchData.idToken);

  //code 백으로 보내고 idToken 받아오기
  // useEffect(() => {
  //   console.log(code);
  //   const fetchData = getIdToken(code);
  //   console.log(fetchData.idToken);
  // }, [code]);

  return <div>Loading...</div>;
};

export default KakaoLogin;
