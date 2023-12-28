import { useQuery } from '@tanstack/react-query';
import React from 'react';
import axiosInstance from '..';

/**
 * 생성한 모임 확인
 * @param
 * @returns meetUp data
 */
export const useGetRecommendedMeetUps = () => {
  const token = localStorage.getItem('accessToken');

  const { isLoading, data, error } = useQuery({
    queryKey: ['recommendedMeetups'],
    queryFn: async () => {
      const res = await axiosInstance.get(`/chat-gpt/meeting`, {
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
    recommendedMeetUps: data || null,
    isLoading,
    error,
  };
};
