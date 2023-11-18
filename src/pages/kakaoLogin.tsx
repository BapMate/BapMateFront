import React from 'react';
import CommonButton from '../components/common/button';
import { useEffect, useState, useCallback } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

const KakaoLogin = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const code = searchParams.get('code');
  const navigate = useNavigate();
  console.log(code);
  return <div>Loading...</div>;
};

export default KakaoLogin;
