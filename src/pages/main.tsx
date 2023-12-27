import React from 'react';
import { useGetHostingMeetup } from '../apis/get/useGetHostingMeetup';
import { usePostExtraInfo } from '../apis/post/usePostExtraInfo';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const fetchData = usePostExtraInfo();
  const navigate = useNavigate();

  useEffect(() => {
    fetchData.extraInfo({ name: '이한비', universityName: '홍익대학교' });
    if (fetchData.isSuccess) {
      console.log(fetchData.data);
      navigate('/home');
    }
  }, [fetchData.isSuccess]);

  return (
    <div>
      <h1>This is main</h1>
    </div>
  );
};

export default Main;
