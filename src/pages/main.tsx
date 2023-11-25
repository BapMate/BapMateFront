import React from 'react';
import { useGetHostingMeetup } from '../apis/get/useGetHostingMeetup';
import { usePostExtraInfo } from '../apis/post/usePostExtraInfo';
import { useEffect, useState } from 'react';

const Main = () => {
  const fetchData = usePostExtraInfo();

  useEffect(() => {
    fetchData.extraInfo();
    if (fetchData.isSuccess) {
      console.log(fetchData.data);
    }
  }, [fetchData.isSuccess]);

  return (
    <div>
      <h1>This is main</h1>
    </div>
  );
};

export default Main;
