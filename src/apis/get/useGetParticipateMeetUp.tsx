import { useQuery } from '@tanstack/react-query';
import React from 'react';
import axiosInstance from '..';

/**
 * 생성한 모임 확인
 * @param
 * @returns meetUp data
 */
export const useGetParticipateMeetUp = () => {
  const token = localStorage.getItem('accessToken');

  const {
    isLoading: isLoadingParticipate,
    data,
    error: errorParticipate,
  } = useQuery({
    queryKey: ['participatedMeetup'],
    queryFn: async () => {
      const res = await axiosInstance.get(`/v1/meetUp/participate`, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
          'Access-Control-Allow-Origin': '*',
        },
      });
      return res.data;
    },
  });

  return {
    participatedMeetup: data || null,
    isLoadingParticipate,
    errorParticipate,
  };
};
